// ============================================================
//  KIRRA IMPORT
//  Import Kirra charge configs and project files
//  Supported: Blasts (hole CSV/JSON), KAD polys, Surfaces, Solids
//  Unsupported data types are warned to the user
// ============================================================

import { APP } from "../state/appState.js";
import { renderForecast } from "../views/forecastView.js";
import { showImportPreview } from "./importPreview.js";

// Step 1) Parse Kirra charge configuration file
function parseKirraConfig(file) {
  var log = document.getElementById("kirraLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);

      // Step 1a) Handle various Kirra export formats
      if (data.chargeConfigs || data.charge_configs) {
        var configs = data.chargeConfigs || data.charge_configs;
        APP.chargeConfigs = Array.isArray(configs) ? configs : [configs];
        log.innerHTML += "<div class=\"log-ok\">Loaded " + APP.chargeConfigs.length + " charge config(s)</div>";

        APP.chargeConfigs.forEach(function(cfg) {
          var cfgName = cfg.name || cfg.configName || "Unknown";
          var decks = cfg.decks || cfg.chargeDeck || [];
          log.innerHTML += "<div class=\"log-ok\">  \u2192 " + cfgName + ": " + decks.length + " deck(s)</div>";
        });
      } else if (data.name || data.configName) {
        APP.chargeConfigs = [data];
        log.innerHTML += "<div class=\"log-ok\">Loaded charge config: " + (data.name || data.configName) + "</div>";
      } else {
        log.innerHTML += "<div class=\"log-warn\">No charge configs found in file. Expected 'chargeConfigs' or 'charge_configs' key.</div>";
      }

      renderForecast();
    } catch (err) {
      log.innerHTML += "<div class=\"log-err\">Parse error: " + err.message + "</div>";
    }
  };
  reader.readAsText(file);
}

// Step 2) Parse Kirra project file (JSON export from Kirra app IndexedDB)
function parseKirraProject(file) {
  var log = document.getElementById("kirraProjectLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      log.innerHTML += "<div class=\"log-ok\">Parsed Kirra project file (" + Math.round(file.size / 1024) + " KB)</div>";

      // Step 2a) Detect and warn about unsupported data types
      var unsupported = [];
      var unsupportedKeys = [
        "images", "pointClouds", "points", "circles",
        "geoTiffs", "lasFiles", "navFiles", "dxfEntities"
      ];
      unsupportedKeys.forEach(function(key) {
        if (data[key]) {
          var count = Array.isArray(data[key]) ? data[key].length : Object.keys(data[key]).length;
          unsupported.push(key + " (" + count + ")");
        }
      });
      if (unsupported.length > 0) {
        log.innerHTML += "<div class=\"log-warn\">\u26A0 Ignored data types (not used by Scheduler): " + unsupported.join(", ") + "</div>";
      }

      // Step 2b) Process BLAST HOLES — group by entityName into scheduler blasts
      var holes = data.blastHoles || data.holes || data.allBlastHoles || null;
      if (holes && Array.isArray(holes) && holes.length > 0) {
        log.innerHTML += "<div class=\"log-ok\">\u2192 Blast holes: " + holes.length + " total</div>";
        var grouped = groupHolesByEntity(holes);
        var entityNames = Object.keys(grouped);
        log.innerHTML += "<div class=\"log-ok\">  Found " + entityNames.length + " blast pattern(s): " + entityNames.join(", ") + "</div>";

        entityNames.forEach(function(name) {
          var blastData = buildBlastFromHoles(name, grouped[name]);
          APP.importedBlasts.push(blastData);
        });
      }

      // Step 2c) Process KAD entities — extract POLYGONS only
      var kads = data.kads || data.kadEntities || data.drawings || null;
      if (kads) {
        var kadArr = Array.isArray(kads) ? kads : Object.values(kads);
        var polyCount = 0;
        var lineCount = 0;
        var textCount = 0;
        var pointCount = 0;

        kadArr.forEach(function(entity) {
          var etype = entity.entityType || (entity.geometryData ? "unknown" : "");
          if (etype === "poly" || etype === "polygon") {
            polyCount++;
            // Step 2c-i) Store polygon boundary for matching blast patterns
            var polyPoints = extractPolyPoints(entity);
            if (polyPoints.length > 0) {
              var matchName = entity.entityName || entity.name || ("KAD_Poly_" + polyCount);
              // Step 2c-ii) Try to match to an imported blast by name
              var matched = APP.importedBlasts.find(function(b) {
                return b.name === matchName;
              });
              if (matched) {
                matched.polygons = polyPoints;
                log.innerHTML += "<div class=\"log-ok\">  KAD poly \"" + matchName + "\" matched to blast</div>";
              } else {
                log.innerHTML += "<div class=\"log-info\">  KAD poly \"" + matchName + "\" (no matching blast)</div>";
              }
            }
          } else if (etype === "line") {
            lineCount++;
          } else if (etype === "text") {
            textCount++;
          } else if (etype === "point") {
            pointCount++;
          }
        });

        log.innerHTML += "<div class=\"log-ok\">\u2192 KAD entities: " + polyCount + " polys imported</div>";
        if (lineCount + textCount + pointCount > 0) {
          log.innerHTML += "<div class=\"log-warn\">  Ignored KAD types: " +
            (lineCount > 0 ? lineCount + " lines " : "") +
            (textCount > 0 ? textCount + " texts " : "") +
            (pointCount > 0 ? pointCount + " points" : "") + "</div>";
        }
      }

      // Step 2d) Process SURFACES — store metadata for volume calculations
      var surfaces = data.surfaces || data.loadedSurfaces || null;
      if (surfaces) {
        var surfArr = Array.isArray(surfaces) ? surfaces : Object.values(surfaces);
        APP.kirraProjectSurfaces = surfArr.map(function(s) {
          return {
            name: s.name || s.id || "Unnamed",
            pointCount: s.points ? s.points.length : 0,
            triangleCount: s.triangles ? s.triangles.length : 0,
            bounds: s.meshBounds || null,
            gradient: s.gradient || "default"
          };
        });
        log.innerHTML += "<div class=\"log-ok\">\u2192 Surfaces: " + surfArr.length + " imported</div>";
        surfArr.forEach(function(s) {
          var name = s.name || s.id || "Unnamed";
          var tris = s.triangles ? s.triangles.length : 0;
          log.innerHTML += "<div class=\"log-ok\">  " + name + " (" + tris + " triangles)</div>";
        });
      }

      // Step 2e) Process SOLIDS — store metadata
      var solids = data.solids || data.meshes || null;
      if (solids) {
        var solArr = Array.isArray(solids) ? solids : Object.values(solids);
        APP.kirraProjectSolids = solArr.map(function(s) {
          return {
            name: s.name || s.id || "Unnamed",
            volume: s.volume || 0,
            bounds: s.meshBounds || null,
            isTextured: !!s.isTexturedMesh
          };
        });
        log.innerHTML += "<div class=\"log-ok\">\u2192 Solids: " + solArr.length + " imported</div>";
      }

      // Step 2f) Import charge configs if present
      if (data.chargeConfigs) {
        APP.chargeConfigs = Array.isArray(data.chargeConfigs) ? data.chargeConfigs : [data.chargeConfigs];
        log.innerHTML += "<div class=\"log-info\">  Charge configs merged into forecast engine</div>";
      }

      // Step 2g) Summary and show preview if blasts were found
      if (APP.importedBlasts.length > 0) {
        log.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;margin-top:6px;\">\u2705 " + APP.importedBlasts.length + " blast(s) ready to merge into schedule</div>";
        showImportPreview();
      } else {
        log.innerHTML += "<div class=\"log-warn\">No blast data found. Expected 'blastHoles', 'holes', or 'blasts' key.</div>";
      }

    } catch (err) {
      log.innerHTML += "<div class=\"log-err\">Parse error: " + err.message + "</div>";
    }
  };
  reader.readAsText(file);
}

// ============================================================
//  HELPER: Group blast holes by entityName
// ============================================================
function groupHolesByEntity(holes) {
  var groups = {};
  holes.forEach(function(h) {
    var name = h.entityName || h.entity_name || h.patternName || "Unnamed";
    if (!groups[name]) groups[name] = [];
    groups[name].push(h);
  });
  return groups;
}

// ============================================================
//  HELPER: Build a scheduler blast object from grouped holes
// ============================================================
function buildBlastFromHoles(entityName, holes) {
  // Step A) Classify holes by diameter and type
  var typeMap = {};
  var totalDrillMeters = 0;
  var totalExpMass = 0;

  holes.forEach(function(h) {
    var diam = h.holeDiameter || h.diameter || 229;
    var diamM = diam > 1 ? diam / 1000 : diam;
    var hType = h.holeType || h.type || "Production";
    var key = hType + "_" + Math.round(diam);
    var holeLen = h.holeLengthCalculated || h.holeLength || 0;

    // Step A-i) Calculate hole length from geometry if not provided
    if (holeLen === 0 && h.startZLocation && h.endZLocation) {
      var dx = (h.endXLocation || 0) - (h.startXLocation || 0);
      var dy = (h.endYLocation || 0) - (h.startYLocation || 0);
      var dz = (h.endZLocation || 0) - (h.startZLocation || 0);
      holeLen = Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    totalDrillMeters += holeLen;

    if (!typeMap[key]) {
      typeMap[key] = {
        type: hType.toUpperCase(),
        diam: diamM,
        burden: h.burden || 0,
        spacing: h.spacing || 0,
        holes: 0,
        drillMeters: 0,
        expMass: 0
      };
    }
    typeMap[key].holes++;
    typeMap[key].drillMeters += holeLen;
    if (h.burden) typeMap[key].burden = h.burden;
    if (h.spacing) typeMap[key].spacing = h.spacing;
  });

  var holeTypes = Object.keys(typeMap).map(function(k) { return typeMap[k]; });

  // Step B) Determine diameter split (D65 = <=165mm, PV271 = >165mm)
  var d65Meters = 0;
  var pvMeters = 0;
  holeTypes.forEach(function(ht) {
    if (ht.diam <= 0.165) {
      d65Meters += ht.drillMeters;
    } else {
      pvMeters += ht.drillMeters;
    }
  });

  var pctD65 = totalDrillMeters > 0 ? d65Meters / totalDrillMeters : 0;
  var pctPV = totalDrillMeters > 0 ? pvMeters / totalDrillMeters : 0;

  // Step C) Build the blast object matching APP.blasts structure
  return {
    name: entityName,
    mode: "Auto",
    surfaceArea: 0,
    pattern: "",
    pctD65: Math.round(pctD65 * 100) / 100,
    pctPV: Math.round(pctPV * 100) / 100,
    rateD65: 19,
    ratePV: 20,
    numD65: pctD65 > 0 ? 1 : 0,
    numPV: pctPV > 0 ? 1 : 0,
    loadRate: 100000,
    d65Meters: Math.round(d65Meters * 10) / 10,
    pvMeters: Math.round(pvMeters * 10) / 10,
    volume: 0,
    expMass: Math.round(totalExpMass),
    drillStart: null,
    drillStartTime: "06:00",
    drillDays: 0,
    loadStart: null,
    loadDays: 0,
    blastDate: null,
    status: "planned",
    deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
    assignedDrills: [],
    assignedMPU: "",
    holeTypes: holeTypes,
    polygons: [],
    _sourceHoleCount: holes.length
  };
}

// ============================================================
//  HELPER: Extract XY point array from a KAD entity
// ============================================================
function extractPolyPoints(entity) {
  var geom = entity.geometryData || entity.points || [];
  if (!Array.isArray(geom)) return [];
  return geom.map(function(pt) {
    return {
      x: pt.pointXLocation || pt.x || 0,
      y: pt.pointYLocation || pt.y || 0,
      z: pt.pointZLocation || pt.z || 0
    };
  }).filter(function(pt) {
    return pt.x !== 0 || pt.y !== 0;
  });
}

export { parseKirraConfig, parseKirraProject };
