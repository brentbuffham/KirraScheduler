// ============================================================
//  GANTT DRAG
//  Drag-to-move drilling bars on the Gantt chart.
//  Moving a drill start cascades load and blast dates via
//  the dependency engine.
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";

var CELL_WIDTH = 32; // px per day column (matches CSS .gantt-cell min/max-width)

var dragState = {
  active: false,
  blastIdx: null,
  section: null,
  startX: 0,
  origDrillStart: null,
  ghostEl: null,
  dayOffset: 0
};

// Step 1) Initialise drag handlers on the Gantt scroll container
function initGanttDrag() {
  var container = document.getElementById("ganttScroll");
  if (!container) return;

  container.addEventListener("mousedown", onDragStart);
  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", onDragEnd);
}

// Step 2) Start drag — only on drill bars
function onDragStart(e) {
  var bar = e.target.closest(".gantt-bar");
  if (!bar) return;

  // Only allow dragging DRILLING bars
  var row = bar.closest(".gantt-row");
  if (!row) return;
  var section = row.dataset.section;
  if (section !== "drilling") return;

  var blastIdx = parseInt(row.dataset.blast);
  if (isNaN(blastIdx)) return;

  var blast = APP.blasts[blastIdx];
  if (!blast || !blast.drillStart) return;

  e.preventDefault();
  dragState.active = true;
  dragState.blastIdx = blastIdx;
  dragState.section = section;
  dragState.startX = e.clientX;
  dragState.origDrillStart = blast.drillStart;
  dragState.dayOffset = 0;

  // Step 2a) Visual feedback: add drag class
  bar.classList.add("gantt-bar-dragging");
  dragState.ghostEl = bar;

  // Change cursor on the whole document while dragging
  document.body.style.cursor = "grabbing";
}

// Step 3) Mouse move during drag — show offset indicator
function onDragMove(e) {
  if (!dragState.active) return;
  e.preventDefault();

  var dx = e.clientX - dragState.startX;
  var dayOffset = Math.round(dx / CELL_WIDTH);
  dragState.dayOffset = dayOffset;

  // Step 3a) Show offset as a CSS transform on the row
  if (dragState.ghostEl) {
    var row = dragState.ghostEl.closest(".gantt-row");
    if (row) {
      // Highlight all cells in this row that have bars
      var bars = row.querySelectorAll(".gantt-bar");
      bars.forEach(function(b) {
        b.style.transform = "translateX(" + (dayOffset * CELL_WIDTH) + "px)";
        b.style.opacity = "0.6";
        b.style.zIndex = "50";
      });
    }
  }
}

// Step 4) End drag — apply the date change and recalculate
function onDragEnd(e) {
  if (!dragState.active) return;

  document.body.style.cursor = "";

  var dayOffset = dragState.dayOffset;
  var blastIdx = dragState.blastIdx;

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
    if (blast && blast.drillStart) {
      var newStart = addDays(new Date(blast.drillStart), dayOffset);
      blast.drillStart = isoDate(newStart);

      // Step 4c) Recalculate all dependencies (this cascades load + blast dates)
      recalcDependencies();
      renderGantt();

      // Re-attach drag handlers after re-render
      initGanttDrag();
    }
  }

  // Step 4d) Reset state
  dragState.active = false;
  dragState.blastIdx = null;
  dragState.ghostEl = null;
  dragState.dayOffset = 0;
}

export { initGanttDrag };
