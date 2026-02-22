// ============================================================
//  EQUIPMENT & MAINTENANCE MODALS
//  Add/Edit drills, MPUs, people, and maintenance windows
// ============================================================

import { drills, mpus, people } from "../state/equipmentState.js";
import { openModal, closeModal } from "../ui/modal.js";
import { renderEquipment } from "../views/equipmentView.js";
import { isoDate } from "../utils/dateUtils.js";

var editingEquipIdx = null;
var editingEquipType = null;

// ============================================================
//  DRILL / MPU / PERSON MODALS
// ============================================================

// Step 1) Show Add Drill modal
function showAddDrillModal() {
  editingEquipIdx = null;
  editingEquipType = "drill";
  document.getElementById("equipModalTitle").textContent = "Add Drill Rig";
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Drill ID</label><input type=\"text\" id=\"fEqId\" placeholder=\"e.g. D65-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" placeholder=\"e.g. D65 #3\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>";
  body += "    <select id=\"fEqType\"><option value=\"D65\">D65</option><option value=\"PV271\">PV271</option><option value=\"DM45\">DM45</option><option value=\"Other\">Other</option></select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Rate (m/day)</label><input type=\"number\" id=\"fEqRate\" value=\"20\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Min Diameter (mm)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"127\"></div>";
  body += "  <div class=\"form-field\"><label>Max Diameter (mm)</label><input type=\"number\" id=\"fEqMaxDiam\" value=\"229\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Crew Required — OP</label><input type=\"number\" id=\"fEqCrewOP\" value=\"1\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "  <div class=\"form-field\"><label>Crew Required — FT</label><input type=\"number\" id=\"fEqCrewFT\" value=\"0\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "</div>";
  document.getElementById("equipModalBody").innerHTML = body;
  openModal("equipmentModal");
}

// Step 2) Show Add MPU modal
function showAddMPUModal() {
  editingEquipIdx = null;
  editingEquipType = "mpu";
  document.getElementById("equipModalTitle").textContent = "Add Mobile Processing Unit";
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>MPU ID</label><input type=\"text\" id=\"fEqId\" placeholder=\"e.g. MPU-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" placeholder=\"e.g. MPU #3\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>";
  body += "    <select id=\"fEqType\"><option value=\"Emulsion\">Emulsion</option><option value=\"ANFO\">ANFO</option><option value=\"Bulk\">Bulk</option></select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Rate (kg/day)</label><input type=\"number\" id=\"fEqRate\" value=\"100000\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Capacity (kg)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"20000\"></div>";
  body += "  <div class=\"form-field\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Crew Required — OP</label><input type=\"number\" id=\"fEqCrewOP\" value=\"1\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "  <div class=\"form-field\"><label>Crew Required — SF</label><input type=\"number\" id=\"fEqCrewSF\" value=\"1\" min=\"0\" max=\"10\" step=\"1\"></div>";
  body += "</div>";
  document.getElementById("equipModalBody").innerHTML = body;
  openModal("equipmentModal");
}

// Step 3) Show Add Person modal
function showAddPersonModal() {
  editingEquipIdx = null;
  editingEquipType = "person";
  document.getElementById("equipModalTitle").textContent = "Add Personnel";
  var body = "";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Person ID</label><input type=\"text\" id=\"fEqId\" placeholder=\"e.g. P009\"></div>";
  body += "  <div class=\"form-field\"><label>Full Name</label><input type=\"text\" id=\"fEqName\" placeholder=\"e.g. Jane Smith\"></div>";
  body += "</div>";
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Role</label>";
  body += "    <select id=\"fEqType\"><option value=\"Drill Operator\">Drill Operator</option><option value=\"Drill Offsider\">Drill Offsider</option><option value=\"Loading Operator\">Loading Operator</option><option value=\"Shot Firer\">Shot Firer</option><option value=\"Blast Engineer\">Blast Engineer</option><option value=\"Supervisor\">Supervisor</option></select>";
  body += "  </div>";
  body += "  <div class=\"form-field\"><label>Certified Types (comma separated)</label><input type=\"text\" id=\"fEqRate\" placeholder=\"e.g. D65, PV271\"></div>";
  body += "</div>";
  document.getElementById("equipModalBody").innerHTML = body;
  openModal("equipmentModal");
}

// Step 4) Save equipment from modal
function saveEquipment() {
  var id = document.getElementById("fEqId").value.trim();
  var name = document.getElementById("fEqName").value.trim();
  if (!id || !name) { alert("ID and Name are required"); return; }

  var type = document.getElementById("fEqType").value;
  var rateField = document.getElementById("fEqRate");
  var diamField = document.getElementById("fEqMinDiam");
  var maxDiamField = document.getElementById("fEqMaxDiam");

  if (editingEquipType === "drill") {
    // Step 4a) Build crewRequired from form fields
    var drillCrewOP = parseInt((document.getElementById("fEqCrewOP") || {}).value) || 0;
    var drillCrewFT = parseInt((document.getElementById("fEqCrewFT") || {}).value) || 0;
    var drillCrew = {};
    if (drillCrewOP > 0) drillCrew.OP = drillCrewOP;
    if (drillCrewFT > 0) drillCrew.FT = drillCrewFT;

    drills.push({
      id: id, name: name, type: type,
      minDiam: parseInt(diamField.value) || 127,
      maxDiam: parseInt(maxDiamField.value) || 229,
      rateM_per_day: parseFloat(rateField.value) || 20,
      status: "available",
      crewRequired: drillCrew,
      maintenance: []
    });
  } else if (editingEquipType === "mpu") {
    // Step 4b) Build crewRequired for MPU
    var mpuCrewOP = parseInt((document.getElementById("fEqCrewOP") || {}).value) || 0;
    var mpuCrewSF = parseInt((document.getElementById("fEqCrewSF") || {}).value) || 0;
    var mpuCrew = {};
    if (mpuCrewOP > 0) mpuCrew.OP = mpuCrewOP;
    if (mpuCrewSF > 0) mpuCrew.SF = mpuCrewSF;

    mpus.push({
      id: id, name: name, type: type,
      capacity_kg: parseInt(diamField.value) || 20000,
      rateKg_per_day: parseFloat(rateField.value) || 100000,
      status: "available",
      crewRequired: mpuCrew,
      maintenance: []
    });
  } else if (editingEquipType === "person") {
    var certs = rateField.value.split(",").map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    people.push({
      id: id, name: name, role: type,
      certifiedTypes: certs
    });
  }

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

  document.getElementById("equipModalSave").addEventListener("click", saveEquipment);
  document.getElementById("btnCloseEquipModal").addEventListener("click", function() { closeModal("equipmentModal"); });
  document.getElementById("btnCancelEquipModal").addEventListener("click", function() { closeModal("equipmentModal"); });

  document.getElementById("maintModalSave").addEventListener("click", saveMaintenance);
  document.getElementById("btnCloseMaintModal").addEventListener("click", function() { closeModal("maintenanceModal"); });
  document.getElementById("btnCancelMaintModal").addEventListener("click", function() { closeModal("maintenanceModal"); });
}

export { initEquipmentModals };
