// ============================================================
//  TOOLTIP
//  Shows hover tooltips for Gantt chart bars
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { getBlastDeps } from "../engine/dependencyEngine.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";

// Step 1) Show tooltip for a Gantt bar element
function showBarTooltip(e, bar) {
  var name = bar.dataset.ttBlast;
  var section = bar.dataset.ttSection;
  var date = bar.dataset.ttDate;
  var blast = APP.blasts.find(function(b) { return b.name === name; });
  if (!blast) return;

  var deps = getBlastDeps(blast);
  var comp = blast._computed || {};

  var tt = document.getElementById("tooltip");
  var html = "<div class=\"tt-title\">" + name + "</div>";
  html += "<div class=\"tt-row\"><span>Phase</span><span class=\"tt-val\">" + section + "</span></div>";
  html += "<div class=\"tt-row\"><span>Date</span><span class=\"tt-val\">" + formatDate(date) + "</span></div>";

  if (section === "DRILLING") {
    html += "<div class=\"tt-row\"><span>Drill Meters</span><span class=\"tt-val\">" + formatNum(getTotalDrillMeters(blast)) + " m</span></div>";
    html += "<div class=\"tt-row\"><span>Duration</span><span class=\"tt-val\">" + blast.drillDays + " days</span></div>";
    if (blast.drillProgress > 0) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-green)\">Drill Progress</span><span class=\"tt-val\" style=\"color:var(--accent-green);font-weight:700\">" + Math.round(blast.drillProgress * 100) + "%</span></div>";
    }
    html += "<div style=\"border-top:1px solid var(--border);margin:4px 0;padding-top:4px;\">";
    html += "<div class=\"tt-row\"><span style=\"color:var(--accent-purple)\">Load starts at</span><span class=\"tt-val\">" + Math.round(deps.drillPctForLoad * 100) + "% drilled</span></div>";
    if (comp.hasOverlap) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-load)\">Loading begins</span><span class=\"tt-val\">" + formatDate(comp.loadOverlapStart) + "</span></div>";
      html += "<div class=\"tt-row\"><span style=\"color:var(--gantt-drill)\">Drill finishes</span><span class=\"tt-val\">" + formatDate(comp.drillEndDate) + "</span></div>";
    }
    html += "<div class=\"tt-row\"><span style=\"color:var(--accent-blast)\">Blast at drill</span><span class=\"tt-val\">" + Math.round(deps.drillPctForBlast * 100) + "%</span></div>";
    html += "</div>";
  } else if (section === "LOADING") {
    html += "<div class=\"tt-row\"><span>Explosive</span><span class=\"tt-val\">" + formatNum(blast.expMass) + " kg</span></div>";
    html += "<div class=\"tt-row\"><span>Load Rate</span><span class=\"tt-val\">" + formatNum(blast.loadRate) + " kg/day</span></div>";
    html += "<div class=\"tt-row\"><span>Duration</span><span class=\"tt-val\">" + blast.loadDays + " days</span></div>";
    if (blast.loadProgress > 0) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-green)\">Load Progress</span><span class=\"tt-val\" style=\"color:var(--accent-green);font-weight:700\">" + Math.round(blast.loadProgress * 100) + "%</span></div>";
    }
    html += "<div style=\"border-top:1px solid var(--border);margin:4px 0;padding-top:4px;\">";
    html += "<div class=\"tt-row\"><span style=\"color:var(--accent-purple)\">Drill was at</span><span class=\"tt-val\">" + Math.round(deps.drillPctForLoad * 100) + "% when load started</span></div>";
    html += "<div class=\"tt-row\"><span style=\"color:var(--accent-blast)\">Blast at load</span><span class=\"tt-val\">" + Math.round(deps.loadPctForBlast * 100) + "%</span></div>";
    if (deps.minLeadDays > 0) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-load)\">Lead days</span><span class=\"tt-val\">" + deps.minLeadDays + " day(s)</span></div>";
    }
    html += "</div>";
  } else {
    html += "<div class=\"tt-row\"><span>Volume</span><span class=\"tt-val\">" + formatNum(blast.volume) + " bcm</span></div>";
    html += "<div class=\"tt-row\"><span>PF</span><span class=\"tt-val\">" + (blast.volume ? formatNum(blast.expMass / blast.volume, 2) : "\u2014") + " kg/bcm</span></div>";
    html += "<div style=\"border-top:1px solid var(--border);margin:4px 0;padding-top:4px;\">";
    html += "<div class=\"tt-row\"><span style=\"color:var(--accent-purple)\">Requires</span><span class=\"tt-val\">" + Math.round(deps.drillPctForBlast * 100) + "% drill + " + Math.round(deps.loadPctForBlast * 100) + "% load</span></div>";
    if (deps.minLeadDays > 0) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-load)\">+" + deps.minLeadDays + " lead day(s)</span></div>";
    }
    if (deps.predecessor) {
      html += "<div class=\"tt-row\"><span style=\"color:var(--accent-purple)\">After</span><span class=\"tt-val\">" + deps.predecessor + "</span></div>";
    }
    html += "</div>";
  }

  if (blast._depWarning) {
    html += "<div style=\"margin-top:4px;padding:4px 6px;background:rgba(239,68,68,0.15);border-radius:4px;color:var(--accent-blast);font-size:12px;\">" + blast._depWarning + "</div>";
  }

  tt.innerHTML = html;
  tt.style.display = "block";
  tt.style.left = Math.min(e.clientX + 12, window.innerWidth - 320) + "px";
  tt.style.top = (e.clientY - 10) + "px";
}

// Step 2) Hide the tooltip
function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}

export { showBarTooltip, hideTooltip };
