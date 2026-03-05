// ============================================================
//  GANTT REORDER
//  Drag handle on Gantt rows to re-order blast sequence.
//  The handle appears on the left edge of the sticky-col.
//  Dragging vertically swaps blast positions in APP.blasts[].
// ============================================================

import { APP } from "../state/appState.js";
import { renderGantt } from "../views/ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 1) Reorder drag state
var _reorder = {
  active: false,
  blastIdx: null,
  startY: 0,
  placeholder: null,
  rows: []
};

var _bound = false;

// Step 2) Initialise reorder handlers (safe to call multiple times)
function initGanttReorder() {
  if (_bound) return;
  _bound = true;

  var container = document.getElementById("ganttScroll");
  if (!container) { _bound = false; return; }

  container.addEventListener("mousedown", onReorderStart);
  document.addEventListener("mousemove", onReorderMove);
  document.addEventListener("mouseup", onReorderEnd);
}

// Step 3) Start reorder drag on grip handle mousedown
function onReorderStart(e) {
  var grip = e.target.closest(".gantt-reorder-grip");
  if (!grip) return;

  var td = grip.closest("td.sticky-col");
  if (!td) return;
  var blastIdx = parseInt(td.dataset.ctxIdx);
  if (isNaN(blastIdx)) return;

  // Step 3a) Only allow reorder on non-block rows (top-level blast rows)
  var row = td.closest(".gantt-row");
  if (!row || row.dataset.block !== undefined) return;

  e.preventDefault();
  e.stopPropagation();

  _reorder.active = true;
  _reorder.blastIdx = blastIdx;
  _reorder.startY = e.clientY;

  // Step 3b) Collect all unique blast indices visible in this section for target detection
  var section = row.dataset.section;
  _reorder.rows = [];
  document.querySelectorAll(".gantt-row[data-section=\"" + section + "\"]").forEach(function(r) {
    var bi = parseInt(r.dataset.blast);
    if (isNaN(bi)) return;
    // Step 3c) Only consider first row per blast (avoid block sub-rows)
    if (r.dataset.block !== undefined) return;
    var rect = r.getBoundingClientRect();
    _reorder.rows.push({ blastIdx: bi, top: rect.top, bottom: rect.bottom, midY: (rect.top + rect.bottom) / 2 });
  });

  row.classList.add("gantt-row-reordering");
  document.body.style.cursor = "ns-resize";
}

// Step 4) Mouse move during reorder — highlight target position
function onReorderMove(e) {
  if (!_reorder.active) return;
  e.preventDefault();

  // Step 4a) Find which row the cursor is closest to
  var curY = e.clientY;
  for (var i = 0; i < _reorder.rows.length; i++) {
    var r = _reorder.rows[i];
    var rowEl = findRowElement(r.blastIdx);
    if (!rowEl) continue;
    if (curY >= r.top && curY <= r.bottom && r.blastIdx !== _reorder.blastIdx) {
      rowEl.classList.add("gantt-reorder-target");
    } else {
      rowEl.classList.remove("gantt-reorder-target");
    }
  }
}

// Step 5) End reorder — swap blast positions in APP.blasts[]
function onReorderEnd(e) {
  if (!_reorder.active) return;
  document.body.style.cursor = "";

  // Step 5a) Find the target blast index based on cursor position
  var curY = e.clientY;
  var targetIdx = null;
  for (var i = 0; i < _reorder.rows.length; i++) {
    var r = _reorder.rows[i];
    if (curY >= r.top && curY <= r.bottom && r.blastIdx !== _reorder.blastIdx) {
      targetIdx = r.blastIdx;
      break;
    }
  }

  // Step 5b) Clean up visual state
  document.querySelectorAll(".gantt-row-reordering").forEach(function(row) {
    row.classList.remove("gantt-row-reordering");
  });
  document.querySelectorAll(".gantt-reorder-target").forEach(function(row) {
    row.classList.remove("gantt-reorder-target");
  });

  // Step 5c) Perform the reorder if valid target found
  if (targetIdx !== null && targetIdx !== _reorder.blastIdx) {
    var fromIdx = _reorder.blastIdx;
    var toIdx = targetIdx;

    // Step 5d) Remove the blast from its current position and insert at target
    var blast = APP.blasts.splice(fromIdx, 1)[0];
    // Step 5e) Adjust target index if it shifted due to the splice
    if (fromIdx < toIdx) toIdx--;
    APP.blasts.splice(toIdx, 0, blast);

    debouncedSave();
    renderGantt();
  }

  // Step 5f) Reset state
  _reorder.active = false;
  _reorder.blastIdx = null;
  _reorder.rows = [];
}

// Step 6) Helper: find the first non-block gantt-row element for a blast index
function findRowElement(blastIdx) {
  var rows = document.querySelectorAll(".gantt-row[data-blast=\"" + blastIdx + "\"]");
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].dataset.block === undefined) return rows[i];
  }
  return rows.length > 0 ? rows[0] : null;
}

export { initGanttReorder };
