// ============================================================
//  DXF IMPORT
//  Parse DXF polygon files for blast boundary definitions
// ============================================================

import { APP } from "../state/appState.js";
import { showImportPreview } from "./importPreview.js";

// Step 1) Parse a DXF file and extract blast polygon definitions
function parseDXFFile(file) {
  var log = document.getElementById("dxfLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    var content = e.target.result;
    var blasts = parseDXFEntities(content);

    if (blasts.length === 0) {
      log.innerHTML += "<div class=\"log-warn\">Warning: No blast polygons found. Expected layer naming: BLASTNAME-HOLETYPE{[B][S][BH][SD][D]}</div>";
      return;
    }

    log.innerHTML += "<div class=\"log-ok\">Found " + blasts.length + " blast definition(s)</div>";
    APP.importedBlasts = blasts;
    showImportPreview();
  };
  reader.readAsText(file);
}

// Step 2) Parse DXF entities from file content
function parseDXFEntities(content) {
  var blasts = [];
  var lines = content.split("\n").map(function(l) { return l.trim(); });

  // Pattern: BLASTNAME-HOLETYPE{[Burden][Spacing][BenchHt][Subdrill][Diameter]}
  var layerPattern = /^(.+?)-(.+?)\{\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\}/;

  var foundLayers = new Set();
  var polygons = {};

  // Step 2a) Scan for LWPOLYLINE entities
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === "LWPOLYLINE" || lines[i] === "POLYLINE") {
      var layer = "";
      var vertices = [];
      for (var j = i + 1; j < Math.min(i + 500, lines.length); j++) {
        if (lines[j] === "8" && lines[j + 1]) { layer = lines[j + 1]; }
        if (lines[j] === "10" && lines[j + 1]) {
          var x = parseFloat(lines[j + 1]);
          if (lines[j + 2] === "20" && lines[j + 3]) {
            var y = parseFloat(lines[j + 3]);
            vertices.push({ x: x, y: y });
          }
        }
        if (lines[j] === "0") break;
      }

      if (layer) {
        foundLayers.add(layer);
        if (!polygons[layer]) polygons[layer] = [];
        polygons[layer].push(vertices);
      }
    }
  }

  // Step 2b) Also check for layer names in TABLE section
  for (var ti = 0; ti < lines.length; ti++) {
    if (lines[ti] === "2" && lines[ti - 1] === "0") {
      foundLayers.add(lines[ti + 1] || lines[ti]);
    }
  }

  var log = document.getElementById("dxfLog");
  log.innerHTML += "<div class=\"log-info\">Found " + foundLayers.size + " layers in DXF</div>";

  // Step 2c) Parse layer names against blast pattern
  foundLayers.forEach(function(layerName) {
    var match = layerName.match(layerPattern);
    if (match) {
      var blastName = match[1];
      var holeType = match[2];
      var burden = match[3];
      var spacing = match[4];
      var benchHt = match[5];
      var subdrill = match[6];
      var diameter = match[7];

      var blast = blasts.find(function(b) { return b.name === blastName; });
      if (!blast) {
        blast = { name: blastName, holeTypes: [], polygons: [] };
        blasts.push(blast);
      }

      blast.holeTypes.push({
        type: holeType.toUpperCase(),
        burden: parseFloat(burden) || 0,
        spacing: parseFloat(spacing) || 0,
        benchHt: parseFloat(benchHt) || 12,
        subdrill: parseFloat(subdrill) || 1.5,
        diam: parseFloat(diameter) || 229,
        layer: layerName,
        polygon: polygons[layerName] || []
      });

      log.innerHTML += "<div class=\"log-ok\">" + blastName + " \u2192 " + holeType + " (B:" + burden + " S:" + spacing + " BH:" + benchHt + ")</div>";
    } else {
      log.innerHTML += "<div class=\"log-warn\">Layer \"" + layerName + "\" doesn't match expected pattern</div>";
    }
  });

  return blasts;
}

export { parseDXFFile };
