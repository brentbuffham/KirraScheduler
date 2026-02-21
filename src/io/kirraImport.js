// ============================================================
//  KIRRA IMPORT
//  Import Kirra charge configs and project files
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

// Step 2) Parse Kirra project file (may contain blasts, patterns, configs, etc.)
function parseKirraProject(file) {
  var log = document.getElementById("kirraProjectLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      log.innerHTML += "<div class=\"log-ok\">Parsed Kirra project file</div>";

      // Step 2a) Look for known sections
      var sections = ["blasts", "patterns", "holes", "solids", "chargeConfigs", "boundaries", "surfaces"];
      sections.forEach(function(key) {
        if (data[key]) {
          var count = Array.isArray(data[key]) ? data[key].length : Object.keys(data[key]).length;
          log.innerHTML += "<div class=\"log-ok\">  \u2192 " + key + ": " + count + " items</div>";
        }
      });

      // Step 2b) Import charge configs if present
      if (data.chargeConfigs) {
        APP.chargeConfigs = Array.isArray(data.chargeConfigs) ? data.chargeConfigs : [data.chargeConfigs];
        log.innerHTML += "<div class=\"log-info\">  Charge configs merged into forecast engine</div>";
      }

      // Step 2c) Import solids info
      if (data.solids) {
        log.innerHTML += "<div class=\"log-info\">  Solid meshes detected \u2014 can be used for volume calculations</div>";
      }

      // Step 2d) Import blast definitions
      if (data.blasts) {
        var blastArr = Array.isArray(data.blasts) ? data.blasts : Object.values(data.blasts);
        blastArr.forEach(function(b) {
          var imported = {
            name: b.name || b.blastName || "Unknown",
            holeTypes: (b.holeTypes || []).map(function(ht) {
              return {
                type: ht.type || ht.holeType || "PRODUCTION",
                burden: ht.burden || 0,
                spacing: ht.spacing || 0,
                benchHt: ht.benchHt || ht.benchHeight || 12,
                subdrill: ht.subdrill || 1.5,
                diam: ht.diameter || ht.diam || 229
              };
            }),
            polygons: b.boundary || b.polygon || []
          };
          APP.importedBlasts.push(imported);
        });
        showImportPreview();
      }

    } catch (err) {
      log.innerHTML += "<div class=\"log-err\">Parse error: " + err.message + "</div>";
    }
  };
  reader.readAsText(file);
}

export { parseKirraConfig, parseKirraProject };
