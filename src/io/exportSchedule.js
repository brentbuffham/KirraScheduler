// ============================================================
//  EXPORT SCHEDULE
//  Export blast schedule as .kgp (Kirra Gantt Project) or CSV
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills, mpus, ancillary, people } from "../state/equipmentState.js";
import { isoDate } from "../utils/dateUtils.js";
import { exportPatternTemplate, exportPatternLibrary } from "../views/patternLibrary.js";
import { exportEquipmentTemplate, exportEquipmentLibrary } from "./equipmentLibrary.js";

// Step 1) Export full project as .kgp (JSON with all state)
function exportKGP() {
  var data = {
    // Step 1a) File header
    format: "KirraGanttProject",
    version: "1.0.0",
    exportDate: new Date().toISOString(),

    // Step 1b) Global settings
    settings: {
      planStart: isoDate(APP.planStart),
      ganttWeeks: APP.ganttWeeks,
      rigHours: APP.rigHours,
      availability: APP.availability,
      utilisation: APP.utilisation,
      deps: APP.deps
    },

    // Step 1c) Schedule data
    blasts: APP.blasts,
    patterns: APP.patterns,
    chargeConfigs: APP.chargeConfigs,
    importedBlasts: APP.importedBlasts,

    // Step 1d) Equipment state
    drills: drills,
    mpus: mpus,
    ancillary: ancillary,
    people: people,

    // Step 1e) Conformance targets + actuals
    conformance: APP.conformance,

    // Step 1e-ii) Product library
    products: APP.products || [],

    // Step 1f) Spatial data — surfaces and solids (full geometry for 3D playback)
    kirraProjectSurfaces: APP.kirraProjectSurfaces || [],
    kirraProjectSolids: APP.kirraProjectSolids || []
  };

  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "KirraSchedule_" + isoDate(new Date()) + ".kgp";
  a.click();
  URL.revokeObjectURL(url);
}

// Step 2) Export blasts as CSV for spreadsheet use
function exportCSV() {
  // Step 2a) Define CSV columns
  var headers = [
    "Blast Name", "Status", "Mode",
    "Surface Area (m2)", "Volume (bcm)", "Explosive Mass (kg)",
    "Total Drill Meters", "Hole Count", "Hole Types",
    "Depth Profile",
    "Drill Start", "Start Time", "Drill Days",
    "Load Start", "Load Days", "Blast Date",
    "Assigned Drills", "Assigned MPUs",
    "Load Rate (kg/day)",
    "Drill % to Load", "Drill % to Blast", "Lead Days",
    "Predecessor",
    "Drill Progress (%)", "Load Progress (%)"
  ];

  // Step 2b) Build rows
  var rows = [headers.join(",")];
  APP.blasts.forEach(function(b) {
    var totalMeters = getTotalDrillMeters(b);
    var totalHoles = 0;
    var htSummary = [];
    if (b.holeTypes) {
      for (var hi = 0; hi < b.holeTypes.length; hi++) {
        totalHoles += b.holeTypes[hi].holes || 0;
        var htLabel = (b.holeTypes[hi].patternId || b.holeTypes[hi].type || "?") + ":" + (b.holeTypes[hi].holes || 0);
        htSummary.push(htLabel);
      }
    }
    // Step 2b-ii) Build depth profile summary text from depthBinData
    var depthBinData = b.depthBinData || null;
    if (!depthBinData) {
      var matchSolid = (APP.kirraProjectSolids || []).find(function(s) {
        if (s.name === b.name) return true;
        var stripped = s.name || "";
        if (stripped.indexOf("EXTRUDED_") === 0) stripped = stripped.substring(9);
        return stripped === b.name;
      });
      if (matchSolid) depthBinData = matchSolid.depthBinData || null;
    }
    var depthProfileStr = "";
    if (depthBinData && depthBinData.depthBins) {
      var parts = [];
      for (var di = 0; di < depthBinData.depthBins.length; di++) {
        var db = depthBinData.depthBins[di];
        if (db.areaPct >= 1) {
          parts.push(db.minDepth + "-" + db.maxDepth + "m:" + db.areaPct + "%");
        }
      }
      depthProfileStr = parts.join(" | ");
    }

    var drillPctLoad = b.deps.drillPctForLoad !== null ? b.deps.drillPctForLoad : (APP.deps.drillPctForLoad || "");
    var drillPctBlast = b.deps.drillPctForBlast !== null ? b.deps.drillPctForBlast : (APP.deps.drillPctForBlast || "");
    var leadDays = b.deps.minLeadDays !== null ? b.deps.minLeadDays : (APP.deps.minLeadDays || "");
    var predecessor = b.deps.predecessor || "";

    var row = [
      csvEscape(b.name),
      b.status || "",
      b.mode || "",
      b.surfaceArea || 0,
      b.volume || 0,
      b.expMass || 0,
      Math.round(totalMeters * 10) / 10,
      totalHoles,
      csvEscape(htSummary.join(" | ")),
      csvEscape(depthProfileStr),
      b.drillStart || "",
      b.drillStartTime || "",
      b.drillDays || 0,
      b.loadStart || "",
      b.loadDays || 0,
      b.blastDate || "",
      csvEscape((b.assignedDrills || []).join(" | ")),
      csvEscape((b.assignedMPUs || (b.assignedMPU ? [b.assignedMPU] : [])).join(" | ")),
      b.loadRate || 0,
      drillPctLoad,
      drillPctBlast,
      leadDays,
      csvEscape(predecessor),
      b.drillProgress ? Math.round(b.drillProgress * 100) : 0,
      b.loadProgress ? Math.round(b.loadProgress * 100) : 0
    ];
    rows.push(row.join(","));
  });

  var csvString = rows.join("\n");
  var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "KirraSchedule_" + isoDate(new Date()) + ".csv";
  a.click();
  URL.revokeObjectURL(url);
}

// Step 3) CSV string escape helper
function csvEscape(val) {
  var s = String(val);
  if (s.indexOf(",") !== -1 || s.indexOf("\"") !== -1 || s.indexOf("\n") !== -1) {
    return "\"" + s.replace(/"/g, "\"\"") + "\"";
  }
  return s;
}

// Step 4) Show export menu with options
function showExportMenu(e) {
  // Step 4a) Remove any existing menu
  var existing = document.getElementById("exportMenu");
  if (existing) { existing.remove(); return; }

  var btn = document.getElementById("btnExport");
  var rect = btn.getBoundingClientRect();

  // Step 4b) Build menu element
  var menu = document.createElement("div");
  menu.id = "exportMenu";
  menu.className = "export-menu";
  menu.style.top = (rect.bottom + 4) + "px";
  menu.style.right = (window.innerWidth - rect.right) + "px";

  var html = "";
  html += "<div class=\"export-menu-item\" id=\"exportKGP\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/>";
  html += "</svg>";
  html += " Kirra Gantt Project (.kgp)";
  html += "<span class=\"export-menu-hint\">Full project — all data, equipment, settings</span>";
  html += "</div>";

  html += "<div class=\"export-menu-item\" id=\"exportCSV\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/>";
  html += "<line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"3\" y1=\"15\" x2=\"21\" y2=\"15\"/>";
  html += "<line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"/><line x1=\"15\" y1=\"3\" x2=\"15\" y2=\"21\"/>";
  html += "</svg>";
  html += " Schedule Spreadsheet (.csv)";
  html += "<span class=\"export-menu-hint\">Blast list for Excel / Google Sheets</span>";
  html += "</div>";

  // Step 4b-ii) Pattern Library export options
  html += "<div style=\"border-top:1px solid var(--border);margin:4px 0;\"></div>";

  html += "<div class=\"export-menu-item\" id=\"exportPatternTemplate\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/>";
  html += "<line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/>";
  html += "</svg>";
  html += " Pattern Library Template (.csv)";
  html += "<span class=\"export-menu-hint\">Blank template for people to fill in</span>";
  html += "</div>";

  html += "<div class=\"export-menu-item\" id=\"exportPatternLib\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/>";
  html += "<line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/>";
  html += "</svg>";
  html += " Pattern Library (.csv)";
  html += "<span class=\"export-menu-hint\">Export current patterns as CSV</span>";
  html += "</div>";

  // Step 4b-iii) Equipment Library export options
  html += "<div style=\"border-top:1px solid var(--border);margin:4px 0;\"></div>";

  html += "<div class=\"export-menu-item\" id=\"exportEquipTemplate\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/>";
  html += "<line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/>";
  html += "</svg>";
  html += " Equipment Library Template (.csv)";
  html += "<span class=\"export-menu-hint\">Blank template — drills, MPUs, ancillary, personnel</span>";
  html += "</div>";

  html += "<div class=\"export-menu-item\" id=\"exportEquipLib\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/>";
  html += "<line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/>";
  html += "</svg>";
  html += " Equipment Library (.csv)";
  html += "<span class=\"export-menu-hint\">Export current fleet as CSV</span>";
  html += "</div>";

  menu.innerHTML = html;
  document.body.appendChild(menu);

  // Step 4c) Wire up menu item clicks
  document.getElementById("exportKGP").addEventListener("click", function() {
    menu.remove();
    exportKGP();
  });
  document.getElementById("exportCSV").addEventListener("click", function() {
    menu.remove();
    exportCSV();
  });
  document.getElementById("exportPatternTemplate").addEventListener("click", function() {
    menu.remove();
    exportPatternTemplate();
  });
  document.getElementById("exportPatternLib").addEventListener("click", function() {
    menu.remove();
    exportPatternLibrary();
  });
  document.getElementById("exportEquipTemplate").addEventListener("click", function() {
    menu.remove();
    exportEquipmentTemplate();
  });
  document.getElementById("exportEquipLib").addEventListener("click", function() {
    menu.remove();
    exportEquipmentLibrary();
  });

  // Step 4d) Close menu on outside click
  var closeHandler = function(evt) {
    if (!menu.contains(evt.target) && evt.target !== btn) {
      menu.remove();
      document.removeEventListener("click", closeHandler);
    }
  };
  // Delay to avoid closing immediately from the same click
  setTimeout(function() {
    document.addEventListener("click", closeHandler);
  }, 10);
}

// Step 5) Initialise export button
function initExport() {
  document.getElementById("btnExport").addEventListener("click", showExportMenu);
}

export { exportKGP, exportCSV, initExport };
