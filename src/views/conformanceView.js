// ============================================================
//  CONFORMANCE
//  Monthly drill & blast conformance tracking
// ============================================================

import { APP } from "../state/appState.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";

// Step 1) Render conformance tab
function renderConformance() {
  var conf = APP.conformance;
  var pct = conf.actualBCM / conf.targetBCM;
  var variance = conf.actualBCM - conf.targetBCM;
  var barColor = pct >= 0.9 ? "var(--accent-green)" : pct >= 0.7 ? "var(--accent-load)" : "var(--accent-blast)";

  // Step 2) Stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-green\">";
  statsHtml += "  <div class=\"stat-label\">Target BCM (Month)</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(conf.targetBCM) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-cyan\">";
  statsHtml += "  <div class=\"stat-label\">Actual BCM (MTD)</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(conf.actualBCM) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "  <div class=\"conformance-bar\"><div class=\"fill\" style=\"width:" + Math.min(pct * 100, 100) + "%;background:" + barColor + "\"></div></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card " + (variance >= 0 ? "accent-green" : "accent-red") + "\">";
  statsHtml += "  <div class=\"stat-label\">Variance</div>";
  statsHtml += "  <div class=\"stat-value\" style=\"color:" + (variance >= 0 ? "var(--accent-green)" : "var(--accent-blast)") + "\">" + (variance >= 0 ? "+" : "") + formatNum(variance) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-purple\">";
  statsHtml += "  <div class=\"stat-label\">Conformance</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(pct * 100, 1) + "<span class=\"stat-unit\">%</span></div>";
  statsHtml += "</div>";
  document.getElementById("confStats").innerHTML = statsHtml;

  // Step 3) Conformance table
  var html = "<thead><tr><th>Blast</th><th class=\"num\">Planned BCM</th><th class=\"num\">Planned Exp (kg)</th><th>Blast Date</th><th>Status</th></tr></thead><tbody>";
  APP.blasts.forEach(function(b) {
    var statusBadge = b.status === "active" ? "badge-active" : b.status === "fired" ? "badge-complete" : "badge-drill";
    html += "<tr>";
    html += "<td style=\"font-weight:600;color:var(--text-primary)\">" + b.name + "</td>";
    html += "<td class=\"num\">" + formatNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + formatNum(b.expMass) + "</td>";
    html += "<td>" + formatDate(b.blastDate) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + b.status + "</span></td>";
    html += "</tr>";
  });
  html += "</tbody>";
  document.getElementById("confTable").innerHTML = html;
}

export { renderConformance };
