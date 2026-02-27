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

// Step 1) Calculate hole depth from pattern angle
function calcHoleDepth(pattern) {
  var angle = pattern.holeAngle || 90;
  var radians = angle * Math.PI / 180;
  var depth = pattern.benchHt / Math.sin(radians) + (pattern.subdrill || 0);
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
      tr.querySelector(".ht-depth").textContent = calcHoleDepth(p).toFixed(2);
    }
    // Step 2b) Recalculate holes from current % when pattern changes
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
//  holes = (surfaceArea * pct/100) / (burden * spacing)
function recalcHolesFromPct() {
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");

  for (var i = 0; i < rows.length; i++) {
    var tr = rows[i];
    var patSel = tr.querySelector(".ht-pattern");
    var pctInp = tr.querySelector(".ht-pct");
    var holesInp = tr.querySelector(".ht-holes");

    var p = APP.patterns.find(function(pp) { return pp.id === patSel.value; });
    var pct = parseFloat(pctInp.value) || 0;

    if (p && area > 0 && pct > 0) {
      var patternArea = area * pct / 100;
      var holes = Math.round(patternArea / (p.burden * p.spacing));
      holesInp.value = holes;
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

// Step 3) Recalculate all hole type rows and update totals
function recalcHoleTypes() {
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
  var totalMeters = 0;
  var totalMass = 0;
  var totalPct = 0;

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
    totalPct += parseFloat(pctInp.value) || 0;

    if (p) {
      // Step 3a) Pattern is known — recalculate from pattern specs
      var depth = calcHoleDepth(p);
      depthCell.textContent = depth.toFixed(2);
      var meters = holes * depth;
      var mass = 0;
      if (holes > 0) {
        var isLine = tr.querySelector(".ht-line").checked;
        if (isLine) {
          mass = meters * p.pf;
        } else {
          mass = holes * p.burden * p.spacing * p.benchHt * p.pf;
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

// Step 4) Collect hole types from table into array
function collectHoleTypes() {
  var rows = document.getElementById("holeTypeRows").querySelectorAll("tr");
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
      // Step 4a) Pattern exists — calculate from pattern specs
      depth = calcHoleDepth(p);
      meters = holes * depth;
      mass = 0;
      if (holes > 0) {
        if (isLine) {
          mass = meters * p.pf;
        } else {
          mass = holes * p.burden * p.spacing * p.benchHt * p.pf;
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
  document.getElementById("fLoadRate").value = b.loadRate;
  document.getElementById("fVolume").value = b.volume || "";
  document.getElementById("fExpMass").value = b.expMass || "";
  // Step 7a) Populate hole type table from blast
  populateHoleTypeTable(b.holeTypes || []);
  // Step 7b) Dependency fields
  var bd = b.deps || {};
  document.getElementById("fDepDrillForLoad").value = (bd.drillPctForLoad !== null && bd.drillPctForLoad !== undefined) ? bd.drillPctForLoad : "";
  document.getElementById("fDepDrillForBlast").value = (bd.drillPctForBlast !== null && bd.drillPctForBlast !== undefined) ? bd.drillPctForBlast : "";
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
  var drillStart = document.getElementById("fDrillStart").value;
  var drillStartTime = document.getElementById("fDrillStartTime").value || "06:00";

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
    drillPctForLoad:  fDepDL !== "" ? parseFloat(fDepDL) : null,
    drillPctForBlast: fDepDB !== "" ? parseFloat(fDepDB) : null,
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
    drillStart: drillStart,
    drillStartTime: drillStartTime,
    drillDays: drillDays,
    loadStart: null,
    loadDays: loadDays,
    blastDate: null,
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
    drillProgress: parseFloat(document.getElementById("fDrillProgress").value) / 100 || 0,
    loadProgress: parseFloat(document.getElementById("fLoadProgress").value) / 100 || 0
  };

  // Step 8j) Save or update — preserve existing data
  if (APP.editingBlastIdx !== null) {
    var prev = APP.blasts[APP.editingBlastIdx];
    blastData.status = prev.status;
    if (!blastData.solidBounds && prev.solidBounds) blastData.solidBounds = prev.solidBounds;
    if (!blastData.solidBenchHt && prev.solidBenchHt) blastData.solidBenchHt = prev.solidBenchHt;
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

  // Step 9b) Update drill-day estimate when drill assignment changes
  document.getElementById("fAssignedDrills").addEventListener("change", function() {
    updateDrillDayEstimate();
  });

  // Step 9c) Recalculate holes from % when surface area changes
  document.getElementById("fSurfaceArea").addEventListener("input", function() {
    recalcHolesFromPct();
  });
}

export { showAddBlastModal, editBlast, saveBlast, initBlastModal };
