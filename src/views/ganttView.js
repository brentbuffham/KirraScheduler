// ============================================================
//  GANTT VIEW
//  Renders the Gantt schedule chart with drill/load/blast bars
//  Supports drill blocks (split blasts) and inline edit icons
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, isDrillInMaintenance } from "../state/equipmentState.js";
import { calcDrillCrewRequired, calcLoadCrewRequired, ensureCrewAllocated, buildCrewBadges } from "../state/crewRoles.js";
import { getBlastDeps } from "../engine/dependencyEngine.js";
import { hasBlocks } from "../engine/blockHelpers.js";
import { formatNum, addDays, isoDate, getWeekNumber, isWeekend, isToday } from "../utils/dateUtils.js";
import { showBarTooltip, hideTooltip } from "../ui/tooltip.js";
import { showCtxMenu, showBarCtxMenu } from "../ui/contextMenu.js";
import { initGanttDrag } from "../ui/ganttDrag.js";
import { initGanttResize } from "../ui/ganttResize.js";
import { renderConnectors } from "../ui/ganttConnectors.js";
import { editBlast } from "../dialogs/blastModal.js";
import { getDelayType } from "../state/delayTypes.js";
import { renderDelayPalette } from "../ui/delayPalette.js";
import { buildConflictCellSet } from "../engine/fleetConflicts.js";

// Step 0) Track collapsed sections between re-renders
var _collapsedSections = {};

// Step 0c) Build draggable drill-ID chips for the info column.
//  Each chip can be dragged back to the palette to unassign.
function buildDrillChips(drillIds, blastIdx, blockIdx) {
  if (!drillIds || drillIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < drillIds.length; i++) {
    var did = drillIds[i];
    var blockPart = (blockIdx !== null && blockIdx !== undefined) ? ":" + blockIdx : "";
    html += "<span class=\"gantt-drill-chip\" draggable=\"true\" " +
      "data-drag-type=\"gantt-drill\" data-drag-id=\"" + did + "\" " +
      "data-blast-idx=\"" + blastIdx + "\" data-block-idx=\"" + (blockIdx !== null && blockIdx !== undefined ? blockIdx : "") + "\" " +
      "title=\"Drag back to palette to unassign " + did + "\">" + did + "</span>";
  }
  return html;
}

// Step 0d) Build a single draggable MPU chip for the info column.
function buildMPUChip(mpuId, blastIdx) {
  if (!mpuId) return "";
  return "<span class=\"gantt-mpu-chip\" draggable=\"true\" " +
    "data-drag-type=\"gantt-mpu\" data-drag-id=\"" + mpuId + "\" " +
    "data-blast-idx=\"" + blastIdx + "\" " +
    "title=\"Drag back to palette to unassign " + mpuId + "\">" + mpuId + "</span> ";
}

// Step 0d-ii) Build draggable MPU chips for an array of MPU IDs (multi-MPU support).
function buildMPUChips(mpuIds, blastIdx) {
  if (!mpuIds || mpuIds.length === 0) return "";
  var html = "";
  for (var i = 0; i < mpuIds.length; i++) {
    html += buildMPUChip(mpuIds[i], blastIdx);
  }
  return html;
}

// Step 0b) Small pencil SVG for inline edit icon
var EDIT_ICON = "<span class=\"gantt-edit-btn\" title=\"Edit\">" +
  "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">" +
  "<path d=\"M11.5 1.5l3 3L5 14H2v-3z\"/><path d=\"M10 3l3 3\"/>" +
  "</svg></span>";

// Step 1) Main Gantt rendering function
function renderGantt() {
  // Step 1a) Read settings from UI
  APP.planStart = new Date(document.getElementById("planStartDate").value);
  APP.ganttWeeks = parseInt(document.getElementById("ganttWeeks").value);
  APP.rigHours = parseFloat(document.getElementById("rigHours").value);
  APP.availability = parseFloat(document.getElementById("rigAvail").value);
  APP.utilisation = parseFloat(document.getElementById("rigUtil").value);

  var totalDays = APP.ganttWeeks * 7;
  var dates = [];
  var visStart = addDays(APP.planStart, -5);
  for (var i = 0; i < totalDays + 5; i++) {
    dates.push(addDays(visStart, i));
  }

  // Step 1b) Compute stats
  var totalVolume = APP.blasts.reduce(function(s, b) { return s + (b.volume || 0); }, 0);
  var totalExp = APP.blasts.reduce(function(s, b) { return s + (b.expMass || 0); }, 0);
  var totalDrillM = APP.blasts.reduce(function(s, b) { return s + (b.d65Meters || 0) + (b.pvMeters || 0); }, 0);
  var activeCount = APP.blasts.filter(function(b) { return b.status === "active"; }).length;
  var plannedCount = APP.blasts.filter(function(b) { return b.status === "planned"; }).length;
  var effectiveHours = APP.rigHours * APP.availability * APP.utilisation;

  // Step 1c) Render stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-blue\">";
  statsHtml += "  <div class=\"stat-label\">Total Blasts</div>";
  statsHtml += "  <div class=\"stat-value\">" + APP.blasts.length + "</div>";
  statsHtml += "  <div class=\"stat-sub\">" + activeCount + " active &middot; " + plannedCount + " planned</div>";
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

  // Month row
  html += "<tr><th class=\"sticky-col\" rowspan=\"3\" style=\"text-align:left;min-width:180px;\">Blast</th>";
  html += "<th class=\"sticky-col-2\" rowspan=\"3\" style=\"min-width:90px;\">Info</th>";
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
      html += "<th colspan=\"" + span + "\" class=\"gantt-header-month\">" + m + "</th>";
      prevMonth = m;
    }
  }
  html += "</tr>";

  // Week row
  html += "<tr>";
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
  html += "<tr>";
  var dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  for (var di = 0; di < dates.length; di++) {
    var dd = dates[di];
    var cls = isToday(dd) ? "today" : (isWeekend(dd) ? "weekend" : "");
    html += "<th class=\"gantt-header-date " + cls + "\">" + dd.getDate() + "<br><span style=\"font-size:9px;opacity:0.5;\">" + dayNames[dd.getDay()] + "</span></th>";
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

    for (var ci = 0; ci < dates.length; ci++) {
      var cd = dates[ci];
      var ds = isoDate(cd);
      var barClass = "";
      var barExtra = "";
      var isFirstBar = false;
      var isLastBar = false;

      if (range.start && range.end && ds >= range.start && ds <= range.end) {
        barClass = sectionName === "PATTERN PREP" ? "prep" : sectionName === "DRILLING" ? "drill" : sectionName === "LOADING" ? "load" : "blast";
        if (blast.status === "planned" && sectionName !== "BLASTING") barClass += " planned";

        // Step) Determine if this is the first or last cell of the bar for resize handles
        isFirstBar = (ds === range.start);
        isLastBar = (ds === range.end);

        // Step) Check for drill-load overlap zone on drill bars
        if (sectionName === "DRILLING" && comp.hasOverlap && comp.loadOverlapStart) {
          if (ds >= comp.loadOverlapStart && ds <= comp.drillOverlapEnd) {
            barClass = "drill-load-overlap";
            if (blast.status === "planned") barClass += " planned";
          }
        }

        // Step) Add dependency threshold markers on drill bars (only for non-block rows)
        if (sectionName === "DRILLING" && !blockDrills && blast.drillStart && blast.drillDays > 1) {
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

        // Step) Add dependency threshold marker on load bars
        if (sectionName === "LOADING" && blast.loadStart && blast.loadDays > 1) {
          if (deps.loadPctForBlast < 1.0) {
            var loadStartDate2 = new Date(blast.loadStart);
            var blastThreshDay2 = isoDate(addDays(loadStartDate2, Math.ceil(blast.loadDays * deps.loadPctForBlast) - 1));
            if (ds === blastThreshDay2) {
              barExtra += "<div class=\"dep-marker\" style=\"left:calc(100% - 1px);background:var(--accent-blast);\" data-label=\"" + Math.round(deps.loadPctForBlast * 100) + "%\u2192Blast\"></div>";
            }
          }
        }

        // Step) Add resize handles on first and last cells
        if (isFirstBar && sectionName !== "BLASTING") {
          barExtra += "<div class=\"gantt-resize-handle handle-left\"></div>";
        }
        if (isLastBar && sectionName !== "BLASTING") {
          barExtra += "<div class=\"gantt-resize-handle handle-right\"></div>";
        }
      }

      if (sectionName === "BLASTING" && blast.blastDate && ds === blast.blastDate) {
        barClass = "milestone";
      }

      var wkend = isWeekend(cd) ? "opacity:0.7;" : "";

      // Step) Check if any assigned drill is in maintenance on this date
      var maintStyle = "";
      var checkDrills = blockDrills || blast.assignedDrills;
      if (sectionName === "DRILLING" && checkDrills && checkDrills.length > 0) {
        var anyInMaint = checkDrills.some(function(drillId) {
          var drill = drills.find(function(dd2) { return dd2.id === drillId; });
          return drill && isDrillInMaintenance(drill, ds);
        });
        if (anyInMaint && ds >= (range.start || "") && ds <= (range.end || "")) {
          maintStyle = "background:rgba(239,68,68,0.12);";
        }
      }

      // Step) Check for fleet conflict on this date (drill used on 2+ blasts)
      var conflictStyle = "";
      if (sectionName === "DRILLING" && barClass) {
        var conflictKey = blast.name + "|" + ds;
        if (_conflictCells[conflictKey]) {
          conflictStyle = "background:repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(239,68,68,0.25) 3px,rgba(239,68,68,0.25) 6px);";
        }
      }

      cellsHtml += "<td class=\"gantt-cell\" style=\"" + wkend + maintStyle + conflictStyle + "\">";

      // Step) Render main bar
      if (barClass) {
        var ttData = "data-tt-blast=\"" + blast.name + "\" data-tt-section=\"" + sectionName + "\" data-tt-date=\"" + ds + "\"";
        var barStyle = "";

        // Step) Show start time on first drill day cell
        var effectiveStartTime = startTime || blast.drillStartTime;
        if (sectionName === "DRILLING" && ds === range.start && effectiveStartTime) {
          var hhmm = effectiveStartTime.split(":");
          var startHour = parseInt(hhmm[0]) || 0;
          var offsetPx = Math.round((startHour / 24) * 28);
          barStyle = " style=\"left:" + (1 + offsetPx) + "px;\"";
          barExtra += "<span class=\"start-time-label\">" + effectiveStartTime + "</span>";
        }

        // Step) Overlay a conflict indicator if this drill is double-booked
        var conflictOverlay = "";
        if (sectionName === "DRILLING") {
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
          var isDelayFirst = (ds === delay.start);
          var isDelayLast = (ds === delayEnd);
          var globalDelayIdx = (blast.delays || []).indexOf(delay);

          var delayHandles = "";
          if (isDelayFirst) delayHandles += "<div class=\"gantt-resize-handle handle-left\"></div>";
          if (isDelayLast) delayHandles += "<div class=\"gantt-resize-handle handle-right\"></div>";

          var delayLabel = isDelayFirst ? ("<span class=\"delay-bar-label\">" + delay.type + "</span>") : "";

          cellsHtml += "<div class=\"gantt-bar delay-bar\" data-delay-idx=\"" + globalDelayIdx + "\" " +
            "style=\"background:" + delayColor + ";color:" + delayTextColor + ";top:16px;bottom:-3px;z-index:3;\" " +
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
    html += "<td colspan=\"" + (dates.length + 2) + "\">";
    html += "<span class=\"collapse-arrow\">\u25BC</span>";
    html += "<span class=\"section-icon\" style=\"background:" + color + "\"></span>" + sectionName;
    html += "</td></tr>";

    APP.blasts.forEach(function(blast, idx) {
      var deps = getBlastDeps(blast);
      var comp = blast._computed || {};

      // Step 1f-i) DRILLING section with block support
      if (sectionName === "DRILLING" && hasBlocks(blast)) {
        blast.drillBlocks.forEach(function(block, blockIdx) {
          if (!block.drillStart) return;
          var blockRange = {
            start: block.drillStart,
            end: isoDate(addDays(new Date(block.drillStart), (block.drillDays || 1) - 1))
          };

          // Step) Build info column for this block (including crew badges)
          var blockDrillTag = buildDrillChips(block.assignedDrills || [], idx, blockIdx);
          var blockCrewReq = calcDrillCrewRequired(blast, drills);
          var blockCrewAlloc = ensureCrewAllocated(blast).drilling;
          var blockCrewHtml = buildCrewBadges(blockCrewAlloc, blockCrewReq);
          var blockPctBadge = (block.drillProgress > 0) ? "<span class=\"progress-badge\">" + Math.round(block.drillProgress * 100) + "%</span>" : "";
          var blockInfo = blockDrillTag + formatNum(block.meters || 0) + "m" + blockPctBadge + blockCrewHtml;

          // Step) Block row with edit icon and indented name
          html += "<tr class=\"gantt-row gantt-block-row\" data-blast=\"" + idx + "\" data-section=\"drilling\" data-block=\"" + blockIdx + "\">";
          html += "<td class=\"sticky-col\" data-ctx-idx=\"" + idx + "\" data-ctx-section=\"drilling\" data-ctx-block=\"" + blockIdx + "\">";
          html += EDIT_ICON + "<span class=\"block-label\">[" + block.label + "]</span> " + blast.name;
          html += "</td>";
          html += "<td class=\"sticky-col-2\">" + blockInfo + "</td>";
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

      var info = "";
      if (sectionName === "PATTERN PREP") {
        // Step 1f-ii-prep) Show assigned ancillary equipment
        var ancIds = blast.assignedAncillary || [];
        info = ancIds.length > 0 ? ancIds.join(", ") : "";
        if (blast.prepDays) info += (info ? " " : "") + blast.prepDays + "d";
      } else if (sectionName === "DRILLING") {
        var drillTag = buildDrillChips(blast.assignedDrills || [], idx, null);
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
        info = drillTag + formatNum((blast.d65Meters || 0) + (blast.pvMeters || 0)) + "m" + drillPctBadge + depIcon + maintIcon + drillCrewHtml + conflictBadge;
      } else if (sectionName === "LOADING") {
        // Step 1f-ii-mpu) Build MPU chips from array (backward compat with legacy single assignedMPU)
        var mpuList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
        var mpuTag = buildMPUChips(mpuList, idx);
        // Step) Crew fill badges for loading
        var loadCrewReq = calcLoadCrewRequired(blast, mpus);
        var loadCrewAlloc = ensureCrewAllocated(blast).loading;
        var loadCrewHtml = buildCrewBadges(loadCrewAlloc, loadCrewReq);
        var loadPctBadge = (blast.loadProgress > 0) ? "<span class=\"progress-badge\">" + Math.round(blast.loadProgress * 100) + "%</span>" : "";
        info = mpuTag + formatNum(blast.expMass) + "kg" + loadPctBadge + depIcon + loadCrewHtml;
      } else {
        info = formatNum(blast.volume) + " bcm";
      }

      html += "<tr class=\"gantt-row\" data-blast=\"" + idx + "\" data-section=\"" + secKey + "\">";
      html += "<td class=\"sticky-col\" data-ctx-idx=\"" + idx + "\" data-ctx-section=\"" + secKey + "\">";
      html += EDIT_ICON + blast.name;
      html += "</td>";
      html += "<td class=\"sticky-col-2\">" + info + "</td>";
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
    if (!b.drillStart) return null;
    var start = b.drillStart;
    var end = isoDate(addDays(new Date(b.drillStart), (b.drillDays || 1) - 1));
    return { start: start, end: end };
  });

  renderSection("LOADING", "var(--accent-load)", function(b) {
    if (!b.loadStart) return null;
    var start = b.loadStart;
    var days = b.loadDays || Math.ceil((b.expMass || 0) / (b.loadRate || 100000));
    var end = isoDate(addDays(new Date(b.loadStart), Math.max(days - 1, 0)));
    return { start: start, end: end };
  });

  renderSection("BLASTING", "var(--accent-blast)", function(b) {
    if (!b.blastDate) return null;
    return { start: b.blastDate, end: b.blastDate };
  });

  html += "</tbody>";
  document.getElementById("ganttTable").innerHTML = html;

  // Step 1h) Attach bar tooltip events
  document.querySelectorAll(".gantt-bar").forEach(function(bar) {
    bar.addEventListener("mouseenter", function(e) { showBarTooltip(e, bar); });
    bar.addEventListener("mouseleave", hideTooltip);
  });

  // Step 1i) Attach context menu to sticky-col cells
  document.querySelectorAll(".gantt-row td.sticky-col[data-ctx-idx]").forEach(function(td) {
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
      var td = btn.closest("td.sticky-col");
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

  // Step 1j) Re-initialise drag and resize handlers after re-render
  initGanttDrag();
  initGanttResize();

  // Step 1j-b) Attach drag events to inline drill/mpu chips in the info column
  document.querySelectorAll(".gantt-drill-chip, .gantt-mpu-chip").forEach(function(chip) {
    chip.addEventListener("dragstart", function(e) {
      e.stopPropagation();
      var dragType = chip.dataset.dragType;
      var dragId = chip.dataset.dragId;
      var blastIdx = chip.dataset.blastIdx;
      var blockIdx = chip.dataset.blockIdx;
      var payload = dragType + ":" + dragId + ":" + blastIdx + (blockIdx !== "" ? ":" + blockIdx : "");
      e.dataTransfer.setData("text/plain", payload);
      e.dataTransfer.effectAllowed = "move";
      chip.classList.add("chip-dragging");
    });
    chip.addEventListener("dragend", function() {
      chip.classList.remove("chip-dragging");
    });
  });

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

  // Step 1m) Render dependency connectors (deferred for layout)
  requestAnimationFrame(function() {
    renderConnectors();
  });

  // Step 1n) Re-render equipment palette to reflect any status changes
  renderDelayPalette();
}

export { renderGantt };
