// ============================================================
//  BLAST OVERVIEW
//  Renders the blast overview table and stats
//  Supports drag-and-drop pattern assignment from Pattern Library
//  Sub-tabs: Table (data table) and Calendar (month grid)
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { getBlastDeps, recalcDependencies } from "../engine/dependencyEngine.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";
import { editBlast } from "../dialogs/blastModal.js";
import { renderGantt } from "./ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { renderBlastCalendar, initBlastCalendar } from "./blastCalendar.js";

var _subTabsInited = false;

// Step 0) Initialise sub-tab switching (Table / Calendar)
function initSubTabs() {
  if (_subTabsInited) return;
  _subTabsInited = true;

  var tabBar = document.getElementById("blastSubTabs");
  if (!tabBar) return;

  tabBar.querySelectorAll(".blast-sub-tab").forEach(function(tab) {
    tab.addEventListener("click", function() {
      // Step 0a) Deactivate all sub-tabs and panes
      tabBar.querySelectorAll(".blast-sub-tab").forEach(function(t) { t.classList.remove("active"); });
      document.querySelectorAll("#tab-blasts .blast-sub-pane").forEach(function(p) { p.classList.remove("active"); });

      // Step 0b) Activate the clicked tab and its pane
      tab.classList.add("active");
      var pane = document.getElementById(tab.dataset.subtab);
      if (pane) pane.classList.add("active");

      // Step 0c) Render the appropriate view
      if (tab.dataset.subtab === "blastCalendarPane") {
        initBlastCalendar();
        renderBlastCalendar();
      }
    });
  });
}

// Step 1) Render blast overview tab
function renderBlasts() {
  initSubTabs();
  var totalVol = APP.blasts.reduce(function(s, b) { return s + (b.volume || 0); }, 0);
  var totalExp = APP.blasts.reduce(function(s, b) { return s + (b.expMass || 0); }, 0);
  var totalHoles = APP.blasts.reduce(function(s, b) {
    return s + b.holeTypes.reduce(function(h, ht) { return h + (ht.holes || 0); }, 0);
  }, 0);

  // Step 2) Stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-blue\">";
  statsHtml += "  <div class=\"stat-label\">Active Blasts</div>";
  statsHtml += "  <div class=\"stat-value\">" + APP.blasts.filter(function(b) { return b.status === "active"; }).length + "</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-amber\">";
  statsHtml += "  <div class=\"stat-label\">Total Volume</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalVol) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-red\">";
  statsHtml += "  <div class=\"stat-label\">Total Explosive</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalExp) + "<span class=\"stat-unit\">kg</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-purple\">";
  statsHtml += "  <div class=\"stat-label\">Total Holes</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalHoles) + "</div>";
  statsHtml += "</div>";
  document.getElementById("blastStats").innerHTML = statsHtml;

  // Step 3) Build table
  var html = "<thead><tr>";
  html += "<th>Blast Name</th><th>Status</th><th>Mode</th><th>Pattern</th>";
  html += "<th>Patterns</th><th class=\"num\">Volume (bcm)</th><th class=\"num\">Exp. (kg)</th>";
  html += "<th class=\"num\">PF (kg/bcm)</th><th class=\"num\">Drill (m)</th>";
  html += "<th>Drill Start</th><th>Load Start</th><th>Blast Date</th>";
  html += "<th style=\"color:var(--accent-purple)\">Deps</th>";
  html += "</tr></thead><tbody>";

  APP.blasts.forEach(function(b, idx) {
    var pf = b.volume ? (b.expMass / b.volume).toFixed(2) : "\u2014";
    var drillM = getTotalDrillMeters(b);
    var statusBadge = b.status === "active" ? "badge-active" : b.status === "fired" ? "badge-blast" : "badge-drill";
    var holeTypeSummary = b.holeTypes.map(function(ht) {
      var badge = ht.type === "PRESPLIT" ? "badge-presplit" : ht.type === "BUFFER" ? "badge-buffer" : "badge-production";
      return "<span class=\"badge " + badge + "\">" + ht.type + "</span>";
    }).join(" ");

    var deps = getBlastDeps(b);
    var depSummary = Math.round(deps.drillPctForLoad * 100) + "%\u2192L";
    if (deps.drillPctForBlast < 1) depSummary += " " + Math.round(deps.drillPctForBlast * 100) + "%D\u2192B";
    if (deps.loadPctForBlast < 1) depSummary += " " + Math.round(deps.loadPctForBlast * 100) + "%L\u2192B";
    if (deps.predecessor) depSummary += " \u26D3" + deps.predecessor.substring(0, 10);
    var hasWarning = b._depWarning ? "<span class=\"dep-warning\" title=\"" + b._depWarning + "\">!</span>" : "";

    html += "<tr data-blast-idx=\"" + idx + "\" style=\"cursor:pointer\">";
    html += "<td style=\"color:var(--text-primary);font-weight:600;\">" + b.name + hasWarning + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + b.status + "</span></td>";
    html += "<td>" + b.mode + "</td>";
    html += "<td>" + (b.pattern || "\u2014") + "</td>";
    html += "<td>" + holeTypeSummary + "</td>";
    html += "<td class=\"num\">" + formatNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + formatNum(b.expMass) + "</td>";
    html += "<td class=\"num\">" + pf + "</td>";
    html += "<td class=\"num\">" + formatNum(drillM) + "</td>";
    html += "<td>" + formatDate(b.drillStart) + "</td>";
    html += "<td>" + formatDate(b.loadStart) + "</td>";
    html += "<td>" + formatDate(b.blastDate) + "</td>";
    html += "<td style=\"font-size:11px;color:var(--accent-purple)\">" + depSummary + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("blastTable").innerHTML = html;

  // Step 4) Attach double-click edit handlers
  document.querySelectorAll("#blastTable tr[data-blast-idx]").forEach(function(row) {
    row.addEventListener("dblclick", function() {
      editBlast(parseInt(row.dataset.blastIdx));
    });
  });

  // Step 5) Attach pattern drag-and-drop handlers on blast rows
  attachBlastDropTargets();
}

// ============================================================
//  PATTERN DRAG-AND-DROP — Blast rows as drop targets
// ============================================================

// Step 5a) Wire up dragover/dragleave/drop on each blast row
function attachBlastDropTargets() {
  document.querySelectorAll("#blastTable tr[data-blast-idx]").forEach(function(row) {
    row.addEventListener("dragover", function(e) {
      var data = e.dataTransfer.types.indexOf("text/plain") !== -1;
      if (!data) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
      row.classList.add("blast-drop-highlight");
    });
    row.addEventListener("dragleave", function() {
      row.classList.remove("blast-drop-highlight");
    });
    row.addEventListener("drop", function(e) {
      e.preventDefault();
      row.classList.remove("blast-drop-highlight");
      var payload = e.dataTransfer.getData("text/plain");
      if (!payload || payload.indexOf("pattern:") !== 0) return;

      var patternId = payload.replace("pattern:", "");
      var blastIdx = parseInt(row.dataset.blastIdx);
      var blast = APP.blasts[blastIdx];
      if (!blast) return;

      var pattern = APP.patterns.find(function(p) { return p.id === patternId; });
      if (!pattern) { alert("Pattern '" + patternId + "' not found in library."); return; }

      // Step 5b) Show the pattern allocation dialog
      showPatternAllocDialog(blast, blastIdx, pattern);
    });
  });
}

// ============================================================
//  PATTERN ALLOCATION DIALOG
// ============================================================

// Step 6) Show the allocation dialog for assigning a pattern to a blast
function showPatternAllocDialog(blast, blastIdx, pattern) {
  // Step 6a) Remove any existing dialog
  var existing = document.getElementById("patternAllocOverlay");
  if (existing) existing.remove();

  // Step 6b) Determine if line-drill type
  var isLineDrill = (pattern.type === "PRESPLIT" || pattern.type === "BUFFER");

  // Step 6c) Calculate hole depth from pattern data
  var angleRad = ((pattern.holeAngle || 90) * Math.PI) / 180;
  var sinAngle = Math.sin(angleRad);
  if (sinAngle < 0.01) sinAngle = 1;
  var holeDepth = Math.round(((pattern.benchHt + (pattern.subdrill || 0)) / sinAngle) * 100) / 100;

  // Step 6d) Check if this pattern is already assigned — pre-fill if so
  var existingIdx = -1;
  for (var i = 0; i < blast.holeTypes.length; i++) {
    if (blast.holeTypes[i].patternId === pattern.id) { existingIdx = i; break; }
  }
  var defaultHoles = existingIdx >= 0 ? blast.holeTypes[existingIdx].holes : 100;

  // Step 6d-ii) Determine % Block: first pattern = 100%, subsequent = 0%
  var isFirstPattern = (blast.holeTypes.length === 0 && existingIdx < 0);
  var defaultPct;
  if (existingIdx >= 0) {
    defaultPct = blast.holeTypes[existingIdx].pctOfBlock || 0;
  } else if (isFirstPattern) {
    defaultPct = 100;
  } else {
    defaultPct = 0;
  }

  // Step 6d-iii) Recalculate holes from % if first pattern and blast has surface area
  if (isFirstPattern && blast.surfaceArea > 0) {
    var holesFromPct = Math.round((defaultPct / 100) * blast.surfaceArea / (pattern.burden * pattern.spacing));
    if (holesFromPct > 0) defaultHoles = holesFromPct;
  }

  // Step 6e) Build dialog HTML
  var html = "<div class=\"pattern-alloc-overlay\" id=\"patternAllocOverlay\">";
  html += "<div class=\"pattern-alloc-dialog\">";
  html += "<h3>Assign Pattern to " + blast.name + "</h3>";
  html += "<div style=\"margin-bottom:14px;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius);font-size:12px;\">";
  html += "<strong>" + pattern.id + "</strong> &mdash; " + pattern.type;
  html += " | " + pattern.diam + "mm | B" + pattern.burden + " S" + pattern.spacing;
  html += " | BH " + pattern.benchHt + "m | PF " + pattern.pf + " kg/bcm";
  html += "</div>";

  // Step 6e-i) % Block and Holes row
  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>% Block</label><input type=\"number\" id=\"allocPct\" value=\"" + defaultPct + "\" min=\"0\" max=\"100\" step=\"1\"></div>";
  html += "<div class=\"form-field\"><label>Number of Holes</label><input type=\"number\" id=\"allocHoles\" value=\"" + defaultHoles + "\" min=\"1\"></div>";
  html += "<div class=\"form-field\"><label>Hole Depth (m)</label><input type=\"number\" id=\"allocDepth\" value=\"" + holeDepth + "\" step=\"0.01\"></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Drill Meters (calc)</label><input type=\"number\" id=\"allocDrillM\" value=\"" + Math.round(defaultHoles * holeDepth * 10) / 10 + "\" readonly style=\"opacity:0.7;\"></div>";
  html += "<div class=\"form-field\"><label>Explosive Mass (kg, calc)</label><input type=\"number\" id=\"allocExpMass\" value=\"0\" readonly style=\"opacity:0.7;\"></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Line Drill</label><select id=\"allocLineDrill\"><option value=\"false\"" + (!isLineDrill ? " selected" : "") + ">No</option><option value=\"true\"" + (isLineDrill ? " selected" : "") + ">Yes</option></select></div>";
  html += "<div class=\"form-field\"><label>Hole Type</label><input type=\"text\" id=\"allocType\" value=\"" + pattern.type + "\" readonly style=\"opacity:0.7;\"></div>";
  html += "</div>";

  // Step 6e-ii) Info banner for subsequent patterns
  if (!isFirstPattern && existingIdx < 0) {
    html += "<div style=\"margin:10px 0 6px;padding:8px 12px;background:#f59e0b22;border:1px solid #f59e0b;border-radius:var(--radius);font-size:11px;color:var(--text-primary);\">";
    html += "<strong>Note:</strong> This blast already has pattern(s) assigned. The % Block for this pattern defaults to 0%. ";
    html += "Adjust the % Block values in the <em>Edit Blast</em> modal to distribute the block across patterns.";
    html += "</div>";
  }

  html += "<div class=\"alloc-actions\">";
  html += "<button class=\"btn-alloc-cancel\" id=\"allocCancel\">Cancel</button>";
  html += "<button class=\"btn-alloc-save\" id=\"allocSave\">" + (existingIdx >= 0 ? "Update" : "Add") + " Pattern</button>";
  html += "</div>";
  html += "</div></div>";

  // Step 6f) Insert into DOM
  var container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container.firstChild);

  // Step 6g) Calculate initial explosive mass and wire up live recalc
  recalcAllocFields(pattern);

  // Step 6g-ii) When % Block changes, recalculate holes from surface area
  document.getElementById("allocPct").addEventListener("input", function() {
    var pct = parseFloat(this.value) || 0;
    if (pct > 100) { pct = 100; this.value = 100; }
    if (pct < 0) { pct = 0; this.value = 0; }
    var area = blast.surfaceArea || 0;
    if (area > 0 && pattern.burden > 0 && pattern.spacing > 0) {
      var calcHoles = Math.round((pct / 100) * area / (pattern.burden * pattern.spacing));
      document.getElementById("allocHoles").value = calcHoles > 0 ? calcHoles : 0;
    }
    recalcAllocFields(pattern);
  });

  document.getElementById("allocHoles").addEventListener("input", function() { recalcAllocFields(pattern); });
  document.getElementById("allocDepth").addEventListener("input", function() { recalcAllocFields(pattern); });

  // Step 6h) Cancel button
  document.getElementById("allocCancel").addEventListener("click", function() {
    var overlay = document.getElementById("patternAllocOverlay");
    if (overlay) overlay.remove();
  });

  // Step 6i) Save button — push/update holeTypes entry on the blast
  document.getElementById("allocSave").addEventListener("click", function() {
    var holes = parseInt(document.getElementById("allocHoles").value) || 0;
    var depth = parseFloat(document.getElementById("allocDepth").value) || holeDepth;
    var drillMeters = Math.round(holes * depth * 10) / 10;
    var expMass = parseFloat(document.getElementById("allocExpMass").value) || 0;
    var isLine = document.getElementById("allocLineDrill").value === "true";
    var pctVal = parseFloat(document.getElementById("allocPct").value) || 0;

    if (holes <= 0) { alert("Number of holes must be greater than zero."); return; }

    var entry = {
      patternId: pattern.id,
      type: pattern.type,
      diam: pattern.diam / 1000,
      burden: pattern.burden,
      spacing: pattern.spacing,
      isLineDrill: isLine,
      pctOfBlock: pctVal,
      holes: holes,
      holeDepth: depth,
      drillMeters: drillMeters,
      expMass: Math.round(expMass)
    };

    // Step 6i-i) Update existing or push new
    if (existingIdx >= 0) {
      blast.holeTypes[existingIdx] = entry;
    } else {
      blast.holeTypes.push(entry);
    }

    // Step 6i-ii) Recalculate blast totals from holeTypes
    recalcBlastFromHoleTypes(blast);

    // Step 6j) Persist, recalculate dependencies, and re-render
    debouncedSave();
    recalcDependencies();
    renderBlasts();
    renderGantt();

    var overlay = document.getElementById("patternAllocOverlay");
    if (overlay) overlay.remove();
  });

  // Step 6k) Close on overlay click outside dialog
  document.getElementById("patternAllocOverlay").addEventListener("click", function(e) {
    if (e.target === this) this.remove();
  });
}

// Step 7) Live-recalculate drill meters and explosive mass in the allocation dialog
function recalcAllocFields(pattern) {
  var holes = parseInt(document.getElementById("allocHoles").value) || 0;
  var depth = parseFloat(document.getElementById("allocDepth").value) || 0;
  var drillMeters = Math.round(holes * depth * 10) / 10;
  document.getElementById("allocDrillM").value = drillMeters;

  // Step 7a) Explosive mass = pf * burden * spacing * benchHt * holes
  var expMass = pattern.pf * pattern.burden * pattern.spacing * pattern.benchHt * holes;
  document.getElementById("allocExpMass").value = Math.round(expMass);
}

// Step 8) Recalculate blast-level totals from holeTypes array
function recalcBlastFromHoleTypes(blast) {
  var totalExpMass = 0;
  for (var i = 0; i < blast.holeTypes.length; i++) {
    totalExpMass += blast.holeTypes[i].expMass || 0;
  }
  blast.expMass = totalExpMass;
}

export { renderBlasts, showPatternAllocDialog };
