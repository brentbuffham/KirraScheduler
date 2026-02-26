// ============================================================
//  IMPORT PREVIEW
//  Shows a preview table of imported blast definitions
//  and handles merge/discard actions.
//  Supports blasts from: DXF holes, Kirra project, KAP solids.
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";

// Step 1) Format number with locale separators
function fmtNum(v) {
  if (v === null || v === undefined || v === 0) return "\u2014";
  return Math.round(v).toLocaleString();
}

// Step 2) Display imported blasts in the preview table
function showImportPreview() {
  var container = document.getElementById("importPreview");
  container.style.display = "block";

  var html = "<thead><tr>";
  html += "<th>Blast Name</th><th>Source</th>";
  html += "<th class=\"num\">Volume (m3)</th><th class=\"num\">Area (m2)</th>";
  html += "<th class=\"num\">Bench Ht (m)</th><th class=\"num\">Exp. Mass (kg)</th>";
  html += "<th>Hole Types</th>";
  html += "</tr></thead><tbody>";

  APP.importedBlasts.forEach(function(b) {
    var sourceType = b._sourceType || "import";
    var sourceLabel = sourceType === "solid" ? "Solid" : "Holes";
    var sourceBadge = sourceType === "solid" ? "badge-buffer" : "badge-production";

    html += "<tr>";
    html += "<td style=\"font-weight:600;color:var(--text-primary)\">" + b.name + "</td>";
    html += "<td><span class=\"badge " + sourceBadge + "\">" + sourceLabel + "</span></td>";
    html += "<td class=\"num\">" + fmtNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + fmtNum(b.surfaceArea) + "</td>";
    html += "<td class=\"num\">" + (b.solidBenchHt ? b.solidBenchHt.toFixed(1) : "\u2014") + "</td>";
    html += "<td class=\"num\">" + fmtNum(b.expMass) + "</td>";

    // Step 2a) Hole types summary
    if (b.holeTypes && b.holeTypes.length > 0) {
      var htHtml = b.holeTypes.map(function(ht) {
        var badge = ht.type === "PRESPLIT" ? "badge-presplit" : ht.type === "BUFFER" ? "badge-buffer" : "badge-production";
        return "<span class=\"badge " + badge + "\">" + ht.type + "</span>";
      }).join(" ");
      html += "<td>" + htHtml + "</td>";
    } else {
      html += "<td style=\"color:var(--text-muted);font-size:11px;\">No hole data</td>";
    }
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("importTable").innerHTML = html;
}

// Step 3) Merge imported blasts into the main schedule
function mergeImported() {
  APP.importedBlasts.forEach(function(imp) {
    var existing = APP.blasts.find(function(b) { return b.name === imp.name; });
    if (existing) {
      // Step 3a) Update existing blast with imported data
      if (imp.volume && imp.volume > 0) {
        existing.volume = imp.volume;
      }
      if (imp.surfaceArea && imp.surfaceArea > 0) {
        existing.surfaceArea = imp.surfaceArea;
      }
      if (imp.expMass && imp.expMass > 0) {
        existing.expMass = imp.expMass;
      }
      if (imp.solidBenchHt && imp.solidBenchHt > 0) {
        existing.solidBenchHt = imp.solidBenchHt;
      }
      if (imp.solidBounds) {
        existing.solidBounds = imp.solidBounds;
      }
      // Merge hole types if present
      if (imp.holeTypes && imp.holeTypes.length > 0) {
        existing.holeTypes = imp.holeTypes.map(function(ht) {
          return {
            type: ht.type,
            diam: ht.diam > 1 ? ht.diam / 1000 : ht.diam,
            burden: ht.burden,
            spacing: ht.spacing,
            holes: ht.holes || 0,
            drillMeters: ht.drillMeters || 0,
            expMass: ht.expMass || 0
          };
        });
      }
    } else {
      // Step 3b) Create new blast entry with all available data
      APP.blasts.push({
        name: imp.name,
        mode: "Manual",
        surfaceArea: imp.surfaceArea || 0,
        loadRate: imp.loadRate || 100000,
        volume: imp.volume || 0,
        expMass: imp.expMass || 0,
        drillStart: imp.drillStart || isoDate(APP.planStart),
        drillStartTime: imp.drillStartTime || "06:00",
        drillDays: imp.drillDays || 1,
        loadStart: null,
        loadDays: imp.loadDays || 0,
        blastDate: null,
        status: "planned",
        deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
        assignedDrills: imp.assignedDrills || [],
        assignedMPUs: imp.assignedMPUs || (imp.assignedMPU ? [imp.assignedMPU] : []),
        holeTypes: (imp.holeTypes || []).map(function(ht) {
          return {
            patternId: ht.patternId || "",
            type: ht.type,
            diam: ht.diam > 1 ? ht.diam / 1000 : ht.diam,
            burden: ht.burden || 0,
            spacing: ht.spacing || 0,
            isLineDrill: ht.isLineDrill || false,
            holes: ht.holes || 0,
            holeDepth: ht.holeDepth || 0,
            drillMeters: ht.drillMeters || 0,
            expMass: ht.expMass || 0
          };
        }),
        solidBounds: imp.solidBounds || null,
        solidBenchHt: imp.solidBenchHt || null,
        drillProgress: 0,
        loadProgress: 0
      });
    }
  });

  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";

  // Step 3c) Log to appropriate log panel
  var kapLog = document.getElementById("kapProjectLog");
  var dxfLog = document.getElementById("dxfLog");
  if (kapLog) kapLog.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;\">Merged into schedule</div>";
  if (dxfLog) dxfLog.innerHTML += "<div class=\"log-ok\">Merged into schedule</div>";

  recalcDependencies();
  renderGantt();
  renderBlasts();
}

// Step 4) Discard imported blasts
function clearImported() {
  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";
}

// Step 5) Initialise import preview buttons
function initImportPreview() {
  document.getElementById("btnMergeImported").addEventListener("click", mergeImported);
  document.getElementById("btnClearImported").addEventListener("click", clearImported);
}

export { showImportPreview, mergeImported, clearImported, initImportPreview };
