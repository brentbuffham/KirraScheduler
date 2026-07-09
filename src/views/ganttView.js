// ============================================================
//  GANTT VIEW
//  Renders the Gantt schedule chart with drill/load/blast bars
//  Supports drill blocks (split blasts) and inline edit icons
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills, mpus, isDrillInMaintenance } from "../state/equipmentState.js";
import { calcDrillCrewRequired, calcLoadCrewRequired, ensureCrewAllocated, buildCrewBadges } from "../state/crewRoles.js";
import { getBlastDeps, recalcDependencies } from "../engine/dependencyEngine.js";
import { hasBlocks } from "../engine/blockHelpers.js";
import { formatNum, addDays, isoDate, getWeekNumber, isWeekend, isToday } from "../utils/dateUtils.js";
import { showBarTooltip, hideTooltip } from "../ui/tooltip.js";
import { showCtxMenu, showBarCtxMenu } from "../ui/contextMenu.js";
import { initGanttDrag } from "../ui/ganttDrag.js";
import { initGanttResize } from "../ui/ganttResize.js";
import { applySelectionHighlight } from "../ui/ganttSelect.js";
import { initGanttReorder } from "../ui/ganttReorder.js";
import { renderConnectors } from "../ui/ganttConnectors.js";
import { getColumns, getColumnCount, cellStyle, setWidth, applyColumnLayout } from "../ui/ganttColumns.js";
import { editBlast } from "../dialogs/blastModal.js";
import { getDelayType } from "../state/delayTypes.js";
import { getBlastStatus } from "../state/blastStatus.js";
import { renderDelayPalette } from "../ui/delayPalette.js";
import { buildConflictCellSet } from "../engine/fleetConflicts.js";
import { recalcBlastAuto } from "../engine/autoCalc.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { sendAllToPatternPrep } from "../utils/prep.js";
import { sendAllToExcavation } from "../utils/excav.js";
import { pushUndo } from "../state/undoManager.js";
import { getDayWidth, isHoursMode } from "../ui/ganttScale.js";

// Step 0-pre) Plan week banding helpers
function getPlanWeekIdx(date) {
  var startDay = APP.planWeekStartDay || 0;
  var cycleLen = APP.planCycleWeeks || 1;
  var planDate = new Date(APP.planStart);
  // Step 0-pre-a) Align to previous planWeekStartDay
  while (planDate.getDay() !== startDay) {
    planDate.setDate(planDate.getDate() - 1);
  }
  var diffMs = date.getTime() - planDate.getTime();
  var diffDays = Math.floor(diffMs / 86400000);
  var weekIdx = Math.floor(diffDays / 7);
  return ((weekIdx % cycleLen) + cycleLen) % cycleLen;
}

function getPlanBandStyle(date) {
  var idx = getPlanWeekIdx(date);
  var colors = APP.planWeekColors || [];
  // Step 0-pre-b) Custom colour takes priority
  if (colors[idx]) {
    return "background:" + hexToRgba(colors[idx], 0.08) + ";";
  }
  // Step 0-pre-c) Default alternating band
  return idx % 2 === 0 ? "" : "background:var(--plan-band-odd);";
}

function hexToRgba(hex, alpha) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}

// Step 0-pre-d) Lightweight transient toast (reuses the .drop-feedback styles).
function ganttToast(message, success) {
  var existing = document.getElementById("dropFeedback");
  if (existing) existing.remove();
  var toast = document.createElement("div");
  toast.id = "dropFeedback";
  toast.className = "drop-feedback " + (success ? "drop-feedback-ok" : "drop-feedback-warn");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.classList.add("drop-feedback-fade");
    setTimeout(function() { toast.remove(); }, 400);
  }, 2000);
}

// Step 0) Track collapsed sections between re-renders
var _collapsedSections = {};

// Step 0b-status) Build the colour dot + status pill shown beside a blast name
function buildStatusBadge(blast) {
  var st = getBlastStatus(blast.status);
  return "<span class=\"status-dot\" style=\"background:" + st.color + "\" title=\"" + st.label + "\"></span>" +
    "<span class=\"status-badge " + st.badgeClass + "\">" + st.label + "</span>";
}

// Step 0c) Build draggable drill-ID chips for the EQUIP column.
function buildDrillChips(drillIds, blastIdx, blockIdx) {
  if (!drillIds || drillIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < drillIds.length; i++) {
    var did = drillIds[i];
    html += "<span class=\"gantt-drill-chip gantt-equip-chip\" draggable=\"true\" " +
      "data-drag-type=\"gantt-drill\" data-drag-id=\"" + did + "\" " +
      "data-blast-idx=\"" + blastIdx + "\" data-block-idx=\"" + (blockIdx !== null && blockIdx !== undefined ? blockIdx : "") + "\" " +
      "title=\"Drag to another drill row or back to palette to unassign " + did + "\">" + did + "</span>";
  }
  return html;
}

// Step 0d) Build draggable MPU chips for the EQUIP column.
function buildMPUChips(mpuIds, blastIdx) {
  if (!mpuIds || mpuIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < mpuIds.length; i++) {
    var mid = mpuIds[i];
    html += "<span class=\"gantt-mpu-chip gantt-equip-chip\" draggable=\"true\" " +
      "data-drag-type=\"gantt-mpu\" data-drag-id=\"" + mid + "\" " +
      "data-blast-idx=\"" + blastIdx + "\" " +
      "title=\"Drag to another loading row or back to palette to unassign " + mid + "\">" + mid + "</span>";
  }
  return html;
}

// Step 0d-ii) Build draggable ancillary chips for Pattern Prep rows.
function buildAncillaryChips(ancIds, blastIdx) {
  if (!ancIds || ancIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < ancIds.length; i++) {
    var aid = ancIds[i];
    html += "<span class=\"gantt-ancillary-chip gantt-equip-chip\" draggable=\"true\" " +
      "data-drag-type=\"gantt-ancillary\" data-drag-id=\"" + aid + "\" " +
      "data-blast-idx=\"" + blastIdx + "\" " +
      "title=\"Drag to another prep row or back to palette to unassign " + aid + "\">" + aid + "</span>";
  }
  return html;
}

// Step 0d-iii) Build draggable excavation chips for Excavation rows.
function buildExcavatorChips(excavIds, blastIdx) {
  if (!excavIds || excavIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < excavIds.length; i++) {
    var eid = excavIds[i];
    html += "<span class=\"gantt-excav-chip gantt-equip-chip\" draggable=\"true\" " +
      "data-drag-type=\"gantt-excav\" data-drag-id=\"" + eid + "\" " +
      "data-blast-idx=\"" + blastIdx + "\" " +
      "title=\"Drag to another excavation row or back to palette to unassign " + eid + "\">" + eid + "</span>";
  }
  return html;
}

// Step 0b) Small pencil SVG for inline edit icon
var EDIT_ICON = "<span class=\"gantt-edit-btn\" title=\"Edit\">" +
  "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">" +
  "<path d=\"M11.5 1.5l3 3L5 14H2v-3z\"/><path d=\"M10 3l3 3\"/>" +
  "</svg></span>";

// Step 0b-iii) Grip handle for drag-to-reorder (6-dot grid)
var REORDER_GRIP = "<span class=\"gantt-reorder-grip\" title=\"Drag to reorder\">" +
  "<svg viewBox=\"0 0 8 14\" width=\"8\" height=\"14\" fill=\"currentColor\" opacity=\"0.35\">" +
  "<circle cx=\"2\" cy=\"2\" r=\"1.2\"/><circle cx=\"6\" cy=\"2\" r=\"1.2\"/>" +
  "<circle cx=\"2\" cy=\"7\" r=\"1.2\"/><circle cx=\"6\" cy=\"7\" r=\"1.2\"/>" +
  "<circle cx=\"2\" cy=\"12\" r=\"1.2\"/><circle cx=\"6\" cy=\"12\" r=\"1.2\"/>" +
  "</svg></span>";

// Step 0b-ii) Auto/Manual toggle switch builder
//  Returns a small inline toggle that shows "A" (auto) or "M" (manual)
function buildModeToggle(blastIdx, isManual) {
  var checkedAttr = isManual ? " checked" : "";
  var label = isManual ? "M" : "A";
  var titleText = isManual ? "Manual mode — drag handles to adjust. Click to switch to Auto." : "Auto mode — rates calculated from equipment. Click to switch to Manual.";
  return "<label class=\"gantt-mode-toggle\" title=\"" + titleText + "\">" +
    "<input type=\"checkbox\" class=\"gantt-mode-cb\" data-blast-idx=\"" + blastIdx + "\"" + checkedAttr + ">" +
    "<span class=\"gantt-mode-slider\"><span class=\"gantt-mode-label\">" + label + "</span></span>" +
    "</label>";
}

// Step 0e) Build one frozen (sticky) row cell for a given column.
//   colIdx = position in the column list (drives the left offset + width),
//   key = column key (drives data-col-key used by the resize + layout logic),
//   ctxAttrs = the shared data-ctx-* attributes so context-menu / edit / reorder
//   handlers can resolve the blast index from ANY frozen cell in the row.
function stickyTd(colIdx, key, inner, ctxAttrs, extraCls) {
  return "<td class=\"gantt-sticky gantt-col-" + key + (extraCls ? " " + extraCls : "") + "\" " +
    "data-col-key=\"" + key + "\" style=\"" + cellStyle(colIdx) + "\"" + (ctxAttrs || "") + ">" +
    (inner || "") + "</td>";
}

// Step 1) Main Gantt rendering function
function renderGantt() {
  // Step 1a) Read settings from UI
  APP.planStart = new Date(document.getElementById("planStartDate").value);
  APP.ganttWeeks = parseInt(document.getElementById("ganttWeeks").value);
  APP.rigHours = parseFloat(document.getElementById("rigHours").value);
  APP.availability = parseFloat(document.getElementById("rigAvail").value);
  APP.utilisation = parseFloat(document.getElementById("rigUtil").value);
  var pwStartEl = document.getElementById("planWeekStartDay");
  if (pwStartEl) APP.planWeekStartDay = parseInt(pwStartEl.value);
  var pwCycleEl = document.getElementById("planCycleWeeks");
  if (pwCycleEl) APP.planCycleWeeks = parseInt(pwCycleEl.value) || 1;

  var totalDays = APP.ganttWeeks * 7;
  var dates = [];
  var visStart = addDays(APP.planStart, -5);
  for (var i = 0; i < totalDays + 5; i++) {
    dates.push(addDays(visStart, i));
  }

  // Step 1a-ii) Horizontal granularity — in "hours" mode each day becomes 24
  //  hour columns. Build a flat "slots" array the body + hour header iterate.
  //  In day mode a slot is a whole day (hour = null); in hour mode a slot is
  //  one hour. slot.iso is always the DAY string so existing day-range tests
  //  (drillStart..end, loadStart..end, etc.) keep working unchanged.
  var hoursMode = isHoursMode();
  var slotsPerDay = hoursMode ? 24 : 1;
  var slots = [];
  for (var si = 0; si < dates.length; si++) {
    var dBase = dates[si];
    var dIso = isoDate(dBase);
    if (hoursMode) {
      for (var hh = 0; hh < 24; hh++) {
        var dHour = new Date(dBase);
        dHour.setHours(hh, 0, 0, 0);
        slots.push({ date: dHour, iso: dIso, hour: hh });
      }
    } else {
      slots.push({ date: dBase, iso: dIso, hour: null });
    }
  }

  // Step 1b) Compute stats
  var totalVolume = APP.blasts.reduce(function(s, b) { return s + (b.volume || 0); }, 0);
  var totalExp = APP.blasts.reduce(function(s, b) { return s + (b.expMass || 0); }, 0);
  var totalDrillM = APP.blasts.reduce(function(s, b) { return s + getTotalDrillMeters(b); }, 0);
  var activeCount = APP.blasts.filter(function(b) { return b.status === "drilling" || b.status === "loading"; }).length;
  var plannedCount = APP.blasts.filter(function(b) { return b.status === "planned"; }).length;
  var firedCount = APP.blasts.filter(function(b) { return b.status === "fired"; }).length;
  var effectiveHours = APP.rigHours * APP.availability * APP.utilisation;

  // Step 1c) Render stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-blue\">";
  statsHtml += "  <div class=\"stat-label\">Total Blasts</div>";
  statsHtml += "  <div class=\"stat-value\">" + APP.blasts.length + "</div>";
  statsHtml += "  <div class=\"stat-sub\">" + plannedCount + " planned &middot; " + activeCount + " active &middot; " + firedCount + " fired</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-amber\">";
  statsHtml += "  <div class=\"stat-label\">Total Volume</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalVolume) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-red\">";
  statsHtml += "  <div class=\"stat-label\">Total Explosive</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalExp) + "<span class=\"stat-unit\">kg</span></div>";
  statsHtml += "  <div class=\"stat-sub\">Avg PF: " + formatNum(totalExp / totalVolume, 2) + " kg/bcm</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-cyan\">";
  statsHtml += "  <div class=\"stat-label\">Total Drill Meters</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalDrillM) + "<span class=\"stat-unit\">m</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-green\">";
  statsHtml += "  <div class=\"stat-label\">Effective Rig Hours/Day</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(effectiveHours, 1) + "<span class=\"stat-unit\">hrs</span></div>";
  statsHtml += "  <div class=\"stat-sub\">" + APP.rigHours + "h &times; " + APP.availability + " &times; " + APP.utilisation + "</div>";
  statsHtml += "</div>";
  document.getElementById("ganttStats").innerHTML = statsHtml;

  // Step 1d) Build Gantt table header
  var html = "<thead>";

  // Month row — build one frozen header cell per column (grip | edit | name | equip | qty),
  //   each with a right-edge resize grabber so the frozen columns are user-resizable.
  html += "<tr class=\"header-row-month\">";
  var cols = getColumns();
  for (var ci0 = 0; ci0 < cols.length; ci0++) {
    var col = cols[ci0];
    var alignStyle = (col.key === "name") ? "text-align:left;" : "";
    html += "<th class=\"gantt-sticky gantt-col-" + col.key + "\" data-col-key=\"" + col.key + "\" rowspan=\"3\" style=\"" + alignStyle + cellStyle(ci0) + "\">" +
      col.label +
      "<span class=\"gantt-col-resize\" data-col-key=\"" + col.key + "\" title=\"Drag to resize\"></span>" +
      "</th>";
  }
  var dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Month row spans — each month covers (days-in-month * slotsPerDay) columns,
  //  so the span stays correct whether columns are days or hours.
  var prevMonth = "";
  for (var mi = 0; mi < dates.length; mi++) {
    var d = dates[mi];
    var m = d.toLocaleDateString("en-AU", { month: "long" });
    if (m !== prevMonth) {
      var span = 0;
      for (var j = mi; j < dates.length; j++) {
        if (dates[j].toLocaleDateString("en-AU", { month: "long" }) === m) span++;
        else break;
      }
      html += "<th colspan=\"" + (span * slotsPerDay) + "\" class=\"gantt-header-month\">" + m + "</th>";
      prevMonth = m;
    }
  }
  html += "</tr>";

  if (!hoursMode) {
    // ---- DAY / WEEKS mode: month / week / date header tiers ----
    // Week row
    html += "<tr class=\"header-row-week\">";
    var prevWeek = -1;
    for (var wi = 0; wi < dates.length; wi++) {
      var w = getWeekNumber(dates[wi]);
      if (w !== prevWeek) {
        var wSpan = 0;
        for (var wj = wi; wj < dates.length; wj++) {
          if (getWeekNumber(dates[wj]) === w) wSpan++;
          else break;
        }
        html += "<th colspan=\"" + wSpan + "\" class=\"gantt-header-week\">Wk " + w + "</th>";
        prevWeek = w;
      }
    }
    html += "</tr>";

    // Date row
    html += "<tr class=\"header-row-date\">";
    for (var di = 0; di < dates.length; di++) {
      var dd = dates[di];
      var cls = isToday(dd) ? "today" : (isWeekend(dd) ? "weekend" : "");
      // Step 1d-iii) Plan-week boundary tick on the start day
      var pwBorder = (dd.getDay() === (APP.planWeekStartDay || 0)) ? "border-left:2px solid var(--accent-cyan);" : "";
      var pwBandBg = getPlanBandStyle(dd);
      html += "<th class=\"gantt-header-date " + cls + "\" style=\"" + pwBorder + pwBandBg + "\">" + dd.getDate() + "<br><span style=\"font-size:9px;opacity:0.5;\">" + dayNames[dd.getDay()] + "</span></th>";
    }
  } else {
    // ---- HOURS mode: month / day / hour header tiers (week row dropped) ----
    //  Row 2 (reuses .header-row-week for sticky styling): one cell per day,
    //  spanning its 24 hour columns, showing weekday + date.
    html += "<tr class=\"header-row-week\">";
    for (var di2 = 0; di2 < dates.length; di2++) {
      var dd2 = dates[di2];
      var cls2 = isToday(dd2) ? "today" : (isWeekend(dd2) ? "weekend" : "");
      var pwBorder2 = (dd2.getDay() === (APP.planWeekStartDay || 0)) ? "border-left:2px solid var(--accent-cyan);" : "";
      var pwBandBg2 = getPlanBandStyle(dd2);
      html += "<th colspan=\"24\" class=\"gantt-header-week gantt-hour-day " + cls2 + "\" style=\"" + pwBorder2 + pwBandBg2 + "\">" +
        dayNames[dd2.getDay()] + " " + dd2.getDate() + "/" + (dd2.getMonth() + 1) + "</th>";
    }
    html += "</tr>";

    //  Row 3 (reuses .header-row-date): one cell per hour. Label the 0/6/12/18
    //  ticks and leave the rest blank so it stays readable when zoomed tight.
    html += "<tr class=\"header-row-date\">";
    for (var di3 = 0; di3 < dates.length; di3++) {
      var dd3 = dates[di3];
      var pwBandBg3 = getPlanBandStyle(dd3);
      var pwStartDay3 = (dd3.getDay() === (APP.planWeekStartDay || 0));
      for (var hr = 0; hr < 24; hr++) {
        var tickCls = (hr === 0) ? "hour-day-start" : ((hr % 6 === 0) ? "hour-tick" : "");
        if (hr === 0 && pwStartDay3) tickCls += " hour-planweek-start";
        var hrLabel = (hr % 6 === 0) ? (hr < 10 ? "0" + hr : "" + hr) : "";
        html += "<th class=\"gantt-header-date gantt-hour-cell " + tickCls + "\" style=\"" + pwBandBg3 + "\">" + hrLabel + "</th>";
      }
    }
  }
  html += "</tr></thead><tbody>";

  // Step 1d-post) Build fleet conflict lookup — "blastName|date" -> [drillIds]
  var _conflictCells = buildConflictCellSet();

  // ============================================================
  //  Step 1e) Helper: render bar cells for a date range
  // ============================================================
  function renderBarCells(range, blast, idx, sectionName, deps, comp, blockDrills, startTime, block) {
    var cellsHtml = "";

    // Step 1e-pre) Pre-compute delay positions for this blast/section
    var secKey = sectionName.toLowerCase();
    var blastDelays = (blast.delays || []).filter(function(d) { return d.section === secKey; });

    // Step 1e-0) Hours-mode gate: the start hour of the FIRST active day.
    //  Drilling has an explicit start time; other phases begin at hour 0.
    var barStartHour = 0;
    if (hoursMode && sectionName === "DRILLING") {
      var _st = startTime || blast.drillStartTime;
      if (_st) barStartHour = parseInt(_st.split(":")[0]) || 0;
    }
    // Step 1e-0b) Is the bar drawn at slot index k? (day-range test + first-day
    //  start-hour gate in hours mode). Used to find the first/last segment cell.
    function barActiveAt(k) {
      if (k < 0 || k >= slots.length) return false;
      var s = slots[k];
      if (!(range.start && range.end && s.iso >= range.start && s.iso <= range.end)) return false;
      if (hoursMode && s.iso === range.start && s.hour < barStartHour) return false;
      return true;
    }

    for (var ci = 0; ci < slots.length; ci++) {
      var slot = slots[ci];
      var cd = slot.date;
      var ds = slot.iso;
      var slotHour = slot.hour;                     // null in day mode
      var dayFirst = !hoursMode || slotHour === 0;  // first hour cell of a day
      var barClass = "";
      var barExtra = "";
      var isFirstBar = false;
      var isLastBar = false;

      // Step) segFirst/segLast = first/last VISIBLE segment cell (for continuous
      //  bar rounding). isFirstBar/isLastBar = the bar's TRUE start/end (for
      //  resize handles + start-time label) so a bar clipped by the window edge
      //  does not sprout handles at the edge.
      var segFirst = false;
      var segLast = false;
      if (barActiveAt(ci)) {
        // BLASTING is always a single milestone diamond (set below), never a
        //  filled bar — leave its base class empty so it is not painted per cell.
        barClass = sectionName === "PATTERN PREP" ? "prep" : sectionName === "DRILLING" ? "drill" : sectionName === "LOADING" ? "load" : sectionName === "EXCAVATION" ? "excav" : "";
        if (barClass && blast.status === "planned" && sectionName !== "BLASTING") barClass += " planned";

        segFirst = !barActiveAt(ci - 1);
        segLast = !barActiveAt(ci + 1);
        isFirstBar = (ds === range.start) && (!hoursMode || slotHour === barStartHour);
        isLastBar = (ds === range.end) && (!hoursMode || slotHour === 23);

        // Step) Check for drill-load overlap zone on drill bars
        if (sectionName === "DRILLING" && comp.hasOverlap && comp.loadOverlapStart) {
          if (ds >= comp.loadOverlapStart && ds <= comp.drillOverlapEnd) {
            barClass = "drill-load-overlap";
            if (blast.status === "planned") barClass += " planned";
          }
        }

        // Step) Add dependency threshold markers on drill bars (only for non-block rows).
        //  Day mode only — the markers pin to a day cell's right edge (per-day px).
        if (!hoursMode && sectionName === "DRILLING" && !blockDrills && blast.drillStart && blast.drillDays > 1) {
          var drillStartDate = new Date(blast.drillStart);
          var loadThreshDay = isoDate(addDays(drillStartDate, Math.ceil(blast.drillDays * deps.drillPctForLoad) - 1));
          if (ds === loadThreshDay && deps.drillPctForLoad < 1.0) {
            barExtra += "<div class=\"dep-marker\" style=\"left:calc(100% - 1px);\" data-label=\"" + Math.round(deps.drillPctForLoad * 100) + "%\u2192Load\"></div>";
          }
          if (deps.drillPctForBlast < 1.0) {
            var blastThreshDay = isoDate(addDays(drillStartDate, Math.ceil(blast.drillDays * deps.drillPctForBlast) - 1));
            if (ds === blastThreshDay) {
              barExtra += "<div class=\"dep-marker\" style=\"left:calc(100% - 1px);background:var(--accent-blast);\" data-label=\"" + Math.round(deps.drillPctForBlast * 100) + "%\u2192Blast\"></div>";
            }
          }
        }

        // Step) Add dependency threshold marker on load bars (day mode only)
        if (!hoursMode && sectionName === "LOADING" && blast.loadStart && blast.loadDays > 1) {
          if (deps.loadPctForBlast < 1.0) {
            var loadStartDate2 = new Date(blast.loadStart);
            var blastThreshDay2 = isoDate(addDays(loadStartDate2, Math.ceil(blast.loadDays * deps.loadPctForBlast) - 1));
            if (ds === blastThreshDay2) {
              barExtra += "<div class=\"dep-marker\" style=\"left:calc(100% - 1px);background:var(--accent-blast);\" data-label=\"" + Math.round(deps.loadPctForBlast * 100) + "%\u2192Blast\"></div>";
            }
          }
        }

        // Step) Add resize handles on first and last cells (all modes — resize auto-switches to Manual)
        if (isFirstBar && sectionName !== "BLASTING") {
          barExtra += "<div class=\"gantt-resize-handle handle-left\"></div>";
        }
        if (isLastBar && sectionName !== "BLASTING") {
          barExtra += "<div class=\"gantt-resize-handle handle-right\"></div>";
        }
      }

      // Step) Blast milestone — one diamond per day. In hours mode pin it to the
      //  midday (12:00) slot so it renders once, centred in the day.
      if (sectionName === "BLASTING" && blast.blastDate && ds === blast.blastDate && (!hoursMode || slotHour === 12)) {
        barClass = "milestone";
      }

      // Step) Build cell background — priority: conflict > maintenance > plan band
      //       Weekends are transparent so plan banding shows through (header text marks weekends)
      var cellBg = getPlanBandStyle(cd);

      // Step) Check if any assigned drill is in maintenance on this date
      var checkDrills = blockDrills || blast.assignedDrills;
      if (sectionName === "DRILLING" && checkDrills && checkDrills.length > 0) {
        var anyInMaint = checkDrills.some(function(drillId) {
          var drill = drills.find(function(dd2) { return dd2.id === drillId; });
          return drill && isDrillInMaintenance(drill, ds);
        });
        if (anyInMaint && ds >= (range.start || "") && ds <= (range.end || "")) {
          cellBg = "background:rgba(239,68,68,0.12);";
        }
      }

      // Step) Check for fleet conflict on this date (drill used on 2+ blasts)
      if (sectionName === "DRILLING" && barClass) {
        var conflictKey = blast.name + "|" + ds;
        if (_conflictCells[conflictKey]) {
          cellBg = "background:repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(239,68,68,0.25) 3px,rgba(239,68,68,0.25) 6px);";
        }
      }

      // Step) In hours mode, mark day-start and 6-hour tick cells so CSS can
      //  draw vertical gridlines (day boundaries + 06/12/18 ticks).
      var cellTick = "";
      if (hoursMode) {
        if (slotHour === 0) cellTick = " hour-cell-daystart";
        else if (slotHour % 6 === 0) cellTick = " hour-cell-tick";
      }
      cellsHtml += "<td class=\"gantt-cell" + cellTick + "\" style=\"" + cellBg + "\">";

      // Step) Render main bar
      if (barClass) {
        var ttData = "data-tt-blast=\"" + blast.name + "\" data-tt-section=\"" + sectionName + "\" data-tt-date=\"" + ds + "\"";
        var barStyle = "";

        // Step) Drill start-time label on the FIRST drawn segment of the bar.
        var effectiveStartTime = startTime || blast.drillStartTime;
        if (sectionName === "DRILLING" && isFirstBar && effectiveStartTime) {
          barExtra += "<span class=\"start-time-label\">" + effectiveStartTime + "</span>";
          if (!hoursMode) {
            // Day mode: nudge the bar's left edge within the first day cell by the
            //  start hour so the sub-day start reads visually (scaled to zoom).
            var startHour = parseInt(effectiveStartTime.split(":")[0]) || 0;
            var usableW = Math.max(getDayWidth() - 2, 4);
            var offsetPx = Math.round((startHour / 24) * usableW);
            barStyle = " style=\"left:" + (1 + offsetPx) + "px;\"";
          }
        }

        // Step) Hours mode: draw the bar as a CONTINUOUS segment across hour
        //  cells — square interior edges, rounded only at the first/last cell.
        if (hoursMode && barClass !== "milestone") {
          var lft = segFirst ? 1 : -1;
          var rgt = segLast ? 1 : -1;
          var brL = segFirst ? "3px" : "0";
          var brR = segLast ? "3px" : "0";
          barStyle = " style=\"left:" + lft + "px;right:" + rgt + "px;" +
            "border-top-left-radius:" + brL + ";border-bottom-left-radius:" + brL + ";" +
            "border-top-right-radius:" + brR + ";border-bottom-right-radius:" + brR + ";\"";
        }

        // Step) Overlay a conflict indicator if this drill is double-booked
        //  (once per day in hours mode).
        var conflictOverlay = "";
        if (sectionName === "DRILLING" && dayFirst) {
          var cKey = blast.name + "|" + ds;
          if (_conflictCells[cKey]) {
            conflictOverlay = "<div class=\"fleet-conflict-indicator\" title=\"Drill conflict: " + _conflictCells[cKey].join(", ") + " double-booked\"></div>";
          }
        }

        // Step) Progress fill overlay — highlight cells within the completed portion
        var progressFill = "";
        var progress = 0;
        var totalBarDays = 0;
        if (sectionName === "DRILLING") {
          progress = block ? (block.drillProgress || 0) : (blast.drillProgress || 0);
          totalBarDays = block ? (block.drillDays || 1) : (blast.drillDays || 1);
        } else if (sectionName === "LOADING") {
          progress = blast.loadProgress || 0;
          totalBarDays = blast.loadDays || 1;
        }
        if (progress > 0 && range.start) {
          var filledDays = Math.ceil(totalBarDays * progress);
          var barStartDate = new Date(range.start);
          var filledEndDate = isoDate(addDays(barStartDate, filledDays - 1));
          if (ds <= filledEndDate) {
            progressFill = "<div class=\"gantt-progress-fill\"></div>";
          }
        }

        cellsHtml += "<div class=\"gantt-bar " + barClass + "\"" + barStyle + " " + ttData + ">" + progressFill + barExtra + conflictOverlay + "</div>";
      }

      // Step) Render delay blocks that overlap this date
      for (var ddi = 0; ddi < blastDelays.length; ddi++) {
        var delay = blastDelays[ddi];
        var delayEnd = isoDate(addDays(new Date(delay.start), (delay.days || 1) - 1));
        if (ds >= delay.start && ds <= delayEnd) {
          var dt = getDelayType(delay.type);
          var delayColor = dt ? dt.color : "#888";
          var delayTextColor = dt ? dt.textColor : "#fff";
          // Step) First/last drawn cell of the delay. In hours mode the delay
          //  starts at hour 0 of its first day and ends at hour 23 of its last.
          var isDelayFirst = (ds === delay.start) && dayFirst;
          var isDelayLast = (ds === delayEnd) && (!hoursMode || slotHour === 23);
          var globalDelayIdx = (blast.delays || []).indexOf(delay);

          var delayHandles = "";
          if (isDelayFirst) delayHandles += "<div class=\"gantt-resize-handle handle-left\"></div>";
          if (isDelayLast) delayHandles += "<div class=\"gantt-resize-handle handle-right\"></div>";

          var delayLabel = isDelayFirst ? ("<span class=\"delay-bar-label\">" + delay.type + "</span>") : "";

          // Step) Continuous delay segment across hour cells (square interior edges)
          var delayEdge = "";
          if (hoursMode) {
            delayEdge = "left:" + (isDelayFirst ? 1 : -1) + "px;right:" + (isDelayLast ? 1 : -1) + "px;";
          }

          cellsHtml += "<div class=\"gantt-bar delay-bar\" data-delay-idx=\"" + globalDelayIdx + "\" " +
            "style=\"background:" + delayColor + ";color:" + delayTextColor + ";top:16px;bottom:-3px;z-index:3;" + delayEdge + "\" " +
            "data-tt-blast=\"" + blast.name + "\" data-tt-section=\"" + sectionName + "\" data-tt-date=\"" + ds + "\">" +
            delayLabel + delayHandles + "</div>";
        }
      }

      cellsHtml += "</td>";
    }
    return cellsHtml;
  }

  // ============================================================
  //  Step 1f) Render sections (Drilling, Loading, Blasting) — collapsible
  // ============================================================
  function renderSection(sectionName, color, getDateRange) {
    var secKey = sectionName.toLowerCase();
    var collapsed = _collapsedSections[secKey] ? " collapsed" : "";
    html += "<tr class=\"gantt-section-header" + collapsed + "\" data-section-toggle=\"" + secKey + "\">";
    html += "<td colspan=\"" + (dates.length + getColumnCount()) + "\">";
    html += "<span class=\"collapse-arrow\">\u25BC</span>";
    html += "<span class=\"section-icon\" style=\"background:" + color + "\"></span>" + sectionName;
    // Step 1f-0) DRILLING header gets a bulk "Send all patterns to Pattern Prep"
    //  action. It seeds a 1-day prep window on every blast that has none.
    if (sectionName === "DRILLING") {
      html += "<button type=\"button\" class=\"btn btn-sm gantt-section-action\" id=\"btnSendAllPrep\" title=\"Give every blast a 1-day Pattern Prep window (blasts that already have prep are left as-is). Drag the prep bars to adjust.\">\u2192 Send all to Prep</button>";
    }
    // Step 1f-0b) EXCAVATION header gets a bulk "Send all to Excavation" action.
    //  It seeds an excavation cycle (day after firing) on every blast that has none.
    if (sectionName === "EXCAVATION") {
      html += "<button type=\"button\" class=\"btn btn-sm gantt-section-action\" id=\"btnSendAllExcav\" title=\"Give every blast an excavation cycle starting the day after it fires. Assign dig equipment in the blast to make the duration rate-driven, or drag/resize the bars.\">\u2192 Send all to Excavation</button>";
    }
    html += "</td></tr>";

    APP.blasts.forEach(function(blast, idx) {
      var deps = getBlastDeps(blast);
      var comp = blast._computed || {};

      // Step 1f-i) DRILLING section with block support (skip noDrill blasts)
      if (sectionName === "DRILLING" && blast.noDrill) return;
      if (sectionName === "DRILLING" && hasBlocks(blast)) {
        blast.drillBlocks.forEach(function(block, blockIdx) {
          if (!block.drillStart) return;
          var blockRange = {
            start: block.drillStart,
            end: isoDate(addDays(new Date(block.drillStart), (block.drillDays || 1) - 1))
          };

          // Step) Build split frozen columns for this block
          var blockDrillTag = buildDrillChips(block.assignedDrills || [], idx, blockIdx);
          var blockCrewReq = calcDrillCrewRequired(blast, drills);
          var blockCrewAlloc = ensureCrewAllocated(blast).drilling;
          var blockCrewHtml = buildCrewBadges(blockCrewAlloc, blockCrewReq);
          var blockPctBadge = (block.drillProgress > 0) ? "<span class=\"progress-badge\">" + Math.round(block.drillProgress * 100) + "%</span>" : "";
          var blockValue = formatNum(block.meters || 0) + "m" + blockPctBadge + blockCrewHtml;

          // Step) Shared ctx attributes for every frozen cell in this block row
          var blockCtx = " data-ctx-idx=\"" + idx + "\" data-ctx-section=\"drilling\" data-ctx-block=\"" + blockIdx + "\"";
          var blockNameHtml = "<span class=\"block-label\">[" + block.label + "]</span> " + blast.name + buildStatusBadge(blast);

          // Step) Block row — blocks are not reorderable, so the grip cell stays empty
          var blockFiredCls = (blast.status === "fired") ? " fired-row" : "";
          html += "<tr class=\"gantt-row gantt-block-row" + blockFiredCls + "\" data-blast=\"" + idx + "\" data-section=\"drilling\" data-block=\"" + blockIdx + "\">";
          html += stickyTd(0, "handle", "", blockCtx);
          html += stickyTd(1, "edit", EDIT_ICON + buildModeToggle(idx, blast.mode === "Manual"), blockCtx);
          html += stickyTd(2, "name", blockNameHtml, blockCtx);
          html += stickyTd(3, "equip", blockDrillTag, blockCtx);
          html += stickyTd(4, "value", blockValue, blockCtx);
          html += renderBarCells(blockRange, blast, idx, sectionName, deps, comp, block.assignedDrills, block.drillStartTime, block);
          html += "</tr>";
        });
        return;
      }

      // Step 1f-ii) Standard single-row rendering (no blocks or LOADING/BLASTING)
      var range = getDateRange(blast);
      if (!range) return;

      // Build info column
      var depIcon = "";
      if (blast._depWarning) {
        depIcon = "<span class=\"dep-warning\" title=\"" + blast._depWarning + "\">!</span>";
      } else if (comp.hasOverlap && sectionName === "DRILLING") {
        depIcon = "<span class=\"dep-ok\" title=\"Load starts at " + Math.round(deps.drillPctForLoad * 100) + "% drill\">\u26D3</span>";
      }

      var maintIcon = "";
      if (blast._maintWarnings && blast._maintWarnings.length > 0 && sectionName === "DRILLING") {
        maintIcon = "<span class=\"dep-warning\" title=\"" + blast._maintWarnings.join("; ") + "\">\u26A0</span>";
      }

      // Step 1f-ii-cols) Build the EQUIPMENT and QTY columns separately per section
      var equipHtml = "";
      var valueHtml = "";
      if (sectionName === "PATTERN PREP") {
        // Step 1f-ii-prep) Ancillary equipment + prep-days
        var ancIds = blast.assignedAncillary || [];
        equipHtml = buildAncillaryChips(ancIds, idx);
        valueHtml = blast.prepDays ? (blast.prepDays + "d") : "";
      } else if (sectionName === "DRILLING") {
        equipHtml = buildDrillChips(blast.assignedDrills || [], idx, null);
        // Step) Crew fill badges for drilling
        var drillCrewReq = calcDrillCrewRequired(blast, drills);
        var drillCrewAlloc = ensureCrewAllocated(blast).drilling;
        var drillCrewHtml = buildCrewBadges(drillCrewAlloc, drillCrewReq);
        // Step) Fleet conflict badge
        var conflictBadge = "";
        if (blast.drillStart && blast.drillDays) {
          var hasConflict = false;
          for (var fc = 0; fc < (blast.drillDays || 0); fc++) {
            var fcDate = isoDate(addDays(new Date(blast.drillStart), fc));
            if (_conflictCells[blast.name + "|" + fcDate]) { hasConflict = true; break; }
          }
          if (hasConflict) conflictBadge = "<span class=\"fleet-conflict-badge\" title=\"Drill rig double-booked\">\u26A0 CONFLICT</span>";
        }
        var drillPctBadge = (blast.drillProgress > 0) ? "<span class=\"progress-badge\">" + Math.round(blast.drillProgress * 100) + "%</span>" : "";
        valueHtml = formatNum(getTotalDrillMeters(blast)) + "m" + drillPctBadge + depIcon + maintIcon + drillCrewHtml + conflictBadge;
      } else if (sectionName === "LOADING") {
        // Step 1f-ii-mpu) Build MPU chips from array (backward compat with legacy single assignedMPU)
        var mpuList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
        equipHtml = buildMPUChips(mpuList, idx);
        // Step) Crew fill badges for loading
        var loadCrewReq = calcLoadCrewRequired(blast, mpus);
        var loadCrewAlloc = ensureCrewAllocated(blast).loading;
        var loadCrewHtml = buildCrewBadges(loadCrewAlloc, loadCrewReq);
        var loadPctBadge = (blast.loadProgress > 0) ? "<span class=\"progress-badge\">" + Math.round(blast.loadProgress * 100) + "%</span>" : "";
        valueHtml = formatNum(blast.expMass) + "kg" + loadPctBadge + depIcon + loadCrewHtml;
      } else if (sectionName === "EXCAVATION") {
        // Step 1f-ii-excav) Assigned excavation ancillary + days/volume
        var excavIds = blast.assignedExcavators || [];
        equipHtml = buildExcavatorChips(excavIds, idx);
        valueHtml = (blast.excavDays ? (blast.excavDays + "d ") : "") + formatNum(blast.volume) + " bcm";
      } else {
        valueHtml = formatNum(blast.volume) + " bcm";
      }

      var phaseBadges = "";
      if (blast.noDrill) phaseBadges += "<span class=\"no-drill-badge\" title=\"No Drilling\">ND</span>";
      if (blast.noLoad) phaseBadges += "<span class=\"no-drill-badge\" style=\"background:var(--accent-blast);\" title=\"No Loading\">NL</span>";
      if (blast.noBlast) phaseBadges += "<span class=\"no-drill-badge\" style=\"background:var(--accent-prep);\" title=\"No Blasting\">NB</span>";
      if (blast.noExcav) phaseBadges += "<span class=\"no-drill-badge\" style=\"background:var(--accent-excav);\" title=\"No Excavation\">NE</span>";
      var firedCls = (blast.status === "fired") ? " fired-row" : "";

      // Step 1f-ii-emit) Shared ctx attributes so any frozen cell resolves the blast index
      var rowCtx = " data-ctx-idx=\"" + idx + "\" data-ctx-section=\"" + secKey + "\"";
      var nameHtml = blast.name + buildStatusBadge(blast) + phaseBadges;

      html += "<tr class=\"gantt-row" + firedCls + "\" data-blast=\"" + idx + "\" data-section=\"" + secKey + "\">";
      html += stickyTd(0, "handle", REORDER_GRIP, rowCtx);
      html += stickyTd(1, "edit", EDIT_ICON + buildModeToggle(idx, blast.mode === "Manual"), rowCtx);
      html += stickyTd(2, "name", nameHtml, rowCtx);
      html += stickyTd(3, "equip", equipHtml, rowCtx);
      html += stickyTd(4, "value", valueHtml, rowCtx);
      html += renderBarCells(range, blast, idx, sectionName, deps, comp, null, null);
      html += "</tr>";
    });
  }

  // Step 1g) Render each section — Pattern Prep, Drilling, Loading, Blasting
  renderSection("PATTERN PREP", "var(--accent-prep)", function(b) {
    if (!b.prepStart || !b.prepDays) return null;
    var start = b.prepStart;
    var end = isoDate(addDays(new Date(b.prepStart), Math.max((b.prepDays || 1) - 1, 0)));
    return { start: start, end: end };
  });

  renderSection("DRILLING", "var(--accent-drill)", function(b) {
    if (b.noDrill) return null;
    if (!b.drillStart) return null;
    var start = b.drillStart;
    var end = isoDate(addDays(new Date(b.drillStart), (b.drillDays || 1) - 1));
    return { start: start, end: end };
  });

  renderSection("LOADING", "var(--accent-load)", function(b) {
    if (b.noLoad) return null;
    if (!b.loadStart) return null;
    var start = b.loadStart;
    var days = b.loadDays || Math.ceil((b.expMass || 0) / (b.loadRate || 100000));
    var end = isoDate(addDays(new Date(b.loadStart), Math.max(days - 1, 0)));
    return { start: start, end: end };
  });

  renderSection("BLASTING", "var(--accent-blast)", function(b) {
    if (b.noBlast) return null;
    if (!b.blastDate) return null;
    return { start: b.blastDate, end: b.blastDate };
  });

  // Step 1g-ii) EXCAVATION section — dig-out cycle after the blast fires.
  //  Duration is rate-driven by the assigned ancillary (see dependencyEngine),
  //  stored as excavStart/excavDays. Hidden until the blast has both.
  renderSection("EXCAVATION", "var(--accent-excav)", function(b) {
    if (b.noExcav) return null;
    if (!b.excavStart || !b.excavDays) return null;
    var start = b.excavStart;
    var end = isoDate(addDays(new Date(b.excavStart), Math.max((b.excavDays || 1) - 1, 0)));
    return { start: start, end: end };
  });

  html += "</tbody>";
  document.getElementById("ganttTable").innerHTML = html;

  // Step 1g-post) Measure actual header row heights and set sticky top offsets
  var monthRow = document.querySelector(".header-row-month");
  var weekRow  = document.querySelector(".header-row-week");
  var dateRow  = document.querySelector(".header-row-date");
  if (monthRow && weekRow && dateRow) {
    var monthH = monthRow.getBoundingClientRect().height;
    var weekH  = weekRow.getBoundingClientRect().height;
    weekRow.querySelectorAll("th").forEach(function(th) {
      th.style.top = monthH + "px";
    });
    dateRow.querySelectorAll("th").forEach(function(th) {
      th.style.top = (monthH + weekH) + "px";
    });
  }

  // Step 1h) Attach bar tooltip events
  document.querySelectorAll(".gantt-bar").forEach(function(bar) {
    bar.addEventListener("mouseenter", function(e) { showBarTooltip(e, bar); });
    bar.addEventListener("mouseleave", hideTooltip);
  });

  // Step 1i) Attach context menu to every frozen (sticky) cell in a row
  document.querySelectorAll(".gantt-row td.gantt-sticky[data-ctx-idx]").forEach(function(td) {
    td.addEventListener("contextmenu", function(e) {
      var blockIdx = td.dataset.ctxBlock !== undefined ? parseInt(td.dataset.ctxBlock) : null;
      showCtxMenu(e, parseInt(td.dataset.ctxIdx), td.dataset.ctxSection, blockIdx);
    });
  });

  // Step 1i-c) Attach context menu to Gantt bars themselves
  document.querySelectorAll(".gantt-bar").forEach(function(bar) {
    bar.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      e.stopPropagation();
      var row = bar.closest(".gantt-row");
      if (!row) return;
      var blastIdx = parseInt(row.dataset.blast);
      var section = row.dataset.section;
      var blockIdx = row.dataset.block !== undefined ? parseInt(row.dataset.block) : null;
      var delayIdx = bar.dataset.delayIdx !== undefined ? parseInt(bar.dataset.delayIdx) : null;
      var clickDate = bar.dataset.ttDate || null;

      if (delayIdx !== null) {
        showBarCtxMenu(e, blastIdx, section, blockIdx, delayIdx, clickDate);
      } else {
        showBarCtxMenu(e, blastIdx, section, blockIdx, null, clickDate);
      }
    });
  });

  // Step 1i-b) Attach inline edit icon click handlers
  document.querySelectorAll(".gantt-edit-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var td = btn.closest("td.gantt-sticky");
      if (!td) return;
      var idx = parseInt(td.dataset.ctxIdx);
      var blockIdx = td.dataset.ctxBlock !== undefined ? parseInt(td.dataset.ctxBlock) : null;
      if (blockIdx !== null) {
        // Step) Dispatch custom event for block edit — handled by blockEditModal
        document.dispatchEvent(new CustomEvent("editBlock", { detail: { blastIdx: idx, blockIdx: blockIdx } }));
      } else {
        editBlast(idx);
      }
    });
  });

  // Step 1i-d) Attach Auto/Manual mode toggle handlers
  document.querySelectorAll(".gantt-mode-cb").forEach(function(cb) {
    cb.addEventListener("change", function(e) {
      e.stopPropagation();
      var blastIdx = parseInt(cb.dataset.blastIdx);
      var blast = APP.blasts[blastIdx];
      if (!blast) return;

      if (cb.checked) {
        // Step) Switching to Manual — just set mode
        blast.mode = "Manual";
      } else {
        // Step) Switching to Auto — recalculate remaining durations from rates
        blast.mode = "Auto";
        recalcBlastAuto(blast);
      }
      debouncedSave();
      renderGantt();
    });
  });

  // Step 1j) Re-initialise drag, resize, and reorder handlers after re-render
  initGanttDrag();
  initGanttResize();
  initGanttReorder();

  // Step 1j-b) Attach drag events to inline equipment chips in the EQUIP column
  document.querySelectorAll(".gantt-equip-chip").forEach(function(chip) {
    chip.addEventListener("dragstart", function(e) {
      e.stopPropagation();
      var dragType = chip.dataset.dragType;
      var dragId = chip.dataset.dragId;
      var blastIdx = chip.dataset.blastIdx;
      var blockIdx = chip.dataset.blockIdx;
      var payload = dragType + ":" + dragId + ":" + blastIdx;
      if (blockIdx !== undefined && blockIdx !== "") payload += ":" + blockIdx;
      e.dataTransfer.setData("text/plain", payload);
      e.dataTransfer.effectAllowed = "move";
      chip.classList.add("chip-dragging");
    });
    chip.addEventListener("dragend", function() {
      chip.classList.remove("chip-dragging");
    });
  });

  // Step 1k-0) Bulk "Send all to Prep" button in the DRILLING header.
  //  stopPropagation so the click doesn't also collapse the section.
  var sendPrepBtn = document.getElementById("btnSendAllPrep");
  if (sendPrepBtn) {
    sendPrepBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      pushUndo("send all to prep");
      var n = sendAllToPatternPrep(1);
      debouncedSave();
      renderGantt();
      ganttToast(n > 0 ? (n + " blast(s) sent to Pattern Prep") : "All blasts already have Pattern Prep", n > 0);
    });
  }

  // Step 1k-0b) Bulk "Send all to Excavation" button in the EXCAVATION header.
  var sendExcavBtn = document.getElementById("btnSendAllExcav");
  if (sendExcavBtn) {
    sendExcavBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      pushUndo("send all to excavation");
      var n = sendAllToExcavation();
      recalcDependencies();
      debouncedSave();
      renderGantt();
      ganttToast(n > 0 ? (n + " blast(s) sent to Excavation") : "All blasts already have Excavation", n > 0);
    });
  }

  // Step 1k) Attach section collapse/expand toggle
  document.querySelectorAll(".gantt-section-header[data-section-toggle]").forEach(function(hdr) {
    hdr.addEventListener("click", function() {
      var secKey = hdr.dataset.sectionToggle;
      _collapsedSections[secKey] = !_collapsedSections[secKey];
      hdr.classList.toggle("collapsed");
      var sibling = hdr.nextElementSibling;
      while (sibling && !sibling.classList.contains("gantt-section-header")) {
        if (sibling.classList.contains("gantt-row")) {
          sibling.classList.toggle("section-hidden", _collapsedSections[secKey]);
        }
        sibling = sibling.nextElementSibling;
      }
      requestAnimationFrame(function() { renderConnectors(); });
    });
  });

  // Step 1k-b) Apply persisted collapsed state to rows
  Object.keys(_collapsedSections).forEach(function(secKey) {
    if (!_collapsedSections[secKey]) return;
    var hdr = document.querySelector(".gantt-section-header[data-section-toggle=\"" + secKey + "\"]");
    if (!hdr) return;
    var sibling = hdr.nextElementSibling;
    while (sibling && !sibling.classList.contains("gantt-section-header")) {
      if (sibling.classList.contains("gantt-row")) {
        sibling.classList.add("section-hidden");
      }
      sibling = sibling.nextElementSibling;
    }
  });

  // Step 1l) Horizontal scroll via Shift+Wheel or Alt+Wheel
  var scrollEl = document.getElementById("ganttScroll");
  if (scrollEl && !scrollEl._hScrollBound) {
    scrollEl._hScrollBound = true;
    scrollEl.addEventListener("wheel", function(e) {
      if (e.shiftKey || e.altKey) {
        e.preventDefault();
        scrollEl.scrollLeft += e.deltaY || e.deltaX;
      }
    }, { passive: false });
  }

  // Step 1l-b) Initialise frozen-column resize dragging (bound once)
  initColumnResize();

  // Step 1m) Render dependency connectors (deferred for layout)
  requestAnimationFrame(function() {
    renderConnectors();
  });

  // Step 1n) Re-render equipment palette to reflect any status changes
  renderDelayPalette();

  // Step 1o) Re-apply selection highlight after DOM rebuild
  applySelectionHighlight();
}

// Step 2) Frozen-column resize — drag the grabber on a header cell to resize.
//   Live drag re-applies the layout without a full re-render (cheap); on release
//   the widths are already persisted by setWidth() and connectors are redrawn.
var _colResize = { active: false, key: null, startX: 0, startW: 0 };
var _colResizeBound = false;

function initColumnResize() {
  if (_colResizeBound) return;
  _colResizeBound = true;

  // Step 2a) Start drag on a resize grabber (delegated from the document)
  document.addEventListener("mousedown", function(e) {
    var grabber = e.target.closest(".gantt-col-resize");
    if (!grabber) return;
    e.preventDefault();
    e.stopPropagation();
    var key = grabber.dataset.colKey;
    var cols = getColumns();
    var startW = 0;
    for (var i = 0; i < cols.length; i++) {
      if (cols[i].key === key) { startW = cols[i].width; break; }
    }
    _colResize.active = true;
    _colResize.key = key;
    _colResize.startX = e.clientX;
    _colResize.startW = startW;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  });

  // Step 2b) Live resize — update width + re-apply frozen layout inline
  document.addEventListener("mousemove", function(e) {
    if (!_colResize.active) return;
    e.preventDefault();
    var delta = e.clientX - _colResize.startX;
    setWidth(_colResize.key, _colResize.startW + delta);
    applyColumnLayout();
  });

  // Step 2c) Finish — settle connectors against the final column widths
  document.addEventListener("mouseup", function() {
    if (!_colResize.active) return;
    _colResize.active = false;
    _colResize.key = null;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    requestAnimationFrame(function() { renderConnectors(); });
  });
}

export { renderGantt, getPlanWeekIdx, getPlanBandStyle, hexToRgba };
