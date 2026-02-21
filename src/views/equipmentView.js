// ============================================================
//  EQUIPMENT VIEW
//  Renders drill rigs, MPUs, people, and maintenance tables
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, people } from "../state/equipmentState.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";

// Step 1) Render the full equipment tab
function renderEquipment() {
  renderEquipmentStats();
  renderDrillTable();
  renderMPUTable();
  renderPeopleTable();
  renderMaintenanceTable();
}

// Step 2) Stats cards for equipment tab
function renderEquipmentStats() {
  var availDrills = drills.filter(function(d) { return d.status === "available"; }).length;
  var totalDrills = drills.length;
  var availMPUs = mpus.filter(function(m) { return m.status === "available"; }).length;
  var totalMPUs = mpus.length;
  var totalPeople = people.length;
  var operators = people.filter(function(p) { return p.role === "Drill Operator"; }).length;

  var upcomingMaint = 0;
  var now = new Date().toISOString().split("T")[0];
  drills.concat(mpus).forEach(function(eq) {
    (eq.maintenance || []).forEach(function(m) {
      if (m.end >= now) upcomingMaint++;
    });
  });

  var html = "";
  html += "<div class=\"stat-card accent-blue\">";
  html += "  <div class=\"stat-label\">Drill Rigs</div>";
  html += "  <div class=\"stat-value\">" + availDrills + " / " + totalDrills + "</div>";
  html += "  <div class=\"stat-sub\">" + availDrills + " available</div>";
  html += "</div>";
  html += "<div class=\"stat-card accent-amber\">";
  html += "  <div class=\"stat-label\">MPUs</div>";
  html += "  <div class=\"stat-value\">" + availMPUs + " / " + totalMPUs + "</div>";
  html += "  <div class=\"stat-sub\">" + availMPUs + " available</div>";
  html += "</div>";
  html += "<div class=\"stat-card accent-purple\">";
  html += "  <div class=\"stat-label\">Personnel</div>";
  html += "  <div class=\"stat-value\">" + totalPeople + "</div>";
  html += "  <div class=\"stat-sub\">" + operators + " drill operators</div>";
  html += "</div>";
  html += "<div class=\"stat-card accent-red\">";
  html += "  <div class=\"stat-label\">Upcoming Maintenance</div>";
  html += "  <div class=\"stat-value\">" + upcomingMaint + "</div>";
  html += "  <div class=\"stat-sub\">scheduled windows</div>";
  html += "</div>";
  document.getElementById("equipStats").innerHTML = html;
}

// Step 3) Drill rigs table
function renderDrillTable() {
  var html = "<thead><tr>";
  html += "<th>ID</th><th>Name</th><th>Type</th>";
  html += "<th class=\"num\">Min Diam (mm)</th><th class=\"num\">Max Diam (mm)</th>";
  html += "<th class=\"num\">Rate (m/day)</th><th>Status</th><th>Assigned To</th><th>Maintenance</th>";
  html += "</tr></thead><tbody>";

  drills.forEach(function(drill) {
    // Find which blasts this drill is assigned to
    var assignments = APP.blasts.filter(function(b) {
      return (b.assignedDrills || []).indexOf(drill.id) !== -1;
    }).map(function(b) { return b.name; });

    var statusBadge = drill.status === "available" ? "badge-active" : "badge-blast";
    var maintCount = drill.maintenance.length;
    var maintBadge = maintCount > 0
      ? "<span class=\"badge badge-blast\">" + maintCount + " window(s)</span>"
      : "<span class=\"badge badge-complete\">Clear</span>";

    html += "<tr data-drill-id=\"" + drill.id + "\">";
    html += "<td style=\"color:var(--accent-cyan);font-weight:600;\">" + drill.id + "</td>";
    html += "<td>" + drill.name + "</td>";
    html += "<td><span class=\"badge badge-drill\">" + drill.type + "</span></td>";
    html += "<td class=\"num\">" + drill.minDiam + "</td>";
    html += "<td class=\"num\">" + drill.maxDiam + "</td>";
    html += "<td class=\"num\">" + formatNum(drill.rateM_per_day) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + drill.status + "</span></td>";
    html += "<td style=\"font-size:10px;\">" + (assignments.length > 0 ? assignments.join(", ") : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + maintBadge + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("drillTable").innerHTML = html;
}

// Step 4) MPU table
function renderMPUTable() {
  var html = "<thead><tr>";
  html += "<th>ID</th><th>Name</th><th>Type</th>";
  html += "<th class=\"num\">Capacity (kg)</th><th class=\"num\">Rate (kg/day)</th>";
  html += "<th>Status</th><th>Assigned To</th><th>Maintenance</th>";
  html += "</tr></thead><tbody>";

  mpus.forEach(function(mpu) {
    var assignments = APP.blasts.filter(function(b) {
      return b.assignedMPU === mpu.id;
    }).map(function(b) { return b.name; });

    var statusBadge = mpu.status === "available" ? "badge-active" : "badge-blast";
    var maintCount = mpu.maintenance.length;
    var maintBadge = maintCount > 0
      ? "<span class=\"badge badge-blast\">" + maintCount + " window(s)</span>"
      : "<span class=\"badge badge-complete\">Clear</span>";

    html += "<tr data-mpu-id=\"" + mpu.id + "\">";
    html += "<td style=\"color:var(--accent-load);font-weight:600;\">" + mpu.id + "</td>";
    html += "<td>" + mpu.name + "</td>";
    html += "<td><span class=\"badge badge-load\">" + mpu.type + "</span></td>";
    html += "<td class=\"num\">" + formatNum(mpu.capacity_kg) + "</td>";
    html += "<td class=\"num\">" + formatNum(mpu.rateKg_per_day) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + mpu.status + "</span></td>";
    html += "<td style=\"font-size:10px;\">" + (assignments.length > 0 ? assignments.join(", ") : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + maintBadge + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("mpuTable").innerHTML = html;
}

// Step 5) People table
function renderPeopleTable() {
  var html = "<thead><tr>";
  html += "<th>ID</th><th>Name</th><th>Role</th><th>Certified Equipment Types</th>";
  html += "</tr></thead><tbody>";

  people.forEach(function(p) {
    var certs = p.certifiedTypes.length > 0
      ? p.certifiedTypes.map(function(t) { return "<span class=\"badge badge-drill\">" + t + "</span>"; }).join(" ")
      : "<span style=\"color:var(--text-muted)\">\u2014</span>";

    html += "<tr data-person-id=\"" + p.id + "\">";
    html += "<td style=\"color:var(--accent-purple);font-weight:600;\">" + p.id + "</td>";
    html += "<td style=\"font-weight:500;\">" + p.name + "</td>";
    html += "<td>" + p.role + "</td>";
    html += "<td>" + certs + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("peopleTable").innerHTML = html;
}

// Step 6) Maintenance schedule table (aggregated from all equipment)
function renderMaintenanceTable() {
  var allMaint = [];

  drills.forEach(function(drill) {
    (drill.maintenance || []).forEach(function(m) {
      allMaint.push({
        equipId: drill.id,
        equipName: drill.name,
        equipType: "Drill",
        start: m.start,
        end: m.end,
        reason: m.reason
      });
    });
  });

  mpus.forEach(function(mpu) {
    (mpu.maintenance || []).forEach(function(m) {
      allMaint.push({
        equipId: mpu.id,
        equipName: mpu.name,
        equipType: "MPU",
        start: m.start,
        end: m.end,
        reason: m.reason
      });
    });
  });

  // Sort by start date
  allMaint.sort(function(a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });

  var html = "<thead><tr>";
  html += "<th>Equipment</th><th>Type</th><th>Start</th><th>End</th><th>Days</th><th>Reason</th><th>Conflicts</th>";
  html += "</tr></thead><tbody>";

  allMaint.forEach(function(m) {
    // Check if any blast overlaps with this maintenance
    var conflicts = [];
    APP.blasts.forEach(function(b) {
      if (!b.drillStart) return;
      var assigned = (b.assignedDrills || []).concat(b.assignedMPU ? [b.assignedMPU] : []);
      if (assigned.indexOf(m.equipId) === -1) return;
      var bEnd = new Date(b.drillStart);
      bEnd.setDate(bEnd.getDate() + (b.drillDays || 1) - 1);
      var bEndStr = bEnd.toISOString().split("T")[0];
      if (m.end >= b.drillStart && m.start <= bEndStr) {
        conflicts.push(b.name);
      }
    });

    var days = Math.ceil((new Date(m.end) - new Date(m.start)) / 86400000) + 1;
    var conflictHtml = conflicts.length > 0
      ? "<span class=\"dep-warning\" title=\"Overlaps: " + conflicts.join(", ") + "\">!</span> " + conflicts.join(", ")
      : "<span class=\"badge badge-complete\">None</span>";

    var typeBadge = m.equipType === "Drill" ? "badge-drill" : "badge-load";

    html += "<tr>";
    html += "<td style=\"font-weight:600;\">" + m.equipId + "</td>";
    html += "<td><span class=\"badge " + typeBadge + "\">" + m.equipType + "</span></td>";
    html += "<td>" + formatDate(m.start) + "</td>";
    html += "<td>" + formatDate(m.end) + "</td>";
    html += "<td class=\"num\">" + days + "</td>";
    html += "<td>" + m.reason + "</td>";
    html += "<td style=\"font-size:10px;\">" + conflictHtml + "</td>";
    html += "</tr>";
  });

  if (allMaint.length === 0) {
    html += "<tr><td colspan=\"7\" style=\"text-align:center;color:var(--text-muted);padding:20px;\">No maintenance windows scheduled</td></tr>";
  }

  html += "</tbody>";
  document.getElementById("maintenanceTable").innerHTML = html;
}

export { renderEquipment };
