// ============================================================
//  KIRRA IMPORT
//  Import Kirra charge configs and project files
//  Supported: Blasts (hole CSV/JSON), KAD polys, Surfaces, Solids
//  Unsupported data types are warned to the user
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, people } from "../state/equipmentState.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { renderPatterns } from "../views/patternLibrary.js";
import { renderForecast } from "../views/forecastView.js";
import { renderConformance } from "../views/conformanceView.js";
import { renderEquipment } from "../views/equipmentView.js";
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

// Step 2) Parse Kirra Gantt Project (.kgp) file — restores full scheduler state
function parseKGPProject(file) {
  var log = document.getElementById("kirraProjectLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);

      // Step 2a) Verify format
      if (data.format !== "KirraGanttProject") {
        log.innerHTML += "<div class=\"log-warn\">Not a Kirra Gantt Project file. Trying standard import...</div>";
        parseKirraProjectFromData(data, log);
        return;
      }

      log.innerHTML += "<div class=\"log-ok\">Kirra Gantt Project v" + (data.version || "?") + " (" + Math.round(file.size / 1024) + " KB)</div>";
      log.innerHTML += "<div class=\"log-info\">Exported: " + (data.exportDate || "unknown") + "</div>";

      // Step 2b) Restore global settings
      if (data.settings) {
        var s = data.settings;
        if (s.planStart) APP.planStart = new Date(s.planStart);
        if (s.ganttWeeks !== undefined) APP.ganttWeeks = s.ganttWeeks;
        if (s.rigHours !== undefined) APP.rigHours = s.rigHours;
        if (s.availability !== undefined) APP.availability = s.availability;
        if (s.utilisation !== undefined) APP.utilisation = s.utilisation;
        if (s.deps) APP.deps = s.deps;
        log.innerHTML += "<div class=\"log-ok\">Settings restored</div>";
      }

      // Step 2c) Restore blasts
      if (data.blasts && Array.isArray(data.blasts)) {
        APP.blasts = data.blasts;
        log.innerHTML += "<div class=\"log-ok\">" + data.blasts.length + " blast(s) restored</div>";
      }

      // Step 2d) Restore patterns
      if (data.patterns && Array.isArray(data.patterns)) {
        APP.patterns = data.patterns;
        log.innerHTML += "<div class=\"log-ok\">" + data.patterns.length + " pattern(s) restored</div>";
      }

      // Step 2e) Restore charge configs
      if (data.chargeConfigs) {
        APP.chargeConfigs = Array.isArray(data.chargeConfigs) ? data.chargeConfigs : [];
      }

      // Step 2f) Restore equipment
      if (data.drills && Array.isArray(data.drills)) {
        drills.length = 0;
        data.drills.forEach(function(d) { drills.push(d); });
        log.innerHTML += "<div class=\"log-ok\">" + data.drills.length + " drill(s) restored</div>";
      }
      if (data.mpus && Array.isArray(data.mpus)) {
        mpus.length = 0;
        data.mpus.forEach(function(m) { mpus.push(m); });
        log.innerHTML += "<div class=\"log-ok\">" + data.mpus.length + " MPU(s) restored</div>";
      }
      if (data.people && Array.isArray(data.people)) {
        people.length = 0;
        data.people.forEach(function(p) { people.push(p); });
        log.innerHTML += "<div class=\"log-ok\">" + data.people.length + " personnel restored</div>";
      }

      // Step 2g) Restore conformance
      if (data.conformance) {
        APP.conformance = data.conformance;
        log.innerHTML += "<div class=\"log-ok\">Conformance targets restored</div>";
      }

      // Step 2h) Restore imported blasts
      if (data.importedBlasts) {
        APP.importedBlasts = data.importedBlasts;
      }

      // Step 2h-ii) Restore surfaces (full geometry for 3D playback)
      if (data.kirraProjectSurfaces && Array.isArray(data.kirraProjectSurfaces)) {
        APP.kirraProjectSurfaces = data.kirraProjectSurfaces;
        log.innerHTML += "<div class=\"log-ok\">" + data.kirraProjectSurfaces.length + " surface(s) restored for 3D playback</div>";
      }

      // Step 2h-iii) Restore solids
      if (data.kirraProjectSolids && Array.isArray(data.kirraProjectSolids)) {
        APP.kirraProjectSolids = data.kirraProjectSolids;
        log.innerHTML += "<div class=\"log-ok\">" + data.kirraProjectSolids.length + " solid(s) restored for 3D playback</div>";
      }

      log.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;margin-top:6px;\">Project restored successfully</div>";

      // Step 2i) Sync toolbar inputs
      var elWeeks = document.getElementById("ganttWeeks");
      var elRigHours = document.getElementById("rigHours");
      var elAvail = document.getElementById("availability");
      var elUtil = document.getElementById("utilisation");
      if (elWeeks) elWeeks.value = APP.ganttWeeks;
      if (elRigHours) elRigHours.value = APP.rigHours;
      if (elAvail) elAvail.value = APP.availability;
      if (elUtil) elUtil.value = APP.utilisation;

      // Step 2j) Re-render everything
      recalcDependencies();
      renderGantt();
      renderBlasts();
      renderPatterns();
      renderForecast();
      renderConformance();
      renderEquipment();

    } catch (err) {
      log.innerHTML += "<div class=\"log-err\">Parse error: " + err.message + "</div>";
    }
  };
  reader.readAsText(file);
}

// Step 3) Parse Kirra project file (JSON export from Kirra app IndexedDB)
function parseKirraProject(file) {
  // Step 3a) Route .kgp files to the dedicated handler
  if (file.name && file.name.toLowerCase().indexOf(".kgp") !== -1) {
    parseKGPProject(file);
    return;
  }
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

      // Step 2d) Process SURFACES — store FULL geometry for 3D playback
      var surfaces = data.surfaces || data.loadedSurfaces || null;
      if (surfaces) {
        var surfArr = Array.isArray(surfaces) ? surfaces : Object.values(surfaces);
        APP.kirraProjectSurfaces = surfArr.map(function(s) {
          return {
            name: s.name || s.id || "Unnamed",
            points: s.points || [],
            triangles: s.triangles || [],
            bounds: s.meshBounds || null,
            gradient: s.gradient || "default",
            visible: true,
            opacity: 0.85
          };
        });
        log.innerHTML += "<div class=\"log-ok\">\u2192 Surfaces: " + surfArr.length + " imported (full geometry preserved for 3D)</div>";
        surfArr.forEach(function(s) {
          var name = s.name || s.id || "Unnamed";
          var pts = s.points ? s.points.length : 0;
          var tris = s.triangles ? s.triangles.length : 0;
          log.innerHTML += "<div class=\"log-ok\">  " + name + " (" + pts + " pts, " + tris + " tris)</div>";
        });
      }

      // Step 2e) Process SOLIDS — store full geometry for 3D playback
      var solids = data.solids || data.meshes || null;
      if (solids) {
        var solArr = Array.isArray(solids) ? solids : Object.values(solids);
        APP.kirraProjectSolids = solArr.map(function(s) {
          return {
            name: s.name || s.id || "Unnamed",
            points: s.points || [],
            triangles: s.triangles || [],
            volume: s.volume || 0,
            bounds: s.meshBounds || null,
            isTextured: !!s.isTexturedMesh,
            visible: true,
            opacity: 0.85
          };
        });
        log.innerHTML += "<div class=\"log-ok\">\u2192 Solids: " + solArr.length + " imported (full geometry preserved)</div>";
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
    // Step C-i) Use array for MPU assignments (migrated from single assignedMPU)
    assignedMPUs: [],
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
