// ============================================================
//  BLAST CALENDAR VIEW
//  Month-grid calendar showing blast phases as colored bars
//  Sections: Prep (teal), Drill (blue), Load (amber), Blast (red)
// ============================================================

import { APP } from "../state/appState.js";
import { addDays, isoDate, isToday } from "../utils/dateUtils.js";
import { editBlast } from "../dialogs/blastModal.js";

// Step 1) Module state — current month/year being displayed
var calYear = new Date().getFullYear();
var calMonth = new Date().getMonth(); // 0-based
var _inited = false;

// Step 2) Section color map
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
    return {
      start: blast.prepStart,
      end: isoDate(addDays(new Date(blast.prepStart), (blast.prepDays || 1) - 1))
    };
  }
  if (phaseKey === "drill") {
    if (!blast.drillStart || !blast.drillDays) return null;
    return {
      start: blast.drillStart,
      end: isoDate(addDays(new Date(blast.drillStart), (blast.drillDays || 1) - 1))
    };
  }
  if (phaseKey === "load") {
    if (!blast.loadStart || !blast.loadDays) return null;
    return {
      start: blast.loadStart,
      end: isoDate(addDays(new Date(blast.loadStart), (blast.loadDays || 1) - 1))
    };
  }
  if (phaseKey === "blast") {
    if (!blast.blastDate) return null;
    return { start: blast.blastDate, end: blast.blastDate };
  }
  return null;
}

// Step 4) Build the list of day cells for the displayed month
function buildMonthGrid(year, month) {
  var firstOfMonth = new Date(year, month, 1);
  var lastOfMonth = new Date(year, month + 1, 0);

  // Step 4a) Monday = 0 start. JS getDay() returns 0=Sun, so remap
  var startDow = (firstOfMonth.getDay() + 6) % 7; // 0=Mon
  var gridStart = addDays(firstOfMonth, -startDow);

  // Step 4b) Build 6 weeks (42 cells) to cover any month layout
  var cells = [];
  for (var i = 0; i < 42; i++) {
    var d = addDays(gridStart, i);
    var iso = isoDate(d);
    cells.push({
      date: d,
      iso: iso,
      dayNum: d.getDate(),
      outside: d.getMonth() !== month,
      today: isToday(d)
    });
  }

  // Step 4c) Trim trailing week if entirely outside the month
  var lastWeekStart = 35;
  var allOutside = true;
  for (var j = lastWeekStart; j < 42; j++) {
    if (!cells[j].outside) { allOutside = false; break; }
  }
  if (allOutside) cells = cells.slice(0, 35);

  return cells;
}

// Step 5) Collect bars for each day cell
function collectBars(cells) {
  var dayBars = {}; // iso -> [ { blastIdx, blastName, phase, isStart, isEnd } ]
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

      // Step 5a) Walk every cell and check if it falls in this range
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

// Step 6) Assign consistent vertical slots to bars so multi-day bars stay on the same row
function assignBarSlots(cells, dayBars) {
  // Step 6a) Build a unique key per bar: blastIdx + phase
  // Track which slot each bar occupies across days
  var slotMap = {}; // "blastIdx|phase" -> slot number
  var daySlotsUsed = {}; // iso -> Set of used slot numbers

  for (var ci = 0; ci < cells.length; ci++) {
    var iso = cells[ci].iso;
    var bars = dayBars[iso];
    if (!daySlotsUsed[iso]) daySlotsUsed[iso] = {};

    for (var bi = 0; bi < bars.length; bi++) {
      var bar = bars[bi];
      var barKey = bar.blastIdx + "|" + bar.phase;

      if (slotMap[barKey] !== undefined) {
        // Step 6b) Reuse existing slot
        bar.slot = slotMap[barKey];
      } else {
        // Step 6c) Find the first available slot for this day
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

  // Step 7a) Update month label
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var label = document.getElementById("calMonthLabel");
  if (label) label.textContent = monthNames[calMonth] + " " + calYear;

  // Step 7b) Build day cells
  var cells = buildMonthGrid(calYear, calMonth);
  var dayBars = collectBars(cells);
  assignBarSlots(cells, dayBars);

  // Step 7c) Header row
  var html = "";
  var dayHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (var hi = 0; hi < 7; hi++) {
    html += "<div class=\"blast-cal-header\">" + dayHeaders[hi] + "</div>";
  }

  // Step 7d) Day cells
  for (var ci = 0; ci < cells.length; ci++) {
    var cell = cells[ci];
    var cls = "blast-cal-cell";
    if (cell.outside) cls += " outside";
    if (cell.today) cls += " today";

    html += "<div class=\"" + cls + "\" data-iso=\"" + cell.iso + "\">";
    html += "<div class=\"blast-cal-day-num\">" + cell.dayNum + "</div>";
    html += "<div class=\"blast-cal-bars\">";

    // Step 7e) Render bars sorted by slot
    var bars = dayBars[cell.iso] || [];
    bars.sort(function(a, b) { return a.slot - b.slot; });

    // Step 7f) Fill empty slots with spacers for consistent vertical alignment
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

  // Step 7g) Attach double-click handlers on bars
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

  var btnPrev = document.getElementById("calPrev");
  var btnNext = document.getElementById("calNext");
  var btnToday = document.getElementById("calToday");

  if (btnPrev) btnPrev.addEventListener("click", function() {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderBlastCalendar();
  });

  if (btnNext) btnNext.addEventListener("click", function() {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderBlastCalendar();
  });

  if (btnToday) btnToday.addEventListener("click", function() {
    var now = new Date();
    calYear = now.getFullYear();
    calMonth = now.getMonth();
    renderBlastCalendar();
  });

  // Step 8a) Section toggle checkboxes
  for (var si = 0; si < SECTIONS.length; si++) {
    var cb = document.getElementById(SECTIONS[si].toggleId);
    if (cb) cb.addEventListener("change", function() { renderBlastCalendar(); });
  }
}

export { renderBlastCalendar, initBlastCalendar };
