// ============================================================
//  PATTERN LIBRARY
//  Renders the drill & blast pattern cards
//  Export template CSV for people to fill in
//  Import filled CSV to load patterns
// ============================================================

import { APP } from "../state/appState.js";

var typeColors = {
  WASTE: "var(--waste)",
  YELLOW: "var(--yellow-zone)",
  ORE: "var(--ore)",
  PRESPLIT: "var(--presplit)"
};

// Step 1) Render pattern library grid
function renderPatterns() {
  var grid = document.getElementById("patternGrid");
  var html = "";

  if (APP.patterns.length === 0) {
    html += "<div style=\"grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--text-muted);\">";
    html += "  <div style=\"font-size:36px;margin-bottom:12px;\">&#x1F4CB;</div>";
    html += "  <div style=\"font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:600;\">No Patterns Loaded</div>";
    html += "  <div style=\"font-size:13px;margin-top:6px;\">Export a blank CSV template, fill in your site patterns, then import it back.</div>";
    html += "</div>";
  }

  APP.patterns.forEach(function(p, idx) {
    var color = typeColors[p.type] || "var(--text-muted)";
    html += "<div class=\"pattern-card\" data-pattern-idx=\"" + idx + "\">";
    html += "  <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">";
    html += "    <div class=\"pattern-id\">" + p.id + "</div>";
    html += "    <span class=\"badge\" style=\"background:" + color + "20;color:" + color + "\">" + p.type + "</span>";
    html += "  </div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Bench Height</span><span class=\"value\">" + p.benchHt + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Diameter</span><span class=\"value\">" + p.diam + " mm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Burden</span><span class=\"value\">" + p.burden + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Spacing</span><span class=\"value\">" + p.spacing + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Powder Factor</span><span class=\"value\">" + p.pf + " kg/bcm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Sub-drill</span><span class=\"value\">" + p.subdrill + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Stemming</span><span class=\"value\">" + p.stemming + " m</span></div>";
    html += "</div>";
  });

  grid.innerHTML = html;

  // Step 1b) Update the pattern count badge
  var countEl = document.getElementById("patternCount");
  if (countEl) {
    countEl.textContent = APP.patterns.length + " pattern(s)";
  }
}

// ============================================================
//  EXPORT PATTERN TEMPLATE CSV
//  Generates a CSV file with headers, instructions, and
//  example rows that people can fill in with their site data
// ============================================================

// Step 2) CSV column headers for the pattern template
var PATTERN_HEADERS = [
  "Pattern ID",
  "Bench Height (m)",
  "Diameter (mm)",
  "Powder Factor (kg/bcm)",
  "Burden (m)",
  "Spacing (m)",
  "Sub-drill (m)",
  "Stemming (m)",
  "Type"
];

// Step 3) Example rows to seed the template so users understand the format
var EXAMPLE_ROWS = [
  ["EXAMPLE-W01",   12,  229,  0.7,  7.1,  8.2,  1.5,  4.0,  "WASTE"],
  ["EXAMPLE-O01",   12,  229,  1.5,  4.85, 5.6,  1.5,  4.0,  "ORE"],
  ["EXAMPLE-PS01",  12,  127,  0.6,  1.0,  1.6,  0.6,  2.2,  "PRESPLIT"],
  ["EXAMPLE-Y01",   10,  165,  1.1,  5.65, 6.55, 1.5,  3.8,  "YELLOW"]
];

// Step 4) Export the template CSV
function exportPatternTemplate() {
  var rows = [];

  // Step 4a) Instruction comment rows (prefixed with # so importer can skip them)
  rows.push("# Kirra Scheduler - Pattern Library Template");
  rows.push("# Fill in your site drill & blast patterns below.");
  rows.push("# Type must be one of: WASTE, YELLOW, ORE, PRESPLIT");
  rows.push("# Diameter is in mm (e.g. 229, 165, 127, 311)");
  rows.push("# Delete the EXAMPLE rows before importing.");
  rows.push("# Lines starting with # are ignored on import.");
  rows.push("#");

  // Step 4b) Header row
  rows.push(PATTERN_HEADERS.join(","));

  // Step 4c) Example rows
  EXAMPLE_ROWS.forEach(function(row) {
    rows.push(row.join(","));
  });

  // Step 4d) A few blank rows for convenience
  rows.push("");
  rows.push("");
  rows.push("");

  var csvString = rows.join("\n");
  var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "KirraPatternTemplate.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// Step 5) Export current patterns as CSV (filled version of the template)
function exportPatternLibrary() {
  var rows = [];

  // Step 5a) Header
  rows.push(PATTERN_HEADERS.join(","));

  // Step 5b) All current patterns
  APP.patterns.forEach(function(p) {
    rows.push([
      csvEscape(p.id),
      p.benchHt,
      p.diam,
      p.pf,
      p.burden,
      p.spacing,
      p.subdrill,
      p.stemming,
      p.type
    ].join(","));
  });

  var csvString = rows.join("\n");
  var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "KirraPatternLibrary.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
//  IMPORT PATTERN CSV
//  Reads a CSV file and merges patterns into APP.patterns
// ============================================================

// Step 6) Parse an imported CSV file into pattern objects
function importPatternCSV(file) {
  var reader = new FileReader();
  reader.onload = function(e) {
    var text = e.target.result;
    var lines = text.split(/\r?\n/);
    var imported = [];
    var errors = [];
    var headerFound = false;

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();

      // Step 6a) Skip empty lines and comment lines
      if (line === "" || line.charAt(0) === "#") continue;

      // Step 6b) Skip the header row (detect by checking first cell)
      if (!headerFound && line.toLowerCase().indexOf("pattern id") !== -1) {
        headerFound = true;
        continue;
      }

      // Step 6c) Parse CSV fields (handle quoted values)
      var fields = parseCSVLine(line);
      if (fields.length < 9) {
        errors.push("Row " + (i + 1) + ": expected 9 columns, got " + fields.length);
        continue;
      }

      // Step 6d) Validate and build pattern object
      var patternId = fields[0].trim();
      var benchHt = parseFloat(fields[1]);
      var diam = parseFloat(fields[2]);
      var pf = parseFloat(fields[3]);
      var burden = parseFloat(fields[4]);
      var spacing = parseFloat(fields[5]);
      var subdrill = parseFloat(fields[6]);
      var stemming = parseFloat(fields[7]);
      var type = fields[8].trim().toUpperCase();

      if (!patternId) {
        errors.push("Row " + (i + 1) + ": missing Pattern ID");
        continue;
      }
      if (isNaN(benchHt) || isNaN(diam) || isNaN(pf) || isNaN(burden) || isNaN(spacing)) {
        errors.push("Row " + (i + 1) + " (" + patternId + "): invalid numeric value");
        continue;
      }

      var validTypes = ["WASTE", "YELLOW", "ORE", "PRESPLIT"];
      if (validTypes.indexOf(type) === -1) {
        errors.push("Row " + (i + 1) + " (" + patternId + "): type '" + type + "' not valid. Use: " + validTypes.join(", "));
        continue;
      }

      imported.push({
        id: patternId,
        benchHt: benchHt,
        diam: diam,
        pf: pf,
        burden: burden,
        spacing: spacing,
        subdrill: isNaN(subdrill) ? 0 : subdrill,
        stemming: isNaN(stemming) ? 0 : stemming,
        type: type
      });
    }

    // Step 6e) Show result to user
    if (imported.length === 0 && errors.length === 0) {
      showPatternImportResult("No pattern data found in the CSV file. Make sure to include the header row and at least one data row.", "warn");
      return;
    }

    if (errors.length > 0) {
      var msg = errors.length + " row(s) skipped:\n" + errors.slice(0, 5).join("\n");
      if (errors.length > 5) msg += "\n... and " + (errors.length - 5) + " more";
      console.warn("Pattern CSV import warnings:", msg);
    }

    if (imported.length > 0) {
      // Step 6f) Replace existing patterns with imported ones
      APP.patterns = imported;
      renderPatterns();
      showPatternImportResult("Imported " + imported.length + " pattern(s) successfully." +
        (errors.length > 0 ? " (" + errors.length + " row(s) skipped)" : ""), "ok");
    }
  };
  reader.readAsText(file);
}

// Step 7) Simple CSV line parser that handles quoted fields
function parseCSVLine(line) {
  var fields = [];
  var current = "";
  var inQuotes = false;

  for (var i = 0; i < line.length; i++) {
    var ch = line.charAt(i);
    if (ch === "\"") {
      if (inQuotes && i + 1 < line.length && line.charAt(i + 1) === "\"") {
        current += "\"";
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

// Step 8) CSV escape helper
function csvEscape(val) {
  var s = String(val);
  if (s.indexOf(",") !== -1 || s.indexOf("\"") !== -1 || s.indexOf("\n") !== -1) {
    return "\"" + s.replace(/"/g, "\"\"") + "\"";
  }
  return s;
}

// Step 9) Show a brief flash message below the pattern grid
function showPatternImportResult(message, level) {
  var existing = document.getElementById("patternImportMsg");
  if (existing) existing.remove();

  var div = document.createElement("div");
  div.id = "patternImportMsg";
  var color = level === "ok" ? "var(--accent-green)" : (level === "warn" ? "var(--accent-load)" : "var(--accent-blast)");
  div.style.cssText = "font-family:'JetBrains Mono',monospace;font-size:12px;color:" + color +
    ";padding:10px 14px;margin-top:12px;border:1px solid " + color + "40;border-radius:var(--radius);background:" + color + "10;";
  div.textContent = message;

  var grid = document.getElementById("patternGrid");
  grid.parentNode.insertBefore(div, grid.nextSibling);

  setTimeout(function() {
    if (div.parentNode) div.remove();
  }, 8000);
}

// Step 10) Initialise Pattern Library buttons
function initPatternLibrary() {
  // Step 10a) Export Template button
  var btnTemplate = document.getElementById("btnExportPatternTemplate");
  if (btnTemplate) {
    btnTemplate.addEventListener("click", exportPatternTemplate);
  }

  // Step 10b) Export Current Library button
  var btnExportLib = document.getElementById("btnExportPatternLib");
  if (btnExportLib) {
    btnExportLib.addEventListener("click", exportPatternLibrary);
  }

  // Step 10c) Import CSV file input (hidden) + button
  var btnImport = document.getElementById("btnImportPatterns");
  var fileInput = document.getElementById("patternFileInput");
  if (btnImport && fileInput) {
    btnImport.addEventListener("click", function() {
      fileInput.click();
    });
    fileInput.addEventListener("change", function(e) {
      if (e.target.files[0]) {
        importPatternCSV(e.target.files[0]);
        fileInput.value = "";
      }
    });
  }
}

export { renderPatterns, initPatternLibrary, exportPatternTemplate, exportPatternLibrary };
