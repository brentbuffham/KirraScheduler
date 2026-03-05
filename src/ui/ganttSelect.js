// ============================================================
//  GANTT SELECT
//  Rubber-band selection rectangle on the Gantt chart.
//  Shift+drag on empty space draws a rectangle; rows whose bars
//  intersect are selected. Selected bars can then be dragged
//  together via ganttDrag multi-drag support.
//  Click on empty space clears the selection.
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
  el: null
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

  // Step 6a) Click on empty Gantt space (no bar) without Shift clears selection
  container.addEventListener("click", function(e) {
    if (e.target.closest(".gantt-bar")) return;
    if (e.target.closest(".gantt-resize-handle")) return;
    if (e.target.closest(".sticky-col")) return;
    if (e.target.closest(".sticky-col-2")) return;
    if (!e.shiftKey && !_band.active) {
      clearSelection();
    }
  });
}

// Step 7) Start rubber-band on Shift+mousedown on empty Gantt area
function onSelectStart(e) {
  // Step 7a) Only start on Shift+click, and not on bars or handles
  if (!e.shiftKey) return;
  if (e.target.closest(".gantt-bar")) return;
  if (e.target.closest(".gantt-resize-handle")) return;
  if (e.target.closest(".sticky-col")) return;
  if (e.target.closest(".sticky-col-2")) return;

  e.preventDefault();

  var container = document.getElementById("ganttScroll");
  var rect = container.getBoundingClientRect();

  _band.active = true;
  _band.startX = e.clientX;
  _band.startY = e.clientY;

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

// Step 8) Update rubber-band dimensions
function onSelectMove(e) {
  if (!_band.active || !_band.el) return;
  e.preventDefault();

  var x = Math.min(e.clientX, _band.startX);
  var y = Math.min(e.clientY, _band.startY);
  var w = Math.abs(e.clientX - _band.startX);
  var h = Math.abs(e.clientY - _band.startY);

  _band.el.style.left = x + "px";
  _band.el.style.top = y + "px";
  _band.el.style.width = w + "px";
  _band.el.style.height = h + "px";
}

// Step 9) End rubber-band — determine which rows intersect
function onSelectEnd(e) {
  if (!_band.active) return;

  var bandRect = {
    left: Math.min(e.clientX, _band.startX),
    top: Math.min(e.clientY, _band.startY),
    right: Math.max(e.clientX, _band.startX),
    bottom: Math.max(e.clientY, _band.startY)
  };

  // Step 9a) Remove the rubber-band element
  if (_band.el) {
    _band.el.remove();
    _band.el = null;
  }
  _band.active = false;

  // Step 9b) Minimum size threshold — ignore tiny accidental drags
  if ((bandRect.right - bandRect.left) < 10 && (bandRect.bottom - bandRect.top) < 10) {
    return;
  }

  // Step 9c) Clear previous selection unless Ctrl is held (additive)
  if (!e.ctrlKey) {
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
