// ============================================================
//  KAP IMPORT
//  Parses Kirra Application Project (.kap) files.
//  KAP is a ZIP archive containing JSON files:
//    manifest.json, holes.json, drawings.json, surfaces.json,
//    products.json, charging.json, configs.json, layers.json
//  Uses JSZip for decompression.
//
//  Blast solids (extruded polygons) are detected and converted
//  into importedBlasts with computed volume for scheduling.
// ============================================================

import JSZip from "jszip";
import { APP } from "../state/appState.js";
import { showImportPreview } from "./importPreview.js";
import { renderPatterns } from "../views/patternLibrary.js";
import { renderBlasts } from "../views/blastOverview.js";
import { renderGantt } from "../views/ganttView.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { computeDepthBins } from "../engine/depthBinning.js";

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

    // Step 2c) Parse layers first to identify blast-solid layers
    var blastSolidLayerIds = {};
    var layersFile = zip.file("layers.json");
    if (layersFile) {
      var layersData = JSON.parse(await layersFile.async("string"));
      var surfaceLayers = layersData.surfaceLayers || [];
      for (var li = 0; li < surfaceLayers.length; li++) {
        var layerName = (surfaceLayers[li].layerName || "").toUpperCase();
        if (layerName.indexOf("BLAST") !== -1 || layerName.indexOf("SOLID") !== -1) {
          blastSolidLayerIds[surfaceLayers[li].layerId] = surfaceLayers[li].layerName;
          log.innerHTML += "<div class=\"log-info\">Blast solid layer detected: " + surfaceLayers[li].layerName + "</div>";
        }
      }
    }

        // Step 2d) Parse surfaces (pit surfaces AND blast solids)
    var btnIn = document.getElementById("kapNormalsIn");
    var alignIn = btnIn ? btnIn.classList.contains("kap-normals-active") : false;

    var surfacesFile = zip.file("surfaces.json");
    if (surfacesFile) {
      log.innerHTML += "<div class=\"log-info\">Parsing surfaces (may take a moment for large data)...</div>";
      log.innerHTML += "<div class=\"log-info\">Normal alignment: " + (alignIn ? "IN" : "OUT") + "</div>";
      if (alignIn) {
        log.innerHTML += "<div class=\"log-info\">Align IN selected — reversing triangle winding order</div>";
      }
      var surfacesRaw = JSON.parse(await surfacesFile.async("string"));
      processSurfaces(surfacesRaw, blastSolidLayerIds, log, alignIn);
    }

    // Step 2e) Parse holes
    var holesFile = zip.file("holes.json");
    if (holesFile) {
      var holesRaw = JSON.parse(await holesFile.async("string"));
      processHoles(holesRaw, log);
    }

    // Step 2f) Parse drawings (polygons -> blast boundaries)
    var drawingsFile = zip.file("drawings.json");
    if (drawingsFile) {
      var drawingsRaw = JSON.parse(await drawingsFile.async("string"));
      processDrawings(drawingsRaw, log);
    }

    // Step 2g) Parse charging data for explosive mass per entity
    var chargingFile = zip.file("charging.json");
    if (chargingFile) {
      var chargingRaw = JSON.parse(await chargingFile.async("string"));
      processCharging(chargingRaw, log);
    }

    // Step 2h) Parse charge configs
    var configsFile = zip.file("configs.json");
    if (configsFile) {
      var configsRaw = JSON.parse(await configsFile.async("string"));
      processConfigs(configsRaw, log);
    }

    // Step 2i) Summary, persist, and import preview
    log.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;margin-top:8px;\">KAP import complete</div>";
    debouncedSave();

    if (APP.importedBlasts.length > 0) {
      log.innerHTML += "<div class=\"log-ok\">" + APP.importedBlasts.length + " blast(s) ready to merge into schedule</div>";
      showImportPreview();
    }

    if (APP.kirraProjectSurfaces.length > 0) {
      log.innerHTML += "<div class=\"log-info\">Switch to 3D PLAYBACK tab to view surfaces.</div>";
    }

  } catch (err) {
    log.innerHTML += "<div class=\"log-err\">Error: " + err.message + "</div>";
    console.error("KAP import error:", err);
  }
}

// ============================================================
//  Step 3-UTIL) Flip triangle winding order — swaps the
//  second and third vertex of each triangle, reversing
//  the face normal direction (IN <-> OUT).
// ============================================================
function flipTriangleWinding(tris, isVertexPerTri) {
  var flipped = [];
  for (var i = 0; i < tris.length; i++) {
    var tri = tris[i];
    if (isVertexPerTri) {
      // Step FLIP-a) Vertex-per-triangle: swap vertices[1] and vertices[2]
      var v = tri.vertices;
      if (!v || v.length < 3) { flipped.push(tri); continue; }
      var newTri = {};
      for (var k in tri) { newTri[k] = tri[k]; }
      newTri.vertices = [v[0], v[2], v[1]];
      flipped.push(newTri);
    } else if (Array.isArray(tri)) {
      // Step FLIP-b) Index array [a, b, c] -> [a, c, b]
      flipped.push([tri[0], tri[2], tri[1]]);
    } else if (tri.a !== undefined) {
      // Step FLIP-c) Object { a, b, c } -> swap b and c
      var newTri = {};
      for (var k in tri) { newTri[k] = tri[k]; }
      newTri.b = tri.c;
      newTri.c = tri.b;
      flipped.push(newTri);
    } else {
      flipped.push(tri);
    }
  }
  return flipped;
}

// ============================================================
//  Step 3) Process surfaces — separate pit surfaces from
//  blast solids. Compute volume for solids and create
//  importedBlasts entries.
// ============================================================
function processSurfaces(surfacesRaw, blastSolidLayerIds, log, flipNormals) {
  if (!Array.isArray(surfacesRaw) || surfacesRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No surfaces in KAP file</div>";
    return;
  }

  var pitSurfaces = [];
  var blastSolids = [];

  for (var i = 0; i < surfacesRaw.length; i++) {
    var s = surfacesRaw[i];
    var name = s.name || s.id || "Surface_" + i;
    var pts = s.points || [];
    var tris = s.triangles || [];
    var isVertexPerTri = tris.length > 0 && tris[0] && tris[0].vertices !== undefined;

    // Step 3-FLIP) Reverse winding order if Flip Normals is enabled
    if (flipNormals && tris.length > 0) {
      tris = flipTriangleWinding(tris, isVertexPerTri);
    }

    // Step 3a) Compute bounds
    var bounds = computeBounds(pts, tris, isVertexPerTri, s.meshBounds);

    // Step 3b) Detect if this is a blast solid
    var isBlastSolid = false;
    var solidId = s.id || "";

    // Detection method 1: layer membership
    if (s.layerId && blastSolidLayerIds[s.layerId]) {
      isBlastSolid = true;
    }
    // Detection method 2: ID starts with EXTRUDED_
    if (solidId.indexOf("EXTRUDED_") === 0) {
      isBlastSolid = true;
    }

    var surfObj = {
      name: name,
      points: pts,
      triangles: tris,
      bounds: bounds,
      gradient: s.gradient || "default",
      visible: s.visible !== false,
      opacity: s.transparency !== undefined ? s.transparency : 0.85,
      hillshadeColor: s.hillshadeColor || null,
      layerId: s.layerId || null,
      normalAlignment: flipNormals ? "IN" : "OUT"
    };

    if (isBlastSolid) {
      // Step 3c) Compute full mesh statistics (volume, areas, quality) in one pass
      var meshStats = computeMeshStats(tris, isVertexPerTri, pts, bounds, flipNormals ? "In" : "Out");
      var volume = meshStats.volume;
      var benchHt = Math.abs(bounds.maxZ - bounds.minZ);
      var surfaceArea = meshStats.xyArea;

      surfObj.volume = volume;
      surfObj.benchHt = benchHt;
      surfObj.surfaceArea = surfaceArea;
      surfObj.meshStats = meshStats;
      surfObj.isBlastSolid = true;

      // Step 3c-ii) Compute depth histogram (area % per metre-depth bin)
      var depthBinData = computeDepthBins(surfObj);
      if (depthBinData) {
        surfObj.depthBinData = depthBinData;
        var binSummary = depthBinData.depthBins.map(function(db) {
          return db.minDepth + "-" + db.maxDepth + "m:" + db.areaPct + "%";
        }).join(", ");
        log.innerHTML += "<div class=\"log-info\">  Depth profile (" + depthBinData.gridResolution + "m grid, " + depthBinData.totalCells + " cells): " + binSummary + "</div>";
      }

      blastSolids.push(surfObj);

      var qualityNote = meshStats.closed ? "closed" : meshStats.openEdges + " open edges";
      if (meshStats.nonManifoldEdges > 0) qualityNote += ", " + meshStats.nonManifoldEdges + " non-manifold";
      log.innerHTML += "<div class=\"log-ok\">  Blast solid: " + name +
        " | vol: " + Math.round(volume).toLocaleString() + " m3" +
        " | XY: " + surfaceArea.toLocaleString() + " m2" +
        " | bench: " + benchHt.toFixed(1) + " m" +
        " | " + qualityNote +
        " (" + tris.length + " tris)</div>";

      // Step 3d) Create importedBlast entry with mesh statistics
      var blastEntry = {
        name: name,
        mode: "Manual",
        surfaceArea: surfaceArea,
        loadRate: 100000,
        volume: Math.round(volume),
        expMass: 0,
        drillStart: null,
        drillStartTime: "06:00",
        drillDays: 0,
        loadStart: null,
        loadDays: 0,
        blastDate: null,
        status: "planned",
        deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
        assignedDrills: [],
        assignedMPUs: [],
        holeTypes: [],
        solidBounds: bounds,
        solidBenchHt: benchHt,
        solidStats: meshStats,
        drillProgress: 0,
        loadProgress: 0,
        _sourceType: "solid"
      };

      APP.importedBlasts.push(blastEntry);
    } else {
      // Step 3e) Regular pit surface
      pitSurfaces.push(surfObj);

      log.innerHTML += "<div class=\"log-ok\">  Surface: " + name +
        " (" + pts.length + " pts, " + tris.length + " tris" +
        (isVertexPerTri ? ", vertex-per-tri" : ", indexed") + ")</div>";
    }
  }

  APP.kirraProjectSurfaces = pitSurfaces;
  APP.kirraProjectSolids = (APP.kirraProjectSolids || []).concat(blastSolids);

  log.innerHTML += "<div class=\"log-ok\">" + pitSurfaces.length + " surface(s) + " +
    blastSolids.length + " blast solid(s) loaded</div>";
}

// ============================================================
//  Step 3-UTIL) Compute bounds from points or triangles
// ============================================================
function computeBounds(pts, tris, isVertexPerTri, existingBounds) {
  // Use existing bounds if provided
  if (existingBounds && existingBounds.minX !== undefined) {
    return existingBounds;
  }

  var minX = Infinity, maxX = -Infinity;
  var minY = Infinity, maxY = -Infinity;
  var minZ = Infinity, maxZ = -Infinity;

  if (isVertexPerTri) {
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

  return { minX: minX, maxX: maxX, minY: minY, maxY: maxY, minZ: minZ, maxZ: maxZ };
}

// ============================================================
//  Step 3-VOL) Compute mesh volume using signed tetrahedron
//  method (divergence theorem). Translates to local origin
//  first to maintain float precision with large UTM coords.
// ============================================================
function computeMeshVolume(tris, isVertexPerTri, pts, bounds) {
  if (!tris || tris.length === 0) return 0;

  // Step VOL-a) Local origin at bounds centroid for float precision
  var ox = (bounds.minX + bounds.maxX) / 2;
  var oy = (bounds.minY + bounds.maxY) / 2;
  var oz = (bounds.minZ + bounds.maxZ) / 2;

  var volume = 0;

  if (isVertexPerTri) {
    // Step VOL-b) Vertex-per-triangle format
    for (var i = 0; i < tris.length; i++) {
      var verts = tris[i].vertices;
      if (!verts || verts.length < 3) continue;

      var x0 = verts[0].x - ox, y0 = verts[0].y - oy, z0 = (verts[0].z || 0) - oz;
      var x1 = verts[1].x - ox, y1 = verts[1].y - oy, z1 = (verts[1].z || 0) - oz;
      var x2 = verts[2].x - ox, y2 = verts[2].y - oy, z2 = (verts[2].z || 0) - oz;

      // Signed volume of tetrahedron formed with origin
      volume += (x0 * (y1 * z2 - y2 * z1) -
                 x1 * (y0 * z2 - y2 * z0) +
                 x2 * (y0 * z1 - y1 * z0)) / 6.0;
    }
  } else {
    // Step VOL-c) Indexed triangle format
    for (var i = 0; i < tris.length; i++) {
      var tri = tris[i];
      var i0, i1, i2;

      if (Array.isArray(tri)) {
        i0 = tri[0]; i1 = tri[1]; i2 = tri[2];
      } else if (tri.a !== undefined) {
        i0 = tri.a; i1 = tri.b; i2 = tri.c;
      } else {
        continue;
      }

      if (i0 >= pts.length || i1 >= pts.length || i2 >= pts.length) continue;

      var x0 = pts[i0].x - ox, y0 = pts[i0].y - oy, z0 = (pts[i0].z || 0) - oz;
      var x1 = pts[i1].x - ox, y1 = pts[i1].y - oy, z1 = (pts[i1].z || 0) - oz;
      var x2 = pts[i2].x - ox, y2 = pts[i2].y - oy, z2 = (pts[i2].z || 0) - oz;

      volume += (x0 * (y1 * z2 - y2 * z1) -
                 x1 * (y0 * z2 - y2 * z0) +
                 x2 * (y0 * z1 - y1 * z0)) / 6.0;
    }
  }

  return Math.abs(volume);
}

// ============================================================
//  Step 3-STATS) Compute full mesh statistics in a single pass:
//  points, edges, faces, projected areas (XY/YZ/XZ), 3D area,
//  volume, closed status, open edges, non-manifold edges.
//  Z-up coordinate system.
// ============================================================
function computeMeshStats(tris, isVertexPerTri, pts, bounds, normalAlignment) {
  var stats = {
    points: 0, edges: 0, faces: 0,
    normalDir: normalAlignment || "Out",
    closed: false,
    xyArea: 0, yzArea: 0, xzArea: 0, area3d: 0,
    volume: 0,
    openEdges: 0, nonManifoldEdges: 0
  };
  if (!tris || tris.length === 0) return stats;
  stats.faces = tris.length;

  var ox = (bounds.minX + bounds.maxX) / 2;
  var oy = (bounds.minY + bounds.maxY) / 2;
  var oz = (bounds.minZ + bounds.maxZ) / 2;

  var edgeCounts = {};
  var vertexSet = {};
  var xyAbsSum = 0, yzAbsSum = 0, xzAbsSum = 0, area3dSum = 0, volSum = 0;

  // Step STATS-a) Edge key from two vertex positions (rounded for float matching)
  function edgeKey(ax, ay, az, bx, by, bz) {
    var a = Math.round(ax * 1000) + "," + Math.round(ay * 1000) + "," + Math.round(az * 1000);
    var b = Math.round(bx * 1000) + "," + Math.round(by * 1000) + "," + Math.round(bz * 1000);
    return a < b ? a + "|" + b : b + "|" + a;
  }

  // Step STATS-b) Process one triangle
  function processTri(x0, y0, z0, x1, y1, z1, x2, y2, z2) {
    // Track unique vertices
    var v0k = Math.round(x0 * 1000) + "," + Math.round(y0 * 1000) + "," + Math.round(z0 * 1000);
    var v1k = Math.round(x1 * 1000) + "," + Math.round(y1 * 1000) + "," + Math.round(z1 * 1000);
    var v2k = Math.round(x2 * 1000) + "," + Math.round(y2 * 1000) + "," + Math.round(z2 * 1000);
    vertexSet[v0k] = true; vertexSet[v1k] = true; vertexSet[v2k] = true;

    // Track edges
    var ek1 = edgeKey(x0, y0, z0, x1, y1, z1);
    var ek2 = edgeKey(x1, y1, z1, x2, y2, z2);
    var ek3 = edgeKey(x2, y2, z2, x0, y0, z0);
    edgeCounts[ek1] = (edgeCounts[ek1] || 0) + 1;
    edgeCounts[ek2] = (edgeCounts[ek2] || 0) + 1;
    edgeCounts[ek3] = (edgeCounts[ek3] || 0) + 1;

    // Local coords for float precision
    var lx0 = x0 - ox, ly0 = y0 - oy, lz0 = z0 - oz;
    var lx1 = x1 - ox, ly1 = y1 - oy, lz1 = z1 - oz;
    var lx2 = x2 - ox, ly2 = y2 - oy, lz2 = z2 - oz;

    // Cross product of edge vectors
    var dx1 = lx1 - lx0, dy1 = ly1 - ly0, dz1 = lz1 - lz0;
    var dx2 = lx2 - lx0, dy2 = ly2 - ly0, dz2 = lz2 - lz0;
    var cx = dy1 * dz2 - dz1 * dy2;
    var cy = dz1 * dx2 - dx1 * dz2;
    var cz = dx1 * dy2 - dy1 * dx2;

    // Projected areas (|cross component| / 2 = projected triangle area)
    xyAbsSum += Math.abs(cz) * 0.5;
    yzAbsSum += Math.abs(cx) * 0.5;
    xzAbsSum += Math.abs(cy) * 0.5;

    // 3D surface area (|cross| / 2 = actual triangle area)
    area3dSum += Math.sqrt(cx * cx + cy * cy + cz * cz) * 0.5;

    // Signed volume (tetrahedron with origin)
    volSum += (lx0 * (ly1 * lz2 - ly2 * lz1) -
               lx1 * (ly0 * lz2 - ly2 * lz0) +
               lx2 * (ly0 * lz1 - ly1 * lz0)) / 6.0;
  }

  // Step STATS-c) Iterate triangles
  if (isVertexPerTri) {
    for (var i = 0; i < tris.length; i++) {
      var verts = tris[i].vertices;
      if (!verts || verts.length < 3) continue;
      processTri(
        verts[0].x, verts[0].y, verts[0].z || 0,
        verts[1].x, verts[1].y, verts[1].z || 0,
        verts[2].x, verts[2].y, verts[2].z || 0
      );
    }
  } else {
    for (var i = 0; i < tris.length; i++) {
      var tri = tris[i];
      var i0, i1, i2;
      if (Array.isArray(tri)) { i0 = tri[0]; i1 = tri[1]; i2 = tri[2]; }
      else if (tri.a !== undefined) { i0 = tri.a; i1 = tri.b; i2 = tri.c; }
      else continue;
      if (i0 >= pts.length || i1 >= pts.length || i2 >= pts.length) continue;
      processTri(
        pts[i0].x, pts[i0].y, pts[i0].z || 0,
        pts[i1].x, pts[i1].y, pts[i1].z || 0,
        pts[i2].x, pts[i2].y, pts[i2].z || 0
      );
    }
  }

  // Step STATS-d) Tally unique vertices, edges, and mesh quality
  stats.points = Object.keys(vertexSet).length;
  var allEdges = Object.keys(edgeCounts);
  stats.edges = allEdges.length;
  var openCount = 0, nonManifoldCount = 0;
  for (var ei = 0; ei < allEdges.length; ei++) {
    var ec = edgeCounts[allEdges[ei]];
    if (ec === 1) openCount++;
    else if (ec > 2) nonManifoldCount++;
  }
  stats.openEdges = openCount;
  stats.nonManifoldEdges = nonManifoldCount;
  stats.closed = (openCount === 0);

  // Step STATS-e) For closed solid, divide projected sums by 2 (top+bottom both contribute)
  stats.xyArea = Math.round(xyAbsSum / 2 * 100) / 100;
  stats.yzArea = Math.round(yzAbsSum / 2 * 100) / 100;
  stats.xzArea = Math.round(xzAbsSum / 2 * 100) / 100;
  stats.area3d = Math.round(area3dSum * 100) / 100;
  stats.volume = Math.round(Math.abs(volSum) * 100) / 100;

  return stats;
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

  // Step 4c) Try to match to existing blasts or imported blasts
  var matched = 0;
  var unmatched = 0;
  for (var i = 0; i < entityNames.length; i++) {
    var eName = entityNames[i];
    var holes = entMap[eName];

    // Check existing schedule blasts
    var existing = APP.blasts.find(function(b) { return b.name === eName; });
    if (existing) {
      if (!existing.polygons || existing.polygons.length === 0) {
        existing.kapHoles = holes;
        existing.holeCount = holes.length;
      }
      matched++;
      continue;
    }

    // Check imported blasts (from solids)
    var imported = APP.importedBlasts.find(function(b) { return b.name === eName; });
    if (imported) {
      imported.kapHoles = holes;
      imported._sourceHoleCount = holes.length;
      matched++;
    } else {
      unmatched++;
    }
  }

  log.innerHTML += "<div class=\"log-ok\">" + holesRaw.length + " holes in " + entityNames.length +
    " blast entities (" + matched + " matched, " + unmatched + " unmatched)</div>";

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

        // Step 5b) Try to match polygon to a blast or imported blast
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

// ============================================================
//  Step 5B) Process charging data — compute explosive mass
//  per entity from hole-by-hole charge deck data
// ============================================================
function processCharging(chargingRaw, log) {
  if (!Array.isArray(chargingRaw) || chargingRaw.length === 0) {
    log.innerHTML += "<div class=\"log-info\">No charging data in KAP file</div>";
    return;
  }

  // Step 5B-a) Group by entityName and sum explosive mass
  var entityMass = {};
  var entityHoles = {};

  for (var i = 0; i < chargingRaw.length; i++) {
    var entry = chargingRaw[i];
    // KAP charging is [key, object] tuple format
    var holeData = Array.isArray(entry) ? entry[1] : entry;
    var eName = holeData.entityName || "Unknown";

    if (!entityMass[eName]) { entityMass[eName] = 0; entityHoles[eName] = 0; }
    entityHoles[eName]++;

    // Step 5B-b) Sum mass from all explosive decks in this hole
    var decks = holeData.decks || [];
    for (var d = 0; d < decks.length; d++) {
      var deck = decks[d];
      var product = deck.product || {};
      var category = product.productCategory || "";

      // Only count explosives (bulk, high explosive), not inerts or initiators
      if (category === "BulkExplosive" || category === "HighExplosive") {
        if (deck.massKg) {
          entityMass[eName] += deck.massKg;
        } else {
          // Estimate mass from deck geometry: pi * r^2 * length * density
          var topDepth = deck.topDepth || 0;
          var baseDepth = deck.baseDepth || 0;
          var deckLength = Math.abs(baseDepth - topDepth);
          var density = product.density || 0;

          if (deck.deckType === "DECOUPLED") {
            // Decoupled: use product diameter, not hole diameter
            var prodDiamM = (product.diameterMm || 32) / 1000;
            var prodR = prodDiamM / 2;
            var massPerUnit = (product.massGrams || 0) / 1000;
            var unitLen = (product.lengthMm || 400) / 1000;
            if (massPerUnit > 0 && unitLen > 0) {
              var numUnits = Math.floor(deckLength / unitLen);
              entityMass[eName] += numUnits * massPerUnit;
            } else if (density > 0) {
              entityMass[eName] += Math.PI * prodR * prodR * deckLength * density * 1000;
            }
          } else if (deck.deckType === "COUPLED" && density > 0) {
            // Coupled: use hole diameter
            var holeDiamMm = holeData.holeDiameterMm || 229;
            var holeR = (holeDiamMm / 1000) / 2;
            entityMass[eName] += Math.PI * holeR * holeR * deckLength * density * 1000;
          }
        }
      }
    }
  }

  // Step 5B-c) Apply computed mass to importedBlasts
  var entityNames = Object.keys(entityMass);
  for (var i = 0; i < entityNames.length; i++) {
    var eName = entityNames[i];
    var mass = Math.round(entityMass[eName]);
    var holeCount = entityHoles[eName];

    // Match to imported blast
    var imported = APP.importedBlasts.find(function(b) { return b.name === eName; });
    if (imported) {
      imported.expMass = mass;
      imported._sourceHoleCount = holeCount;
    }

    // Match to existing scheduled blast
    var existing = APP.blasts.find(function(b) { return b.name === eName; });
    if (existing && mass > 0) {
      existing.expMass = mass;
    }

    log.innerHTML += "<div class=\"log-ok\">  Charging: " + eName + " = " +
      holeCount + " holes, " + mass.toLocaleString() + " kg explosive</div>";
  }
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
      name: configData.configName || configData.name || configName,
      code: configData.configCode || "",
      data: configData
    });
  }

  // Step 6b) Merge into APP.chargeConfigs
  if (configs.length > 0) {
    APP.chargeConfigs = APP.chargeConfigs.concat(configs);
    log.innerHTML += "<div class=\"log-ok\">" + configs.length + " charge config(s) imported</div>";
    configs.forEach(function(c) {
      log.innerHTML += "<div class=\"log-info\">  " + c.code + " - " + c.name + "</div>";
    });
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

  // Step 7d) Normal alignment toggle buttons (OUT / IN)
  var btnOut = document.getElementById("kapNormalsOut");
  var btnIn = document.getElementById("kapNormalsIn");
  if (btnOut && btnIn) {
    btnOut.addEventListener("click", function() {
      btnOut.classList.add("kap-normals-active");
      btnIn.classList.remove("kap-normals-active");
    });
    btnIn.addEventListener("click", function() {
      btnIn.classList.add("kap-normals-active");
      btnOut.classList.remove("kap-normals-active");
    });
  }
}

export { parseKAPFile, initKAPImport };
