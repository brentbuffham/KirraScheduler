// ============================================================
//  GANTT DRAG
//  Drag-to-move bars on the Gantt chart for all sections:
//    - DRILLING bars: shift drillStart, cascade via dependencies
//    - DRILLING block bars: shift only that block's drillStart
//    - LOADING bars: shift loadStart (manual override), warn on breach
//    - BLASTING milestone: shift blastDate (manual override), warn on breach
//  Multi-drag: when bars are selected via rubber-band, dragging
//  any selected bar moves all selected bars by the same offset.
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";
import { syncBlastFromBlocks } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { getSelection, isSelected, clearSelection, applySelectionHighlight } from "./ganttSelect.js";
import { pushUndo } from "../state/undoManager.js";
import { getDayWidth, isHoursMode } from "./ganttScale.js";

// NOTE: the per-slot column width is no longer a constant — it follows the
//  horizontal zoom (ganttScale.js). Read it live via getDayWidth() so drag
//  offsets stay 1 cell = 1 slot at any zoom. In hours mode a slot is an hour;
//  drilling then drags by the hour (adjusting start date + time), while the
//  other phases (prep/load/blast/excav) still snap to whole days.

// Step 0) Shift a date+time pair by whole hours, rolling across midnight.
function shiftDateTimeByHours(dateStr, timeStr, hours) {
  var d = new Date(dateStr);
  var hh = 0, mm = 0;
  if (timeStr) { var p = timeStr.split(":"); hh = parseInt(p[0]) || 0; mm = parseInt(p[1]) || 0; }
  d.setHours(hh, mm, 0, 0);
  d.setHours(d.getHours() + hours);
  var pad = function(n) { return n < 10 ? "0" + n : "" + n; };
  return { date: isoDate(d), time: pad(d.getHours()) + ":" + pad(d.getMinutes()) };
}

var dragState = {
  active: false,
  blastIdx: null,
  section: null,
  blockIdx: null,
  startX: 0,
  dayOffset: 0,
  ghostEl: null,
  multiDrag: false  // true when dragging a selected bar in a multi-selection
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
  // Step 2-pre) Ignore if click is on a resize handle (handled by ganttResize)
  if (e.target.closest(".gantt-resize-handle")) return;

  var bar = e.target.closest(".gantt-bar");
  if (!bar) return;

  // Step 2-pre-b) Ignore delay bars for drag-to-move (they use resize only)
  if (bar.classList.contains("delay-bar")) return;

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
  if (section === "pattern prep" && !blast.prepStart) return;
  if (section === "loading" && !blast.loadStart) return;
  if (section === "blasting" && !blast.blastDate) return;
  if (section === "excavation" && !blast.excavStart) return;

  e.preventDefault();
  dragState.active = true;
  dragState.blastIdx = blastIdx;
  dragState.section = section;
  dragState.blockIdx = blockIdx;
  dragState.startX = e.clientX;
  dragState.dayOffset = 0;

  // Step 2c) Check if this bar belongs to the current multi-selection
  var sel = getSelection();
  dragState.multiDrag = (sel.length > 1 && isSelected(blastIdx, section));

  bar.classList.add("gantt-bar-dragging");
  dragState.ghostEl = bar;
  document.body.style.cursor = "grabbing";
}

// Step 3) Mouse move during drag — show offset indicator
function onDragMove(e) {
  if (!dragState.active) return;
  e.preventDefault();

  var cw = getDayWidth();
  var dx = e.clientX - dragState.startX;
  var slotOffset = Math.round(dx / cw);
  dragState.dayOffset = slotOffset;   // raw slot offset (hours in hours mode)

  // Step) Non-drill phases have no sub-day time, so snap their visual drag to
  //  whole days even in hours view; drilling moves freely by the hour.
  var visualOffset = slotOffset;
  if (isHoursMode() && dragState.section !== "drilling") {
    visualOffset = Math.round(slotOffset / 24) * 24;
  }
  var translatePx = visualOffset * cw;

  if (dragState.multiDrag) {
    // Step 3a) Multi-drag: move all selected rows
    var sel = getSelection();
    document.querySelectorAll(".gantt-row").forEach(function(row) {
      var bi = parseInt(row.dataset.blast);
      var sec = row.dataset.section;
      if (isNaN(bi)) return;
      var inSel = false;
      for (var i = 0; i < sel.length; i++) {
        if (sel[i].blastIdx === bi && sel[i].section === sec) { inSel = true; break; }
      }
      if (inSel) {
        row.querySelectorAll(".gantt-bar").forEach(function(b) {
          b.style.transform = "translateX(" + translatePx + "px)";
          b.style.opacity = "0.6";
          b.style.zIndex = "50";
        });
      }
    });
  } else if (dragState.ghostEl) {
    // Step 3b) Single drag: move only this row
    var row = dragState.ghostEl.closest(".gantt-row");
    if (row) {
      var bars = row.querySelectorAll(".gantt-bar");
      bars.forEach(function(b) {
        b.style.transform = "translateX(" + translatePx + "px)";
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

  // Step 4a) Reset visual transforms for all rows (handles both single and multi)
  document.querySelectorAll(".gantt-row").forEach(function(row) {
    row.querySelectorAll(".gantt-bar").forEach(function(b) {
      b.style.transform = "";
      b.style.opacity = "";
      b.style.zIndex = "";
    });
  });
  if (dragState.ghostEl) {
    dragState.ghostEl.classList.remove("gantt-bar-dragging");
  }

  // Step 4b) Apply offset if non-zero
  if (dayOffset !== 0 && blastIdx !== null) {

    // Step 4b-undo) Snapshot before committing the move so the whole drag
    //   can be reverted in one Ctrl+Z.
    pushUndo("move " + section + " bar");

    if (dragState.multiDrag) {
      // Step 4b-multi) Multi-drag: apply offset to every selected blast/section
      var sel = getSelection();
      for (var si = 0; si < sel.length; si++) {
        applyOffsetToBlast(sel[si].blastIdx, sel[si].section, null, dayOffset);
      }
    } else {
      // Step 4b-single) Single drag
      applyOffsetToBlast(blastIdx, section, blockIdx, dayOffset);
    }

    recalcDependencies();
    debouncedSave();
    renderGantt();
    applySelectionHighlight();
  }

  // Step 4e) Reset state
  dragState.active = false;
  dragState.blastIdx = null;
  dragState.section = null;
  dragState.blockIdx = null;
  dragState.ghostEl = null;
  dragState.dayOffset = 0;
  dragState.multiDrag = false;
}

// Step 4f) Apply a slot offset to a single blast/section/block.
//  In hours mode the offset is in HOURS: drilling shifts start date + time by
//  the hour; every other phase snaps to whole days (round(hours/24)).
function applyOffsetToBlast(blastIdx, section, blockIdx, slotOffset) {
  var blast = APP.blasts[blastIdx];
  if (!blast) return;

  if (blast.mode !== "Manual") {
    blast.mode = "Manual";
  }

  // Step) Resolve the offset for this mode.
  var hoursMode = isHoursMode();
  var hourOffset = hoursMode ? slotOffset : 0;
  var dayOffset = hoursMode ? Math.round(slotOffset / 24) : slotOffset;

  if (section === "drilling" && blockIdx !== null) {
    var block = blast.drillBlocks && blast.drillBlocks[blockIdx];
    if (block && block.drillStart) {
      if (hoursMode) {
        var sBlk = shiftDateTimeByHours(block.drillStart, block.drillStartTime, hourOffset);
        block.drillStart = sBlk.date;
        block.drillStartTime = sBlk.time;
      } else {
        block.drillStart = isoDate(addDays(new Date(block.drillStart), dayOffset));
      }
      syncBlastFromBlocks(blast);
    }

  } else if (section === "drilling" && blast.drillStart) {
    if (hoursMode) {
      var sMain = shiftDateTimeByHours(blast.drillStart, blast.drillStartTime, hourOffset);
      blast.drillStart = sMain.date;
      blast.drillStartTime = sMain.time;
    } else {
      blast.drillStart = isoDate(addDays(new Date(blast.drillStart), dayOffset));
    }
    blast.loadStartManual = false;
    blast.blastDateManual = false;

    if (blast.drillBlocks) {
      blast.drillBlocks.forEach(function(b) {
        if (b.drillStart) {
          if (hoursMode) {
            var sb = shiftDateTimeByHours(b.drillStart, b.drillStartTime, hourOffset);
            b.drillStart = sb.date;
            b.drillStartTime = sb.time;
          } else {
            b.drillStart = isoDate(addDays(new Date(b.drillStart), dayOffset));
          }
        }
      });
    }

  } else if (section === "pattern prep" && blast.prepStart) {
    var newPrep = addDays(new Date(blast.prepStart), dayOffset);
    blast.prepStart = isoDate(newPrep);

  } else if (section === "loading" && blast.loadStart) {
    var newLoad = addDays(new Date(blast.loadStart), dayOffset);
    blast.loadStart = isoDate(newLoad);
    blast.loadStartManual = true;

  } else if (section === "blasting" && blast.blastDate) {
    var newBlast = addDays(new Date(blast.blastDate), dayOffset);
    blast.blastDate = isoDate(newBlast);
    blast.blastDateManual = true;

  } else if (section === "excavation" && blast.excavStart) {
    var newExcav = addDays(new Date(blast.excavStart), dayOffset);
    blast.excavStart = isoDate(newExcav);
    blast.excavStartManual = true;
  }
}

export { initGanttDrag };
