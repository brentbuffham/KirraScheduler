// ============================================================
//  EQUIPMENT LIBRARY
//  Export / Import equipment fleet as CSV
//  Covers Drills, MPUs, Ancillary, Personnel
// ============================================================

import { drills, mpus, ancillary, people } from "../state/equipmentState.js";
import { renderEquipment } from "../views/equipmentView.js";
import { isoDate } from "../utils/dateUtils.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 1) CSV column headers — unified across all equipment categories
var EQUIP_HEADERS = [
  "Category",
  "ID",
  "Name",
  "Brand",
  "Model",
  "Type",
  "MinDiam_mm",
  "MaxDiam_mm",
  "Rate_m_per_day",
  "Capacity_kg",
  "Rate_kg_per_day",
  "Rate_m2_per_day",
  "Role",
  "CertifiedTypes",
  "CrewRequired",
  "Status",
  "Maintenance",
  "BlendConfig"
];

// Step 2) Example rows for each category (used in template export)
var EXAMPLE_DRILLS = [
  ["Drill", "D65-01", "D65 #1", "Sandvik", "D65", "Rotary", "127", "229", "19", "", "", "", "", "", "OP:1", "available", "2026-03-10 to 2026-03-12 (5000hr Service)", ""],
  ["Drill", "PV271-01", "PV271 #1", "Epiroc", "PV271", "Rotary", "200", "311", "20", "", "", "", "", "", "OP:1", "available", "", ""]
];

var EXAMPLE_MPUS = [
  ["MPU", "MPU-01", "MPU #1", "Volvo", "FMX", "Emulsion", "", "", "", "20000", "100000", "", "", "", "OP:1 SF:1", "available", "", ""],
  ["MPU", "MPU-02", "MPU #2", "Isuzu", "FXZ", "Blend", "", "", "", "20000", "80000", "", "", "", "OP:1 SF:1", "available", "2026-03-08 to 2026-03-09 (Pump service)", "94/6/0"]
];

var EXAMPLE_ANCILLARY = [
  ["Ancillary", "DZ-01", "D9 Dozer #1", "Cat", "D9T", "Dozer", "", "", "", "", "", "8000", "", "", "", "available", "", ""],
  ["Ancillary", "GR-01", "Grader #1", "Cat", "16M", "Grader", "", "", "", "", "", "12000", "", "", "", "available", "", ""]
];

var EXAMPLE_PEOPLE = [
  ["Person", "P001", "Operator A", "", "", "Drill Operator", "", "", "", "", "", "", "Drill Operator", "D65 | PV271", "", "", "", ""],
  ["Person", "P002", "Shotfirer B", "", "", "Shot Firer", "", "", "", "", "", "", "Shot Firer", "", "", "", "", ""]
];

// Step 3) CSV escape helper
function csvEscape(val) {
  var s = String(val == null ? "" : val);
  if (s.indexOf(",") !== -1 || s.indexOf("\"") !== -1 || s.indexOf("\n") !== -1) {
    return "\"" + s.replace(/"/g, "\"\"") + "\"";
  }
  return s;
}

// Step 4) Format crewRequired object as "OP:1 SF:1" string
function formatCrew(crewReq) {
  if (!crewReq) return "";
  var parts = [];
  var keys = Object.keys(crewReq);
  for (var i = 0; i < keys.length; i++) {
    if (crewReq[keys[i]] > 0) {
      parts.push(keys[i] + ":" + crewReq[keys[i]]);
    }
  }
  return parts.join(" ");
}

// Step 5) Format maintenance array as pipe-delimited string
function formatMaintenance(maint) {
  if (!maint || maint.length === 0) return "";
  return maint.map(function(m) {
    return m.start + " to " + m.end + " (" + m.reason + ")";
  }).join(" | ");
}

// Step 6) Format blend config as "AN/FO/Matrix" string
function formatBlendConfig(bc) {
  if (!bc) return "";
  return (bc.anPct || 0) + "/" + (bc.foPct || 0) + "/" + (bc.matrixPct || 0);
}

// Step 6b) Serialise a single equipment item to CSV row array
function equipToRow(category, eq) {
  if (category === "Drill") {
    return [
      "Drill", eq.id, eq.name, eq.brand || "", eq.model || "", eq.type,
      eq.minDiam, eq.maxDiam, eq.rateM_per_day,
      "", "", "",
      "", "",
      formatCrew(eq.crewRequired),
      eq.status || "available",
      formatMaintenance(eq.maintenance),
      ""
    ];
  }
  if (category === "MPU") {
    return [
      "MPU", eq.id, eq.name, eq.brand || "", eq.model || "", eq.type,
      "", "", "",
      eq.capacity_kg, eq.rateKg_per_day, "",
      "", "",
      formatCrew(eq.crewRequired),
      eq.status || "available",
      formatMaintenance(eq.maintenance),
      formatBlendConfig(eq.blendConfig)
    ];
  }
  if (category === "Ancillary") {
    return [
      "Ancillary", eq.id, eq.name, eq.brand || "", eq.model || "", eq.type,
      "", "", "",
      "", "", eq.rateM2_per_day,
      "", "",
      formatCrew(eq.crewRequired),
      eq.status || "available",
      formatMaintenance(eq.maintenance),
      ""
    ];
  }
  if (category === "Person") {
    return [
      "Person", eq.id, eq.name, "", "", eq.type || eq.role || "",
      "", "", "",
      "", "", "",
      eq.role || "",
      (eq.certifiedTypes || []).join(" | "),
      "",
      "",
      "",
      ""
    ];
  }
  return [];
}

// Step 7) Export Equipment Template — blank CSV with instructions + examples
function exportEquipmentTemplate() {
  var rows = [];

  // Step 7a) Instruction comment rows
  rows.push("# Kirra Scheduler - Equipment Library Template");
  rows.push("# Fill in your site equipment below.");
  rows.push("# Category must be: Drill, MPU, Ancillary, or Person");
  rows.push("# Brand: manufacturer (e.g. Sandvik, Epiroc, Cat, Volvo, Isuzu)");
  rows.push("# Model: equipment model filtered by brand (e.g. D65, PV271, FMX)");
  rows.push("# Drill Type: Rotary, Top Hammer, Down-the-Hole Hammer, Reverse Circulation, Core Drilling");
  rows.push("# MPU Type: ANFO, Watergel, Emulsion, Blend");
  rows.push("# Ancillary Type: Dozer, Grader, Loader, Roller, Impactor, Excavator");
  rows.push("# BlendConfig format: AN%/FO%/Matrix% (e.g. 94/6/0) — only for Blend type MPUs");
  rows.push("# Maintenance format: YYYY-MM-DD to YYYY-MM-DD (Reason) — pipe | separate multiple windows");
  rows.push("# CrewRequired format: OP:1 SF:1 — space separate role:count pairs");
  rows.push("# CertifiedTypes: pipe | separate type codes e.g. D65 | PV271");
  rows.push("# Delete the EXAMPLE rows before importing.");
  rows.push("# Lines starting with # are ignored on import.");
  rows.push("#");

  // Step 7b) Header row
  rows.push(EQUIP_HEADERS.join(","));

  // Step 7c) Example rows
  EXAMPLE_DRILLS.forEach(function(r) { rows.push(r.map(csvEscape).join(",")); });
  EXAMPLE_MPUS.forEach(function(r) { rows.push(r.map(csvEscape).join(",")); });
  EXAMPLE_ANCILLARY.forEach(function(r) { rows.push(r.map(csvEscape).join(",")); });
  EXAMPLE_PEOPLE.forEach(function(r) { rows.push(r.map(csvEscape).join(",")); });

  // Step 7d) Blank rows for convenience
  rows.push("");
  rows.push("");
  rows.push("");

  downloadCSV(rows.join("\n"), "KirraEquipmentTemplate.csv");
}

// Step 8) Export current equipment as CSV library
function exportEquipmentLibrary() {
  var rows = [];

  // Step 8a) Header
  rows.push(EQUIP_HEADERS.join(","));

  // Step 8b) All drills
  drills.forEach(function(d) { rows.push(equipToRow("Drill", d).map(csvEscape).join(",")); });
  // Step 8c) All MPUs
  mpus.forEach(function(m) { rows.push(equipToRow("MPU", m).map(csvEscape).join(",")); });
  // Step 8d) All ancillary
  ancillary.forEach(function(a) { rows.push(equipToRow("Ancillary", a).map(csvEscape).join(",")); });
  // Step 8e) All personnel
  people.forEach(function(p) { rows.push(equipToRow("Person", p).map(csvEscape).join(",")); });

  downloadCSV(rows.join("\n"), "KirraEquipmentLibrary_" + isoDate(new Date()) + ".csv");
}

// Step 9) Download helper
function downloadCSV(csvString, filename) {
  var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
//  IMPORT
// ============================================================

// Step 10) Parse CSV line (handles quoted fields with commas)
function parseCSVLine(line) {
  var result = [];
  var current = "";
  var inQuotes = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (inQuotes) {
      if (ch === "\"" && line[i + 1] === "\"") {
        current += "\"";
        i++;
      } else if (ch === "\"") {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === "\"") {
        inQuotes = true;
      } else if (ch === ",") {
        result.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
  }
  result.push(current.trim());
  return result;
}

// Step 11) Parse crewRequired string "OP:1 SF:1" into { OP: 1, SF: 1 }
function parseCrew(str) {
  if (!str || str.trim() === "") return {};
  var obj = {};
  var pairs = str.trim().split(/\s+/);
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split(":");
    if (parts.length === 2) {
      obj[parts[0].trim()] = parseInt(parts[1], 10) || 0;
    }
  }
  return obj;
}

// Step 12) Parse maintenance string "2026-03-10 to 2026-03-12 (5000hr Service) | ..."
function parseMaintenance(str) {
  if (!str || str.trim() === "") return [];
  var windows = str.split("|");
  var result = [];
  for (var i = 0; i < windows.length; i++) {
    var w = windows[i].trim();
    if (!w) continue;
    // Step 12a) Extract date range and reason
    var match = w.match(/^(\d{4}-\d{2}-\d{2})\s+to\s+(\d{4}-\d{2}-\d{2})\s*(?:\((.+?)\))?/);
    if (match) {
      result.push({
        start: match[1],
        end: match[2],
        reason: (match[3] || "Scheduled").trim()
      });
    }
  }
  return result;
}

// Step 13) Parse certified types string "D65 | PV271" into ["D65", "PV271"]
function parseCertifiedTypes(str) {
  if (!str || str.trim() === "") return [];
  return str.split("|").map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
}

// Step 14) Build column index map from header row (flexible matching)
function buildColumnMap(headerFields) {
  var map = {};
  var candidates = {
    category:       ["category", "cat", "type", "equiptype", "equip_type"],
    id:             ["id", "equipid", "equip_id", "equipment_id"],
    name:           ["name", "equipname", "equip_name", "equipment_name"],
    brand:          ["brand", "manufacturer", "make"],
    model:          ["model", "modelname", "model_name"],
    type:           ["type", "subtype", "sub_type", "equipsubtype", "drilltype", "producttype"],
    minDiam:        ["mindiam_mm", "mindiam", "min_diam", "mindiameter"],
    maxDiam:        ["maxdiam_mm", "maxdiam", "max_diam", "maxdiameter"],
    rateM:          ["rate_m_per_day", "ratem", "drillrate", "drill_rate", "rate_m"],
    capacityKg:     ["capacity_kg", "capacity", "cap_kg"],
    rateKg:         ["rate_kg_per_day", "ratekg", "loadrate", "load_rate", "rate_kg"],
    rateM2:         ["rate_m2_per_day", "ratem2", "rate_m2"],
    role:           ["role", "jobrole", "job_role", "position"],
    certifiedTypes: ["certifiedtypes", "certified_types", "certs", "certifications"],
    crewRequired:   ["crewrequired", "crew_required", "crew"],
    status:         ["status", "equipstatus", "equip_status"],
    maintenance:    ["maintenance", "maint", "maint_windows"],
    blendConfig:    ["blendconfig", "blend_config", "blend"]
  };

  for (var i = 0; i < headerFields.length; i++) {
    var h = headerFields[i].toLowerCase().replace(/[\s_-]+/g, "");
    var keys = Object.keys(candidates);
    for (var k = 0; k < keys.length; k++) {
      var key = keys[k];
      if (map[key] !== undefined) continue;
      for (var c = 0; c < candidates[key].length; c++) {
        if (h === candidates[key][c].replace(/[\s_-]+/g, "")) {
          map[key] = i;
          break;
        }
      }
    }
  }
  return map;
}

// Step 15) Resolve ambiguity: "Type" column can be either Category or SubType
//          If "Category" column exists separately, "Type" maps to subtype.
//          If not, first "Type" column maps to category.
function resolveTypeColumn(headerFields, map) {
  if (map.category !== undefined) return;

  // Step 15a) If no category found, check if "type" header exists at index map.type
  if (map.type !== undefined) {
    map.category = map.type;
    delete map.type;
  }
}

// Step 16) Import equipment from CSV file
function importEquipmentCSV(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var text = e.target.result;
    var lines = text.split(/\r?\n/);
    var headerIdx = -1;
    var headerFields = [];
    var colMap = {};

    // Step 16a) Find the header row (skip comment lines starting with #)
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line || line.charAt(0) === "#") continue;
      headerFields = parseCSVLine(line);
      colMap = buildColumnMap(headerFields);
      resolveTypeColumn(headerFields, colMap);
      headerIdx = i;
      break;
    }

    if (headerIdx === -1 || colMap.id === undefined) {
      alert("Could not find a valid header row with at least an ID column.");
      return;
    }

    // Step 16b) Parse data rows
    var added = { Drill: 0, MPU: 0, Ancillary: 0, Person: 0 };
    var skipped = 0;

    for (var r = headerIdx + 1; r < lines.length; r++) {
      var rowLine = lines[r].trim();
      if (!rowLine || rowLine.charAt(0) === "#") continue;

      var fields = parseCSVLine(rowLine);
      var get = function(key) {
        return colMap[key] !== undefined && fields[colMap[key]] !== undefined ? fields[colMap[key]].trim() : "";
      };

      var category = get("category").toLowerCase();
      var id = get("id");
      if (!id) { skipped++; continue; }

      var name = get("name") || id;
      var brand = get("brand") || "";
      var model = get("model") || "";
      var subType = get("type") || "";
      var status = get("status") || "available";
      var crewStr = get("crewRequired");
      var maintStr = get("maintenance");
      var blendStr = get("blendConfig");

      // Step 16c) Route by category
      if (category === "drill" || category === "drills") {
        // Step 16c-i) Check for duplicate ID
        var existIdx = -1;
        for (var d = 0; d < drills.length; d++) {
          if (drills[d].id === id) { existIdx = d; break; }
        }
        var drillObj = {
          id: id,
          name: name,
          brand: brand,
          model: model,
          type: subType || "Rotary",
          minDiam: parseInt(get("minDiam"), 10) || 0,
          maxDiam: parseInt(get("maxDiam"), 10) || 0,
          rateM_per_day: parseFloat(get("rateM")) || 0,
          status: status,
          crewRequired: parseCrew(crewStr),
          maintenance: parseMaintenance(maintStr)
        };
        if (existIdx !== -1) {
          drills[existIdx] = drillObj;
        } else {
          drills.push(drillObj);
        }
        added.Drill++;

      } else if (category === "mpu" || category === "mpus") {
        var existMpuIdx = -1;
        for (var m = 0; m < mpus.length; m++) {
          if (mpus[m].id === id) { existMpuIdx = m; break; }
        }
        // Step 16c-ii) Parse blend config from "AN/FO/Matrix" format
        var blendConfig = null;
        if (blendStr) {
          var blendParts = blendStr.split("/");
          if (blendParts.length >= 3) {
            blendConfig = {
              anPct: parseFloat(blendParts[0]) || 0,
              foPct: parseFloat(blendParts[1]) || 0,
              matrixPct: parseFloat(blendParts[2]) || 0
            };
          }
        }
        var mpuObj = {
          id: id,
          name: name,
          brand: brand,
          model: model,
          type: subType || "Emulsion",
          capacity_kg: parseFloat(get("capacityKg")) || 0,
          rateKg_per_day: parseFloat(get("rateKg")) || 0,
          status: status,
          crewRequired: parseCrew(crewStr),
          blendConfig: blendConfig,
          maintenance: parseMaintenance(maintStr)
        };
        if (existMpuIdx !== -1) {
          mpus[existMpuIdx] = mpuObj;
        } else {
          mpus.push(mpuObj);
        }
        added.MPU++;

      } else if (category === "ancillary") {
        var existAncIdx = -1;
        for (var a = 0; a < ancillary.length; a++) {
          if (ancillary[a].id === id) { existAncIdx = a; break; }
        }
        var ancObj = {
          id: id,
          name: name,
          brand: brand,
          model: model,
          type: subType || "Unknown",
          rateM2_per_day: parseFloat(get("rateM2")) || 0,
          status: status,
          maintenance: parseMaintenance(maintStr)
        };
        if (existAncIdx !== -1) {
          ancillary[existAncIdx] = ancObj;
        } else {
          ancillary.push(ancObj);
        }
        added.Ancillary++;

      } else if (category === "person" || category === "personnel" || category === "people") {
        var existPIdx = -1;
        for (var p = 0; p < people.length; p++) {
          if (people[p].id === id) { existPIdx = p; break; }
        }
        var role = get("role") || subType || "";
        var personObj = {
          id: id,
          name: name,
          role: role,
          certifiedTypes: parseCertifiedTypes(get("certifiedTypes"))
        };
        if (existPIdx !== -1) {
          people[existPIdx] = personObj;
        } else {
          people.push(personObj);
        }
        added.Person++;

      } else {
        skipped++;
      }
    }

    // Step 16d) Persist, re-render, and report
    debouncedSave();
    renderEquipment();

    var msg = "Equipment import complete:\n";
    msg += "  Drills: " + added.Drill + "\n";
    msg += "  MPUs: " + added.MPU + "\n";
    msg += "  Ancillary: " + added.Ancillary + "\n";
    msg += "  Personnel: " + added.Person + "\n";
    if (skipped > 0) msg += "  Skipped: " + skipped + " rows (no ID or unknown category)";
    alert(msg);
  };
  reader.readAsText(file);
}

// Step 17) Initialise equipment library UI listeners
function initEquipmentLibrary() {
  // Step 17a) Import button + hidden file input
  var btnImport = document.getElementById("btnImportEquipment");
  var fileInput = document.getElementById("equipmentFileInput");
  if (btnImport && fileInput) {
    btnImport.addEventListener("click", function() {
      fileInput.click();
    });
    fileInput.addEventListener("change", function(e) {
      if (e.target.files && e.target.files[0]) {
        importEquipmentCSV(e.target.files[0]);
        e.target.value = "";
      }
    });
  }

  // Step 17b) Export template button (on Equipment tab)
  var btnTemplate = document.getElementById("btnExportEquipTemplate");
  if (btnTemplate) {
    btnTemplate.addEventListener("click", exportEquipmentTemplate);
  }

  // Step 17c) Export library button (on Equipment tab)
  var btnExportLib = document.getElementById("btnExportEquipLib");
  if (btnExportLib) {
    btnExportLib.addEventListener("click", exportEquipmentLibrary);
  }
}

export {
  exportEquipmentTemplate,
  exportEquipmentLibrary,
  importEquipmentCSV,
  initEquipmentLibrary
};
