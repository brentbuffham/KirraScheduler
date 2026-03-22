// ============================================================
//  BLAST MODAL
//  Add / Edit blast dialog logic
//  Multi-pattern hole type editor
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills, mpus, ancillary, canDrillDiameter } from "../state/equipmentState.js";
import { openModal, closeModal } from "../ui/modal.js";
import { isoDate } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { renderDepthProfilePanel } from "../engine/depthBinning.js";

// Step 0) Find a matching solid in APP.kirraProjectSolids by blast name
function findMatchingSolid(blastName) {
  var solids = APP.kirraProjectSolids || [];
  for (var i = 0; i < solids.length; i++) {
    if (solids[i].name === blastName) return solids[i];
  }
  return null;
}

// ============================================================
//  HOLE TYPE TABLE HELPERS
// ============================================================

// Step 1) Calculate hole depth from pattern angle (uses pattern benchHt)
function calcHoleDepth(pattern) {
  var angle = pattern.holeAngle || 90;
  var radians = angle * Math.PI / 180;
  var depth = pattern.benchHt / Math.sin(radians) + (pattern.subdrill || 0);
  return Math.round(depth * 100) / 100;
}

// Step 1-BLOCK) Calculate hole depth from block volume instead of pattern benchHt.
// Each hole covers a footprint of burden * spacing, so:
//   blockBenchHt = (volume * pct/100) / (holes * burden * spacing)
//   depth = blockBenchHt / sin(angle) + subdrill
function calcBlockHoleDepth(pattern, volume, area, pct, holes) {
  if (!volume || volume <= 0 || !holes || holes <= 0 || !pct || pct <= 0) {
    return calcHoleDepth(pattern);
  }
  var blockBenchHt = (volume * pct / 100) / (holes * pattern.burden * pattern.spacing);
  var angle = pattern.holeAngle || 90;
  var radians = angle * Math.PI / 180;
  var depth = blockBenchHt / Math.sin(radians) + (pattern.subdrill || 0);
  return Math.round(depth * 100) / 100;
}

// Step 1b) Build a pattern <select> dropdown HTML for a hole type row
function buildPatternSelect(selectedId) {
  var html = "<select class=\"ht-pattern\" style=\"width:100%;font-size:11px;padding:2px 4px;\">";
  html += "<option value=\"\">-- Pattern --</option>";
  for (var i = 0; i < APP.patterns.length; i++) {
    var p = APP.patterns[i];
    var sel = (p.id === selectedId) ? " selected" : "";
    html += "<option value=\"" + p.id + "\"" + sel + ">" + p.id + " \u2014 " + p.type + " (" + p.diam + "mm)</option>";
  }
  html += "</select>";
  return html;
}

// Step 2) Add a hole type row to the table
function addHoleTypeRow(patternId, isLineDrill, holes, drillMeters, expMass, pctOfBlock) {
  var tbody = document.getElementById("holeTypeRows");
  var tr = document.createElement("tr");
  tr.style.borderBottom = "1px solid var(--border)";

  var pattern = APP.patterns.find(function(p) { return p.id === patternId; });
  var depth = pattern ? calcHoleDepth(pattern) : 0;
  var autoLine = false;
  if (pattern) {
    var t = pattern.type.toUpperCase();
    autoLine = (t === "PRESPLIT" || t === "BUFFER");
  }
  var lineDrill = (isLineDrill !== undefined) ? isLineDrill : autoLine;
  var pct = (pctOfBlock !== undefined && pctOfBlock !== null) ? pctOfBlock : 0;
  var holeCount = holes || 0;
  var meters = drillMeters || (holeCount * depth);
  var mass = expMass || 0;

  tr.innerHTML =
    "<td style=\"padding:4px 2px;\">" + buildPatternSelect(patternId || "") + "</td>" +
    "<td style=\"padding:4px 2px;text-align:center;\"><input type=\"checkbox\" class=\"ht-line\"" + (lineDrill ? " checked" : "") + "></td>" +
    "<td style=\"padding:4px 2px;\"><input type=\"number\" class=\"ht-pct\" value=\"" + pct + "\" min=\"0\" max=\"100\" step=\"1\" style=\"width:55px;text-align:right;font-size:11px;\"></td>" +
    "<td style=\"padding:4px 2px;\"><input type=\"number\" class=\"ht-holes\" value=\"" + holeCount + "\" min=\"0\" step=\"1\" style=\"width:60px;text-align:right;font-size:11px;\"></td>" +
    "<td class=\"ht-depth\" style=\"padding:4px 6px;text-align:right;color:var(--text-muted);\">" + depth.toFixed(2) + "</td>" +
    "<td class=\"ht-meters\" style=\"padding:4px 6px;text-align:right;\">" + Math.round(meters) + "</td>" +
    "<td class=\"ht-mass\" style=\"padding:4px 6px;text-align:right;\">" + Math.round(mass) + "</td>" +
    "<td style=\"padding:4px 2px;text-align:center;\"><button type=\"button\" class=\"ht-del\" style=\"background:none;border:none;color:var(--accent-blast);cursor:pointer;font-size:14px;\" title=\"Remove\">&times;</button></td>";

  tbody.appendChild(tr);

  // Step 2a) Wire up events
  var patSel = tr.querySelector(".ht-pattern");
  var lineChk = tr.querySelector(".ht-line");
  var pctInp = tr.querySelector(".ht-pct");
  var holesInp = tr.querySelector(".ht-holes");
  var delBtn = tr.querySelector(".ht-del");

  patSel.addEventListener("change", function() {
    var p = APP.patterns.find(function(pp) { return pp.id === patSel.value; });
    if (p) {
      var t = p.type.toUpperCase();
      lineChk.checked = (t === "PRESPLIT" || t === "BUFFER");
      // Step 2a-i) Initial depth shown before recalc; recalcHolesFromPct will override if block depth is on
      tr.querySelector(".ht-depth").textContent = calcHoleDepth(p).toFixed(2);
    }
    // Step 2b) Recalculate holes from current % when pattern changes (handles block depth)
    recalcHolesFromPct();
  });
  lineChk.addEventListener("change", function() { recalcHolesFromPct(); });
  pctInp.addEventListener("input", function() { recalcHolesFromPct(); });
  holesInp.addEventListener("input", recalcHoleTypes);
  delBtn.addEventListener("click", function() {
    tr.remove();
    autoBalancePct();
    recalcHoleTypes();
  });
}

// Step 2c) Recalculate holes on all rows from their % Block values
//  [1] holes = (surfaceArea * pct/100) / (burden * spacing)
//  When "Use Block Depth" is on, also re-derives depth from block volume:
//  [2] blockBenchHt = (volume * pct/100) / holes
//  [3] depth = blockBenchHt / sin(angle) + subdrill
function recalcHolesFromPct() {
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;
  var useBlockDepth = document.getElementById("fUseBlockDepth").checked;
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");

  for (var i = 0; i < rows.length; i++) {
    var tr = rows[i];
    var patSel = tr.querySelector(".ht-pattern");
    var pctInp = tr.querySelector(".ht-pct");
    var holesInp = tr.querySelector(".ht-holes");
    var depthCell = tr.querySelector(".ht-depth");

    var p = APP.patterns.find(function(pp) { return pp.id === patSel.value; });
    var pct = parseFloat(pctInp.value) || 0;

    if (p && area > 0 && pct > 0) {
      // Step 2c-i) Holes from surface area and pattern spacing
      var patternArea = area * pct / 100;
      var holes = Math.round(patternArea / (p.burden * p.spacing));
      holesInp.value = holes;

      // Step 2c-ii) Update depth cell when using block depth
      if (useBlockDepth && volume > 0 && holes > 0) {
        var blockDepth = calcBlockHoleDepth(p, volume, area, pct, holes);
        depthCell.textContent = blockDepth.toFixed(2);
      } else if (p) {
        depthCell.textContent = calcHoleDepth(p).toFixed(2);
      }
    }
  }
  recalcHoleTypes();
}

// Step 2d) Auto-balance remaining % to the last row when a row is removed
function autoBalancePct() {
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
  if (rows.length === 0) return;

  // Step 2d-i) Sum all current %
  var totalPct = 0;
  for (var i = 0; i < rows.length; i++) {
    totalPct += parseFloat(rows[i].querySelector(".ht-pct").value) || 0;
  }

  // Step 2d-ii) If single row remaining, set it to 100
  if (rows.length === 1) {
    rows[0].querySelector(".ht-pct").value = 100;
    recalcHolesFromPct();
    return;
  }

  // Step 2d-iii) If total != 100, adjust the last row to make it balance
  if (totalPct !== 100) {
    var lastRow = rows[rows.length - 1];
    var lastPct = parseFloat(lastRow.querySelector(".ht-pct").value) || 0;
    var remainder = 100 - (totalPct - lastPct);
    if (remainder >= 0 && remainder <= 100) {
      lastRow.querySelector(".ht-pct").value = Math.round(remainder);
      recalcHolesFromPct();
    }
  }
}

// Step 3) Recalculate all hole type rows and update totals.
// When "Use Block Depth" is enabled, derives benchHt from block volume:
//   blockBenchHt = (volume * pct/100) / holes
//   depth = blockBenchHt / sin(angle) + subdrill
// Otherwise uses pattern.benchHt as before.
function recalcHoleTypes() {
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
  var totalMeters = 0;
  var totalMass = 0;
  var totalPct = 0;
  var useBlockDepth = document.getElementById("fUseBlockDepth").checked;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;

  for (var i = 0; i < rows.length; i++) {
    var tr = rows[i];
    var patSel = tr.querySelector(".ht-pattern");
    var holesInp = tr.querySelector(".ht-holes");
    var pctInp = tr.querySelector(".ht-pct");
    var depthCell = tr.querySelector(".ht-depth");
    var metersCell = tr.querySelector(".ht-meters");
    var massCell = tr.querySelector(".ht-mass");

    var p = APP.patterns.find(function(pp) { return pp.id === patSel.value; });
    var holes = parseInt(holesInp.value) || 0;
    var pct = parseFloat(pctInp.value) || 0;
    totalPct += pct;

    if (p) {
      // Step 3a) Pattern is known — choose depth source based on useBlockDepth
      var depth;
      var effectiveBenchHt = p.benchHt;
      if (useBlockDepth && volume > 0 && holes > 0 && pct > 0) {
        // Step 3a-BLOCK) Derive bench height from block volume / hole footprint
        effectiveBenchHt = (volume * pct / 100) / (holes * p.burden * p.spacing);
        depth = calcBlockHoleDepth(p, volume, area, pct, holes);
      } else {
        depth = calcHoleDepth(p);
      }
      depthCell.textContent = depth.toFixed(2);
      var meters = holes * depth;
      var mass = 0;
      if (holes > 0) {
        var isLine = tr.querySelector(".ht-line").checked;
        if (isLine) {
          mass = meters * p.pf;
        } else {
          mass = holes * p.burden * p.spacing * effectiveBenchHt * p.pf;
        }
      }
      metersCell.textContent = Math.round(meters);
      massCell.textContent = Math.round(mass);
      totalMeters += meters;
      totalMass += mass;
    } else {
      // Step 3b) No pattern selected — preserve existing displayed values
      totalMeters += parseFloat(metersCell.textContent) || 0;
      totalMass += parseFloat(massCell.textContent) || 0;
    }
  }

  // Step 3b-ii) Update % total with colour warning
  var pctEl = document.getElementById("htTotalPct");
  pctEl.textContent = Math.round(totalPct) + "%";
  if (totalPct > 100) {
    pctEl.style.color = "var(--accent-blast)";
  } else if (totalPct === 100) {
    pctEl.style.color = "var(--accent-green)";
  } else {
    pctEl.style.color = "var(--text-muted)";
  }

  document.getElementById("htTotalMeters").textContent = Math.round(totalMeters);
  document.getElementById("htTotalMass").textContent = Math.round(totalMass);

  // Step 3c) Auto-fill Volume and ExpMass fields if user hasn't manually overridden
  var volEl = document.getElementById("fVolume");
  var massEl = document.getElementById("fExpMass");
  if (totalMass > 0 && !massEl.dataset.userEdited) {
    massEl.value = Math.round(totalMass);
  }

  // Step 3d) Update the live drill-day estimate
  updateDrillDayEstimate();
}

// Step 3e) Live drill-day estimate shown in the modal
function updateDrillDayEstimate() {
  var el = document.getElementById("drillDayEstimate");
  if (!el) return;

  var totalMeters = parseFloat(document.getElementById("htTotalMeters").textContent) || 0;
  var drillSelect = document.getElementById("fAssignedDrills");
  var effectiveHrs = APP.rigHours * APP.availability * APP.utilisation;
  var totalDailyM = 0;

  for (var si = 0; si < drillSelect.selectedOptions.length; si++) {
    var drillObj = drills.find(function(d) { return d.id === drillSelect.selectedOptions[si].value; });
    if (drillObj) totalDailyM += (drillObj.rateM_per_day || 0) * effectiveHrs;
  }

  if (totalMeters <= 0 && drillSelect.selectedOptions.length === 0) {
    el.style.display = "none";
    return;
  }
  el.style.display = "block";

  var parts = [];
  parts.push("Total Meters: " + Math.round(totalMeters) + " m");
  parts.push("Daily Rate: " + Math.round(totalDailyM) + " m/day (" + drillSelect.selectedOptions.length + " rig" + (drillSelect.selectedOptions.length !== 1 ? "s" : "") + ")");

  if (totalMeters > 0 && totalDailyM > 0) {
    var estDays = Math.ceil(totalMeters / totalDailyM);
    parts.push("Est. Drill Days: " + estDays);
  } else if (totalMeters > 0) {
    parts.push("Est. Drill Days: assign drills to calculate");
  } else {
    parts.push("Est. Drill Days: add hole types to calculate");
  }
  el.innerHTML = parts.join(" &nbsp;|&nbsp; ");
}

// Step 4) Collect hole types from table into array.
// Respects "Use Block Depth" — derives bench height from block volume when enabled.
function collectHoleTypes() {
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
  var useBlockDepth = document.getElementById("fUseBlockDepth").checked;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var result = [];

  for (var i = 0; i < rows.length; i++) {
    var tr = rows[i];
    var patId = tr.querySelector(".ht-pattern").value;
    var p = APP.patterns.find(function(pp) { return pp.id === patId; });
    var holes = parseInt(tr.querySelector(".ht-holes").value) || 0;
    var isLine = tr.querySelector(".ht-line").checked;
    var pct = parseFloat(tr.querySelector(".ht-pct").value) || 0;

    var depth, meters, mass;
    if (p) {
      // Step 4a) Pattern exists — choose depth source based on useBlockDepth
      var effectiveBenchHt = p.benchHt;
      if (useBlockDepth && volume > 0 && holes > 0 && pct > 0) {
        effectiveBenchHt = (volume * pct / 100) / (holes * p.burden * p.spacing);
        depth = calcBlockHoleDepth(p, volume, area, pct, holes);
      } else {
        depth = calcHoleDepth(p);
      }
      meters = holes * depth;
      mass = 0;
      if (holes > 0) {
        if (isLine) {
          mass = meters * p.pf;
        } else {
          mass = holes * p.burden * p.spacing * effectiveBenchHt * p.pf;
        }
      }
    } else {
      // Step 4b) No pattern — read displayed values (preserves legacy/imported data)
      depth = parseFloat(tr.querySelector(".ht-depth").textContent) || 0;
      meters = parseFloat(tr.querySelector(".ht-meters").textContent) || 0;
      mass = parseFloat(tr.querySelector(".ht-mass").textContent) || 0;
    }

    result.push({
      patternId: patId,
      type: p ? p.type : "",
      diam: p ? p.diam / 1000 : 0,
      burden: p ? p.burden : 0,
      spacing: p ? p.spacing : 0,
      isLineDrill: isLine,
      pctOfBlock: pct,
      holes: holes,
      holeDepth: Math.round(depth * 100) / 100,
      drillMeters: Math.round(meters * 10) / 10,
      expMass: Math.round(mass)
    });
  }
  return result;
}

// Step 4b) Clear hole type table
function clearHoleTypeTable() {
  document.getElementById("holeTypeRows").innerHTML = "";
  document.getElementById("htTotalMeters").textContent = "0";
  document.getElementById("htTotalMass").textContent = "0";
  var pctEl = document.getElementById("htTotalPct");
  if (pctEl) {
    pctEl.textContent = "0%";
    pctEl.style.color = "var(--text-muted)";
  }
}

// Step 4c) Populate hole type table from existing blast holeTypes
function populateHoleTypeTable(holeTypes) {
  clearHoleTypeTable();
  if (!holeTypes || holeTypes.length === 0) return;
  for (var i = 0; i < holeTypes.length; i++) {
    var ht = holeTypes[i];
    addHoleTypeRow(ht.patternId || "", ht.isLineDrill, ht.holes, ht.drillMeters, ht.expMass, ht.pctOfBlock);
  }
  recalcHoleTypes();
}

// ============================================================
//  DROPDOWN HELPERS
// ============================================================

// Step 5) Populate predecessor dropdown (excluding the named blast)
function populatePredecessorDropdown(excludeName) {
  var sel = document.getElementById("fDepPredecessor");
  sel.innerHTML = "<option value=\"\">\u2014 None \u2014</option>";
  APP.blasts.forEach(function(b) {
    if (b.name !== excludeName) {
      var opt = document.createElement("option");
      opt.value = b.name;
      opt.textContent = b.name;
      sel.appendChild(opt);
    }
  });
}

// Step 5b) Populate drill assignment multi-select
function populateDrillDropdown(selectedIds) {
  var sel = document.getElementById("fAssignedDrills");
  sel.innerHTML = "";
  drills.forEach(function(d) {
    var opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.id + " (" + d.type + ", " + d.minDiam + "-" + d.maxDiam + "mm, " + (d.rateM_per_day || 0) + " m/hr)";
    if (selectedIds && selectedIds.indexOf(d.id) !== -1) opt.selected = true;
    sel.appendChild(opt);
  });
}

// Step 5c) Populate MPU assignment multi-select
function populateMPUDropdown(selectedIds) {
  var sel = document.getElementById("fAssignedMPUs");
  sel.innerHTML = "";
  mpus.forEach(function(m) {
    var opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = m.id + " (" + m.type + ", " + m.rateKg_per_day + " kg/day)";
    if (selectedIds && selectedIds.indexOf(m.id) !== -1) opt.selected = true;
    sel.appendChild(opt);
  });
}

// Step 5d) Populate ancillary equipment multi-select
function populateAncillaryDropdown(selectedIds) {
  var sel = document.getElementById("fAssignedAncillary");
  if (!sel) return;
  sel.innerHTML = "";
  ancillary.forEach(function(a) {
    var opt = document.createElement("option");
    opt.value = a.id;
    opt.textContent = a.id + " (" + a.type + ")";
    if (selectedIds && selectedIds.indexOf(a.id) !== -1) opt.selected = true;
    sel.appendChild(opt);
  });
}

// ============================================================
//  SHOW / EDIT / SAVE
// ============================================================

// Step 5b) Toggle decouple field visibility based on noDrill/noLoad/noBlast
function toggleDecoupleUI() {
  var noDrill = document.getElementById("fNoDrill").checked;
  var noLoad = document.getElementById("fNoLoad").checked;
  var noBlast = document.getElementById("fNoBlast").checked;

  var drillStartWrap = document.getElementById("fDrillStartWrap");
  var drillTimeWrap = document.getElementById("fDrillStartTimeWrap");
  var loadStartRow = document.getElementById("fLoadStartRow");
  var blastDateWrap = document.getElementById("fBlastDateWrap");

  if (drillStartWrap) drillStartWrap.style.display = noDrill ? "none" : "";
  if (drillTimeWrap) drillTimeWrap.style.display = noDrill ? "none" : "";

  // Step 5b-ii) Show manual loadStart when noDrill, show manual blastDate when noLoad
  var showManualRow = noDrill || noBlast;
  if (loadStartRow) loadStartRow.style.display = showManualRow ? "" : "none";
  if (blastDateWrap) blastDateWrap.style.display = (noDrill && !noBlast) ? "" : "none";
}

// Step 5c) Populate the Block Statistics tab from solidStats
function populateSolidStats(stats) {
  var tabBtn = document.getElementById("blastTabStatsBtn");
  var tbody = document.getElementById("solidStatsRows");
  var content = document.getElementById("solidStatsContent");
  var empty = document.getElementById("solidStatsEmpty");
  if (!tbody) return;

  // Step 5c-i) Show/hide the tab button based on whether stats exist
  if (!stats) {
    if (tabBtn) tabBtn.style.display = "none";
    if (content) content.style.display = "none";
    if (empty) empty.style.display = "";
    tbody.innerHTML = "";
    return;
  }

  if (tabBtn) tabBtn.style.display = "";
  if (content) content.style.display = "";
  if (empty) empty.style.display = "none";
  tbody.innerHTML = "";

  var rowStyle = "border-bottom:1px solid var(--border);";
  var labelStyle = "padding:6px 10px;color:var(--text-muted);";
  var valueStyle = "padding:6px 10px;text-align:right;color:var(--text-primary);font-weight:600;";

  // Step 5c-ii) Mesh quality colours — highlight issues in warm colours
  var openEdgeColor = stats.openEdges > 0 ? "color:#ff9800;" : "";
  var nonManifoldColor = stats.nonManifoldEdges > 0 ? "color:#f44336;" : "";
  var closedColor = stats.closed ? "color:#4caf50;" : "color:#ff9800;";

  var rows = [
    ["Points (pts)", stats.points.toLocaleString()],
    ["Edges (segs)", stats.edges.toLocaleString()],
    ["Faces (tris)", stats.faces.toLocaleString()],
    ["Normal Dir.", stats.normalDir],
    ["Closed", stats.closed ? "Yes" : "No", closedColor],
    ["Open Edges", stats.openEdges.toLocaleString(), openEdgeColor],
    ["Non-manifold Edges", stats.nonManifoldEdges.toLocaleString(), nonManifoldColor],
    ["XY Area (m\u00B2)", stats.xyArea.toLocaleString()],
    ["YZ Area (m\u00B2)", stats.yzArea.toLocaleString()],
    ["XZ Area (m\u00B2)", stats.xzArea.toLocaleString()],
    ["3D Area (m\u00B2)", stats.area3d.toLocaleString()],
    ["Volume (m\u00B3)", stats.volume.toLocaleString()]
  ];

  for (var i = 0; i < rows.length; i++) {
    var tr = document.createElement("tr");
    tr.style.cssText = rowStyle;
    var td1 = document.createElement("td");
    td1.style.cssText = labelStyle;
    td1.textContent = rows[i][0];
    var td2 = document.createElement("td");
    td2.style.cssText = valueStyle + (rows[i][2] || "");
    td2.textContent = rows[i][1];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }
}

// ============================================================
//  DEPTH PROFILE & AUTO-POPULATE
// ============================================================

// Step 5e) Show or hide the depth profile panel and auto-populate button
function populateDepthProfile(blastName) {
  var panel = document.getElementById("depthProfilePanel");
  var content = document.getElementById("depthProfileContent");
  var btn = document.getElementById("btnAutoDepth");
  if (!panel || !content || !btn) return;

  // Step 5e-i) Look up matching solid with depthBinData
  var solid = findMatchingSolid(blastName);
  var depthBinData = null;
  if (solid && solid.depthBinData) depthBinData = solid.depthBinData;

  // Step 5e-ii) Also check the blast itself for persisted bins
  if (!depthBinData) {
    var blast = APP.blasts.find(function(b) { return b.name === blastName; });
    if (blast && blast.depthBinData) depthBinData = blast.depthBinData;
  }

  if (depthBinData && depthBinData.depthBins && depthBinData.depthBins.length > 0) {
    panel.style.display = "";
    btn.style.display = "";
    content.innerHTML = renderDepthProfilePanel(depthBinData);
    btn._depthBinData = depthBinData;
  } else {
    panel.style.display = "none";
    btn.style.display = "none";
    btn._depthBinData = null;
  }
}

// Step 5f) Auto-populate holeType rows from depth bins.
//  Creates one row per significant bin (areaPct >= 5%), allocating
//  holes proportionally based on the first pattern in the library.
function autoPopulateFromDepth() {
  var btn = document.getElementById("btnAutoDepth");
  if (!btn || !btn._depthBinData) return;

  var depthBinData = btn._depthBinData;
  var bins = depthBinData.depthBins;

  // Step 5f-i) Filter bins to significant ones (>= 5% area)
  var significantBins = [];
  var mergeTarget = null;
  for (var i = 0; i < bins.length; i++) {
    if (bins[i].areaPct >= 5) {
      significantBins.push({
        minDepth: bins[i].minDepth,
        maxDepth: bins[i].maxDepth,
        areaPct: bins[i].areaPct,
        avgDepth: bins[i].avgDepth,
        cellCount: bins[i].cellCount
      });
      mergeTarget = significantBins.length - 1;
    } else if (mergeTarget !== null) {
      // Step 5f-ii) Merge small bins into nearest significant bin
      significantBins[mergeTarget].areaPct += bins[i].areaPct;
      significantBins[mergeTarget].maxDepth = bins[i].maxDepth;
      significantBins[mergeTarget].avgDepth = (significantBins[mergeTarget].avgDepth + bins[i].avgDepth) / 2;
    }
  }

  if (significantBins.length === 0) {
    alert("No significant depth bins found (all below 5% area threshold).");
    return;
  }

  // Step 5f-iii) Check if user wants to replace existing rows
  var existingRows = document.getElementById("holeTypeRows").querySelectorAll("tr");
  if (existingRows.length > 0) {
    if (!confirm("This will replace the existing " + existingRows.length + " hole type row(s). Continue?")) return;
  }

  // Step 5f-iv) Need at least one pattern to allocate against
  if (APP.patterns.length === 0) {
    alert("No patterns in the library. Add at least one pattern first.");
    return;
  }

  // Step 5f-v) Use the first PRODUCTION pattern (or first pattern if none)
  var basePat = APP.patterns.find(function(p) { return p.type === "PRODUCTION"; }) || APP.patterns[0];

  // Step 5f-vi) Get total surface area from the form
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;

  // Step 5f-vii) Clear and rebuild rows
  clearHoleTypeTable();

  // Step 5f-viii) Normalise bin percentages to sum to 100
  var totalPct = 0;
  for (var i = 0; i < significantBins.length; i++) totalPct += significantBins[i].areaPct;
  var scale = totalPct > 0 ? (100 / totalPct) : 1;

  for (var i = 0; i < significantBins.length; i++) {
    var bin = significantBins[i];
    var pct = Math.round(bin.areaPct * scale);

    // Step 5f-ix) Calculate holes from surface area proportion
    var holes = 0;
    if (area > 0 && basePat.burden > 0 && basePat.spacing > 0) {
      holes = Math.round((pct / 100) * area / (basePat.burden * basePat.spacing));
    }

    // Step 5f-x) Calculate depth from bin avgDepth adjusted for angle + subdrill
    var angleRad = ((basePat.holeAngle || 90) * Math.PI) / 180;
    var sinAngle = Math.sin(angleRad);
    if (sinAngle < 0.01) sinAngle = 1;
    var depth = (bin.avgDepth / sinAngle) + (basePat.subdrill || 0);
    var meters = holes * depth;
    var mass = holes > 0 ? (holes * basePat.burden * basePat.spacing * bin.avgDepth * basePat.pf) : 0;

    addHoleTypeRow(basePat.id, false, holes, Math.round(meters * 10) / 10, Math.round(mass), pct);
  }

  recalcHoleTypes();
}

// Step 6) Show the Add Blast modal with empty fields
function showAddBlastModal() {
  APP.editingBlastIdx = null;
  document.getElementById("blastModalTitle").textContent = "Add Blast";
  document.getElementById("blastModalSave").textContent = "Add Blast";
  document.getElementById("fBlastName").value = "";
  document.getElementById("fBlastMode").value = "Auto";
  document.getElementById("fSurfaceArea").value = "";
  document.getElementById("fDrillStart").value = isoDate(APP.planStart);
  document.getElementById("fDrillStartTime").value = "06:00";
  document.getElementById("fNoDrill").checked = false;
  document.getElementById("fNoLoad").checked = false;
  document.getElementById("fNoBlast").checked = false;
  document.getElementById("fUseBlockDepth").checked = false;
  document.getElementById("fLoadStart").value = "";
  var fBlastDateMan = document.getElementById("fBlastDateManual");
  if (fBlastDateMan) fBlastDateMan.value = "";
  toggleDecoupleUI();
  document.getElementById("fLoadRate").value = 100000;
  document.getElementById("fVolume").value = "";
  document.getElementById("fExpMass").value = "";
  // Step 6a) Clear hole type table and add one blank row
  clearHoleTypeTable();
  // Step 6b) Dependency fields blank = use global
  document.getElementById("fDepDrillForLoad").value = "";
  document.getElementById("fDepDrillForBlast").value = "";
  document.getElementById("fDepMinLead").value = "";
  populatePredecessorDropdown(null);
  document.getElementById("fDepPredecessor").value = "";
  document.getElementById("fDepPredType").value = "blast-before-drill";
  document.getElementById("fDepDrillForLoad").placeholder = "Global: " + Math.round(APP.deps.drillPctForLoad * 100) + "%";
  document.getElementById("fDepDrillForBlast").placeholder = "Global: " + Math.round(APP.deps.drillPctForBlast * 100) + "%";
  document.getElementById("fDepMinLead").placeholder = "Global: " + APP.deps.minLeadDays;
  populateDrillDropdown([]);
  populateMPUDropdown([]);
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  if (prepStartEl) prepStartEl.value = "";
  if (prepDaysEl) prepDaysEl.value = "";
  populateAncillaryDropdown([]);
  document.getElementById("fDrillProgress").value = "";
  document.getElementById("fLoadProgress").value = "";
  populateSolidStats(null);
  populateDepthProfile("");
  updateDrillDayEstimate();
  openModal("blastModal");
}

// Step 7) Edit an existing blast
function editBlast(idx) {
  APP.editingBlastIdx = idx;
  var b = APP.blasts[idx];
  document.getElementById("blastModalTitle").textContent = "Edit Blast: " + b.name;
  document.getElementById("blastModalSave").textContent = "Save Changes";
  document.getElementById("fBlastName").value = b.name;
  document.getElementById("fBlastMode").value = b.mode;
  document.getElementById("fSurfaceArea").value = b.surfaceArea || "";
  document.getElementById("fDrillStart").value = b.drillStart || "";
  document.getElementById("fDrillStartTime").value = b.drillStartTime || "06:00";
  document.getElementById("fNoDrill").checked = !!b.noDrill;
  document.getElementById("fNoLoad").checked = !!b.noLoad;
  document.getElementById("fNoBlast").checked = !!b.noBlast;
  document.getElementById("fUseBlockDepth").checked = !!b.useBlockDepth;
  document.getElementById("fLoadStart").value = b.loadStart || "";
  var fBlastDateMan2 = document.getElementById("fBlastDateManual");
  if (fBlastDateMan2) fBlastDateMan2.value = b.blastDate || "";
  toggleDecoupleUI();
  document.getElementById("fLoadRate").value = b.loadRate;
  document.getElementById("fVolume").value = b.volume || "";
  document.getElementById("fExpMass").value = b.expMass || "";
  // Step 7a) Populate hole type table from blast
  populateHoleTypeTable(b.holeTypes || []);
  // Step 7b) Dependency fields
  var bd = b.deps || {};
  document.getElementById("fDepDrillForLoad").value = (bd.drillPctForLoad !== null && bd.drillPctForLoad !== undefined) ? Math.round(bd.drillPctForLoad * 100) : "";
  document.getElementById("fDepDrillForBlast").value = (bd.drillPctForBlast !== null && bd.drillPctForBlast !== undefined) ? Math.round(bd.drillPctForBlast * 100) : "";
  document.getElementById("fDepMinLead").value = (bd.minLeadDays !== null && bd.minLeadDays !== undefined) ? bd.minLeadDays : "";
  populatePredecessorDropdown(b.name);
  document.getElementById("fDepPredecessor").value = bd.predecessor || "";
  document.getElementById("fDepPredType").value = bd.predType || "blast-before-drill";
  document.getElementById("fDepDrillForLoad").placeholder = "Global: " + Math.round(APP.deps.drillPctForLoad * 100) + "%";
  document.getElementById("fDepDrillForBlast").placeholder = "Global: " + Math.round(APP.deps.drillPctForBlast * 100) + "%";
  document.getElementById("fDepMinLead").placeholder = "Global: " + APP.deps.minLeadDays;
  populateDrillDropdown(b.assignedDrills || []);
  populateMPUDropdown(b.assignedMPUs || (b.assignedMPU ? [b.assignedMPU] : []));
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  if (prepStartEl) prepStartEl.value = b.prepStart || "";
  if (prepDaysEl) prepDaysEl.value = b.prepDays || "";
  populateAncillaryDropdown(b.assignedAncillary || []);
  document.getElementById("fDrillProgress").value = b.drillProgress ? Math.round(b.drillProgress * 100) : "";
  document.getElementById("fLoadProgress").value = b.loadProgress ? Math.round(b.loadProgress * 100) : "";
  populateSolidStats(b.solidStats || null);
  populateDepthProfile(b.name);
  updateDrillDayEstimate();
  openModal("blastModal");
}

// Step 8) Save blast from modal form
function saveBlast() {
  var name = document.getElementById("fBlastName").value.trim();
  if (!name) { alert("Blast name required"); return; }

  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;
  var expMass = parseFloat(document.getElementById("fExpMass").value) || 0;

  // Step 8a) Try to auto-fill volume from matched solid if not set
  var matchedSolid = findMatchingSolid(name);
  if (!volume && matchedSolid) {
    volume = matchedSolid.volume || 0;
    if (!area && matchedSolid.surfaceArea) {
      area = matchedSolid.surfaceArea;
    }
  }

  // Step 8b) Collect hole types from table
  var holeTypes = collectHoleTypes();

  // Step 8c) Sum drill meters and explosive mass from hole types
  var totalMeters = 0;
  var totalExpMass = 0;
  for (var h = 0; h < holeTypes.length; h++) {
    totalMeters += holeTypes[h].drillMeters || 0;
    totalExpMass += holeTypes[h].expMass || 0;
  }
  if (!expMass && totalExpMass > 0) expMass = totalExpMass;

  // Step 8d) Auto-calc volume from first pattern if not set
  if (!volume && area > 0 && holeTypes.length > 0) {
    var firstPat = APP.patterns.find(function(p) { return p.id === holeTypes[0].patternId; });
    if (firstPat) volume = area * firstPat.benchHt;
  }

  var loadRate = parseFloat(document.getElementById("fLoadRate").value) || 100000;
  var noDrill = document.getElementById("fNoDrill").checked;
  var noLoad = document.getElementById("fNoLoad").checked;
  var noBlast = document.getElementById("fNoBlast").checked;
  var useBlockDepth = document.getElementById("fUseBlockDepth").checked;
  var drillStart = noDrill ? "" : document.getElementById("fDrillStart").value;
  var drillStartTime = document.getElementById("fDrillStartTime").value || "06:00";
  var manualLoadStart = noDrill ? (document.getElementById("fLoadStart").value || "") : "";
  var manualBlastDate = (noDrill && !noBlast) ? (document.getElementById("fBlastDateManual").value || "") : "";

  // Step 8e) Calculate drill days from assigned drills' equipment rates
  var assignedDrills = [];
  var drillSelect = document.getElementById("fAssignedDrills");
  for (var si = 0; si < drillSelect.selectedOptions.length; si++) {
    assignedDrills.push(drillSelect.selectedOptions[si].value);
  }

  var effectiveHrs = APP.rigHours * APP.availability * APP.utilisation;
  var totalDailyM = 0;
  for (var di = 0; di < assignedDrills.length; di++) {
    var drillObj = drills.find(function(d) { return d.id === assignedDrills[di]; });
    if (drillObj) totalDailyM += (drillObj.rateM_per_day || 0) * effectiveHrs;
  }
  // Step 8e-i) drillDays: at least 1 when there are meters to drill
  var drillDays = 1;
  if (totalMeters > 0 && totalDailyM > 0) {
    drillDays = Math.ceil(totalMeters / totalDailyM);
  } else if (totalMeters > 0) {
    drillDays = 365;
  }
  var loadDays = (loadRate > 0 && expMass > 0) ? Math.max(1, Math.ceil(expMass / loadRate)) : 1;

  // Step 8f) Read assigned MPUs
  var assignedMPUs = [];
  var mpuSelect = document.getElementById("fAssignedMPUs");
  for (var mi = 0; mi < mpuSelect.selectedOptions.length; mi++) {
    assignedMPUs.push(mpuSelect.selectedOptions[mi].value);
  }

  // Step 8g) Read dependency overrides
  var fDepDL = document.getElementById("fDepDrillForLoad").value;
  var fDepDB = document.getElementById("fDepDrillForBlast").value;
  var fDepML = document.getElementById("fDepMinLead").value;
  var fDepPred = document.getElementById("fDepPredecessor").value;
  var fDepPredType = document.getElementById("fDepPredType").value;
  var blastDeps = {
    drillPctForLoad:  fDepDL !== "" ? parseFloat(fDepDL) / 100 : null,
    drillPctForBlast: fDepDB !== "" ? parseFloat(fDepDB) / 100 : null,
    loadPctForBlast:  null,
    minLeadDays:      fDepML !== "" ? parseInt(fDepML) : null,
    predecessor:      fDepPred || null,
    predType:         fDepPredType || "blast-before-drill",
  };

  // Step 8h) Read pattern preparation fields
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  var prepStart = prepStartEl ? prepStartEl.value : "";
  var prepDays = prepDaysEl ? (parseInt(prepDaysEl.value) || 0) : 0;

  var assignedAncillary = [];
  var ancSelect = document.getElementById("fAssignedAncillary");
  if (ancSelect) {
    for (var ai = 0; ai < ancSelect.selectedOptions.length; ai++) {
      assignedAncillary.push(ancSelect.selectedOptions[ai].value);
    }
  }

  // Step 8i) Build blast object
  var blastData = {
    name: name,
    mode: document.getElementById("fBlastMode").value,
    surfaceArea: area,
    loadRate: loadRate,
    volume: volume,
    expMass: expMass,
    noDrill: noDrill,
    noLoad: noLoad,
    noBlast: noBlast,
    useBlockDepth: useBlockDepth,
    drillStart: drillStart,
    drillStartTime: drillStartTime,
    drillDays: noDrill ? 0 : drillDays,
    loadStart: noDrill ? (manualLoadStart || null) : null,
    loadStartManual: noDrill ? true : false,
    loadDays: noLoad ? 0 : loadDays,
    blastDate: manualBlastDate || null,
    blastDateManual: manualBlastDate ? true : false,
    status: "planned",
    deps: blastDeps,
    assignedDrills: assignedDrills,
    assignedMPUs: assignedMPUs,
    prepStart: prepStart || null,
    prepDays: prepDays || 0,
    assignedAncillary: assignedAncillary,
    holeTypes: holeTypes,
    solidBounds: matchedSolid ? matchedSolid.bounds : null,
    solidBenchHt: matchedSolid ? matchedSolid.benchHt : null,
    depthBinData: matchedSolid ? matchedSolid.depthBinData : null,
    drillProgress: parseFloat(document.getElementById("fDrillProgress").value) / 100 || 0,
    loadProgress: parseFloat(document.getElementById("fLoadProgress").value) / 100 || 0
  };

  // Step 8j) Save or update — preserve existing data
  if (APP.editingBlastIdx !== null) {
    var prev = APP.blasts[APP.editingBlastIdx];
    blastData.status = prev.status;
    if (!blastData.solidBounds && prev.solidBounds) blastData.solidBounds = prev.solidBounds;
    if (!blastData.solidBenchHt && prev.solidBenchHt) blastData.solidBenchHt = prev.solidBenchHt;
    if (prev.solidStats) blastData.solidStats = prev.solidStats;
    if (!blastData.depthBinData && prev.depthBinData) blastData.depthBinData = prev.depthBinData;
    if (!blastData.prepStart && prev.prepStart) blastData.prepStart = prev.prepStart;
    if (!blastData.prepDays && prev.prepDays) blastData.prepDays = prev.prepDays;
    if (blastData.assignedAncillary.length === 0 && prev.assignedAncillary) blastData.assignedAncillary = prev.assignedAncillary;
    if (prev.drillBlocks) blastData.drillBlocks = prev.drillBlocks;
    APP.blasts[APP.editingBlastIdx] = blastData;
  } else {
    APP.blasts.push(blastData);
  }

  closeModal("blastModal");
  recalcDependencies();
  debouncedSave();
  renderGantt();
  renderBlasts();
}

// Step 9) Initialise modal button handlers
function initBlastModal() {
  document.getElementById("btnAddBlast").addEventListener("click", showAddBlastModal);
  document.getElementById("blastModalSave").addEventListener("click", saveBlast);
  document.getElementById("btnCloseBlastModal").addEventListener("click", function() { closeModal("blastModal"); });
  document.getElementById("btnCancelBlastModal").addEventListener("click", function() { closeModal("blastModal"); });

  // Step 9-DEPTH) Auto-populate from Depth button
  var autoDepthBtn = document.getElementById("btnAutoDepth");
  if (autoDepthBtn) {
    autoDepthBtn.addEventListener("click", autoPopulateFromDepth);
  }

  // Step 9a) Add Pattern button — new row gets the remaining % to reach 100
  document.getElementById("btnAddHoleType").addEventListener("click", function() {
    var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
    var usedPct = 0;
    for (var i = 0; i < rows.length; i++) {
      usedPct += parseFloat(rows[i].querySelector(".ht-pct").value) || 0;
    }
    var remainPct = Math.max(0, Math.round(100 - usedPct));
    addHoleTypeRow("", false, 0, 0, 0, remainPct);
  });

  // Step 9b) Toggle decouple field visibility on any checkbox change
  document.getElementById("fNoDrill").addEventListener("change", toggleDecoupleUI);
  document.getElementById("fNoLoad").addEventListener("change", toggleDecoupleUI);
  document.getElementById("fNoBlast").addEventListener("change", toggleDecoupleUI);

  // Step 9c) Update drill-day estimate when drill assignment changes
  document.getElementById("fAssignedDrills").addEventListener("change", function() {
    updateDrillDayEstimate();
  });

  // Step 9c) Recalculate holes from % when surface area changes
  document.getElementById("fSurfaceArea").addEventListener("input", function() {
    recalcHolesFromPct();
  });

  // Step 9d) Recalculate when "Use Block Depth" is toggled or volume changes
  document.getElementById("fUseBlockDepth").addEventListener("change", function() {
    recalcHoleTypes();
  });
  document.getElementById("fVolume").addEventListener("input", function() {
    if (document.getElementById("fUseBlockDepth").checked) {
      recalcHoleTypes();
    }
  });
}

export { showAddBlastModal, editBlast, saveBlast, initBlastModal };
