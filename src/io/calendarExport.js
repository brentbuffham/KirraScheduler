// ============================================================
//  CALENDAR EXPORT
//  Export blast schedule as iCal (.ics) or CSV (.csv)
//  Supports per-phase (one event per phase) and per-blast modes
//  Covers the plan window: APP.ganttWeeks * 7 days from planStart
// ============================================================

import { APP } from "../state/appState.js";
import { addDays } from "../utils/dateUtils.js";

// Step 0) Timezone-safe local ISO date
function localIso(d) {
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  return y + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
}

// Step 0b) Format date as YYYYMMDD for iCal
function icsDate(isoStr) {
  if (!isoStr) return "";
  return isoStr.replace(/-/g, "");
}

// Step 0c) Escape text for iCal DESCRIPTION (fold long lines, escape special chars)
function icsEscape(str) {
  return str.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

// Step 0d) Escape a value for CSV (wrap in quotes if it contains commas or quotes)
function csvEscape(val) {
  var s = String(val === null || val === undefined ? "" : val);
  if (s.indexOf(",") !== -1 || s.indexOf("\"") !== -1 || s.indexOf("\n") !== -1) {
    return "\"" + s.replace(/"/g, "\"\"") + "\"";
  }
  return s;
}

// Step 1) Build description string for a blast (shared by iCal and CSV)
function buildDescription(blast) {
  var parts = [];
  parts.push("Status: " + (blast.status || "planned"));
  if (blast.volume) parts.push("Volume: " + Math.round(blast.volume).toLocaleString() + " m3");
  if (blast.surfaceArea) parts.push("Surface Area: " + Math.round(blast.surfaceArea).toLocaleString() + " m2");
  if (blast.expMass) parts.push("Exp Mass: " + Math.round(blast.expMass).toLocaleString() + " kg");
  if (blast.assignedDrills && blast.assignedDrills.length > 0) {
    parts.push("Drills: " + blast.assignedDrills.join(", "));
  }
  if (blast.assignedMPUs && blast.assignedMPUs.length > 0) {
    parts.push("MPUs: " + blast.assignedMPUs.join(", "));
  }
  if (blast.holeTypes && blast.holeTypes.length > 0) {
    var htSummary = [];
    for (var i = 0; i < blast.holeTypes.length; i++) {
      var ht = blast.holeTypes[i];
      htSummary.push((ht.type || "?") + " x" + (ht.holes || 0) + " (" + Math.round(ht.drillMeters || 0) + "m)");
    }
    parts.push("Holes: " + htSummary.join("; "));
  }
  return parts.join("\n");
}

// Step 1b) One-line hole types summary for CSV
function holeTypeSummary(blast) {
  if (!blast.holeTypes || blast.holeTypes.length === 0) return "";
  var parts = [];
  for (var i = 0; i < blast.holeTypes.length; i++) {
    var ht = blast.holeTypes[i];
    parts.push((ht.type || "?") + " x" + (ht.holes || 0));
  }
  return parts.join("; ");
}

// Step 2) Get phase date range for a blast
function getPhaseRange(blast, phaseKey) {
  if (phaseKey === "prep") {
    if (!blast.prepStart || !blast.prepDays) return null;
    var end = addDays(new Date(blast.prepStart + "T00:00:00"), blast.prepDays);
    return { start: blast.prepStart, end: localIso(end), days: blast.prepDays };
  }
  if (phaseKey === "drill") {
    if (!blast.drillStart || !blast.drillDays) return null;
    var end = addDays(new Date(blast.drillStart + "T00:00:00"), blast.drillDays);
    return { start: blast.drillStart, end: localIso(end), days: blast.drillDays };
  }
  if (phaseKey === "load") {
    if (!blast.loadStart || !blast.loadDays) return null;
    var end = addDays(new Date(blast.loadStart + "T00:00:00"), blast.loadDays);
    return { start: blast.loadStart, end: localIso(end), days: blast.loadDays };
  }
  if (phaseKey === "blast") {
    if (!blast.blastDate) return null;
    var end = addDays(new Date(blast.blastDate + "T00:00:00"), 1);
    return { start: blast.blastDate, end: localIso(end), days: 1 };
  }
  return null;
}

// Step 3) Trigger file download in the browser
function downloadFile(filename, content, mimeType) {
  var blob = new Blob([content], { type: mimeType });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================
//  Step 4) iCal Export
// ============================================================

function exportICS(mode) {
  var lines = [];
  lines.push("BEGIN:VCALENDAR");
  lines.push("VERSION:2.0");
  lines.push("PRODID:-//KirraScheduler//BlastCalendar//EN");
  lines.push("CALSCALE:GREGORIAN");
  lines.push("METHOD:PUBLISH");
  lines.push("X-WR-CALNAME:Kirra Blast Schedule");

  var now = new Date();
  var stamp = now.getFullYear() +
    ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1) +
    (now.getDate() < 10 ? "0" : "") + now.getDate() + "T" +
    (now.getHours() < 10 ? "0" : "") + now.getHours() +
    (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() +
    (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();

  var phases = ["prep", "drill", "load", "blast"];

  for (var bi = 0; bi < APP.blasts.length; bi++) {
    var blast = APP.blasts[bi];
    var desc = icsEscape(buildDescription(blast));

    if (mode === "per-phase") {
      // Step 4a) One VEVENT per phase
      for (var pi = 0; pi < phases.length; pi++) {
        var phase = phases[pi];
        var range = getPhaseRange(blast, phase);
        if (!range) continue;

        var phaseLabel = phase.charAt(0).toUpperCase() + phase.slice(1);
        lines.push("BEGIN:VEVENT");
        lines.push("UID:blast-" + blast.name.replace(/\s/g, "_") + "-" + phase + "@kirra-scheduler");
        lines.push("DTSTAMP:" + stamp);
        lines.push("DTSTART;VALUE=DATE:" + icsDate(range.start));
        lines.push("DTEND;VALUE=DATE:" + icsDate(range.end));
        lines.push("SUMMARY:" + icsEscape(blast.name + " - " + phaseLabel));
        lines.push("DESCRIPTION:" + desc);
        lines.push("STATUS:" + (blast.status === "active" ? "CONFIRMED" : "TENTATIVE"));
        lines.push("END:VEVENT");
      }
    } else {
      // Step 4b) One VEVENT per blast (earliest start -> blast date or latest end)
      var earliest = null;
      var latest = null;
      for (var pi = 0; pi < phases.length; pi++) {
        var range = getPhaseRange(blast, phases[pi]);
        if (!range) continue;
        if (!earliest || range.start < earliest) earliest = range.start;
        if (!latest || range.end > latest) latest = range.end;
      }
      if (!earliest) continue;

      lines.push("BEGIN:VEVENT");
      lines.push("UID:blast-" + blast.name.replace(/\s/g, "_") + "@kirra-scheduler");
      lines.push("DTSTAMP:" + stamp);
      lines.push("DTSTART;VALUE=DATE:" + icsDate(earliest));
      lines.push("DTEND;VALUE=DATE:" + icsDate(latest));
      lines.push("SUMMARY:" + icsEscape(blast.name));
      lines.push("DESCRIPTION:" + desc);
      lines.push("STATUS:" + (blast.status === "active" ? "CONFIRMED" : "TENTATIVE"));
      lines.push("END:VEVENT");
    }
  }

  lines.push("END:VCALENDAR");

  var filename = "kirra-blast-schedule-" + localIso(new Date()) + ".ics";
  downloadFile(filename, lines.join("\r\n"), "text/calendar;charset=utf-8");
}

// ============================================================
//  Step 5) CSV Export
// ============================================================

function exportCSV(mode) {
  var rows = [];
  var phases = ["prep", "drill", "load", "blast"];

  if (mode === "per-phase") {
    // Step 5a) Per-phase: one row per phase per blast
    rows.push([
      "Blast Name", "Phase", "Start Date", "End Date", "Days",
      "Status", "Volume (m3)", "Surface Area (m2)", "Exp Mass (kg)",
      "Assigned Drills", "Assigned MPUs", "Hole Types"
    ].join(","));

    for (var bi = 0; bi < APP.blasts.length; bi++) {
      var blast = APP.blasts[bi];
      for (var pi = 0; pi < phases.length; pi++) {
        var phase = phases[pi];
        var range = getPhaseRange(blast, phase);
        if (!range) continue;

        var phaseLabel = phase.charAt(0).toUpperCase() + phase.slice(1);
        rows.push([
          csvEscape(blast.name),
          phaseLabel,
          range.start,
          range.end,
          range.days,
          blast.status || "planned",
          Math.round(blast.volume || 0),
          Math.round(blast.surfaceArea || 0),
          Math.round(blast.expMass || 0),
          csvEscape((blast.assignedDrills || []).join("; ")),
          csvEscape((blast.assignedMPUs || []).join("; ")),
          csvEscape(holeTypeSummary(blast))
        ].join(","));
      }
    }
  } else {
    // Step 5b) Per-blast: one row per blast with all phase dates
    rows.push([
      "Blast Name", "Prep Start", "Prep Days", "Drill Start", "Drill Days",
      "Load Start", "Load Days", "Blast Date",
      "Status", "Volume (m3)", "Surface Area (m2)", "Exp Mass (kg)",
      "Assigned Drills", "Assigned MPUs", "Hole Types"
    ].join(","));

    for (var bi = 0; bi < APP.blasts.length; bi++) {
      var blast = APP.blasts[bi];
      rows.push([
        csvEscape(blast.name),
        blast.prepStart || "",
        blast.prepDays || 0,
        blast.drillStart || "",
        blast.drillDays || 0,
        blast.loadStart || "",
        blast.loadDays || 0,
        blast.blastDate || "",
        blast.status || "planned",
        Math.round(blast.volume || 0),
        Math.round(blast.surfaceArea || 0),
        Math.round(blast.expMass || 0),
        csvEscape((blast.assignedDrills || []).join("; ")),
        csvEscape((blast.assignedMPUs || []).join("; ")),
        csvEscape(holeTypeSummary(blast))
      ].join(","));
    }
  }

  var filename = "kirra-blast-schedule-" + localIso(new Date()) + ".csv";
  downloadFile(filename, rows.join("\r\n"), "text/csv;charset=utf-8");
}

// ============================================================
//  Step 6) Export choice dialog
// ============================================================

function showExportDialog() {
  var existing = document.getElementById("calExportOverlay");
  if (existing) existing.remove();

  var html = "<div class=\"pattern-alloc-overlay\" id=\"calExportOverlay\">";
  html += "<div class=\"pattern-alloc-dialog\" style=\"min-width:380px;max-width:440px;\">";
  html += "<h3>Export Schedule</h3>";

  // Step 6a) Mode radio buttons
  html += "<div style=\"margin:12px 0;\">";
  html += "<label style=\"display:block;margin-bottom:8px;cursor:pointer;\">";
  html += "<input type=\"radio\" name=\"exportMode\" value=\"per-phase\" checked> One event per phase (Prep, Drill, Load, Blast)";
  html += "</label>";
  html += "<label style=\"display:block;cursor:pointer;\">";
  html += "<input type=\"radio\" name=\"exportMode\" value=\"per-blast\"> One event per blast (full date span)";
  html += "</label>";
  html += "</div>";

  // Step 6b) Export buttons
  html += "<div class=\"alloc-actions\" style=\"gap:8px;\">";
  html += "<button class=\"btn-alloc-cancel\" id=\"calExportCancel\">Cancel</button>";
  html += "<button class=\"btn-alloc-save\" id=\"calExportICS\" style=\"background:var(--accent-drill);\">Export iCal (.ics)</button>";
  html += "<button class=\"btn-alloc-save\" id=\"calExportCSV\" style=\"background:var(--accent-prep);\">Export CSV (.csv)</button>";
  html += "</div>";

  html += "</div></div>";

  var container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container.firstChild);

  // Step 6c) Get selected mode helper
  function getMode() {
    var radios = document.querySelectorAll("input[name=\"exportMode\"]");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) return radios[i].value;
    }
    return "per-phase";
  }

  // Step 6d) Wire buttons
  document.getElementById("calExportCancel").addEventListener("click", function() {
    document.getElementById("calExportOverlay").remove();
  });

  document.getElementById("calExportICS").addEventListener("click", function() {
    exportICS(getMode());
    document.getElementById("calExportOverlay").remove();
  });

  document.getElementById("calExportCSV").addEventListener("click", function() {
    exportCSV(getMode());
    document.getElementById("calExportOverlay").remove();
  });

  // Step 6e) Close on overlay click
  document.getElementById("calExportOverlay").addEventListener("click", function(e) {
    if (e.target === this) this.remove();
  });
}

// ============================================================
//  Step 7) Initialise export buttons
// ============================================================

function initCalendarExport() {
  // Step 7a) Calendar toolbar button
  var calBtn = document.getElementById("calExportBtn");
  if (calBtn) calBtn.addEventListener("click", showExportDialog);

  // Step 7b) Import tab buttons (direct export without dialog)
  var tabIcsBtn = document.getElementById("tabExportICS");
  var tabCsvBtn = document.getElementById("tabExportCSV");

  if (tabIcsBtn) {
    tabIcsBtn.addEventListener("click", function() {
      var mode = getTabExportMode();
      exportICS(mode);
    });
  }
  if (tabCsvBtn) {
    tabCsvBtn.addEventListener("click", function() {
      var mode = getTabExportMode();
      exportCSV(mode);
    });
  }
}

// Step 7c) Read mode from Import tab radio buttons
function getTabExportMode() {
  var radios = document.querySelectorAll("input[name=\"tabExportMode\"]");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return "per-phase";
}

export { initCalendarExport, showExportDialog, exportICS, exportCSV };
