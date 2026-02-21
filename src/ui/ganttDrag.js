// ============================================================
//  GANTT DRAG
//  Drag-to-move bars on the Gantt chart for all sections:
//    - DRILLING bars: shift drillStart, cascade via dependencies
//    - LOADING bars: shift loadStart (manual override), warn on breach
//    - BLASTING milestone: shift blastDate (manual override), warn on breach
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";

var CELL_WIDTH = 32;

var dragState = {
  active: false,
  blastIdx: null,
  section: null,
  startX: 0,
  dayOffset: 0,
  ghostEl: null
};

// Step 1) Initialise drag handlers on the Gantt scroll container
function initGanttDrag() {
  var container = document.getElementById("ganttScroll");
  if (!container) return;

  container.addEventListener("mousedown", onDragStart);
  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", onDragEnd);
}

// Step 2) Start drag — works for drill, load, and blast bars
function onDragStart(e) {
  var bar = e.target.closest(".gantt-bar");
  if (!bar) return;

  var row = bar.closest(".gantt-row");
  if (!row) return;

  var section = row.dataset.section;
  var blastIdx = parseInt(row.dataset.blast);
  if (isNaN(blastIdx)) return;

  var blast = APP.blasts[blastIdx];
  if (!blast) return;

  // Step 2a) Validate the bar is draggable for its section
  if (section === "drilling" && !blast.drillStart) return;
  if (section === "loading" && !blast.loadStart) return;
  if (section === "blasting" && !blast.blastDate) return;

  e.preventDefault();
  dragState.active = true;
  dragState.blastIdx = blastIdx;
  dragState.section = section;
  dragState.startX = e.clientX;
  dragState.dayOffset = 0;

  bar.classList.add("gantt-bar-dragging");
  dragState.ghostEl = bar;
  document.body.style.cursor = "grabbing";
}

// Step 3) Mouse move during drag — show offset indicator
function onDragMove(e) {
  if (!dragState.active) return;
  e.preventDefault();

  var dx = e.clientX - dragState.startX;
  var dayOffset = Math.round(dx / CELL_WIDTH);
  dragState.dayOffset = dayOffset;

  // Step 3a) Apply visual transform to all bars in the row
  if (dragState.ghostEl) {
    var row = dragState.ghostEl.closest(".gantt-row");
    if (row) {
      var bars = row.querySelectorAll(".gantt-bar");
      bars.forEach(function(b) {
        b.style.transform = "translateX(" + (dayOffset * CELL_WIDTH) + "px)";
        b.style.opacity = "0.6";
        b.style.zIndex = "50";
      });
    }
  }
}

// Step 4) End drag — apply the date change based on section
function onDragEnd(e) {
  if (!dragState.active) return;

  document.body.style.cursor = "";

  var dayOffset = dragState.dayOffset;
  var blastIdx = dragState.blastIdx;
  var section = dragState.section;

  // Step 4a) Reset visual transforms
  if (dragState.ghostEl) {
    var row = dragState.ghostEl.closest(".gantt-row");
    if (row) {
      var bars = row.querySelectorAll(".gantt-bar");
      bars.forEach(function(b) {
        b.style.transform = "";
        b.style.opacity = "";
        b.style.zIndex = "";
      });
    }
    dragState.ghostEl.classList.remove("gantt-bar-dragging");
  }

  // Step 4b) Apply offset if non-zero
  if (dayOffset !== 0 && blastIdx !== null) {
    var blast = APP.blasts[blastIdx];
    if (blast) {

      if (section === "drilling" && blast.drillStart) {
        // Step 4c) Drilling: shift drillStart, let engine cascade load + blast
        var newDrill = addDays(new Date(blast.drillStart), dayOffset);
        blast.drillStart = isoDate(newDrill);
        blast.loadStartManual = false;
        blast.blastDateManual = false;

      } else if (section === "loading" && blast.loadStart) {
        // Step 4d) Loading: manual override — mark as manual so engine validates
        var newLoad = addDays(new Date(blast.loadStart), dayOffset);
        blast.loadStart = isoDate(newLoad);
        blast.loadStartManual = true;

      } else if (section === "blasting" && blast.blastDate) {
        // Step 4e) Blasting: manual override — mark as manual so engine validates
        var newBlast = addDays(new Date(blast.blastDate), dayOffset);
        blast.blastDate = isoDate(newBlast);
        blast.blastDateManual = true;
      }

      // Step 4f) Recalculate dependencies and re-render
      recalcDependencies();
      renderGantt();
    }
  }

  // Step 4g) Reset state
  dragState.active = false;
  dragState.blastIdx = null;
  dragState.section = null;
  dragState.ghostEl = null;
  dragState.dayOffset = 0;
}

export { initGanttDrag };
