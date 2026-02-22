// ============================================================
//  KAP IMPORT
//  Parses Kirra Application Project (.kap) files.
//  KAP is a ZIP archive containing JSON files:
//    manifest.json, holes.json, drawings.json, surfaces.json,
//    products.json, charging.json, configs.json, layers.json
//  Uses JSZip for decompression.
// ============================================================

import JSZip from "jszip";
import { APP } from "../state/appState.js";

// Step 1) Main entry point — parse a .kap file
function parseKAPFile(file) {
  var log = document.getElementById("kapProjectLog");
  if (!log) {
    console.warn("KAP import log element not found");
    return;
  }

  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + " (" + Math.round(file.size / 1024) + " KB)...</div>";

  // Step 1a) Read file as ArrayBuffer for JSZip
  var reader = new FileReader();
  reader.onload = function(e) {
    processKAPZip(e.target.result, file.name, log);
  };
  reader.onerror = function() {
    log.innerHTML += "<div class=\"log-err\">Failed to read file</div>";
  };
  reader.readAsArrayBuffer(file);
}

// Step 2) Process the ZIP contents
async function processKAPZip(arrayBuffer, fileName, log) {
  try {
    // Step 2a) Load ZIP
    var zip = await JSZip.loadAsync(arrayBuffer);
    log.innerHTML += "<div class=\"log-ok\">ZIP opened successfully</div>";

    // Step 2b) Parse manifest
    var manifestFile = zip.file("manifest.json");
    if (!manifestFile) {
      log.innerHTML += "<div class=\"log-err\">No manifest.json found — not a valid KAP file</div>";
      return;
    }
    var manifest = JSON.parse(await manifestFile.async("string"));
    log.innerHTML += "<div class=\"log-ok\">Kirra Application Project v" + (manifest.kapVersion || "?") + "</div>";
    log.innerHTML += "<div class=\"log-info\">Created: " + (manifest.created || "unknown") + "</div>";
    log.innerHTML += "<div class=\"log-info\">Project: " + (manifest.projectName || "Untitled") + "</div>";

    var counts = manifest.counts || {};
    log.innerHTML += "<div class=\"log-info\">Contents: " +
      (counts.holes || 0) + " holes, " +
      (counts.drawings || 0) + " drawings, " +
      (counts.surfaces || 0) + " surfaces, " +
      (counts.configs || 0) + " charge configs</div>";

    // Step 2c) Parse surfaces (for 3D playback)
    var surfacesFile = zip.file("surfaces.json");
    if (surfacesFile) {
      log.innerHTML += "<div class=\"log-info\">Parsing surfaces (may take a moment for large data)...</div>";
      var surfacesRaw = JSON.parse(await surfacesFile.async("string"));
      processSurfaces(surfacesRaw, log);
    }

    // Step 2d) Parse holes
    var holesFile = zip.file("holes.json");
    if (holesFile) {
      var holesRaw = JSON.parse(await holesFile.async("string"));
      processHoles(holesRaw, log);
    }

    // Step 2e) Parse drawings (polygons → blast boundaries)
    var drawingsFile = zip.file("drawings.json");
    if (drawingsFile) {
      var drawingsRaw = JSON.parse(await drawingsFile.async("string"));
      processDrawings(drawingsRaw, log);
    }

    // Step 2f) Parse charge configs
    var configsFile = zip.file("configs.json");
    if (configsFile) {
      var configsRaw = JSON.parse(await configsFile.async("string"));
      processConfigs(configsRaw, log);
    }

    // Step 2g) Summary
    log.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;margin-top:8px;\">KAP import complete</div>";
    log.innerHTML += "<div class=\"log-info\">Switch to 3D PLAYBACK tab to view surfaces.</div>";

  } catch (err) {
    log.innerHTML += "<div class=\"log-err\">Error: " + err.message + "</div>";
    console.error("KAP import error:", err);
  }
}

// Step 3) Process surfaces — store full geometry for 3D playback
function processSurfaces(surfacesRaw, log) {
  if (!Array.isArray(surfacesRaw) || surfacesRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No surfaces in KAP file</div>";
    return;
  }

  // Step 3a) Convert KAP surface format to APP.kirraProjectSurfaces
  var surfaces = [];

  for (var i = 0; i < surfacesRaw.length; i++) {
    var s = surfacesRaw[i];
    var name = s.name || s.id || "Surface_" + i;
    var pts = s.points || [];
    var tris = s.triangles || [];

    // Step 3b) Compute bounds from data
    var minX = Infinity, maxX = -Infinity;
    var minY = Infinity, maxY = -Infinity;
    var minZ = Infinity, maxZ = -Infinity;

    // Step 3b-i) Check if triangles use vertex-per-tri format (KAP native)
    var isVertexPerTri = tris.length > 0 && tris[0].vertices !== undefined;

    if (isVertexPerTri) {
      // Step 3b-ii) Bounds from triangle vertices
      for (var t = 0; t < tris.length; t++) {
        var verts = tris[t].vertices;
        if (!verts) continue;
        for (var v = 0; v < verts.length; v++) {
          var p = verts[v];
          if (p.x < minX) minX = p.x;
          if (p.x > maxX) maxX = p.x;
          if (p.y < minY) minY = p.y;
          if (p.y > maxY) maxY = p.y;
          var pz = p.z || 0;
          if (pz < minZ) minZ = pz;
          if (pz > maxZ) maxZ = pz;
        }
      }
    } else if (pts.length > 0) {
      // Step 3b-iii) Bounds from points array
      for (var j = 0; j < pts.length; j++) {
        var p = pts[j];
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
        var pz = p.z || 0;
        if (pz < minZ) minZ = pz;
        if (pz > maxZ) maxZ = pz;
      }
    }

    surfaces.push({
      name: name,
      points: pts,
      triangles: tris,
      bounds: {
        minX: minX, maxX: maxX,
        minY: minY, maxY: maxY,
        minZ: minZ, maxZ: maxZ
      },
      gradient: s.gradient || "default",
      visible: s.visible !== false,
      opacity: s.transparency !== undefined ? s.transparency : 0.85
    });

    log.innerHTML += "<div class=\"log-ok\">  Surface: " + name +
      " (" + pts.length + " pts, " + tris.length + " tris" +
      (isVertexPerTri ? ", vertex-per-tri" : ", indexed") + ")</div>";
  }

  APP.kirraProjectSurfaces = surfaces;
  log.innerHTML += "<div class=\"log-ok\">" + surfaces.length + " surface(s) loaded for 3D playback</div>";
}

// Step 4) Process holes — extract blast entity names and hole data
function processHoles(holesRaw, log) {
  if (!Array.isArray(holesRaw) || holesRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No holes in KAP file</div>";
    return;
  }

  // Step 4a) Group holes by entityName to identify blasts
  var entMap = {};
  for (var i = 0; i < holesRaw.length; i++) {
    var h = holesRaw[i];
    var eName = h.entityName || "Unknown";
    if (!entMap[eName]) entMap[eName] = [];
    entMap[eName].push(h);
  }

  // Step 4b) Store grouped hole data for future use
  if (!APP.kapHoleData) APP.kapHoleData = {};
  var entityNames = Object.keys(entMap);
  for (var i = 0; i < entityNames.length; i++) {
    APP.kapHoleData[entityNames[i]] = entMap[entityNames[i]];
  }

  // Step 4c) Try to match to existing blasts or create importedBlasts entries
  var matched = 0;
  var unmatched = 0;
  for (var i = 0; i < entityNames.length; i++) {
    var eName = entityNames[i];
    var holes = entMap[eName];

    // Step 4c-i) Check if a blast with this name exists
    var existing = APP.blasts.find(function(b) { return b.name === eName; });
    if (existing) {
      // Step 4c-ii) Attach polygon data from hole collar positions
      if (!existing.polygons || existing.polygons.length === 0) {
        existing.kapHoles = holes;
        existing.holeCount = holes.length;
      }
      matched++;
    } else {
      unmatched++;
    }
  }

  log.innerHTML += "<div class=\"log-ok\">" + holesRaw.length + " holes in " + entityNames.length +
    " blast entities (" + matched + " matched to schedule, " + unmatched + " unmatched)</div>";

  entityNames.forEach(function(name) {
    log.innerHTML += "<div class=\"log-info\">  " + name + ": " + entMap[name].length + " holes</div>";
  });
}

// Step 5) Process drawings — extract polygons as potential blast boundaries
function processDrawings(drawingsRaw, log) {
  if (!Array.isArray(drawingsRaw) || drawingsRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No drawings in KAP file</div>";
    return;
  }

  var polyCount = 0;
  var lineCount = 0;
  var otherCount = 0;

  for (var i = 0; i < drawingsRaw.length; i++) {
    var entry = drawingsRaw[i];
    var entityName = entry[0];
    var entityObj = entry[1];
    var entityType = entityObj.entityType || "unknown";

    if (entityType === "poly") {
      polyCount++;
      // Step 5a) Extract polygon points for blast boundary matching
      var data = entityObj.data || [];
      if (data.length > 0) {
        var polyPoints = [];
        for (var j = 0; j < data.length; j++) {
          polyPoints.push({
            x: data[j].pointXLocation,
            y: data[j].pointYLocation,
            z: data[j].pointZLocation || 0
          });
        }

        // Step 5b) Try to match polygon to a blast by name similarity
        var matchBlast = APP.blasts.find(function(b) {
          return entityName.indexOf(b.name) !== -1 || b.name.indexOf(entityName) !== -1;
        });
        if (matchBlast) {
          matchBlast.polygons = polyPoints;
          log.innerHTML += "<div class=\"log-ok\">  Polygon \"" + entityName + "\" -> blast \"" + matchBlast.name + "\"</div>";
        } else {
          // Step 5c) Store as unmatched polygon for 3D display
          if (!APP.kapPolygons) APP.kapPolygons = [];
          APP.kapPolygons.push({
            name: entityName,
            points: polyPoints,
            color: (data[0] && data[0].color) || "#FF0000",
            closed: data[0] ? data[0].closed : true
          });
        }
      }
    } else if (entityType === "line") {
      lineCount++;
    } else {
      otherCount++;
    }
  }

  log.innerHTML += "<div class=\"log-ok\">" + drawingsRaw.length + " drawings: " +
    polyCount + " polygons, " + lineCount + " lines, " + otherCount + " other</div>";
}

// Step 6) Process charge configs
function processConfigs(configsRaw, log) {
  if (!Array.isArray(configsRaw) || configsRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No charge configs in KAP file</div>";
    return;
  }

  // Step 6a) Store raw config data
  var configs = [];
  for (var i = 0; i < configsRaw.length; i++) {
    var entry = configsRaw[i];
    var configName = entry[0];
    var configData = entry[1];
    configs.push({
      id: configName,
      name: configData.name || configName,
      data: configData
    });
  }

  // Step 6b) Merge into APP.chargeConfigs
  if (configs.length > 0) {
    APP.chargeConfigs = APP.chargeConfigs.concat(configs);
    log.innerHTML += "<div class=\"log-ok\">" + configs.length + " charge config(s) imported</div>";
  }
}

// Step 7) Set up the .kap drop zone and file input
function initKAPImport() {
  var dropZone = document.getElementById("kapDropZone");
  var fileInput = document.getElementById("kapFileInput");

  if (!dropZone || !fileInput) return;

  // Step 7a) File input change handler
  fileInput.addEventListener("change", function(e) {
    var files = e.target.files;
    if (files.length > 0) parseKAPFile(files[0]);
    fileInput.value = "";
  });

  // Step 7b) Drop zone drag/drop handlers
  dropZone.addEventListener("dragover", function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add("drag-over");
  });

  dropZone.addEventListener("dragleave", function(e) {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
  });

  dropZone.addEventListener("drop", function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove("drag-over");
    var files = e.dataTransfer.files;
    if (files.length > 0) parseKAPFile(files[0]);
  });

  // Step 7c) Click to browse
  dropZone.addEventListener("click", function(e) {
    if (e.target === fileInput) return;
    fileInput.click();
  });
}

export { parseKAPFile, initKAPImport };
