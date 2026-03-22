// ============================================================
//  EQUIPMENT & MAINTENANCE MODALS
//  Add/Edit drills, MPUs, ancillary, people, and maintenance windows
//  Supports Brand → Model → Type three-tier hierarchy with
//  curated presets and user-defined custom entries.
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, ancillary, people } from "../state/equipmentState.js";
import { openModal, closeModal } from "../ui/modal.js";
import { renderEquipment } from "../views/equipmentView.js";
import { debouncedSave } from "../state/schedulerDB.js";

var editingEquipIdx = null;
var editingEquipType = null;
var editingOldId = null;

// ============================================================
//  PRESET CATALOGS  —  Brand → Model lookups per category
// ============================================================

// Step 0-pre) Drill brands and their common models
var DRILL_CATALOG = {
  "Sandvik":    ["D65", "DP1500i", "DR460i", "DR412i", "DI550", "DI650", "Ranger DX800", "Pantera DP1100i"],
  "Epiroc":     ["PV271", "PV235", "PV351", "DM45", "DML", "SmartROC D65", "FlexiROC T45", "FlexiROC D65"],
  "Cat":        ["MD6250", "MD6310", "MD6420", "MD6540"],
  "Komatsu":    ["ZT44", "ZR77"],
  "Furukawa":   ["HCR1200", "HCR1500", "HCR1800-EDII"],
  "Atlas Copco": ["ROC L8", "ROC D7", "DM30", "DM50"],
  "Schramm":    ["T685WS", "T130XD"],
  "Cubex":      ["QXR-340", "QXR-310"]
};

// Step 0-pre-b) Drill types
var DRILL_TYPES = ["Rotary", "Top Hammer", "Down-the-Hole Hammer", "Reverse Circulation", "Core Drilling"];

// Step 0-pre-c) MPU prime mover brands and models
var MPU_CATALOG = {
  "Volvo":        ["FH16", "FMX", "FM"],
  "Isuzu":        ["FXZ", "GXD", "CYZ"],
  "Kenworth":     ["T909", "C509", "T659"],
  "Western Star": ["4900", "6900XD"],
  "Mack":         ["Super-Liner", "Trident", "Metro-Liner"],
  "MAN":          ["TGS 41.480", "TGS 33.480"],
  "Mercedes-Benz": ["Actros 4163", "Arocs 4145"],
  "Scania":       ["R 730", "G 500"]
};

// Step 0-pre-d) MPU product types
var MPU_TYPES = ["ANFO", "Watergel", "Emulsion", "Blend"];

// Step 0-pre-e) Ancillary brands and models
var ANCILLARY_CATALOG = {
  "Cat":        ["D9T", "D10T", "D11T", "16M", "14M", "988K", "992K", "CS78B", "CP68B", "349", "390F"],
  "Komatsu":    ["D375A", "D475A", "GD825A", "WA800", "WA900", "PC2000", "PC4000"],
  "John Deere": ["872GP", "872G", "744L", "844L"],
  "Hitachi":    ["EX5600", "EX8000", "ZW550", "ZX890"],
  "Volvo":      ["L350H", "L260H", "DD140C", "A60H"],
  "Liebherr":   ["PR 776", "R 9800", "L 586"],
  "Bomag":      ["BW 226 RC-5", "BW 219 DH-5"]
};

// Step 0-pre-f) Ancillary types
var ANCILLARY_TYPES = ["Dozer", "Grader", "Loader", "Roller", "Impactor", "Excavator"];

// ============================================================
//  CUSTOM ENTRY PERSISTENCE (localStorage)
// ============================================================

var CUSTOM_STORAGE_KEY = "kirra-custom-equipment-catalog";

// Step 0a) Load custom entries from localStorage
function loadCustomEntries() {
  try {
    var raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore parse errors */ }
  return { drill: { brands: [], models: {} }, mpu: { brands: [], models: {} }, ancillary: { brands: [], models: {} } };
}

// Step 0b) Save a custom brand/model entry to localStorage
function saveCustomEntry(category, brand, model) {
  var custom = loadCustomEntries();
  if (!custom[category]) custom[category] = { brands: [], models: {} };
  var cat = custom[category];

  if (brand && cat.brands.indexOf(brand) === -1) {
    // Step 0b-i) Check the brand is not already in the preset catalog
    var catalog = getCatalogForCategory(category);
    if (!catalog[brand]) {
      cat.brands.push(brand);
    }
  }
  if (brand && model) {
    if (!cat.models[brand]) cat.models[brand] = [];
    if (cat.models[brand].indexOf(model) === -1) {
      var presetModels = getCatalogForCategory(category)[brand] || [];
      if (presetModels.indexOf(model) === -1) {
        cat.models[brand].push(model);
      }
    }
  }
  localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(custom));
}

// Step 0c) Get the preset catalog for a category
function getCatalogForCategory(category) {
  if (category === "drill") return DRILL_CATALOG;
  if (category === "mpu") return MPU_CATALOG;
  if (category === "ancillary") return ANCILLARY_CATALOG;
  return {};
}

// Step 0d) Get merged brand list (presets + custom)
function getMergedBrands(category) {
  var catalog = getCatalogForCategory(category);
  var brands = Object.keys(catalog);
  var custom = loadCustomEntries();
  if (custom[category] && custom[category].brands) {
    custom[category].brands.forEach(function(b) {
      if (brands.indexOf(b) === -1) brands.push(b);
    });
  }
  return brands.sort();
}

// Step 0e) Get merged model list for a brand (presets + custom)
function getMergedModels(category, brand) {
  var catalog = getCatalogForCategory(category);
  var models = (catalog[brand] || []).slice();
  var custom = loadCustomEntries();
  if (custom[category] && custom[category].models && custom[category].models[brand]) {
    custom[category].models[brand].forEach(function(m) {
      if (models.indexOf(m) === -1) models.push(m);
    });
  }
  return models.sort();
}

// ============================================================
//  HELPERS
// ============================================================

// Step 0f) Get collection array for a given equipment type
function getCollection(eqType) {
  if (eqType === "drill") return drills;
  if (eqType === "mpu") return mpus;
  if (eqType === "ancillary") return ancillary;
  if (eqType === "person") return people;
  return null;
}

// Step 0g) Find index in collection by ID
function findIdx(collection, equipId) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].id === equipId) return i;
  }
  return -1;
}

// Step 0h) Propagate ID rename across all blast assignments
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

// Step 0i) Build a brand <select> dropdown with optional custom input
function buildBrandSelect(category, selectedBrand) {
  var brands = getMergedBrands(category);
  var html = "<select id=\"fEqBrand\" style=\"flex:1;\">";
  html += "<option value=\"\"" + (!selectedBrand ? " selected" : "") + ">-- Select Brand --</option>";
  for (var i = 0; i < brands.length; i++) {
    html += "<option value=\"" + brands[i] + "\"" + (selectedBrand === brands[i] ? " selected" : "") + ">" + brands[i] + "</option>";
  }
  html += "<option value=\"__custom__\">+ Custom Brand...</option>";
  html += "</select>";
  html += "<input type=\"text\" id=\"fEqBrandCustom\" placeholder=\"Enter brand name\" style=\"display:none;flex:1;margin-top:4px;\">";
  return html;
}

// Step 0j) Build a model <select> dropdown filtered by brand
function buildModelSelect(category, brand, selectedModel) {
  var models = brand ? getMergedModels(category, brand) : [];
  var html = "<select id=\"fEqModel\" style=\"flex:1;\">";
  html += "<option value=\"\"" + (!selectedModel ? " selected" : "") + ">-- Select Model --</option>";
  for (var i = 0; i < models.length; i++) {
    html += "<option value=\"" + models[i] + "\"" + (selectedModel === models[i] ? " selected" : "") + ">" + models[i] + "</option>";
  }
  html += "<option value=\"__custom__\">+ Custom Model...</option>";
  html += "</select>";
  html += "<input type=\"text\" id=\"fEqModelCustom\" placeholder=\"Enter model name\" style=\"display:none;flex:1;margin-top:4px;\">";
  return html;
}

// Step 0k) Build a type <select> dropdown from the given type list
function buildTypeSelect(types, selectedType, fieldId) {
  var id = fieldId || "fEqType";
  var html = "<select id=\"" + id + "\">";
  for (var i = 0; i < types.length; i++) {
    html += "<option value=\"" + types[i] + "\"" + (selectedType === types[i] ? " selected" : "") + ">" + types[i] + "</option>";
  }
  html += "</select>";
  return html;
}

// Step 0l) Wire up brand → model cascading + custom entry behaviour
function wireBrandModelCascade(category) {
  var brandSel = document.getElementById("fEqBrand");
  var brandCustom = document.getElementById("fEqBrandCustom");
  var modelWrap = document.getElementById("fEqModelWrap");

  if (!brandSel) return;

  brandSel.addEventListener("change", function() {
    var val = brandSel.value;
    if (val === "__custom__") {
      // Step 0l-i) Show custom brand input
      brandCustom.style.display = "block";
      brandCustom.value = "";
      brandCustom.focus();
      // Step 0l-ii) Clear model dropdown
      if (modelWrap) modelWrap.innerHTML = buildModelSelect(category, "", "");
      wireModelCustom(category);
    } else {
      brandCustom.style.display = "none";
      // Step 0l-iii) Repopulate model dropdown for the selected brand
      if (modelWrap) modelWrap.innerHTML = buildModelSelect(category, val, "");
      wireModelCustom(category);
    }
  });

  // Step 0l-iv) When custom brand input loses focus, set the dropdown
  brandCustom.addEventListener("blur", function() {
    var customVal = brandCustom.value.trim();
    if (customVal) {
      saveCustomEntry(category, customVal, null);
      // Step 0l-v) Rebuild brand dropdown with the custom value selected
      var brandWrap = brandSel.parentElement;
      var prevHTML = brandWrap.innerHTML;
      brandWrap.innerHTML = buildBrandSelect(category, customVal);
      // Step 0l-vi) Rebuild model dropdown for the custom brand
      if (modelWrap) modelWrap.innerHTML = buildModelSelect(category, customVal, "");
      wireBrandModelCascade(category);
    }
  });

  wireModelCustom(category);
}

// Step 0m) Wire up model custom entry behaviour
function wireModelCustom(category) {
  var modelSel = document.getElementById("fEqModel");
  var modelCustom = document.getElementById("fEqModelCustom");
  if (!modelSel || !modelCustom) return;

  modelSel.addEventListener("change", function() {
    if (modelSel.value === "__custom__") {
      modelCustom.style.display = "block";
      modelCustom.value = "";
      modelCustom.focus();
    } else {
      modelCustom.style.display = "none";
    }
  });

  modelCustom.addEventListener("blur", function() {
    var customVal = modelCustom.value.trim();
    if (customVal) {
      var brandSel = document.getElementById("fEqBrand");
      var brand = brandSel ? brandSel.value : "";
      if (brand && brand !== "__custom__") {
        saveCustomEntry(category, brand, customVal);
        // Step 0m-i) Rebuild model dropdown with the custom value selected
        var modelWrap = document.getElementById("fEqModelWrap");
        if (modelWrap) {
          modelWrap.innerHTML = buildModelSelect(category, brand, customVal);
          wireModelCustom(category);
        }
      }
    }
  });
}

// Step 0n) Wire blend config visibility when MPU type changes
function wireBlendConfig() {
  var typeSel = document.getElementById("fEqType");
  var blendSection = document.getElementById("fBlendSection");
  if (!typeSel || !blendSection) return;

  function toggleBlend() {
    blendSection.style.display = typeSel.value === "Blend" ? "block" : "none";
  }
  typeSel.addEventListener("change", toggleBlend);
  toggleBlend();
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
  wireBrandModelCascade("drill");
}

// Step 1b) Build drill form HTML, optionally pre-filled from an existing drill object
function buildDrillForm(d) {
  var body = "";
  // Step 1b-i) Brand and Model row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Brand</label><div id=\"fEqBrandWrap\" style=\"display:flex;flex-direction:column;\">" + buildBrandSelect("drill", d ? d.brand : "") + "</div></div>";
  body += "  <div class=\"form-field\"><label>Model</label><div id=\"fEqModelWrap\" style=\"display:flex;flex-direction:column;\">" + buildModelSelect("drill", d ? d.brand : "", d ? d.model : "") + "</div></div>";
  body += "</div>";
  // Step 1b-ii) ID and Name row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Drill ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (d ? d.id : "") + "\" placeholder=\"e.g. D65-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (d ? d.name : "") + "\" placeholder=\"e.g. D65 #3\"></div>";
  body += "</div>";
  // Step 1b-iii) Type and Rate row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Drill Type</label>" + buildTypeSelect(DRILL_TYPES, d ? d.type : "Rotary") + "</div>";
  body += "  <div class=\"form-field\"><label>Rate (m/hr)</label><input type=\"number\" id=\"fEqRate\" value=\"" + (d ? d.rateM_per_day : "20") + "\"></div>";
  body += "</div>";
  // Step 1b-iv) Diameter range row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Min Diameter (mm)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"" + (d ? d.minDiam : "127") + "\"></div>";
  body += "  <div class=\"form-field\"><label>Max Diameter (mm)</label><input type=\"number\" id=\"fEqMaxDiam\" value=\"" + (d ? d.maxDiam : "229") + "\"></div>";
  body += "</div>";
  // Step 1b-v) Crew row
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
  wireBrandModelCascade("mpu");
  wireBlendConfig();
}

// Step 2b) Build MPU form HTML
function buildMPUForm(m) {
  var body = "";
  // Step 2b-i) Brand and Model row (prime mover)
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Prime Mover Brand</label><div id=\"fEqBrandWrap\" style=\"display:flex;flex-direction:column;\">" + buildBrandSelect("mpu", m ? m.brand : "") + "</div></div>";
  body += "  <div class=\"form-field\"><label>Prime Mover Model</label><div id=\"fEqModelWrap\" style=\"display:flex;flex-direction:column;\">" + buildModelSelect("mpu", m ? m.brand : "", m ? m.model : "") + "</div></div>";
  body += "</div>";
  // Step 2b-ii) ID and Name row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>MPU ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (m ? m.id : "") + "\" placeholder=\"e.g. MPU-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (m ? m.name : "") + "\" placeholder=\"e.g. MPU #3\"></div>";
  body += "</div>";
  // Step 2b-iii) Type and Rate row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Product Type</label>" + buildTypeSelect(MPU_TYPES, m ? m.type : "Emulsion") + "</div>";
  body += "  <div class=\"form-field\"><label>Rate (kg/day)</label><input type=\"number\" id=\"fEqRate\" value=\"" + (m ? m.rateKg_per_day : "100000") + "\"></div>";
  body += "</div>";
  // Step 2b-iv) Blend configuration (visible only when type is "Blend")
  var blendDisplay = (m && m.type === "Blend") ? "block" : "none";
  var blendAN = (m && m.blendConfig) ? (m.blendConfig.anPct || 0) : 94;
  var blendFO = (m && m.blendConfig) ? (m.blendConfig.foPct || 0) : 6;
  var blendMatrix = (m && m.blendConfig) ? (m.blendConfig.matrixPct || 0) : 0;
  body += "<div id=\"fBlendSection\" style=\"display:" + blendDisplay + ";margin-top:8px;padding:10px;border:1px solid var(--border);border-radius:var(--radius);background:rgba(245,158,11,0.05);\">";
  body += "  <div style=\"font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--accent-load);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;\">Blend Configuration</div>";
  body += "  <div class=\"form-row\">";
  body += "    <div class=\"form-field\"><label>AN %</label><input type=\"number\" id=\"fBlendAN\" value=\"" + blendAN + "\" min=\"0\" max=\"100\" step=\"0.1\"></div>";
  body += "    <div class=\"form-field\"><label>FO %</label><input type=\"number\" id=\"fBlendFO\" value=\"" + blendFO + "\" min=\"0\" max=\"100\" step=\"0.1\"></div>";
  body += "    <div class=\"form-field\"><label>Matrix/Phase %</label><input type=\"number\" id=\"fBlendMatrix\" value=\"" + blendMatrix + "\" min=\"0\" max=\"100\" step=\"0.1\"></div>";
  body += "  </div>";
  body += "</div>";
  // Step 2b-v) Capacity row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Capacity (kg)</label><input type=\"number\" id=\"fEqMinDiam\" value=\"" + (m ? m.capacity_kg : "20000") + "\"></div>";
  body += "  <div class=\"form-field\"></div>";
  body += "</div>";
  // Step 2b-vi) Crew row
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
  wireBrandModelCascade("ancillary");
}

// Step 2d) Build Ancillary form HTML
function buildAncillaryForm(a) {
  var body = "";
  // Step 2d-i) Brand and Model row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Brand</label><div id=\"fEqBrandWrap\" style=\"display:flex;flex-direction:column;\">" + buildBrandSelect("ancillary", a ? a.brand : "") + "</div></div>";
  body += "  <div class=\"form-field\"><label>Model</label><div id=\"fEqModelWrap\" style=\"display:flex;flex-direction:column;\">" + buildModelSelect("ancillary", a ? a.brand : "", a ? a.model : "") + "</div></div>";
  body += "</div>";
  // Step 2d-ii) ID and Name row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Equipment ID</label><input type=\"text\" id=\"fEqId\" value=\"" + (a ? a.id : "") + "\" placeholder=\"e.g. DZ-03\"></div>";
  body += "  <div class=\"form-field\"><label>Name</label><input type=\"text\" id=\"fEqName\" value=\"" + (a ? a.name : "") + "\" placeholder=\"e.g. D9 Dozer #3\"></div>";
  body += "</div>";
  // Step 2d-iii) Type and Rate row
  body += "<div class=\"form-row\">";
  body += "  <div class=\"form-field\"><label>Type</label>" + buildTypeSelect(ANCILLARY_TYPES, a ? a.type : "Dozer") + "</div>";
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
    openModal("equipmentModal");
    wireBrandModelCascade("drill");
  } else if (eqType === "mpu") {
    document.getElementById("equipModalTitle").textContent = "Edit MPU: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildMPUForm(item);
    openModal("equipmentModal");
    wireBrandModelCascade("mpu");
    wireBlendConfig();
  } else if (eqType === "ancillary") {
    document.getElementById("equipModalTitle").textContent = "Edit Ancillary: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildAncillaryForm(item);
    openModal("equipmentModal");
    wireBrandModelCascade("ancillary");
  } else if (eqType === "person") {
    document.getElementById("equipModalTitle").textContent = "Edit Person: " + equipId;
    document.getElementById("equipModalBody").innerHTML = buildPersonForm(item);
    openModal("equipmentModal");
  }
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
  debouncedSave();
  renderEquipment();

  // Step 5b) Immediately open edit modal so user can rename
  showEditEquipModal(eqType, clone.id);
}

// ============================================================
//  SAVE EQUIPMENT (ADD / UPDATE)
// ============================================================

// Step 6) Resolve the actual brand value (handles custom input)
function resolveBrandValue() {
  var brandSel = document.getElementById("fEqBrand");
  var brandCustom = document.getElementById("fEqBrandCustom");
  if (!brandSel) return "";
  if (brandSel.value === "__custom__" && brandCustom) {
    return brandCustom.value.trim();
  }
  return brandSel.value;
}

// Step 6a) Resolve the actual model value (handles custom input)
function resolveModelValue() {
  var modelSel = document.getElementById("fEqModel");
  var modelCustom = document.getElementById("fEqModelCustom");
  if (!modelSel) return "";
  if (modelSel.value === "__custom__" && modelCustom) {
    return modelCustom.value.trim();
  }
  return modelSel.value;
}

// Step 6b) Save equipment from modal — handles both add and edit
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

  // Step 6c) Check for duplicate ID (only if ID changed or adding new)
  if (!isEditing || id !== editingOldId) {
    if (findIdx(collection, id) !== -1 && id !== editingOldId) {
      alert("An item with ID \"" + id + "\" already exists. Please use a different ID.");
      return;
    }
  }

  // Step 6d) Resolve brand/model (for drill, mpu, ancillary)
  var brand = resolveBrandValue();
  var model = resolveModelValue();

  // Step 6d-i) Persist custom brand/model entries
  if (editingEquipType !== "person" && brand) {
    saveCustomEntry(editingEquipType, brand, model || null);
  }

  if (editingEquipType === "drill") {
    var drillCrewOP = parseInt((document.getElementById("fEqCrewOP") || {}).value) || 0;
    var drillCrewFT = parseInt((document.getElementById("fEqCrewFT") || {}).value) || 0;
    var drillCrew = {};
    if (drillCrewOP > 0) drillCrew.OP = drillCrewOP;
    if (drillCrewFT > 0) drillCrew.FT = drillCrewFT;

    if (isEditing) {
      // Step 6e) Update existing drill in-place
      var drill = collection[editingEquipIdx];
      propagateIdRename("drill", editingOldId, id);
      drill.id = id;
      drill.name = name;
      drill.brand = brand;
      drill.model = model;
      drill.type = type;
      drill.minDiam = parseInt(diamField.value) || 127;
      drill.maxDiam = parseInt(maxDiamField.value) || 229;
      drill.rateM_per_day = parseFloat(rateField.value) || 20;
      drill.crewRequired = drillCrew;
    } else {
      collection.push({
        id: id, name: name, brand: brand, model: model, type: type,
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

    // Step 6f) Build blend config if type is Blend
    var blendConfig = null;
    if (type === "Blend") {
      blendConfig = {
        anPct: parseFloat((document.getElementById("fBlendAN") || {}).value) || 0,
        foPct: parseFloat((document.getElementById("fBlendFO") || {}).value) || 0,
        matrixPct: parseFloat((document.getElementById("fBlendMatrix") || {}).value) || 0
      };
    }

    if (isEditing) {
      // Step 6g) Update existing MPU in-place
      var mpu = collection[editingEquipIdx];
      propagateIdRename("mpu", editingOldId, id);
      mpu.id = id;
      mpu.name = name;
      mpu.brand = brand;
      mpu.model = model;
      mpu.type = type;
      mpu.capacity_kg = parseInt(diamField.value) || 20000;
      mpu.rateKg_per_day = parseFloat(rateField.value) || 100000;
      mpu.crewRequired = mpuCrew;
      mpu.blendConfig = blendConfig;
    } else {
      collection.push({
        id: id, name: name, brand: brand, model: model, type: type,
        capacity_kg: parseInt(diamField.value) || 20000,
        rateKg_per_day: parseFloat(rateField.value) || 100000,
        status: "available",
        crewRequired: mpuCrew,
        blendConfig: blendConfig,
        maintenance: []
      });
    }
  } else if (editingEquipType === "ancillary") {
    if (isEditing) {
      // Step 6h) Update existing ancillary in-place
      var unit = collection[editingEquipIdx];
      propagateIdRename("ancillary", editingOldId, id);
      unit.id = id;
      unit.name = name;
      unit.brand = brand;
      unit.model = model;
      unit.type = type;
      unit.rateM2_per_day = parseFloat(rateField.value) || 8000;
    } else {
      collection.push({
        id: id, name: name, brand: brand, model: model, type: type,
        rateM2_per_day: parseFloat(rateField.value) || 8000,
        status: "available",
        maintenance: []
      });
    }
  } else if (editingEquipType === "person") {
    var certs = rateField.value.split(",").map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
    if (isEditing) {
      // Step 6i) Update existing person in-place
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

  // Step 6j) Reset editing state, persist, and re-render
  editingEquipIdx = null;
  editingEquipType = null;
  editingOldId = null;
  debouncedSave();
  closeModal("equipmentModal");
  renderEquipment();
}

// ============================================================
//  MAINTENANCE MODAL
// ============================================================

// Step 7-pre) Track whether we are editing an existing maintenance entry
var editingMaintEqType = null;
var editingMaintEqId = null;
var editingMaintIdx = null;

// Step 7) Populate equipment dropdown for maintenance modal
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

// Step 8) Show add maintenance modal
function showAddMaintenanceModal() {
  editingMaintEqType = null;
  editingMaintEqId = null;
  editingMaintIdx = null;
  populateMaintenanceEquipDropdown();
  var sel = document.getElementById("fMaintEquip");
  sel.disabled = false;
  document.getElementById("maintModalTitle").textContent = "Add Maintenance Window";
  document.getElementById("fMaintReason").value = "";
  document.getElementById("fMaintStart").value = "";
  document.getElementById("fMaintEnd").value = "";
  openModal("maintenanceModal");
}

// Step 8b) Show edit maintenance modal — pre-fills from existing entry and locks the equipment dropdown
function showEditMaintenanceModal(eqType, equipId, maintIdx) {
  editingMaintEqType = eqType;
  editingMaintEqId = equipId;
  editingMaintIdx = maintIdx;

  var collection = eqType === "drill" ? drills : mpus;
  var equip = collection.find(function(e) { return e.id === equipId; });
  if (!equip || !equip.maintenance || !equip.maintenance[maintIdx]) return;

  var entry = equip.maintenance[maintIdx];

  populateMaintenanceEquipDropdown();
  var sel = document.getElementById("fMaintEquip");
  sel.value = eqType + ":" + equipId;
  sel.disabled = true;

  document.getElementById("maintModalTitle").textContent = "Edit Maintenance: " + equipId;
  document.getElementById("fMaintReason").value = entry.reason || "";
  document.getElementById("fMaintStart").value = entry.start || "";
  document.getElementById("fMaintEnd").value = entry.end || "";
  openModal("maintenanceModal");
}

// Step 9) Save maintenance window — handles both add and edit
function saveMaintenance() {
  var equipVal = document.getElementById("fMaintEquip").value;
  var reason = document.getElementById("fMaintReason").value.trim();
  var start = document.getElementById("fMaintStart").value;
  var end = document.getElementById("fMaintEnd").value;

  if (!equipVal || !start || !end) { alert("Equipment, start, and end date are required"); return; }
  if (end < start) { alert("End date must be on or after start date"); return; }
  if (!reason) reason = "Maintenance";

  // Step 9a) If editing, update in-place
  if (editingMaintIdx !== null && editingMaintEqType && editingMaintEqId) {
    var editColl = editingMaintEqType === "drill" ? drills : mpus;
    var editEquip = editColl.find(function(e) { return e.id === editingMaintEqId; });
    if (editEquip && editEquip.maintenance && editEquip.maintenance[editingMaintIdx]) {
      editEquip.maintenance[editingMaintIdx].start = start;
      editEquip.maintenance[editingMaintIdx].end = end;
      editEquip.maintenance[editingMaintIdx].reason = reason;
    }
    editingMaintEqType = null;
    editingMaintEqId = null;
    editingMaintIdx = null;
  } else {
    // Step 9b) Adding new entry
    var parts = equipVal.split(":");
    var eqType = parts[0];
    var eqId = parts[1];

    var collection = eqType === "drill" ? drills : mpus;
    var equip = collection.find(function(e) { return e.id === eqId; });
    if (equip) {
      equip.maintenance.push({ start: start, end: end, reason: reason });
    }
  }

  // Step 9c) Unlock the dropdown for next use
  document.getElementById("fMaintEquip").disabled = false;

  debouncedSave();
  closeModal("maintenanceModal");
  renderEquipment();
}

// Step 10) Initialise all equipment modal buttons
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

export { initEquipmentModals, showEditEquipModal, showEditMaintenanceModal, duplicateEquip };
