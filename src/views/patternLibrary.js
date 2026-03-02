// ============================================================
//  PATTERN LIBRARY
//  Renders the drill & blast pattern cards
//  Export template CSV for people to fill in
//  Import filled CSV to load patterns
// ============================================================

import { APP } from "../state/appState.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { renderDelayPalette } from "../ui/delayPalette.js";

var typeColors = {
  WASTE: "var(--waste)",
  YELLOW: "var(--yellow-zone)",
  ORE: "var(--ore)",
  PRESPLIT: "var(--presplit)"
};

// ============================================================
//  PATTERN ADD / EDIT / COPY DIALOG
// ============================================================

// Step 0) Show modal dialog for adding, editing, or copying a pattern
//   editIdx: null = add new, number = edit existing at that index
//   prefill: optional pattern object to seed values (used for copy)
function showPatternDialog(editIdx, prefill) {
  var existing = document.getElementById("patternDialogOverlay");
  if (existing) existing.remove();

  var isEdit = (editIdx !== null && editIdx !== undefined);
  var p = prefill || (isEdit ? APP.patterns[editIdx] : null);

  var title = isEdit ? "Edit Pattern" : "Add Pattern";
  var saveLabel = isEdit ? "Update" : "Add";

  var html = "<div class=\"pattern-alloc-overlay\" id=\"patternDialogOverlay\">";
  html += "<div class=\"pattern-alloc-dialog\" style=\"min-width:420px;max-width:520px;\">";
  html += "<h3>" + title + "</h3>";

  // Step 0a) Form fields
  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Pattern ID</label><input type=\"text\" id=\"pdId\" value=\"" + (p ? p.id : "") + "\"></div>";
  html += "<div class=\"form-field\"><label>Type</label><select id=\"pdType\">";
  var types = ["WASTE", "YELLOW", "ORE", "PRESPLIT", "BUFFER"];
  for (var ti = 0; ti < types.length; ti++) {
    var sel = (p && p.type === types[ti]) ? " selected" : "";
    html += "<option value=\"" + types[ti] + "\"" + sel + ">" + types[ti] + "</option>";
  }
  html += "</select></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Bench Height (m)</label><input type=\"number\" id=\"pdBenchHt\" value=\"" + (p ? p.benchHt : 12) + "\" step=\"0.1\"></div>";
  html += "<div class=\"form-field\"><label>Diameter (mm)</label><input type=\"number\" id=\"pdDiam\" value=\"" + (p ? p.diam : 229) + "\" step=\"1\"></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Burden (m)</label><input type=\"number\" id=\"pdBurden\" value=\"" + (p ? p.burden : 4.5) + "\" step=\"0.1\"></div>";
  html += "<div class=\"form-field\"><label>Spacing (m)</label><input type=\"number\" id=\"pdSpacing\" value=\"" + (p ? p.spacing : 5.2) + "\" step=\"0.1\"></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Powder Factor (kg/bcm)</label><input type=\"number\" id=\"pdPF\" value=\"" + (p ? p.pf : 0.7) + "\" step=\"0.01\"></div>";
  html += "<div class=\"form-field\"><label>Sub-drill (m)</label><input type=\"number\" id=\"pdSubdrill\" value=\"" + (p ? p.subdrill : 1.5) + "\" step=\"0.1\"></div>";
  html += "</div>";

  html += "<div class=\"form-row\">";
  html += "<div class=\"form-field\"><label>Stemming (m)</label><input type=\"number\" id=\"pdStemming\" value=\"" + (p ? p.stemming : 4.0) + "\" step=\"0.1\"></div>";
  html += "<div class=\"form-field\"><label>Hole Angle (&deg;)</label><input type=\"number\" id=\"pdAngle\" value=\"" + (p ? (p.holeAngle || 90) : 90) + "\" step=\"1\" min=\"1\" max=\"90\"></div>";
  html += "</div>";

  html += "<div class=\"alloc-actions\">";
  html += "<button class=\"btn-alloc-cancel\" id=\"pdCancel\">Cancel</button>";
  html += "<button class=\"btn-alloc-save\" id=\"pdSave\">" + saveLabel + "</button>";
  html += "</div>";
  html += "</div></div>";

  // Step 0b) Insert into DOM
  var container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container.firstChild);

  // Step 0c) Cancel
  document.getElementById("pdCancel").addEventListener("click", function() {
    document.getElementById("patternDialogOverlay").remove();
  });

  // Step 0d) Save — validate and persist
  document.getElementById("pdSave").addEventListener("click", function() {
    var id = document.getElementById("pdId").value.trim();
    if (!id) { alert("Pattern ID is required."); return; }

    var newP = {
      id: id,
      type: document.getElementById("pdType").value,
      benchHt: parseFloat(document.getElementById("pdBenchHt").value) || 12,
      diam: parseFloat(document.getElementById("pdDiam").value) || 229,
      burden: parseFloat(document.getElementById("pdBurden").value) || 4.5,
      spacing: parseFloat(document.getElementById("pdSpacing").value) || 5.2,
      pf: parseFloat(document.getElementById("pdPF").value) || 0.7,
      subdrill: parseFloat(document.getElementById("pdSubdrill").value) || 0,
      stemming: parseFloat(document.getElementById("pdStemming").value) || 0,
      holeAngle: parseFloat(document.getElementById("pdAngle").value) || 90
    };

    // Step 0d-i) Preserve visibility flag
    if (isEdit && APP.patterns[editIdx]) {
      newP.visibleToGantt = APP.patterns[editIdx].visibleToGantt;
      APP.patterns[editIdx] = newP;
    } else {
      // Step 0d-ii) Check for duplicate ID on add/copy
      var dup = APP.patterns.find(function(pp) { return pp.id === id; });
      if (dup) { alert("A pattern with ID '" + id + "' already exists. Use a unique ID."); return; }
      newP.visibleToGantt = true;
      APP.patterns.push(newP);
    }

    debouncedSave();
    renderPatterns();
    renderDelayPalette();
    document.getElementById("patternDialogOverlay").remove();
  });

  // Step 0e) Close on overlay click
  document.getElementById("patternDialogOverlay").addEventListener("click", function(e) {
    if (e.target === this) this.remove();
  });
}

// ============================================================
//  RENDER PATTERN CARDS
// ============================================================

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
    var isHidden = (p.visibleToGantt === false);
    var dimStyle = isHidden ? " opacity:0.5;" : "";

    html += "<div class=\"pattern-card\" data-pattern-idx=\"" + idx + "\" draggable=\"true\" data-drag-type=\"pattern\" data-pattern-id=\"" + p.id + "\" style=\"position:relative;" + dimStyle + "\">";

    // Step 1a) Header row — ID + type badge
    html += "  <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">";
    html += "    <div class=\"pattern-id\">" + p.id + "</div>";
    html += "    <span class=\"badge\" style=\"background:" + color + "20;color:" + color + "\">" + p.type + "</span>";
    html += "  </div>";

    // Step 1b) Detail rows
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Bench Height</span><span class=\"value\">" + p.benchHt + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Diameter</span><span class=\"value\">" + p.diam + " mm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Burden</span><span class=\"value\">" + p.burden + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Spacing</span><span class=\"value\">" + p.spacing + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Powder Factor</span><span class=\"value\">" + p.pf + " kg/bcm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Sub-drill</span><span class=\"value\">" + p.subdrill + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Stemming</span><span class=\"value\">" + p.stemming + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Hole Angle</span><span class=\"value\">" + (p.holeAngle || 90) + "&deg;</span></div>";

    // Step 1c) Action toolbar — Edit, Copy, Visible toggle
    html += "  <div class=\"pattern-card-actions\">";
    html += "    <button class=\"pat-action-btn pat-edit-btn\" data-idx=\"" + idx + "\" title=\"Edit pattern\">";
    html += "      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"13\" height=\"13\"><path d=\"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z\"/></svg>";
    html += "      Edit</button>";
    html += "    <button class=\"pat-action-btn pat-copy-btn\" data-idx=\"" + idx + "\" title=\"Duplicate pattern\">";
    html += "      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"13\" height=\"13\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\"/><path d=\"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1\"/></svg>";
    html += "      Copy</button>";
    html += "    <label class=\"pat-action-toggle\" title=\"" + (isHidden ? "Hidden from Gantt palette" : "Visible in Gantt palette") + "\">";
    html += "      <input type=\"checkbox\" class=\"pat-vis-cb\" data-idx=\"" + idx + "\"" + (isHidden ? "" : " checked") + ">";
    html += "      <span style=\"font-size:10px;\">" + (isHidden ? "Hidden" : "Gantt") + "</span>";
    html += "    </label>";
    html += "  </div>";

    html += "</div>";
  });

  grid.innerHTML = html;

  // Step 1d) Update the pattern count badge
  var countEl = document.getElementById("patternCount");
  if (countEl) {
    countEl.textContent = APP.patterns.length + " pattern(s)";
  }

  // Step 1e) Attach drag handlers to pattern cards
  grid.querySelectorAll(".pattern-card[draggable]").forEach(function(card) {
    card.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/plain", "pattern:" + card.dataset.patternId);
      e.dataTransfer.effectAllowed = "copy";
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", function() {
      card.classList.remove("dragging");
    });
  });

  // Step 1f) Attach Edit button handlers
  grid.querySelectorAll(".pat-edit-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var idx = parseInt(btn.dataset.idx);
      showPatternDialog(idx, null);
    });
  });

  // Step 1g) Attach Copy button handlers
  grid.querySelectorAll(".pat-copy-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var idx = parseInt(btn.dataset.idx);
      var src = APP.patterns[idx];
      var copy = {};
      for (var k in src) { copy[k] = src[k]; }
      copy.id = src.id + "-COPY";
      showPatternDialog(null, copy);
    });
  });

  // Step 1h) Attach Visible-to-Gantt toggle handlers
  grid.querySelectorAll(".pat-vis-cb").forEach(function(cb) {
    cb.addEventListener("change", function(e) {
      e.stopPropagation();
      var idx = parseInt(cb.dataset.idx);
      APP.patterns[idx].visibleToGantt = cb.checked;
      debouncedSave();
      renderPatterns();
      renderDelayPalette();
    });
  });
}

// ============================================================
//  EXPORT PATTERN TEMPLATE CSV
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
  "Type",
  "Hole Angle (deg)"
];

// Step 3) Example rows to seed the template so users understand the format
var EXAMPLE_ROWS = [
  ["EXAMPLE-W01",   12,  229,  0.7,  7.1,  8.2,  1.5,  4.0,  "WASTE",    90],
  ["EXAMPLE-O01",   12,  229,  1.5,  4.85, 5.6,  1.5,  4.0,  "ORE",      90],
  ["EXAMPLE-PS01",  12,  127,  0.6,  1.0,  1.6,  0.6,  2.2,  "PRESPLIT",  80],
  ["EXAMPLE-Y01",   10,  165,  1.1,  5.65, 6.55, 1.5,  3.8,  "YELLOW",   90]
];

// Step 4) Export the template CSV
function exportPatternTemplate() {
  var rows = [];

  rows.push("# Kirra Scheduler - Pattern Library Template");
  rows.push("# Fill in your site drill & blast patterns below.");
  rows.push("# Type must be one of: WASTE, YELLOW, ORE, PRESPLIT, BUFFER");
  rows.push("# Hole Angle: degrees from horizontal (90 = vertical, 80 = inclined). Default 90 if omitted.");
  rows.push("# Diameter is in mm (e.g. 229, 165, 127, 311)");
  rows.push("# Delete the EXAMPLE rows before importing.");
  rows.push("# Lines starting with # are ignored on import.");
  rows.push("#");

  rows.push(PATTERN_HEADERS.join(","));

  EXAMPLE_ROWS.forEach(function(row) {
    rows.push(row.join(","));
  });

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

// Step 5) Export current patterns as CSV
function exportPatternLibrary() {
  var rows = [];
  rows.push(PATTERN_HEADERS.join(","));

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
      p.type,
      p.holeAngle || 90
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

      if (line === "" || line.charAt(0) === "#") continue;

      if (!headerFound && line.toLowerCase().indexOf("pattern id") !== -1) {
        headerFound = true;
        continue;
      }

      var fields = parseCSVLine(line);
      if (fields.length < 9) {
        errors.push("Row " + (i + 1) + ": expected at least 9 columns, got " + fields.length);
        continue;
      }

      var patternId = fields[0].trim();
      var benchHt = parseFloat(fields[1]);
      var diam = parseFloat(fields[2]);
      var pf = parseFloat(fields[3]);
      var burden = parseFloat(fields[4]);
      var spacing = parseFloat(fields[5]);
      var subdrill = parseFloat(fields[6]);
      var stemming = parseFloat(fields[7]);
      var type = fields[8].trim().toUpperCase();
      var holeAngle = fields.length > 9 ? parseFloat(fields[9]) : 90;

      if (!patternId) {
        errors.push("Row " + (i + 1) + ": missing Pattern ID");
        continue;
      }
      if (isNaN(benchHt) || isNaN(diam) || isNaN(pf) || isNaN(burden) || isNaN(spacing)) {
        errors.push("Row " + (i + 1) + " (" + patternId + "): invalid numeric value");
        continue;
      }

      var validTypes = ["WASTE", "YELLOW", "ORE", "PRESPLIT", "BUFFER"];
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
        type: type,
        holeAngle: isNaN(holeAngle) ? 90 : holeAngle,
        visibleToGantt: true
      });
    }

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
      APP.patterns = imported;
      debouncedSave();
      renderPatterns();
      renderDelayPalette();
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

  // Step 10d) Add Pattern button — open empty dialog
  var btnAdd = document.getElementById("btnAddPattern");
  if (btnAdd) {
    btnAdd.addEventListener("click", function() {
      showPatternDialog(null, null);
    });
  }
}

export { renderPatterns, initPatternLibrary, exportPatternTemplate, exportPatternLibrary };
