// ============================================================
//  EXPLOSIVE FORECAST
//  Weekly explosive usage forecast view
// ============================================================

import { APP } from "../state/appState.js";
import { formatNum, getWeekNumber } from "../utils/dateUtils.js";

// Step 1) Render forecast tab
function renderForecast() {
  var loadRate = parseFloat(document.getElementById("loadingRate").value) || 100000;
  var totalExp = APP.blasts.reduce(function(s, b) { return s + (b.expMass || 0); }, 0);
  var totalVol = APP.blasts.reduce(function(s, b) { return s + (b.volume || 0); }, 0);

  // Step 2) Build weekly buckets
  var weeks = {};
  APP.blasts.forEach(function(b) {
    if (!b.blastDate && !b.loadStart) return;
    var loadDate = b.loadStart || b.drillStart;
    if (!loadDate) return;
    var wk = getWeekNumber(new Date(loadDate));
    var yr = new Date(loadDate).getFullYear();
    var key = yr + "-W" + wk;
    if (!weeks[key]) weeks[key] = { week: wk, year: yr, blasts: [], totalExp: 0, totalVol: 0, loadDays: 0 };
    weeks[key].blasts.push(b.name);
    weeks[key].totalExp += (b.expMass || 0);
    weeks[key].totalVol += (b.volume || 0);
    weeks[key].loadDays += Math.ceil((b.expMass || 0) / loadRate);
  });

  // Step 3) Stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-red\">";
  statsHtml += "  <div class=\"stat-label\">Total Explosive Required</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(totalExp) + "<span class=\"stat-unit\">kg</span></div>";
  statsHtml += "  <div class=\"stat-sub\">" + formatNum(totalExp / 1000) + " tonnes</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-amber\">";
  statsHtml += "  <div class=\"stat-label\">Loading Days Required</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(Math.ceil(totalExp / loadRate)) + "<span class=\"stat-unit\">days</span></div>";
  statsHtml += "  <div class=\"stat-sub\">@ " + formatNum(loadRate) + " kg/day</div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-cyan\">";
  statsHtml += "  <div class=\"stat-label\">Avg PF</div>";
  statsHtml += "  <div class=\"stat-value\">" + (totalVol ? formatNum(totalExp / totalVol, 2) : "\u2014") + "<span class=\"stat-unit\">kg/bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-green\">";
  statsHtml += "  <div class=\"stat-label\">Charge Source</div>";
  statsHtml += "  <div class=\"stat-value\" style=\"font-size:14px\">" + (APP.chargeConfigs.length ? "Kirra Config" : "Designed") + "</div>";
  statsHtml += "  <div class=\"stat-sub\">" + (APP.chargeConfigs.length ? APP.chargeConfigs.length + " configs loaded" : "From schedule data") + "</div>";
  statsHtml += "</div>";
  document.getElementById("forecastStats").innerHTML = statsHtml;

  // Step 4) Build forecast table
  var html = "<thead><tr><th>Week</th><th>Blasts</th><th class=\"num\">Explosive (kg)</th><th class=\"num\">Volume (bcm)</th><th class=\"num\">Load Days</th><th class=\"num\">Daily Rate (kg)</th></tr></thead><tbody>";

  var sortedWeeks = Object.values(weeks).sort(function(a, b) { return a.year - b.year || a.week - b.week; });
  sortedWeeks.forEach(function(w) {
    var dailyRate = w.loadDays > 0 ? w.totalExp / w.loadDays : 0;
    html += "<tr>";
    html += "<td>Wk " + w.week + ", " + w.year + "</td>";
    html += "<td>" + w.blasts.join(", ") + "</td>";
    html += "<td class=\"num\">" + formatNum(w.totalExp) + "</td>";
    html += "<td class=\"num\">" + formatNum(w.totalVol) + "</td>";
    html += "<td class=\"num\">" + w.loadDays + "</td>";
    html += "<td class=\"num\">" + formatNum(dailyRate) + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("forecastTable").innerHTML = html;
}

export { renderForecast };
