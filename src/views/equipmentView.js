// ============================================================
//  EQUIPMENT VIEW
//  Renders drill rigs, MPUs, people, and maintenance tables
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, ancillary, people, mobiliseEquipment, demobiliseEquipment, removeEquipment } from "../state/equipmentState.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";
import { showEditEquipModal, showEditMaintenanceModal, duplicateEquip } from "../dialogs/equipmentModal.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 0) Sort state per table — tracks which column is sorted and direction
var sortState = {
  drill:     { column: "id", direction: "asc" },
  mpu:       { column: "id", direction: "asc" },
  ancillary: { column: "id", direction: "asc" },
  person:    { column: "id", direction: "asc" }
};

// Step 0b) Generic comparator for sortable columns
function sortArray(arr, column, direction) {
  var sorted = arr.slice();
  sorted.sort(function(a, b) {
    var va = a[column];
    var vb = b[column];
    if (va === undefined || va === null) va = "";
    if (vb === undefined || vb === null) vb = "";
    if (typeof va === "string") va = va.toLowerCase();
    if (typeof vb === "string") vb = vb.toLowerCase();
    var cmp = va < vb ? -1 : va > vb ? 1 : 0;
    return direction === "desc" ? -cmp : cmp;
  });
  return sorted;
}

// Step 0c) Build a sortable <th> with arrow indicator
function sortTh(tableKey, column, label, extraClass) {
  var s = sortState[tableKey];
  var arrow = "";
  if (s.column === column) {
    arrow = s.direction === "asc" ? " \u25B2" : " \u25BC";
  }
  var cls = "sortable-th" + (extraClass ? " " + extraClass : "");
  return "<th class=\"" + cls + "\" data-sort-table=\"" + tableKey + "\" data-sort-col=\"" + column + "\">" + label + arrow + "</th>";
}

// Step 0d) Attach sort click listeners after any table render
function attachSortListeners() {
  document.querySelectorAll(".sortable-th").forEach(function(th) {
    th.addEventListener("click", function() {
      var tableKey = th.dataset.sortTable;
      var col = th.dataset.sortCol;
      var s = sortState[tableKey];
      if (s.column === col) {
        s.direction = s.direction === "asc" ? "desc" : "asc";
      } else {
        s.column = col;
        s.direction = "asc";
      }
      // Step 0d-i) Re-render only the affected table
      if (tableKey === "drill") renderDrillTable();
      else if (tableKey === "mpu") renderMPUTable();
      else if (tableKey === "ancillary") renderAncillaryTable();
      else if (tableKey === "person") renderPeopleTable();
    });
  });
}

// Step 1) Render the full equipment tab
function renderEquipment() {
  renderEquipmentStats();
  renderDrillTable();
  renderMPUTable();
  renderAncillaryTable();
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
  var availAnc = ancillary.filter(function(a) { return a.status === "available"; }).length;
  var totalAnc = ancillary.length;
  html += "<div class=\"stat-card\" style=\"border-left-color:var(--accent-prep);\">";
  html += "  <div class=\"stat-label\">Ancillary Fleet</div>";
  html += "  <div class=\"stat-value\">" + availAnc + " / " + totalAnc + "</div>";
  html += "  <div class=\"stat-sub\">" + availAnc + " available</div>";
  html += "</div>";
  html += "<div class=\"stat-card accent-red\">";
  html += "  <div class=\"stat-label\">Upcoming Maintenance</div>";
  html += "  <div class=\"stat-value\">" + upcomingMaint + "</div>";
  html += "  <div class=\"stat-sub\">scheduled windows</div>";
  html += "</div>";
  document.getElementById("equipStats").innerHTML = html;

  // Step 2b) Update the equipment count badge
  var totalCount = drills.length + mpus.length + ancillary.length + people.length;
  var countEl = document.getElementById("equipCount");
  if (countEl) countEl.textContent = totalCount + " item(s)";
}

// Step 3) Drill rigs table
function renderDrillTable() {
  var html = "<thead><tr>";
  html += sortTh("drill", "id", "ID");
  html += sortTh("drill", "name", "Name");
  html += sortTh("drill", "brand", "Brand");
  html += sortTh("drill", "model", "Model");
  html += sortTh("drill", "type", "Drill Type");
  html += "<th class=\"num\">Min Diam (mm)</th><th class=\"num\">Max Diam (mm)</th>";
  html += sortTh("drill", "rateM_per_day", "Rate (m/day)", "num");
  html += "<th>Crew Req</th>";
  html += sortTh("drill", "status", "Status");
  html += "<th>Assigned To</th><th>Maintenance</th><th>Actions</th>";
  html += "</tr></thead><tbody>";

  var sorted = sortArray(drills, sortState.drill.column, sortState.drill.direction);
  sorted.forEach(function(drill) {
    var assignments = APP.blasts.filter(function(b) {
      return (b.assignedDrills || []).indexOf(drill.id) !== -1;
    }).map(function(b) { return b.name; });

    var statusBadge = getStatusBadgeClass(drill.status);
    var maintCount = drill.maintenance.length;
    var maintBadge = maintCount > 0
      ? "<span class=\"badge badge-blast\">" + maintCount + " window(s)</span>"
      : "<span class=\"badge badge-complete\">Clear</span>";

    // Step 3a) Build action buttons based on current status
    var actions = buildEquipActions(drill.status, drill.id, "drill");

    html += "<tr data-drill-id=\"" + drill.id + "\">";
    html += "<td style=\"color:var(--accent-cyan);font-weight:600;\">" + drill.id + "</td>";
    html += "<td>" + drill.name + "</td>";
    html += "<td>" + (drill.brand || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td><span class=\"badge badge-drill\">" + (drill.model || drill.type || "") + "</span></td>";
    html += "<td style=\"font-size:11px;\">" + (drill.type || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td class=\"num\">" + drill.minDiam + "</td>";
    html += "<td class=\"num\">" + drill.maxDiam + "</td>";
    html += "<td class=\"num\">" + formatNum(drill.rateM_per_day) + "</td>";
    html += "<td style=\"font-size:11px;\">" + formatCrewRequired(drill.crewRequired) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + drill.status + "</span></td>";
    html += "<td style=\"font-size:12px;\">" + (assignments.length > 0 ? assignments.join(", ") : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + maintBadge + "</td>";
    html += "<td class=\"equip-actions\">" + actions + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("drillTable").innerHTML = html;

  // Step 3b) Attach drill action event listeners and sort listeners
  attachEquipActionListeners("drill");
  attachSortListeners();
}

// Step 4) MPU table
function renderMPUTable() {
  var html = "<thead><tr>";
  html += sortTh("mpu", "id", "ID");
  html += sortTh("mpu", "name", "Name");
  html += sortTh("mpu", "brand", "Prime Mover");
  html += sortTh("mpu", "model", "Model");
  html += sortTh("mpu", "type", "Product Type");
  html += "<th class=\"num\">Capacity (kg)</th>";
  html += sortTh("mpu", "rateKg_per_day", "Rate (kg/day)", "num");
  html += "<th>Crew Req</th>";
  html += sortTh("mpu", "status", "Status");
  html += "<th>Assigned To</th><th>Maintenance</th><th>Actions</th>";
  html += "</tr></thead><tbody>";

  var sorted = sortArray(mpus, sortState.mpu.column, sortState.mpu.direction);
  sorted.forEach(function(mpu) {
    // Step 4a) Filter blasts assigned to this MPU (backward compat with legacy assignedMPU)
    var assignments = APP.blasts.filter(function(b) {
      return (b.assignedMPUs || (b.assignedMPU ? [b.assignedMPU] : [])).indexOf(mpu.id) !== -1;
    }).map(function(b) { return b.name; });

    var statusBadge = getStatusBadgeClass(mpu.status);
    var maintCount = mpu.maintenance.length;
    var maintBadge = maintCount > 0
      ? "<span class=\"badge badge-blast\">" + maintCount + " window(s)</span>"
      : "<span class=\"badge badge-complete\">Clear</span>";

    // Step 4b) Build blend info badge if applicable
    var typeBadge = mpu.type;
    if (mpu.type === "Blend" && mpu.blendConfig) {
      typeBadge = "Blend (" + (mpu.blendConfig.anPct || 0) + "/" + (mpu.blendConfig.foPct || 0) + "/" + (mpu.blendConfig.matrixPct || 0) + ")";
    }

    var actions = buildEquipActions(mpu.status, mpu.id, "mpu");

    html += "<tr data-mpu-id=\"" + mpu.id + "\">";
    html += "<td style=\"color:var(--accent-load);font-weight:600;\">" + mpu.id + "</td>";
    html += "<td>" + mpu.name + "</td>";
    html += "<td>" + (mpu.brand || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + (mpu.model || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td><span class=\"badge badge-load\">" + typeBadge + "</span></td>";
    html += "<td class=\"num\">" + formatNum(mpu.capacity_kg) + "</td>";
    html += "<td class=\"num\">" + formatNum(mpu.rateKg_per_day) + "</td>";
    html += "<td style=\"font-size:11px;\">" + formatCrewRequired(mpu.crewRequired) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + mpu.status + "</span></td>";
    html += "<td style=\"font-size:12px;\">" + (assignments.length > 0 ? assignments.join(", ") : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + maintBadge + "</td>";
    html += "<td class=\"equip-actions\">" + actions + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("mpuTable").innerHTML = html;

  attachEquipActionListeners("mpu");
  attachSortListeners();
}

// Step 4b) Ancillary equipment table (Dozers, Graders, Loaders, Excavators, Rollers)
function renderAncillaryTable() {
  var html = "<thead><tr>";
  html += sortTh("ancillary", "id", "ID");
  html += sortTh("ancillary", "name", "Name");
  html += sortTh("ancillary", "brand", "Brand");
  html += sortTh("ancillary", "model", "Model");
  html += sortTh("ancillary", "type", "Type");
  html += sortTh("ancillary", "rateM2_per_day", "Rate (m\u00B2/day)", "num");
  html += sortTh("ancillary", "status", "Status");
  html += "<th>Assigned To</th><th>Actions</th>";
  html += "</tr></thead><tbody>";

  var sorted = sortArray(ancillary, sortState.ancillary.column, sortState.ancillary.direction);
  sorted.forEach(function(unit) {
    var assignments = APP.blasts.filter(function(b) {
      return (b.assignedAncillary || []).indexOf(unit.id) !== -1;
    }).map(function(b) { return b.name; });

    var statusBadge = getStatusBadgeClass(unit.status);
    var actions = buildEquipActions(unit.status, unit.id, "ancillary");

    html += "<tr data-ancillary-id=\"" + unit.id + "\">";
    html += "<td style=\"color:var(--accent-prep);font-weight:600;\">" + unit.id + "</td>";
    html += "<td>" + unit.name + "</td>";
    html += "<td>" + (unit.brand || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td>" + (unit.model || "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td><span class=\"badge\" style=\"background:rgba(20,184,166,0.15);color:var(--accent-prep);\">" + unit.type + "</span></td>";
    html += "<td class=\"num\">" + formatNum(unit.rateM2_per_day) + "</td>";
    html += "<td><span class=\"badge " + statusBadge + "\">" + unit.status + "</span></td>";
    html += "<td style=\"font-size:12px;\">" + (assignments.length > 0 ? assignments.join(", ") : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    html += "<td class=\"equip-actions\">" + actions + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  var el = document.getElementById("ancillaryTable");
  if (el) el.innerHTML = html;

  attachEquipActionListeners("ancillary");
  attachSortListeners();
}

// Step 5) People table
function renderPeopleTable() {
  var html = "<thead><tr>";
  html += sortTh("person", "id", "ID");
  html += sortTh("person", "name", "Name");
  html += sortTh("person", "role", "Role");
  html += "<th>Certified Equipment Types</th><th>Actions</th>";
  html += "</tr></thead><tbody>";

  var sorted = sortArray(people, sortState.person.column, sortState.person.direction);
  sorted.forEach(function(p) {
    var certs = p.certifiedTypes.length > 0
      ? p.certifiedTypes.map(function(t) { return "<span class=\"badge badge-drill\">" + t + "</span>"; }).join(" ")
      : "<span style=\"color:var(--text-muted)\">\u2014</span>";

    var actions = buildEquipActions(p.status || "available", p.id, "person");

    html += "<tr data-person-id=\"" + p.id + "\">";
    html += "<td style=\"color:var(--accent-purple);font-weight:600;\">" + p.id + "</td>";
    html += "<td style=\"font-weight:500;\">" + p.name + "</td>";
    html += "<td>" + p.role + "</td>";
    html += "<td>" + certs + "</td>";
    html += "<td class=\"equip-actions\">" + actions + "</td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("peopleTable").innerHTML = html;

  attachEquipActionListeners("person");
  attachSortListeners();
}

// Step 6) Maintenance schedule table (aggregated from all equipment)
function renderMaintenanceTable() {
  var allMaint = [];

  drills.forEach(function(drill) {
    (drill.maintenance || []).forEach(function(m, mi) {
      allMaint.push({
        equipId: drill.id,
        equipName: drill.name,
        equipType: "drill",
        equipLabel: "Drill",
        maintIdx: mi,
        start: m.start,
        end: m.end,
        reason: m.reason
      });
    });
  });

  mpus.forEach(function(mpu) {
    (mpu.maintenance || []).forEach(function(m, mi) {
      allMaint.push({
        equipId: mpu.id,
        equipName: mpu.name,
        equipType: "mpu",
        equipLabel: "MPU",
        maintIdx: mi,
        start: m.start,
        end: m.end,
        reason: m.reason
      });
    });
  });

  // Sort by start date
  allMaint.sort(function(a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });

  var html = "<thead><tr>";
  html += "<th>Equipment</th><th>Type</th><th>Start</th><th>End</th><th>Days</th><th>Reason</th><th>Conflicts</th><th>Actions</th>";
  html += "</tr></thead><tbody>";

  allMaint.forEach(function(m) {
    // Check if any blast overlaps with this maintenance
    var conflicts = [];
    APP.blasts.forEach(function(b) {
      if (!b.drillStart) return;
      // Step 6a) Concat drills + MPUs array (backward compat with legacy assignedMPU)
      var assigned = (b.assignedDrills || []).concat(b.assignedMPUs || (b.assignedMPU ? [b.assignedMPU] : []));
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

    var typeBadge = m.equipLabel === "Drill" ? "badge-drill" : "badge-load";

    // Step 6b) Build edit/delete action buttons
    var actionsHtml = "<button class=\"btn-maint-action btn-maint-edit\" " +
      "data-equip-type=\"" + m.equipType + "\" data-equip-id=\"" + m.equipId + "\" data-maint-idx=\"" + m.maintIdx + "\" title=\"Edit\">" +
      "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M11.5 1.5l3 3L5 14H2v-3z\"/></svg></button>";
    actionsHtml += "<button class=\"btn-maint-action btn-maint-delete\" " +
      "data-equip-type=\"" + m.equipType + "\" data-equip-id=\"" + m.equipId + "\" data-maint-idx=\"" + m.maintIdx + "\" title=\"Delete\">" +
      "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10\"/></svg></button>";

    html += "<tr>";
    html += "<td style=\"font-weight:600;\">" + m.equipId + "</td>";
    html += "<td><span class=\"badge " + typeBadge + "\">" + m.equipLabel + "</span></td>";
    html += "<td>" + formatDate(m.start) + "</td>";
    html += "<td>" + formatDate(m.end) + "</td>";
    html += "<td class=\"num\">" + days + "</td>";
    html += "<td>" + m.reason + "</td>";
    html += "<td style=\"font-size:12px;\">" + conflictHtml + "</td>";
    html += "<td>" + actionsHtml + "</td>";
    html += "</tr>";
  });

  if (allMaint.length === 0) {
    html += "<tr><td colspan=\"8\" style=\"text-align:center;color:var(--text-muted);padding:20px;\">No maintenance windows scheduled</td></tr>";
  }

  html += "</tbody>";
  document.getElementById("maintenanceTable").innerHTML = html;

  // Step 6c) Attach edit/delete listeners for maintenance rows
  attachMaintenanceActionListeners();
}

// Step 6d) Wire up maintenance Edit and Delete buttons
function attachMaintenanceActionListeners() {
  // Step 6d-i) Delete buttons
  document.querySelectorAll(".btn-maint-delete").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var eqType = btn.dataset.equipType;
      var eqId = btn.dataset.equipId;
      var maintIdx = parseInt(btn.dataset.maintIdx);
      var collection = eqType === "drill" ? drills : mpus;
      var equip = collection.find(function(eq) { return eq.id === eqId; });
      if (!equip || !equip.maintenance || !equip.maintenance[maintIdx]) return;
      if (!confirm("Delete maintenance window for " + eqId + " (" + equip.maintenance[maintIdx].reason + ")?")) return;
      equip.maintenance.splice(maintIdx, 1);
      debouncedSave();
      renderEquipment();
    });
  });

  // Step 6d-ii) Edit buttons
  document.querySelectorAll(".btn-maint-edit").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var eqType = btn.dataset.equipType;
      var eqId = btn.dataset.equipId;
      var maintIdx = parseInt(btn.dataset.maintIdx);
      showEditMaintenanceModal(eqType, eqId, maintIdx);
    });
  });
}

// Step 6b) Format crewRequired object as badge string (e.g. "OP:1 SF:1")
function formatCrewRequired(crewReq) {
  if (!crewReq) return "<span style=\"color:var(--text-muted)\">\u2014</span>";
  var parts = [];
  var keys = Object.keys(crewReq);
  for (var i = 0; i < keys.length; i++) {
    if (crewReq[keys[i]] > 0) {
      parts.push("<span class=\"badge badge-drill\" style=\"font-size:10px;padding:1px 5px;\">" + keys[i] + ":" + crewReq[keys[i]] + "</span>");
    }
  }
  return parts.length > 0 ? parts.join(" ") : "<span style=\"color:var(--text-muted)\">\u2014</span>";
}

// Step 7) Status badge class helper
function getStatusBadgeClass(status) {
  if (status === "available" || status === "mobilised") return "badge-active";
  if (status === "demobilised") return "badge-demobilised";
  return "badge-blast";
}

// Step 8) Build action buttons for equipment rows
function buildEquipActions(status, equipId, equipType) {
  var html = "<div class=\"equip-action-btns\">";

  // Step 8a) Edit button — pencil icon
  html += "<button class=\"btn-equip-action btn-edit-equip\" data-equip-id=\"" + equipId + "\" data-equip-type=\"" + equipType + "\" title=\"Edit\">";
  html += "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M11.5 1.5l3 3L5 14H2v-3z\"/></svg></button>";

  // Step 8b) Duplicate button — copy icon
  html += "<button class=\"btn-equip-action btn-duplicate-equip\" data-equip-id=\"" + equipId + "\" data-equip-type=\"" + equipType + "\" title=\"Duplicate\">";
  html += "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><rect x=\"5\" y=\"5\" width=\"9\" height=\"9\" rx=\"1\"/><path d=\"M2 11V2h9\"/></svg></button>";

  // Step 8c) Mobilise / Demobilise toggle (not applicable to personnel)
  if (equipType !== "person") {
    if (status === "demobilised") {
      html += "<button class=\"btn-equip-action btn-mobilise\" data-equip-id=\"" + equipId + "\" data-equip-type=\"" + equipType + "\" title=\"Mobilise\">";
      html += "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M8 2v12M2 8l6-6 6 6\"/></svg> Mob</button>";
    } else {
      html += "<button class=\"btn-equip-action btn-demobilise\" data-equip-id=\"" + equipId + "\" data-equip-type=\"" + equipType + "\" title=\"Demobilise\">";
      html += "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M8 14V2M2 8l6 6 6-6\"/></svg> Demob</button>";
    }
  }

  // Step 8d) Remove button — trash icon
  html += "<button class=\"btn-equip-action btn-remove-equip\" data-equip-id=\"" + equipId + "\" data-equip-type=\"" + equipType + "\" title=\"Remove\">";
  html += "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10\"/></svg></button>";

  html += "</div>";
  return html;
}

// Step 9) Attach action button event listeners
function attachEquipActionListeners(equipType) {
  var collection = equipType === "drill" ? drills : equipType === "ancillary" ? ancillary : equipType === "person" ? people : mpus;

  // Step 9a) Edit buttons
  document.querySelectorAll(".btn-edit-equip[data-equip-type=\"" + equipType + "\"]").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      showEditEquipModal(equipType, btn.dataset.equipId);
    });
  });

  // Step 9b) Duplicate buttons
  document.querySelectorAll(".btn-duplicate-equip[data-equip-type=\"" + equipType + "\"]").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      duplicateEquip(equipType, btn.dataset.equipId);
    });
  });

  // Step 9c) Mobilise buttons
  document.querySelectorAll(".btn-mobilise[data-equip-type=\"" + equipType + "\"]").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var equipId = btn.dataset.equipId;
      mobiliseEquipment(collection, equipId);
      debouncedSave();
      renderEquipment();
    });
  });

  // Step 9d) Demobilise buttons
  document.querySelectorAll(".btn-demobilise[data-equip-type=\"" + equipType + "\"]").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var equipId = btn.dataset.equipId;
      demobiliseEquipment(collection, equipId);
      debouncedSave();
      renderEquipment();
    });
  });

  // Step 9e) Remove buttons
  document.querySelectorAll(".btn-remove-equip[data-equip-type=\"" + equipType + "\"]").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var equipId = btn.dataset.equipId;
      if (confirm("Remove " + equipId + "? This cannot be undone.")) {
        removeEquipment(collection, equipId);
        debouncedSave();
        renderEquipment();
      }
    });
  });
}

export { renderEquipment };
