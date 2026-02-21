// ============================================================
//  GANTT DRAG
//  Drag-to-move bars on the Gantt chart for all sections:
//    - DRILLING bars: shift drillStart, cascade via dependencies
//    - DRILLING block bars: shift only that block's drillStart
//    - LOADING bars: shift loadStart (manual override), warn on breach
//    - BLASTING milestone: shift blastDate (manual override), warn on breach
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";
import { syncBlastFromBlocks } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";

var CELL_WIDTH = 32;

var dragState = {
  active: false,
  blastIdx: null,
  section: null,
  blockIdx: null,
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

// Step 2) Start drag — works for drill, load, blast, and block bars
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

  // Step 2a) Check for block-level drag
  var blockIdx = row.dataset.block !== undefined ? parseInt(row.dataset.block) : null;

  // Step 2b) Validate the bar is draggable for its section
  if (section === "drilling") {
    if (blockIdx !== null) {
      var block = blast.drillBlocks && blast.drillBlocks[blockIdx];
      if (!block || !block.drillStart) return;
    } else if (!blast.drillStart) {
      return;
    }
  }
  if (section === "loading" && !blast.loadStart) return;
  if (section === "blasting" && !blast.blastDate) return;

  e.preventDefault();
  dragState.active = true;
  dragState.blastIdx = blastIdx;
  dragState.section = section;
  dragState.blockIdx = blockIdx;
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
  var blockIdx = dragState.blockIdx;

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

      if (section === "drilling" && blockIdx !== null) {
        // Step 4c) Block-level drag: shift only this block's drillStart
        var block = blast.drillBlocks && blast.drillBlocks[blockIdx];
        if (block && block.drillStart) {
          var newBlockStart = addDays(new Date(block.drillStart), dayOffset);
          block.drillStart = isoDate(newBlockStart);
          syncBlastFromBlocks(blast);
        }

      } else if (section === "drilling" && blast.drillStart) {
        // Step 4d) Whole-blast drilling: shift drillStart, let engine cascade
        var newDrill = addDays(new Date(blast.drillStart), dayOffset);
        blast.drillStart = isoDate(newDrill);
        blast.loadStartManual = false;
        blast.blastDateManual = false;

        // Step 4d-i) If blast has blocks, shift all blocks by the same offset
        if (blast.drillBlocks) {
          blast.drillBlocks.forEach(function(b) {
            if (b.drillStart) {
              b.drillStart = isoDate(addDays(new Date(b.drillStart), dayOffset));
            }
          });
        }

      } else if (section === "loading" && blast.loadStart) {
        var newLoad = addDays(new Date(blast.loadStart), dayOffset);
        blast.loadStart = isoDate(newLoad);
        blast.loadStartManual = true;

      } else if (section === "blasting" && blast.blastDate) {
        var newBlast = addDays(new Date(blast.blastDate), dayOffset);
        blast.blastDate = isoDate(newBlast);
        blast.blastDateManual = true;
      }

      recalcDependencies();
      renderGantt();
    }
  }

  // Step 4e) Reset state
  dragState.active = false;
  dragState.blastIdx = null;
  dragState.section = null;
  dragState.blockIdx = null;
  dragState.ghostEl = null;
  dragState.dayOffset = 0;
}

export { initGanttDrag };
