// ============================================================
//  GANTT RESIZE
//  Drag handles on the left and right edges of Gantt bars
//  to resize block durations. Resizing adjusts:
//  - Drill blocks: de-rate or up-rate penetration rates
//  - Load bars: de-rate or up-rate MPU kg/day rates
//  - Delay blocks: simple duration change
// ============================================================

import { APP } from "../state/appState.js";
import { drills as drillFleet, mpus as mpuFleet } from "../state/equipmentState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";
import { syncBlastFromBlocks, calcBlockDays } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";

var CELL_WIDTH = 32;

// Step 1) Resize state
var resizeState = {
  active: false,
  edge: null,         // "left" or "right"
  blastIdx: null,
  section: null,
  blockIdx: null,
  delayIdx: null,
  startX: 0,
  dayOffset: 0,
  originalDays: 0,
  originalStart: null,
  barEl: null
};

// Step 2) Initialise resize handlers
function initGanttResize() {
  var container = document.getElementById("ganttScroll");
  if (!container) return;

  container.addEventListener("mousedown", onResizeStart);
  document.addEventListener("mousemove", onResizeMove);
  document.addEventListener("mouseup", onResizeEnd);
}

// Step 3) Start resize — triggered by mousedown on a resize handle
function onResizeStart(e) {
  var handle = e.target.closest(".gantt-resize-handle");
  if (!handle) return;

  var bar = handle.closest(".gantt-bar");
  var row = handle.closest(".gantt-row");
  if (!bar || !row) return;

  var blastIdx = parseInt(row.dataset.blast);
  var section = row.dataset.section;
  if (isNaN(blastIdx)) return;

  var blast = APP.blasts[blastIdx];
  if (!blast) return;

  e.preventDefault();
  e.stopPropagation();

  var blockIdx = row.dataset.block !== undefined ? parseInt(row.dataset.block) : null;

  // Step 3a) Check if this is a delay bar
  var delayIdx = bar.dataset.delayIdx !== undefined ? parseInt(bar.dataset.delayIdx) : null;

  // Step 3b) Determine original values for rate recalculation
  var originalDays = 1;
  var originalStart = null;

  if (delayIdx !== null && blast.delays && blast.delays[delayIdx]) {
    originalDays = blast.delays[delayIdx].days || 1;
    originalStart = blast.delays[delayIdx].start;
  } else if (section === "pattern prep") {
    originalDays = blast.prepDays || 1;
    originalStart = blast.prepStart;
  } else if (section === "drilling" && blockIdx !== null) {
    var block = blast.drillBlocks && blast.drillBlocks[blockIdx];
    if (block) {
      originalDays = block.drillDays || 1;
      originalStart = block.drillStart;
    }
  } else if (section === "drilling") {
    originalDays = blast.drillDays || 1;
    originalStart = blast.drillStart;
  } else if (section === "loading") {
    originalDays = blast.loadDays || Math.ceil((blast.expMass || 0) / (blast.loadRate || 100000));
    originalStart = blast.loadStart;
  }

  resizeState.active = true;
  resizeState.edge = handle.classList.contains("handle-left") ? "left" : "right";
  resizeState.blastIdx = blastIdx;
  resizeState.section = section;
  resizeState.blockIdx = blockIdx;
  resizeState.delayIdx = delayIdx;
  resizeState.startX = e.clientX;
  resizeState.dayOffset = 0;
  resizeState.originalDays = originalDays;
  resizeState.originalStart = originalStart;
  resizeState.barEl = bar;

  bar.classList.add("gantt-bar-resizing");
  document.body.style.cursor = "ew-resize";
}

// Step 4) Mouse move during resize
function onResizeMove(e) {
  if (!resizeState.active) return;
  e.preventDefault();

  var dx = e.clientX - resizeState.startX;
  var dayOffset = Math.round(dx / CELL_WIDTH);
  resizeState.dayOffset = dayOffset;

  // Step 4a) Visual feedback — highlight bar edge being resized
  if (resizeState.barEl) {
    resizeState.barEl.classList.add("gantt-bar-resizing");
  }

  // Step 4b) Show floating indicator with day offset near cursor
  var newDays;
  if (resizeState.edge === "right") {
    newDays = Math.max(1, resizeState.originalDays + dayOffset);
  } else {
    newDays = Math.max(1, resizeState.originalDays - dayOffset);
  }
  var delta = newDays - resizeState.originalDays;
  var sign = delta > 0 ? "+" : "";
  var label = sign + delta + "d (" + newDays + " day" + (newDays !== 1 ? "s" : "") + ")";
  showResizeIndicator(e.clientX + 14, e.clientY - 20, label);
}

// Step 4c) Create/update floating indicator element
function showResizeIndicator(x, y, text) {
  var el = document.getElementById("resizeIndicator");
  if (!el) {
    el = document.createElement("div");
    el.id = "resizeIndicator";
    el.className = "gantt-resize-indicator";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.display = "block";
}

// Step 4d) Hide the floating indicator
function hideResizeIndicator() {
  var el = document.getElementById("resizeIndicator");
  if (el) el.style.display = "none";
}

// Step 5) End resize — apply the duration/rate change
function onResizeEnd(e) {
  if (!resizeState.active) return;
  document.body.style.cursor = "";

  var dayOffset = resizeState.dayOffset;

  // Step 5a) Clean up visual
  hideResizeIndicator();
  if (resizeState.barEl) {
    resizeState.barEl.classList.remove("gantt-bar-resizing");
    resizeState.barEl.style.outline = "";
  }

  // Step 5b) Apply if offset is non-zero
  if (dayOffset !== 0 && resizeState.blastIdx !== null) {
    var blast = APP.blasts[resizeState.blastIdx];
    if (blast) {

      // Step 5b-i) Auto-switch to Manual mode when user drags a resize handle
      if (blast.mode !== "Manual") {
        blast.mode = "Manual";
      }

      // Step 5c) Delay resize — simple days adjustment
      if (resizeState.delayIdx !== null && blast.delays && blast.delays[resizeState.delayIdx]) {
        var delay = blast.delays[resizeState.delayIdx];
        if (resizeState.edge === "right") {
          delay.days = Math.max(1, resizeState.originalDays + dayOffset);
        } else {
          var newStart = addDays(new Date(resizeState.originalStart), dayOffset);
          var newDays = resizeState.originalDays - dayOffset;
          if (newDays >= 1) {
            delay.start = isoDate(newStart);
            delay.days = newDays;
          }
        }

      // Step 5c-ii) Pattern Prep resize — adjust prepDays and prepStart
      } else if (resizeState.section === "pattern prep") {
        var newPrepDays = Math.max(resizeState.originalDays + (resizeState.edge === "right" ? dayOffset : -dayOffset), 1);
        blast.prepDays = newPrepDays;
        if (resizeState.edge === "left") {
          blast.prepStart = isoDate(addDays(new Date(resizeState.originalStart), dayOffset));
        }

      // Step 5d) Drill block resize — adjust pen rates
      } else if (resizeState.section === "drilling" && resizeState.blockIdx !== null) {
        var block = blast.drillBlocks && blast.drillBlocks[resizeState.blockIdx];
        if (block) {
          applyDrillResize(block, dayOffset, resizeState.edge, resizeState.originalDays, resizeState.originalStart);
          syncBlastFromBlocks(blast);
        }

      // Step 5e) Whole drill resize — adjust pen rates at blast level
      } else if (resizeState.section === "drilling") {
        applyBlastDrillResize(blast, dayOffset, resizeState.edge, resizeState.originalDays, resizeState.originalStart);

      // Step 5f) Loading resize — adjust MPU rate
      } else if (resizeState.section === "loading") {
        applyLoadResize(blast, dayOffset, resizeState.edge, resizeState.originalDays, resizeState.originalStart);
      }

      recalcDependencies();
      debouncedSave();
      renderGantt();
    }
  }

  // Step 5g) Reset
  resizeState.active = false;
  resizeState.blastIdx = null;
  resizeState.section = null;
  resizeState.blockIdx = null;
  resizeState.delayIdx = null;
  resizeState.barEl = null;
  resizeState.dayOffset = 0;
}

// Step 6) Apply drill block resize — recalculates pen rates to match new duration
function applyDrillResize(block, dayOffset, edge, originalDays, originalStart) {
  var newDays;
  if (edge === "right") {
    newDays = Math.max(1, originalDays + dayOffset);
  } else {
    newDays = Math.max(1, originalDays - dayOffset);
    block.drillStart = isoDate(addDays(new Date(originalStart), dayOffset));
  }
  block.drillDays = newDays;

  // Step 6a) Back-calculate pen rates so meters fit in the new duration
  var effectiveHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);
  var meters = block.meters || 0;
  var numDrills = (block.assignedDrills || []).length;
  if (numDrills > 0 && meters > 0 && effectiveHrs > 0) {
    // Step 6b) Required m/day total = meters / newDays
    var requiredMPerDay = meters / newDays;
    // Step 6c) Required pen rate per drill = requiredMPerDay / (numDrills * effectiveHrs)
    var newPenRate = Math.round((requiredMPerDay / (numDrills * effectiveHrs)) * 10) / 10;
    newPenRate = Math.max(1, newPenRate);

    (block.assignedDrills || []).forEach(function(drillId) {
      if (!block.drillRates) block.drillRates = {};
      block.drillRates[drillId] = newPenRate;
    });
  }
}

// Step 7) Apply blast-level drill resize — adjust rates across the blast
function applyBlastDrillResize(blast, dayOffset, edge, originalDays, originalStart) {
  var newDays;
  if (edge === "right") {
    newDays = Math.max(1, originalDays + dayOffset);
  } else {
    newDays = Math.max(1, originalDays - dayOffset);
    blast.drillStart = isoDate(addDays(new Date(originalStart), dayOffset));
    blast.loadStartManual = false;
    blast.blastDateManual = false;
  }
  blast.drillDays = newDays;

  // Step 7a) drillDays already updated above — no per-rig rate fields to back-calculate
}

// Step 8) Apply loading resize — adjust MPU kg/day rate
function applyLoadResize(blast, dayOffset, edge, originalDays, originalStart) {
  var newDays;
  if (edge === "right") {
    newDays = Math.max(1, originalDays + dayOffset);
  } else {
    newDays = Math.max(1, originalDays - dayOffset);
    blast.loadStart = isoDate(addDays(new Date(originalStart), dayOffset));
    blast.loadStartManual = true;
  }
  blast.loadDays = newDays;

  // Step 8a) Back-calculate MPU rate from explosive mass and new duration
  var expMass = blast.expMass || 0;
  if (expMass > 0 && newDays > 0) {
    blast.loadRate = Math.round(expMass / newDays);
  }
}

// Step 9) Check if resize is currently active (used by ganttDrag to avoid conflicts)
function isResizing() {
  return resizeState.active;
}

export { initGanttResize, isResizing };
