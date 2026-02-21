// ============================================================
//  IMPORT PREVIEW
//  Shows a preview table of imported blast definitions
//  and handles merge/discard actions
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate } from "../utils/dateUtils.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";

// Step 1) Display imported blasts in the preview table
function showImportPreview() {
  var container = document.getElementById("importPreview");
  container.style.display = "block";

  var html = "<thead><tr><th>Blast Name</th><th>Hole Types</th><th>Burden</th><th>Spacing</th><th>Bench Ht</th><th>Diam (mm)</th></tr></thead><tbody>";

  APP.importedBlasts.forEach(function(b) {
    b.holeTypes.forEach(function(ht, i) {
      html += "<tr>";
      if (i === 0) {
        html += "<td rowspan=\"" + b.holeTypes.length + "\" style=\"font-weight:600;color:var(--text-primary)\">" + b.name + "</td>";
      }
      var badge = ht.type === "PRESPLIT" ? "badge-presplit" : ht.type === "BUFFER" ? "badge-buffer" : "badge-production";
      html += "<td><span class=\"badge " + badge + "\">" + ht.type + "</span></td>";
      html += "<td class=\"num\">" + (ht.burden || "\u2014") + "</td>";
      html += "<td class=\"num\">" + (ht.spacing || "\u2014") + "</td>";
      html += "<td class=\"num\">" + (ht.benchHt || "\u2014") + "</td>";
      html += "<td class=\"num\">" + (ht.diam || "\u2014") + "</td>";
      html += "</tr>";
    });
  });

  html += "</tbody>";
  document.getElementById("importTable").innerHTML = html;
}

// Step 2) Merge imported blasts into the main schedule
function mergeImported() {
  APP.importedBlasts.forEach(function(imp) {
    var existing = APP.blasts.find(function(b) { return b.name === imp.name; });
    if (existing) {
      // Step 2a) Update hole types for existing blast
      existing.holeTypes = imp.holeTypes.map(function(ht) {
        return {
          type: ht.type,
          diam: (ht.diam || 229) / 1000,
          burden: ht.burden,
          spacing: ht.spacing,
          holes: 0,
          drillMeters: 0,
          expMass: 0
        };
      });
    } else {
      // Step 2b) Create new blast entry
      APP.blasts.push({
        name: imp.name, mode: "Manual", surfaceArea: 0, pattern: "",
        pctD65: 0, pctPV: 1, rateD65: 19, ratePV: 20, numD65: 0, numPV: 4,
        loadRate: 100000, d65Meters: 0, pvMeters: 0, volume: 0, expMass: 0,
        drillStart: isoDate(APP.planStart), drillDays: 1,
        loadStart: null, loadDays: 0, blastDate: null,
        status: "planned",
        deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
        holeTypes: imp.holeTypes.map(function(ht) {
          return {
            type: ht.type,
            diam: (ht.diam || 229) / 1000,
            burden: ht.burden,
            spacing: ht.spacing,
            holes: 0,
            drillMeters: 0,
            expMass: 0
          };
        })
      });
    }
  });

  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";
  document.getElementById("dxfLog").innerHTML += "<div class=\"log-ok\">Merged into schedule</div>";
  renderGantt();
  renderBlasts();
}

// Step 3) Discard imported blasts
function clearImported() {
  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";
}

// Step 4) Initialise import preview buttons
function initImportPreview() {
  document.getElementById("btnMergeImported").addEventListener("click", mergeImported);
  document.getElementById("btnClearImported").addEventListener("click", clearImported);
}

export { showImportPreview, mergeImported, clearImported, initImportPreview };
