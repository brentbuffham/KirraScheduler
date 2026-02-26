// ============================================================
//  BLAST OVERVIEW
//  Renders the blast overview table and stats
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { getBlastDeps } from "../engine/dependencyEngine.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";
import { editBlast } from "../dialogs/blastModal.js";

// Step 1) Render blast overview tab
function renderBlasts() {
  var totalVol = APP.blasts.reduce(function(s, b) { return s + (b.volume || 0); }, 0);
  var totalExp = APP.blasts.reduce(function(s, b) { return s + (b.expMass || 0); }, 0);
  var totalHoles = APP.blasts.reduce(function(s, b) {
    return s + b.holeTypes.reduce(function(h, ht) { return h + (ht.holes || 0); }, 0);
  }, 0);

  // Step 2) Stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-blue\">";
  statsHtml += "  <div class=\"stat-label\">Active Blasts</div>";
  statsHtml += "  <div class=\"stat-value\">" + APP.blasts.filter(function(b) { return b.status === "active"; }).length + "</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-amber\">";
  statsHtml += "  <div class=\"stat-label\">Total Volume</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalVol) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-red\">";
  statsHtml += "  <div class=\"stat-label\">Total Explosive</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalExp) + "<span class=\"stat-unit\">kg</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-purple\">";
  statsHtml += "  <div class=\"stat-label\">Total Holes</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalHoles) + "</div>";
  statsHtml += "</div>";
  document.getElementById("blastStats").innerHTML = statsHtml;

  // Step 3) Build table
  var html = "<thead><tr>";
  html += "<th>Blast Name</th><th>Status</th><th>Mode</th><th>Pattern</th>";
  html += "<th>Hole Types</th><th class=\"num\">Volume (bcm)</th><th class=\"num\">Exp. (kg)</th>";
  html += "<th class=\"num\">PF (kg/bcm)</th><th class=\"num\">Drill (m)</th>";
  html += "<th>Drill Start</th><th>Load Start</th><th>Blast Date</th>";
  html += "<th style=\"color:var(--accent-purple)\">Deps</th>";
  html += "</tr></thead><tbody>";

  APP.blasts.forEach(function(b, idx) {
    var pf = b.volume ? (b.expMass / b.volume).toFixed(2) : "\u2014";
    var drillM = getTotalDrillMeters(b);
    var statusBadge = b.status === "active" ? "badge-active" : b.status === "fired" ? "badge-blast" : "badge-drill";
    var holeTypeSummary = b.holeTypes.map(function(ht) {
      var badge = ht.type === "PRESPLIT" ? "badge-presplit" : ht.type === "BUFFER" ? "badge-buffer" : "badge-production";
      return "<span class=\"badge " + badge + "\">" + ht.type + "</span>";
    }).join(" ");

    var deps = getBlastDeps(b);
    var depSummary = Math.round(deps.drillPctForLoad * 100) + "%\u2192L";
    if (deps.drillPctForBlast < 1) depSummary += " " + Math.round(deps.drillPctForBlast * 100) + "%D\u2192B";
    if (deps.loadPctForBlast < 1) depSummary += " " + Math.round(deps.loadPctForBlast * 100) + "%L\u2192B";
    if (deps.predecessor) depSummary += " \u26D3" + deps.predecessor.substring(0, 10);
    var hasWarning = b._depWarning ? "<span class=\"dep-warning\" title=\"" + b._depWarning + "\">!</span>" : "";

    html += "<tr data-blast-idx=\"" + idx + "\" style=\"cursor:pointer\">";
    html += "<td style=\"color:var(--text-primary);font-weight:600;\">" + b.name + hasWarning + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + b.status + "</span></td>";
    html += "<td>" + b.mode + "</td>";
    html += "<td>" + (b.pattern || "\u2014") + "</td>";
    html += "<td>" + holeTypeSummary + "</td>";
    html += "<td class=\"num\">" + formatNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + formatNum(b.expMass) + "</td>";
    html += "<td class=\"num\">" + pf + "</td>";
    html += "<td class=\"num\">" + formatNum(drillM) + "</td>";
    html += "<td>" + formatDate(b.drillStart) + "</td>";
    html += "<td>" + formatDate(b.loadStart) + "</td>";
    html += "<td>" + formatDate(b.blastDate) + "</td>";
    html += "<td style=\"font-size:11px;color:var(--accent-purple)\">" + depSummary + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("blastTable").innerHTML = html;

  // Step 4) Attach double-click edit handlers
  document.querySelectorAll("#blastTable tr[data-blast-idx]").forEach(function(row) {
    row.addEventListener("dblclick", function() {
      editBlast(parseInt(row.dataset.blastIdx));
    });
  });
}

export { renderBlasts };
