// ============================================================
//  BLAST MODAL
//  Add / Edit blast dialog logic
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, ancillary, canDrillDiameter } from "../state/equipmentState.js";
import { openModal, closeModal } from "../ui/modal.js";
import { isoDate } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";

// Step 0) Find a matching solid in APP.kirraProjectSolids by blast name
function findMatchingSolid(blastName) {
  var solids = APP.kirraProjectSolids || [];
  for (var i = 0; i < solids.length; i++) {
    if (solids[i].name === blastName) return solids[i];
  }
  return null;
}

// Step 1) Populate the pattern dropdown from APP.patterns
function populatePatternDropdown() {
  var sel = document.getElementById("fPattern");
  sel.innerHTML = "<option value=\"\">-- Select Pattern --</option>";
  APP.patterns.forEach(function(p) {
    var opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.id + " \u2014 " + p.type + " (PF: " + p.pf + ")";
    sel.appendChild(opt);
  });
}

// Step 2) Populate predecessor dropdown (excluding the named blast)
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

// Step 2b) Populate drill assignment multi-select
function populateDrillDropdown(selectedIds) {
  var sel = document.getElementById("fAssignedDrills");
  sel.innerHTML = "";
  drills.forEach(function(d) {
    var opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.id + " (" + d.type + ", " + d.minDiam + "-" + d.maxDiam + "mm)";
    if (selectedIds && selectedIds.indexOf(d.id) !== -1) opt.selected = true;
    sel.appendChild(opt);
  });
}

// Step 2c) Populate MPU assignment multi-select (migrated from single-select to array)
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

// Step 2d-i) Populate ancillary equipment multi-select for pattern preparation
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

// Step 2d) Check drill compatibility with blast hole diameters and show warnings
function checkDrillCompatibility() {
  var warn = document.getElementById("fDrillCompatWarning");
  var sel = document.getElementById("fAssignedDrills");
  var patId = document.getElementById("fPattern").value;
  var pattern = APP.patterns.find(function(p) { return p.id === patId; });
  if (!pattern || !sel) { warn.style.display = "none"; return; }

  var diamMm = pattern.diam;
  var selectedOpts = sel.selectedOptions;
  var warnings = [];
  for (var i = 0; i < selectedOpts.length; i++) {
    var drill = drills.find(function(d) { return d.id === selectedOpts[i].value; });
    if (drill && !canDrillDiameter(drill, diamMm)) {
      warnings.push(drill.id + " cannot drill " + diamMm + "mm (range: " + drill.minDiam + "-" + drill.maxDiam + "mm)");
    }
  }
  if (warnings.length > 0) {
    warn.textContent = "Warning: " + warnings.join("; ");
    warn.style.display = "block";
  } else {
    warn.style.display = "none";
  }
}

// Step 3) Show the Add Blast modal with empty fields
function showAddBlastModal() {
  APP.editingBlastIdx = null;
  document.getElementById("blastModalTitle").textContent = "Add Blast";
  document.getElementById("blastModalSave").textContent = "Add Blast";
  document.getElementById("fBlastName").value = "";
  document.getElementById("fBlastMode").value = "Manual";
  document.getElementById("fSurfaceArea").value = "";
  document.getElementById("fDrillStart").value = isoDate(APP.planStart);
  document.getElementById("fDrillStartTime").value = "06:00";
  document.getElementById("fPctD65").value = 0;
  document.getElementById("fPctPV").value = 1;
  document.getElementById("fLoadRate").value = 100000;
  document.getElementById("fVolume").value = "";
  document.getElementById("fExpMass").value = "";
  document.getElementById("fRateD65").value = 19;
  document.getElementById("fRatePV").value = 20;
  document.getElementById("fNumD65").value = 0;
  document.getElementById("fNumPV").value = 4;
  // Dependency fields blank = use global
  document.getElementById("fDepDrillForLoad").value = "";
  document.getElementById("fDepDrillForBlast").value = "";
  document.getElementById("fDepMinLead").value = "";
  populatePredecessorDropdown(null);
  document.getElementById("fDepPredecessor").value = "";
  document.getElementById("fDepPredType").value = "blast-before-drill";
  // Update placeholders with current globals
  document.getElementById("fDepDrillForLoad").placeholder = "Global: " + Math.round(APP.deps.drillPctForLoad * 100) + "%";
  document.getElementById("fDepDrillForBlast").placeholder = "Global: " + Math.round(APP.deps.drillPctForBlast * 100) + "%";
  document.getElementById("fDepMinLead").placeholder = "Global: " + APP.deps.minLeadDays;
  populatePatternDropdown();
  populateDrillDropdown([]);
  // Step 3a) MPU multi-select — empty array for new blast
  populateMPUDropdown([]);
  // Step 3b) Pattern Preparation fields — default empty
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  if (prepStartEl) prepStartEl.value = "";
  if (prepDaysEl) prepDaysEl.value = "";
  populateAncillaryDropdown([]);
  // Step 3c) Progress fields — blank for new blast
  document.getElementById("fDrillProgress").value = "";
  document.getElementById("fLoadProgress").value = "";
  openModal("blastModal");
}

// Step 4) Edit an existing blast
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
  document.getElementById("fPctD65").value = b.pctD65;
  document.getElementById("fPctPV").value = b.pctPV;
  document.getElementById("fLoadRate").value = b.loadRate;
  document.getElementById("fVolume").value = b.volume || "";
  document.getElementById("fExpMass").value = b.expMass || "";
  document.getElementById("fRateD65").value = b.rateD65;
  document.getElementById("fRatePV").value = b.ratePV;
  document.getElementById("fNumD65").value = b.numD65;
  document.getElementById("fNumPV").value = b.numPV;
  // Dependency fields
  var bd = b.deps || {};
  document.getElementById("fDepDrillForLoad").value = (bd.drillPctForLoad !== null && bd.drillPctForLoad !== undefined) ? bd.drillPctForLoad : "";
  document.getElementById("fDepDrillForBlast").value = (bd.drillPctForBlast !== null && bd.drillPctForBlast !== undefined) ? bd.drillPctForBlast : "";
  document.getElementById("fDepMinLead").value = (bd.minLeadDays !== null && bd.minLeadDays !== undefined) ? bd.minLeadDays : "";
  populatePredecessorDropdown(b.name);
  document.getElementById("fDepPredecessor").value = bd.predecessor || "";
  document.getElementById("fDepPredType").value = bd.predType || "blast-before-drill";
  // Update placeholders
  document.getElementById("fDepDrillForLoad").placeholder = "Global: " + Math.round(APP.deps.drillPctForLoad * 100) + "%";
  document.getElementById("fDepDrillForBlast").placeholder = "Global: " + Math.round(APP.deps.drillPctForBlast * 100) + "%";
  document.getElementById("fDepMinLead").placeholder = "Global: " + APP.deps.minLeadDays;
  populatePatternDropdown();
  document.getElementById("fPattern").value = b.pattern || "";
  populateDrillDropdown(b.assignedDrills || []);
  // Step 4a) MPU multi-select — backward compat: read assignedMPUs or legacy assignedMPU
  populateMPUDropdown(b.assignedMPUs || (b.assignedMPU ? [b.assignedMPU] : []));
  // Step 4b) Pattern Preparation fields
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  if (prepStartEl) prepStartEl.value = b.prepStart || "";
  if (prepDaysEl) prepDaysEl.value = b.prepDays || "";
  populateAncillaryDropdown(b.assignedAncillary || []);
  // Step 4c) Progress fields
  document.getElementById("fDrillProgress").value = b.drillProgress ? Math.round(b.drillProgress * 100) : "";
  document.getElementById("fLoadProgress").value = b.loadProgress ? Math.round(b.loadProgress * 100) : "";
  openModal("blastModal");
}

// Step 5) Save blast from modal form
function saveBlast() {
  var name = document.getElementById("fBlastName").value.trim();
  if (!name) { alert("Blast name required"); return; }

  var patId = document.getElementById("fPattern").value;
  var pattern = APP.patterns.find(function(p) { return p.id === patId; });
  var area = parseFloat(document.getElementById("fSurfaceArea").value) || 0;
  var volume = parseFloat(document.getElementById("fVolume").value) || 0;
  var expMass = parseFloat(document.getElementById("fExpMass").value) || 0;

  // Step 5a) Try to auto-fill volume from matched solid if not set
  var matchedSolid = findMatchingSolid(name);
  if (!volume && matchedSolid) {
    volume = matchedSolid.volume || 0;
    if (!area && matchedSolid.surfaceArea) {
      area = matchedSolid.surfaceArea;
    }
  }

  // Step 5a-ii) Auto-calc from pattern if still empty
  if (pattern && area > 0 && !volume) {
    volume = area * pattern.benchHt;
  }
  if (pattern && volume > 0 && !expMass) {
    expMass = volume * pattern.pf;
  }

  // Step 5b) Estimate drill meters
  var drillMeters = 0;
  if (pattern && area > 0) {
    var holesEst = area / (pattern.burden * pattern.spacing);
    var holeDepth = pattern.benchHt + pattern.subdrill;
    drillMeters = holesEst * holeDepth;
  }

  var loadRate = parseFloat(document.getElementById("fLoadRate").value) || 100000;
  var drillStart = document.getElementById("fDrillStart").value;
  var drillStartTime = document.getElementById("fDrillStartTime").value || "06:00";
  var rateD65 = parseFloat(document.getElementById("fRateD65").value) || 19;
  var ratePV = parseFloat(document.getElementById("fRatePV").value) || 20;
  var numD65 = parseInt(document.getElementById("fNumD65").value) || 0;
  var numPV = parseInt(document.getElementById("fNumPV").value) || 0;
  var pctD65 = parseFloat(document.getElementById("fPctD65").value) || 0;
  var pctPV = parseFloat(document.getElementById("fPctPV").value) || 0;

  // Step 5c) Estimate durations — rate is m/hr per rig, multiply by effective hours
  var totalMeters = drillMeters || 0;
  var d65Meters = totalMeters * pctD65;
  var pvMeters = totalMeters * pctPV;

  var effectiveHrs = APP.rigHours * APP.availability * APP.utilisation;
  var d65DailyM = numD65 > 0 ? rateD65 * numD65 * effectiveHrs : 0;
  var pvDailyM = numPV > 0 ? ratePV * numPV * effectiveHrs : 0;
  var totalDailyM = d65DailyM + pvDailyM;
  var drillDays = totalDailyM > 0 ? Math.ceil(totalMeters / totalDailyM) : 1;
  var loadDays = loadRate > 0 ? Math.ceil(expMass / loadRate) : 1;

  // Step 5d) Read dependency overrides (blank = null = use global)
  var fDepDL = document.getElementById("fDepDrillForLoad").value;
  var fDepDB = document.getElementById("fDepDrillForBlast").value;
  var fDepML = document.getElementById("fDepMinLead").value;
  var fDepPred = document.getElementById("fDepPredecessor").value;
  var fDepPredType = document.getElementById("fDepPredType").value;

  var blastDeps = {
    drillPctForLoad:  fDepDL !== "" ? parseFloat(fDepDL) : null,
    drillPctForBlast: fDepDB !== "" ? parseFloat(fDepDB) : null,
    loadPctForBlast:  null, // Hard constraint: always 100%
    minLeadDays:      fDepML !== "" ? parseInt(fDepML) : null,
    predecessor:      fDepPred || null,
    predType:         fDepPredType || "blast-before-drill",
  };

  // Step 5e) Build hole types array
  var holeTypes = [];
  if (pattern) {
    holeTypes.push({
      type: pattern.type,
      diam: pattern.diam / 1000,
      burden: pattern.burden,
      spacing: pattern.spacing,
      holes: area > 0 ? Math.round(area / (pattern.burden * pattern.spacing)) : 0,
      drillMeters: drillMeters,
      expMass: expMass
    });
  }

  // Step 5e-ii) Read pattern preparation fields
  var prepStartEl = document.getElementById("fPrepStart");
  var prepDaysEl = document.getElementById("fPrepDays");
  var prepStart = prepStartEl ? prepStartEl.value : "";
  var prepDays = prepDaysEl ? (parseInt(prepDaysEl.value) || 0) : 0;

  // Step 5e-iii) Read assigned ancillary equipment
  var assignedAncillary = [];
  var ancSelect = document.getElementById("fAssignedAncillary");
  if (ancSelect) {
    for (var ai = 0; ai < ancSelect.selectedOptions.length; ai++) {
      assignedAncillary.push(ancSelect.selectedOptions[ai].value);
    }
  }

  // Step 5f) Read assigned equipment
  var assignedDrills = [];
  var drillSelect = document.getElementById("fAssignedDrills");
  for (var si = 0; si < drillSelect.selectedOptions.length; si++) {
    assignedDrills.push(drillSelect.selectedOptions[si].value);
  }
  // Step 5f-ii) Read assigned MPUs from multi-select (array)
  var assignedMPUs = [];
  var mpuSelect = document.getElementById("fAssignedMPUs");
  for (var mi = 0; mi < mpuSelect.selectedOptions.length; mi++) {
    assignedMPUs.push(mpuSelect.selectedOptions[mi].value);
  }

  // Step 5g) Build blast object
  var blastData = {
    name: name,
    mode: document.getElementById("fBlastMode").value,
    surfaceArea: area,
    pattern: patId,
    pctD65: pctD65,
    pctPV: pctPV,
    rateD65: rateD65,
    ratePV: ratePV,
    numD65: numD65,
    numPV: numPV,
    loadRate: loadRate,
    d65Meters: d65Meters,
    pvMeters: pvMeters,
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
    // Step 5g-i) Store as array (migrated from single assignedMPU)
    assignedMPUs: assignedMPUs,
    // Step 5g-ii) Pattern preparation phase
    prepStart: prepStart || null,
    prepDays: prepDays || 0,
    assignedAncillary: assignedAncillary,
    holeTypes: holeTypes,
    solidBounds: matchedSolid ? matchedSolid.bounds : null,
    solidBenchHt: matchedSolid ? matchedSolid.benchHt : null,
    // Step 5g-iii) Progress tracking (0.0 to 1.0)
    drillProgress: parseFloat(document.getElementById("fDrillProgress").value) / 100 || 0,
    loadProgress: parseFloat(document.getElementById("fLoadProgress").value) / 100 || 0
  };

  // Step 5h) Save or update — preserve existing solid/spatial data
  if (APP.editingBlastIdx !== null) {
    var prev = APP.blasts[APP.editingBlastIdx];
    blastData.status = prev.status;
    if (!blastData.solidBounds && prev.solidBounds) blastData.solidBounds = prev.solidBounds;
    if (!blastData.solidBenchHt && prev.solidBenchHt) blastData.solidBenchHt = prev.solidBenchHt;
    // Step 5h-i) Preserve prep phase data from previous if not overwritten
    if (!blastData.prepStart && prev.prepStart) blastData.prepStart = prev.prepStart;
    if (!blastData.prepDays && prev.prepDays) blastData.prepDays = prev.prepDays;
    if (blastData.assignedAncillary.length === 0 && prev.assignedAncillary) blastData.assignedAncillary = prev.assignedAncillary;
    // Step 5h-ii) Preserve drillBlocks from previous
    if (prev.drillBlocks) blastData.drillBlocks = prev.drillBlocks;
    APP.blasts[APP.editingBlastIdx] = blastData;
  } else {
    APP.blasts.push(blastData);
  }

  closeModal("blastModal");
  recalcDependencies();
  renderGantt();
  renderBlasts();
}

// Step 6) Initialise modal button handlers
function initBlastModal() {
  document.getElementById("btnAddBlast").addEventListener("click", showAddBlastModal);
  document.getElementById("blastModalSave").addEventListener("click", saveBlast);
  document.getElementById("btnCloseBlastModal").addEventListener("click", function() { closeModal("blastModal"); });
  document.getElementById("btnCancelBlastModal").addEventListener("click", function() { closeModal("blastModal"); });

  // Check drill compatibility when pattern or drill selection changes
  document.getElementById("fPattern").addEventListener("change", checkDrillCompatibility);
  document.getElementById("fAssignedDrills").addEventListener("change", checkDrillCompatibility);
}

export { showAddBlastModal, editBlast, saveBlast, initBlastModal };
