// ============================================================
//  BLAST CALENDAR VIEW
//  Rolling week-based calendar showing blast phases as bars
//  Grid is anchored to focusDate and shifts with week navigation
//  Plan-week tinting matches the Gantt chart banding
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isToday } from "../utils/dateUtils.js";
import { editBlast } from "../dialogs/blastModal.js";
import { getPlanBandStyle, getPlanWeekIdx } from "./ganttView.js";

// Step 0) Timezone-safe local ISO date (avoids UTC shift from toISOString)
function localIso(d) {
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  return y + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
}

// Step 0b) Create UTC midnight date from local date components
// Matches how APP.planStart is stored so getPlanWeekIdx diffs are exact
function toUtcMidnight(d) {
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
}

// Step 1) Module state — focus date drives the visible window
var focusDate = new Date();
var _inited = false;

// Step 2) Section definitions
var SECTIONS = [
  { key: "prep",  label: "Prep",  toggleId: "calTogglePrep"  },
  { key: "drill", label: "Drill", toggleId: "calToggleDrill" },
  { key: "load",  label: "Load",  toggleId: "calToggleLoad"  },
  { key: "blast", label: "Blast", toggleId: "calToggleBlast" }
];

// Step 3) Get the date range for each blast phase
function getPhaseRange(blast, phaseKey) {
  if (phaseKey === "prep") {
    if (!blast.prepStart || !blast.prepDays) return null;
    var end = addDays(new Date(blast.prepStart + "T00:00:00"), (blast.prepDays || 1) - 1);
    return { start: blast.prepStart, end: localIso(end) };
  }
  if (phaseKey === "drill") {
    if (!blast.drillStart || !blast.drillDays) return null;
    var end = addDays(new Date(blast.drillStart + "T00:00:00"), (blast.drillDays || 1) - 1);
    return { start: blast.drillStart, end: localIso(end) };
  }
  if (phaseKey === "load") {
    if (!blast.loadStart || !blast.loadDays) return null;
    var end = addDays(new Date(blast.loadStart + "T00:00:00"), (blast.loadDays || 1) - 1);
    return { start: blast.loadStart, end: localIso(end) };
  }
  if (phaseKey === "blast") {
    if (!blast.blastDate) return null;
    return { start: blast.blastDate, end: blast.blastDate };
  }
  return null;
}

// Step 4) Build a rolling 6-week grid centered on the focus date
function buildFocusGrid() {
  // Step 4a) Plan week starts on APP.planStart weekday
  var planDow = APP.planStart ? APP.planStart.getDay() : 1;

  // Step 4b) Find start of focus date's plan week
  var focusDow = (focusDate.getDay() - planDow + 7) % 7;
  var focusWeekStart = addDays(focusDate, -focusDow);

  // Step 4c) Start 1 week before focus week for context
  var gridStart = addDays(focusWeekStart, -7);

  // Step 4d) Build 6 weeks (42 cells)
  var cells = [];
  for (var i = 0; i < 42; i++) {
    var d = addDays(gridStart, i);
    cells.push({
      date: d,
      iso: localIso(d),
      dayNum: d.getDate(),
      isMonthStart: d.getDate() === 1,
      today: isToday(d)
    });
  }
  return cells;
}

// Step 5) Collect bars for each day cell
function collectBars(cells) {
  var dayBars = {};
  for (var ci = 0; ci < cells.length; ci++) {
    dayBars[cells[ci].iso] = [];
  }

  var activeSections = [];
  for (var si = 0; si < SECTIONS.length; si++) {
    var cb = document.getElementById(SECTIONS[si].toggleId);
    if (cb && cb.checked) activeSections.push(SECTIONS[si].key);
  }

  for (var bi = 0; bi < APP.blasts.length; bi++) {
    var blast = APP.blasts[bi];
    for (var pi = 0; pi < activeSections.length; pi++) {
      var phase = activeSections[pi];
      var range = getPhaseRange(blast, phase);
      if (!range) continue;

      for (var di = 0; di < cells.length; di++) {
        var iso = cells[di].iso;
        if (iso >= range.start && iso <= range.end) {
          dayBars[iso].push({
            blastIdx: bi,
            blastName: blast.name,
            phase: phase,
            isStart: (iso === range.start),
            isEnd: (iso === range.end)
          });
        }
      }
    }
  }
  return dayBars;
}

// Step 6) Assign consistent vertical slots so multi-day bars stay on the same row
function assignBarSlots(cells, dayBars) {
  var slotMap = {};
  var daySlotsUsed = {};

  for (var ci = 0; ci < cells.length; ci++) {
    var iso = cells[ci].iso;
    var bars = dayBars[iso];
    if (!daySlotsUsed[iso]) daySlotsUsed[iso] = {};

    for (var bi = 0; bi < bars.length; bi++) {
      var bar = bars[bi];
      var barKey = bar.blastIdx + "|" + bar.phase;

      if (slotMap[barKey] !== undefined) {
        bar.slot = slotMap[barKey];
      } else {
        var slot = 0;
        while (daySlotsUsed[iso][slot]) slot++;
        bar.slot = slot;
        slotMap[barKey] = slot;
      }
      daySlotsUsed[iso][bar.slot] = true;
    }
  }
}

// Step 7) Render the calendar HTML
function renderBlastCalendar() {
  var grid = document.getElementById("blastCalendarGrid");
  if (!grid) return;

  // Step 7a) Build the rolling grid
  var cells = buildFocusGrid();
  var dayBars = collectBars(cells);
  assignBarSlots(cells, dayBars);

  // Step 7a-ii) Update label: date range + plan week
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var firstCell = cells[0];
  var lastCell = cells[cells.length - 1];
  var rangeStart = firstCell.date.getDate() + " " + monthNames[firstCell.date.getMonth()];
  var rangeEnd = lastCell.date.getDate() + " " + monthNames[lastCell.date.getMonth()] + " " + lastCell.date.getFullYear();
  var focusUtc = toUtcMidnight(focusDate);
  var planWk = getPlanWeekIdx(focusUtc) + 1;
  var label = document.getElementById("calMonthLabel");
  if (label) label.textContent = rangeStart + " - " + rangeEnd + "  |  Plan Wk " + planWk;

  // Step 7b) Header row — starts on the Plan Start weekday
  var html = "";
  var allDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var planDow = APP.planStart ? APP.planStart.getDay() : 1;
  for (var hi = 0; hi < 7; hi++) {
    html += "<div class=\"blast-cal-header\">" + allDayNames[(planDow + hi) % 7] + "</div>";
  }

  // Step 7c) Determine focus week row (row index 1, since grid starts 1 week before)
  var focusIso = localIso(focusDate);
  var focusRow = -1;
  for (var fi = 0; fi < cells.length; fi++) {
    if (cells[fi].iso === focusIso) { focusRow = Math.floor(fi / 7); break; }
  }

  // Step 7d) Day cells
  for (var ci = 0; ci < cells.length; ci++) {
    var cell = cells[ci];
    var cls = "blast-cal-cell";
    if (cell.today) cls += " today";
    if (Math.floor(ci / 7) === focusRow) cls += " focus-week";

    // Step 7d-i) Plan week band tint — use UTC midnight for correct diff with planStart
    var utcDate = toUtcMidnight(cell.date);
    var bandStyle = getPlanBandStyle(utcDate);

    // Step 7d-ii) Month boundary indicator — inline with day number
    var monthSuffix = "";
    if (cell.isMonthStart) {
      var shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      monthSuffix = "<span class=\"blast-cal-month-mark\">" + shortMonthNames[cell.date.getMonth()] + "</span>";
    }

    html += "<div class=\"" + cls + "\" data-iso=\"" + cell.iso + "\" style=\"" + bandStyle + "\">";
    html += "<div class=\"blast-cal-day-num\">" + cell.dayNum + monthSuffix + "</div>";
    html += "<div class=\"blast-cal-bars\">";

    // Step 7e) Render bars sorted by slot
    var bars = dayBars[cell.iso] || [];
    bars.sort(function(a, b) { return a.slot - b.slot; });

    var maxSlot = -1;
    for (var bi = 0; bi < bars.length; bi++) {
      if (bars[bi].slot > maxSlot) maxSlot = bars[bi].slot;
    }

    var slotIdx = 0;
    for (var si = 0; si <= maxSlot; si++) {
      var bar = (slotIdx < bars.length && bars[slotIdx].slot === si) ? bars[slotIdx] : null;
      if (bar) {
        var barCls = "blast-cal-bar " + bar.phase;
        if (bar.isStart) barCls += " bar-start";
        if (bar.isEnd) barCls += " bar-end";

        var shortName = bar.blastName.length > 18 ? bar.blastName.substring(0, 16) + ".." : bar.blastName;
        var barLabel = bar.isStart ? shortName : "";
        var tooltip = bar.blastName + " - " + bar.phase.charAt(0).toUpperCase() + bar.phase.slice(1);

        html += "<div class=\"" + barCls + "\" data-blast-idx=\"" + bar.blastIdx + "\" title=\"" + tooltip + "\">";
        html += barLabel;
        html += "</div>";
        slotIdx++;
      } else {
        html += "<div class=\"blast-cal-bar spacer\"></div>";
      }
    }

    html += "</div></div>";
  }

  grid.innerHTML = html;

  // Step 7f) Attach double-click handlers on bars
  grid.querySelectorAll(".blast-cal-bar[data-blast-idx]").forEach(function(el) {
    el.addEventListener("dblclick", function(e) {
      e.stopPropagation();
      var idx = parseInt(el.dataset.blastIdx);
      if (!isNaN(idx)) editBlast(idx);
    });
  });
}

// Step 8) Initialise calendar controls (called once)
function initBlastCalendar() {
  if (_inited) return;
  _inited = true;

  // Step 8-0) Default focus date to Plan Start
  if (APP.planStart) {
    focusDate = new Date(APP.planStart);
  }

  var btnPrev = document.getElementById("calPrev");
  var btnNext = document.getElementById("calNext");
  var btnToday = document.getElementById("calToday");
  var btnPrevWeek = document.getElementById("calPrevWeek");
  var btnNextWeek = document.getElementById("calNextWeek");

  // Step 8a) Month navigation — jump 4 weeks (28 days)
  if (btnPrev) btnPrev.addEventListener("click", function() {
    focusDate = addDays(focusDate, -28);
    renderBlastCalendar();
  });

  if (btnNext) btnNext.addEventListener("click", function() {
    focusDate = addDays(focusDate, 28);
    renderBlastCalendar();
  });

  // Step 8b) Week navigation — shift focus by 7 days
  if (btnPrevWeek) btnPrevWeek.addEventListener("click", function() {
    focusDate = addDays(focusDate, -7);
    renderBlastCalendar();
  });

  if (btnNextWeek) btnNextWeek.addEventListener("click", function() {
    focusDate = addDays(focusDate, 7);
    renderBlastCalendar();
  });

  // Step 8c) Today button
  if (btnToday) btnToday.addEventListener("click", function() {
    focusDate = new Date();
    renderBlastCalendar();
  });

  // Step 8d) Section toggle checkboxes
  for (var si = 0; si < SECTIONS.length; si++) {
    var cb = document.getElementById(SECTIONS[si].toggleId);
    if (cb) cb.addEventListener("change", function() { renderBlastCalendar(); });
  }
}

export { renderBlastCalendar, initBlastCalendar };
