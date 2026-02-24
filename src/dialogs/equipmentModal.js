// ============================================================
//  EQUIPMENT & MAINTENANCE MODALS
//  Add/Edit drills, MPUs, ancillary, people, and maintenance windows
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, ancillary, people } from "../state/equipmentState.js";
import { openModal, closeModal } from "../ui/modal.js";
import { renderEquipment } from "../views/equipmentView.js";
import { isoDate } from "../utils/dateUtils.js";

var editingEquipIdx = null;
var editingEquipType = null;
var editingOldId = null;

// ============================================================
//  HELPERS
// ============================================================

// Step 0a) Get collection array for a given equipment type
function getCollection(eqType) {
  if (eqType === "drill") return drills;
  if (eqType === "mpu") return mpus;
  if (eqType === "ancillary") return ancillary;
  if (eqType === "person") return people;
  return null;
}

// Step 0b) Find index in collection by ID
function findIdx(collection, equipId) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].id === equipId) return i;
  }
  return -1;
}

// Step 0c) Propagate ID rename across all blast assignments
function propagateIdRename(eqType, oldId, newId) {
  if (oldId === newId) return;
  var field = null;
  if (eqType === "drill") field = "assignedDrills";
  else if (eqType === "mpu") field = "assignedMPUs";
  else if (eqType === "ancillary") field = "assignedAncillary";
  if (!field) return;

  APP.blasts.forEach(function(b) {
    var arr = b[field];
    if (!arr) return;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === oldId) arr[i] = newId;
    }
  });
}

// ============================================================
//  DRILL / MPU / ANCILLARY / PERSON MODALS
// ============================================================

// Step 1) Show Add Drill modal
function showAddDrillModal() {
  editingEquipIdx = null;
  editingEquipType = "drill";
  editingOldId = null;
  document.getElementById("equipModalTitle").textContent = "Add Drill Rig";
  document.getElementById("equipModalBody").innerHTML = buildDrillForm(null);
  openModal("equipmentModal");
}

// Step 1b) Build drill form HTML, optionally pre-filled from an existing drill object
function buildDrillForm(d) {
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Drill ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (d ? d.id : "") + "\" placeholder=\"e.g. D65-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (d ? d.name : "") + "\" placeholder=\"e.g. D65 #3\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>";
  body += "    <select id=\"fEqType\">";
  body += "      <option value=\"D65\"" + (d && d.type === "D65" ? " selected" : "") + ">D65</option>";
  body += "      <option value=\"PV271\"" + (d && d.type === "PV271" ? " selected" : "") + ">PV271</option>";
  body += "      <option value=\"DM45\"" + (d && d.type === "DM45" ? " selected" : "") + ">DM45</option>";
  body += "      <option value=\"Other\"" + (d && d.type === "Other" ? " selected" : "") + ">Other</option>";
  body += "    </select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Rate (m/hr)</label><input type=\"number\" id=\"fEqRate\" value=\"" + (d ? d.rateM_per_day : "20") + "\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Min Diameter (mm)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"" + (d ? d.minDiam : "127") + "\"></div>";
  body += "  <div class=\"form-field\"><label>Max Diameter (mm)</label><input type=\"number\" id=\"fEqMaxDiam\" value=\"" + (d ? d.maxDiam : "229") + "\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Crew Required — OP</label><input type=\"number\" id=\"fEqCrewOP\" value=\"" + (d && d.crewRequired && d.crewRequired.OP ? d.crewRequired.OP : "1") + "\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "  <div class=\"form-field\"><label>Crew Required — FT</label><input type=\"number\" id=\"fEqCrewFT\" value=\"" + (d && d.crewRequired && d.crewRequired.FT ? d.crewRequired.FT : "0") + "\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "</div>";
  return body;
}

// Step 2) Show Add MPU modal
function showAddMPUModal() {
  editingEquipIdx = null;
  editingEquipType = "mpu";
  editingOldId = null;
  document.getElementById("equipModalTitle").textContent = "Add Mobile Processing Unit";
  document.getElementById("equipModalBody").innerHTML = buildMPUForm(null);
  openModal("equipmentModal");
}

// Step 2b) Build MPU form HTML
function buildMPUForm(m) {
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>MPU ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (m ? m.id : "") + "\" placeholder=\"e.g. MPU-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (m ? m.name : "") + "\" placeholder=\"e.g. MPU #3\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>";
  body += "    <select id=\"fEqType\">";
  body += "      <option value=\"Emulsion\"" + (m && m.type === "Emulsion" ? " selected" : "") + ">Emulsion</option>";
  body += "      <option value=\"ANFO\"" + (m && m.type === "ANFO" ? " selected" : "") + ">ANFO</option>";
  body += "      <option value=\"Bulk\"" + (m && m.type === "Bulk" ? " selected" : "") + ">Bulk</option>";
  body += "    </select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Rate (kg/day)</label><input type=\"number\" id=\"fEqRate\" value=\"" + (m ? m.rateKg_per_day : "100000") + "\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Capacity (kg)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"" + (m ? m.capacity_kg : "20000") + "\"></div>";
  body += "  <div class=\"form-field\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Crew Required — OP</label><input type=\"number\" id=\"fEqCrewOP\" value=\"" + (m && m.crewRequired && m.crewRequired.OP ? m.crewRequired.OP : "1") + "\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "  <div class=\"form-field\"><label>Crew Required — SF</label><input type=\"number\" id=\"fEqCrewSF\" value=\"" + (m && m.crewRequired && m.crewRequired.SF ? m.crewRequired.SF : "1") + "\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "</div>";
  return body;
}

// Step 2c) Show Add Ancillary modal
function showAddAncillaryModal() {
  editingEquipIdx = null;
  editingEquipType = "ancillary";
  editingOldId = null;
  document.getElementById("equipModalTitle").textContent = "Add Ancillary Equipment";
  document.getElementById("equipModalBody").innerHTML = buildAncillaryForm(null);
  openModal("equipmentModal");
}

// Step 2d) Build Ancillary form HTML
function buildAncillaryForm(a) {
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Equipment ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (a ? a.id : "") + "\" placeholder=\"e.g. DZ-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (a ? a.name : "") + "\" placeholder=\"e.g. D9 Dozer #3\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>";
  body += "    <select id=\"fEqType\">";
  body += "      <option value=\"Dozer\"" + (a && a.type === "Dozer" ? " selected" : "") + ">Dozer</option>";
  body += "      <option value=\"Grader\"" + (a && a.type === "Grader" ? " selected" : "") + ">Grader</option>";
  body += "      <option value=\"Excavator\"" + (a && a.type === "Excavator" ? " selected" : "") + ">Excavator</option>";
  body += "      <option value=\"Loader\"" + (a && a.type === "Loader" ? " selected" : "") + ">Loader</option>";
  body += "      <option value=\"Roller\"" + (a && a.type === "Roller" ? " selected" : "") + ">Roller</option>";
  body += "      <option value=\"Other\"" + (a && a.type === "Other" ? " selected" : "") + ">Other</option>";
  body += "    </select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Rate (m\u00B2/day)</label><input type=\"number\" id=\"fEqRate\" value=\"" + (a ? a.rateM2_per_day : "8000") + "\"></div>";
  body += "</div>";
  return body;
}

// Step 3) Show Add Person modal
function showAddPersonModal() {
  editingEquipIdx = null;
  editingEquipType = "person";
  editingOldId = null;
  document.getElementById("equipModalTitle").textContent = "Add Personnel";
  document.getElementById("equipModalBody").innerHTML = buildPersonForm(null);
  openModal("equipmentModal");
}

// Step 3b) Build Person form HTML
function buildPersonForm(p) {
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Person ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (p ? p.id : "") + "\" placeholder=\"e.g. P009\"></div>";
  body += "  <div class=\"form-field\"><label>Full Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (p ? p.name : "") + "\" placeholder=\"e.g. Jane Smith\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Role</label>";
  body += "    <select id=\"fEqType\">";
  body += "      <option value=\"Drill Operator\"" + (p && p.role === "Drill Operator" ? " selected" : "") + ">Drill Operator</option>";
  body += "      <option value=\"Drill Offsider\"" + (p && p.role === "Drill Offsider" ? " selected" : "") + ">Drill Offsider</option>";
  body += "      <option value=\"Loading Operator\"" + (p && p.role === "Loading Operator" ? " selected" : "") + ">Loading Operator</option>";
  body += "      <option value=\"Shot Firer\"" + (p && p.role === "Shot Firer" ? " selected" : "") + ">Shot Firer</option>";
  body += "      <option value=\"Blast Engineer\"" + (p && p.role === "Blast Engineer" ? " selected" : "") + ">Blast Engineer</option>";
  body += "      <option value=\"Supervisor\"" + (p && p.role === "Supervisor" ? " selected" : "") + ">Supervisor</option>";
  body += "    </select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Certified Types (comma separated)</label><input type=\"text\" id=\"fEqRate\" value=\"" + (p ? p.certifiedTypes.join(", ") : "") + "\" placeholder=\"e.g. D65, PV271\"></div>";
  body += "</div>";
  return body;
}

// ============================================================
//  EDIT & DUPLICATE
// ============================================================

// Step 4) Open edit modal for any equipment type, pre-filled with existing data
function showEditEquipModal(eqType, equipId) {
  var collection = getCollection(eqType);
  if (!collection) return;
  var idx = findIdx(collection, equipId);
  if (idx === -1) return;

  editingEquipIdx = idx;
  editingEquipType = eqType;
  editingOldId = equipId;

  var item = collection[idx];

  if (eqType === "drill") {
    document.getElementById("equipModalTitle").textContent = "Edit Drill Rig: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildDrillForm(item);
  } else if (eqType === "mpu") {
    document.getElementById("equipModalTitle").textContent = "Edit MPU: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildMPUForm(item);
  } else if (eqType === "ancillary") {
    document.getElementById("equipModalTitle").textContent = "Edit Ancillary: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildAncillaryForm(item);
  } else if (eqType === "person") {
    document.getElementById("equipModalTitle").textContent = "Edit Person: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildPersonForm(item);
  }
  openModal("equipmentModal");
}

// Step 5) Duplicate — clone the item and open the edit modal for the copy
function duplicateEquip(eqType, equipId) {
  var collection = getCollection(eqType);
  if (!collection) return;
  var idx = findIdx(collection, equipId);
  if (idx === -1) return;

  var src = collection[idx];
  var clone = JSON.parse(JSON.stringify(src));

  // Step 5a) Generate a unique ID by appending a suffix
  var suffix = 1;
  var baseId = clone.id;
  while (findIdx(collection, baseId + "-C" + suffix) !== -1) { suffix++; }
  clone.id = baseId + "-C" + suffix;
  clone.name = clone.name + " (Copy)";
  clone.status = "available";
  if (clone.maintenance) clone.maintenance = [];

  collection.push(clone);
  renderEquipment();

  // Step 5b) Immediately open edit modal so user can rename
  showEditEquipModal(eqType, clone.id);
}

// ============================================================
//  SAVE EQUIPMENT (ADD / UPDATE)
// ============================================================

// Step 6) Save equipment from modal — handles both add and edit
function saveEquipment() {
  var id = document.getElementById("fEqId").value.trim();
  var name = document.getElementById("fEqName").value.trim();
  if (!id || !name) { alert("ID and Name are required"); return; }

  var type = document.getElementById("fEqType").value;
  var rateField = document.getElementById("fEqRate");
  var diamField = document.getElementById("fEqMinDiam");
  var maxDiamField = document.getElementById("fEqMaxDiam");

  var collection = getCollection(editingEquipType);
  var isEditing = editingEquipIdx !== null && editingEquipIdx >= 0;

  // Step 6a) Check for duplicate ID (only if ID changed or adding new)
  if (!isEditing || id !== editingOldId) {
    if (findIdx(collection, id) !== -1 && id !== editingOldId) {
      alert("An item with ID \"" + id + "\" already exists. Please use a different ID.");
      return;
    }
  }

  if (editingEquipType === "drill") {
    var drillCrewOP = parseInt((document.getElementById("fEqCrewOP") || {}).value) || 0;
    var drillCrewFT = parseInt((document.getElementById("fEqCrewFT") || {}).value) || 0;
    var drillCrew = {};
    if (drillCrewOP > 0) drillCrew.OP = drillCrewOP;
    if (drillCrewFT > 0) drillCrew.FT = drillCrewFT;

    if (isEditing) {
      // Step 6b) Update existing drill in-place
      var drill = collection[editingEquipIdx];
      propagateIdRename("drill", editingOldId, id);
      drill.id = id;
      drill.name = name;
      drill.type = type;
      drill.minDiam = parseInt(diamField.value) || 127;
      drill.maxDiam = parseInt(maxDiamField.value) || 229;
      drill.rateM_per_day = parseFloat(rateField.value) || 20;
      drill.crewRequired = drillCrew;
    } else {
      collection.push({
        id: id, name: name, type: type,
        minDiam: parseInt(diamField.value) || 127,
        maxDiam: parseInt(maxDiamField.value) || 229,
        rateM_per_day: parseFloat(rateField.value) || 20,
        status: "available",
        crewRequired: drillCrew,
        maintenance: []
      });
    }
  } else if (editingEquipType === "mpu") {
    var mpuCrewOP = parseInt((document.getElementById("fEqCrewOP") || {}).value) || 0;
    var mpuCrewSF = parseInt((document.getElementById("fEqCrewSF") || {}).value) || 0;
    var mpuCrew = {};
    if (mpuCrewOP > 0) mpuCrew.OP = mpuCrewOP;
    if (mpuCrewSF > 0) mpuCrew.SF = mpuCrewSF;

    if (isEditing) {
      // Step 6c) Update existing MPU in-place
      var mpu = collection[editingEquipIdx];
      propagateIdRename("mpu", editingOldId, id);
      mpu.id = id;
      mpu.name = name;
      mpu.type = type;
      mpu.capacity_kg = parseInt(diamField.value) || 20000;
      mpu.rateKg_per_day = parseFloat(rateField.value) || 100000;
      mpu.crewRequired = mpuCrew;
    } else {
      collection.push({
        id: id, name: name, type: type,
        capacity_kg: parseInt(diamField.value) || 20000,
        rateKg_per_day: parseFloat(rateField.value) || 100000,
        status: "available",
        crewRequired: mpuCrew,
        maintenance: []
      });
    }
  } else if (editingEquipType === "ancillary") {
    if (isEditing) {
      // Step 6d) Update existing ancillary in-place
      var unit = collection[editingEquipIdx];
      propagateIdRename("ancillary", editingOldId, id);
      unit.id = id;
      unit.name = name;
      unit.type = type;
      unit.rateM2_per_day = parseFloat(rateField.value) || 8000;
    } else {
      collection.push({
        id: id, name: name, type: type,
        rateM2_per_day: parseFloat(rateField.value) || 8000,
        status: "available",
        maintenance: []
      });
    }
  } else if (editingEquipType === "person") {
    var certs = rateField.value.split(",").map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    if (isEditing) {
      // Step 6e) Update existing person in-place
      var person = collection[editingEquipIdx];
      person.id = id;
      person.name = name;
      person.role = type;
      person.certifiedTypes = certs;
    } else {
      collection.push({
        id: id, name: name, role: type,
        certifiedTypes: certs
      });
    }
  }

  // Step 6f) Reset editing state and re-render
  editingEquipIdx = null;
  editingEquipType = null;
  editingOldId = null;
  closeModal("equipmentModal");
  renderEquipment();
}

// ============================================================
//  MAINTENANCE MODAL
// ============================================================

// Step 5) Populate equipment dropdown for maintenance modal
function populateMaintenanceEquipDropdown() {
  var sel = document.getElementById("fMaintEquip");
  sel.innerHTML = "";
  drills.forEach(function(d) {
    var opt = document.createElement("option");
    opt.value = "drill:" + d.id;
    opt.textContent = "[Drill] " + d.id + " - " + d.name;
    sel.appendChild(opt);
  });
  mpus.forEach(function(m) {
    var opt = document.createElement("option");
    opt.value = "mpu:" + m.id;
    opt.textContent = "[MPU] " + m.id + " - " + m.name;
    sel.appendChild(opt);
  });
}

// Step 6) Show add maintenance modal
function showAddMaintenanceModal() {
  populateMaintenanceEquipDropdown();
  document.getElementById("maintModalTitle").textContent = "Add Maintenance Window";
  document.getElementById("fMaintReason").value = "";
  document.getElementById("fMaintStart").value = "";
  document.getElementById("fMaintEnd").value = "";
  openModal("maintenanceModal");
}

// Step 7) Save maintenance window
function saveMaintenance() {
  var equipVal = document.getElementById("fMaintEquip").value;
  var reason = document.getElementById("fMaintReason").value.trim();
  var start = document.getElementById("fMaintStart").value;
  var end = document.getElementById("fMaintEnd").value;

  if (!equipVal || !start || !end) { alert("Equipment, start, and end date are required"); return; }
  if (end < start) { alert("End date must be on or after start date"); return; }
  if (!reason) reason = "Maintenance";

  var parts = equipVal.split(":");
  var eqType = parts[0]; // "drill" or "mpu"
  var eqId = parts[1];

  var collection = eqType === "drill" ? drills : mpus;
  var equip = collection.find(function(e) { return e.id === eqId; });
  if (equip) {
    equip.maintenance.push({ start: start, end: end, reason: reason });
  }

  closeModal("maintenanceModal");
  renderEquipment();
}

// Step 8) Initialise all equipment modal buttons
function initEquipmentModals() {
  document.getElementById("btnAddDrill").addEventListener("click", showAddDrillModal);
  document.getElementById("btnAddMPU").addEventListener("click", showAddMPUModal);
  document.getElementById("btnAddPerson").addEventListener("click", showAddPersonModal);
  document.getElementById("btnAddMaintenance").addEventListener("click", showAddMaintenanceModal);

  var btnAddAnc = document.getElementById("btnAddAncillary");
  if (btnAddAnc) btnAddAnc.addEventListener("click", showAddAncillaryModal);

  document.getElementById("equipModalSave").addEventListener("click", saveEquipment);
  document.getElementById("btnCloseEquipModal").addEventListener("click", function() { closeModal("equipmentModal"); });
  document.getElementById("btnCancelEquipModal").addEventListener("click", function() { closeModal("equipmentModal"); });

  document.getElementById("maintModalSave").addEventListener("click", saveMaintenance);
  document.getElementById("btnCloseMaintModal").addEventListener("click", function() { closeModal("maintenanceModal"); });
  document.getElementById("btnCancelMaintModal").addEventListener("click", function() { closeModal("maintenanceModal"); });
}

export { initEquipmentModals, showEditEquipModal, duplicateEquip };
