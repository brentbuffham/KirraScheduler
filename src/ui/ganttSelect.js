// ============================================================
//  GANTT SELECT
//  Rubber-band selection rectangle on the Gantt chart.
//  Click+drag on empty space draws a rectangle; rows whose bars
//  intersect are selected. Hold Shift or Ctrl while dragging
//  to add to the existing selection. Click on empty space
//  (without dragging) clears the selection.
// ============================================================

import { APP } from "../state/appState.js";
import { renderGantt } from "../views/ganttView.js";

// Step 1) Selection state — array of { blastIdx, section }
var _selected = [];

// Step 2) Rubber-band state
var _band = {
  active: false,
  startX: 0,
  startY: 0,
  scrollX0: 0,
  scrollY0: 0,
  el: null,
  justFinished: false
};

// Step 3) Public API: get current selection
function getSelection() {
  return _selected;
}

// Step 4) Public API: clear selection
function clearSelection() {
  _selected = [];
  // Step 4a) Remove highlight class from all rows
  document.querySelectorAll(".gantt-row.gantt-row-selected").forEach(function(row) {
    row.classList.remove("gantt-row-selected");
  });
}

// Step 5) Public API: check if a blast/section is selected
function isSelected(blastIdx, section) {
  for (var i = 0; i < _selected.length; i++) {
    if (_selected[i].blastIdx === blastIdx && _selected[i].section === section) return true;
  }
  return false;
}

// Step 6) Initialise selection handlers on the Gantt scroll container
function initGanttSelect() {
  var container = document.getElementById("ganttScroll");
  if (!container) return;

  container.addEventListener("mousedown", onSelectStart);
  document.addEventListener("mousemove", onSelectMove);
  document.addEventListener("mouseup", onSelectEnd);

  // Step 6a) Click on empty Gantt space (no bar) clears selection
  //          (only fires when the rubber-band was NOT used — tiny drags are ignored)
  container.addEventListener("click", function(e) {
    if (e.target.closest(".gantt-bar")) return;
    if (e.target.closest(".gantt-resize-handle")) return;
    if (e.target.closest(".sticky-col")) return;
    if (e.target.closest(".sticky-col-2")) return;
    if (!_band.justFinished) {
      clearSelection();
    }
    _band.justFinished = false;
  });
}

// Step 7) Start rubber-band on mousedown on empty Gantt area
function onSelectStart(e) {
  // Step 7a) Only start on empty space — not on bars, handles, or sticky columns
  if (e.target.closest(".gantt-bar")) return;
  if (e.target.closest(".gantt-resize-handle")) return;
  if (e.target.closest(".sticky-col")) return;
  if (e.target.closest(".sticky-col-2")) return;
  if (e.target.closest(".gantt-reorder-grip")) return;
  if (e.button !== 0) return;

  e.preventDefault();

  var container = document.getElementById("ganttScroll");
  var rect = container.getBoundingClientRect();

  _band.active = true;
  _band.startX = e.clientX;
  _band.startY = e.clientY;
  // Step 7a-ii) Record initial scroll offsets so rubber-band stays anchored during autoscroll
  _band.scrollX0 = container.scrollLeft;
  _band.scrollY0 = container.scrollTop;

  // Step 7b) Create the rubber-band element
  var el = document.createElement("div");
  el.className = "gantt-select-band";
  el.style.position = "fixed";
  el.style.left = e.clientX + "px";
  el.style.top = e.clientY + "px";
  el.style.width = "0px";
  el.style.height = "0px";
  document.body.appendChild(el);
  _band.el = el;
}

// Step 8) Update rubber-band dimensions + autoscroll near edges
function onSelectMove(e) {
  if (!_band.active || !_band.el) return;
  e.preventDefault();

  var container = document.getElementById("ganttScroll");
  if (!container) return;

  // Step 8a) Autoscroll using viewport boundaries (container may extend beyond viewport)
  var cRect = container.getBoundingClientRect();
  var vpW = window.innerWidth;
  var vpH = window.innerHeight;
  var EDGE_ZONE = 40;
  var SCROLL_SPEED = 8;

  var topBound = Math.max(cRect.top, 0);
  var bottomBound = Math.min(cRect.bottom, vpH);
  var leftBound = Math.max(cRect.left, 0);
  var rightBound = Math.min(cRect.right, vpW);

  if (e.clientY < topBound + EDGE_ZONE && e.clientY > topBound) {
    container.scrollTop -= SCROLL_SPEED;
  } else if (e.clientY > bottomBound - EDGE_ZONE && e.clientY < bottomBound) {
    container.scrollTop += SCROLL_SPEED;
  }
  if (e.clientX < leftBound + EDGE_ZONE && e.clientX > leftBound) {
    container.scrollLeft -= SCROLL_SPEED;
  } else if (e.clientX > rightBound - EDGE_ZONE && e.clientX < rightBound) {
    container.scrollLeft += SCROLL_SPEED;
  }

  // Step 8b) Compensate rubber-band origin for any scroll that happened since mousedown
  var dScrollX = container.scrollLeft - _band.scrollX0;
  var dScrollY = container.scrollTop - _band.scrollY0;
  var originX = _band.startX - dScrollX;
  var originY = _band.startY - dScrollY;

  // Step 8c) Size and position the rubber-band using the scroll-adjusted origin
  var x = Math.min(e.clientX, originX);
  var y = Math.min(e.clientY, originY);
  var w = Math.abs(e.clientX - originX);
  var h = Math.abs(e.clientY - originY);

  _band.el.style.left = x + "px";
  _band.el.style.top = y + "px";
  _band.el.style.width = w + "px";
  _band.el.style.height = h + "px";
}

// Step 9) End rubber-band — determine which rows intersect
function onSelectEnd(e) {
  if (!_band.active) return;

  // Step 9-pre) Compute scroll-adjusted origin so hit-testing matches the visual band
  var container = document.getElementById("ganttScroll");
  var dScrollX = container ? (container.scrollLeft - _band.scrollX0) : 0;
  var dScrollY = container ? (container.scrollTop - _band.scrollY0) : 0;
  var originX = _band.startX - dScrollX;
  var originY = _band.startY - dScrollY;

  var bandRect = {
    left: Math.min(e.clientX, originX),
    top: Math.min(e.clientY, originY),
    right: Math.max(e.clientX, originX),
    bottom: Math.max(e.clientY, originY)
  };

  // Step 9a) Remove the rubber-band element
  if (_band.el) {
    _band.el.remove();
    _band.el = null;
  }
  _band.active = false;

  // Step 9b) Minimum size threshold — ignore tiny accidental drags (let click handler clear)
  if ((bandRect.right - bandRect.left) < 10 && (bandRect.bottom - bandRect.top) < 10) {
    _band.justFinished = false;
    return;
  }

  // Step 9b-ii) Mark that a real rubber-band just finished so the click handler won't clear
  _band.justFinished = true;

  // Step 9c) Clear previous selection unless Shift or Ctrl is held (additive)
  if (!e.ctrlKey && !e.shiftKey) {
    _selected = [];
  }

  // Step 9d) Find all gantt rows with bars that intersect the band
  var rows = document.querySelectorAll(".gantt-row");
  rows.forEach(function(row) {
    var bars = row.querySelectorAll(".gantt-bar:not(.delay-bar)");
    if (bars.length === 0) return;

    var blastIdx = parseInt(row.dataset.blast);
    var section = row.dataset.section;
    if (isNaN(blastIdx)) return;

    // Step 9e) Check if any bar in this row intersects the band rectangle
    var intersects = false;
    bars.forEach(function(bar) {
      var barRect = bar.getBoundingClientRect();
      if (barRect.right > bandRect.left && barRect.left < bandRect.right &&
          barRect.bottom > bandRect.top && barRect.top < bandRect.bottom) {
        intersects = true;
      }
    });

    if (intersects) {
      // Step 9f) Add to selection if not already there
      var exists = false;
      for (var i = 0; i < _selected.length; i++) {
        if (_selected[i].blastIdx === blastIdx && _selected[i].section === section) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        _selected.push({ blastIdx: blastIdx, section: section });
      }
    }
  });

  // Step 9g) Apply visual highlight
  applySelectionHighlight();
}

// Step 10) Apply the selected highlight class to matching rows
function applySelectionHighlight() {
  document.querySelectorAll(".gantt-row").forEach(function(row) {
    var blastIdx = parseInt(row.dataset.blast);
    var section = row.dataset.section;
    if (isSelected(blastIdx, section)) {
      row.classList.add("gantt-row-selected");
    } else {
      row.classList.remove("gantt-row-selected");
    }
  });
}

export { initGanttSelect, getSelection, clearSelection, isSelected, applySelectionHighlight };
