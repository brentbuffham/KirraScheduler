// ============================================================
//  CONFORMANCE
//  Monthly drill & blast conformance tracking
//  Supports actuals import via CSV and REST API query
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { formatNum, formatDate } from "../utils/dateUtils.js";
import { setupDropZone } from "../io/dropZone.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 1) Render conformance tab — stats + table with planned vs actuals
function renderConformance() {
  var conf = APP.conformance;

  // Step 1a) Recalculate actualBCM from actuals array if populated
  var actualsMap = buildActualsMap();
  var totalActualBCM = 0;
  var totalActualExpKg = 0;
  var blastsWithActuals = 0;

  APP.blasts.forEach(function(b) {
    var actual = actualsMap[b.name];
    if (actual) {
      totalActualBCM += actual.actualBCM || 0;
      totalActualExpKg += actual.actualExpKg || 0;
      blastsWithActuals++;
    }
  });

  if (conf.actuals && conf.actuals.length > 0) {
    conf.actualBCM = totalActualBCM;
  }

  var pct = conf.targetBCM > 0 ? conf.actualBCM / conf.targetBCM : 0;
  var variance = conf.actualBCM - conf.targetBCM;
  var barColor = pct >= 0.9 ? "var(--accent-green)" : pct >= 0.7 ? "var(--accent-load)" : "var(--accent-blast)";

  // Step 2) Stats cards
  var statsHtml = "";
  statsHtml += "<div class=\"stat-card accent-green\">";
  statsHtml += "  <div class=\"stat-label\">Target BCM (Month)</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(conf.targetBCM) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-cyan\">";
  statsHtml += "  <div class=\"stat-label\">Actual BCM (MTD)</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(conf.actualBCM) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "  <div class=\"conformance-bar\"><div class=\"fill\" style=\"width:" + Math.min(pct * 100, 100) + "%;background:" + barColor + "\"></div></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card " + (variance >= 0 ? "accent-green" : "accent-red") + "\">";
  statsHtml += "  <div class=\"stat-label\">Variance</div>";
  statsHtml += "  <div class=\"stat-value\" style=\"color:" + (variance >= 0 ? "var(--accent-green)" : "var(--accent-blast)") + "\">" + (variance >= 0 ? "+" : "") + formatNum(variance) + "<span class=\"stat-unit\">bcm</span></div>";
  statsHtml += "</div>";
  statsHtml += "<div class=\"stat-card accent-purple\">";
  statsHtml += "  <div class=\"stat-label\">Conformance</div>";
  statsHtml += "  <div class=\"stat-value\">" + formatNum(pct * 100, 1) + "<span class=\"stat-unit\">%</span></div>";
  statsHtml += "</div>";
  document.getElementById("confStats").innerHTML = statsHtml;

  // Step 3) Conformance table with planned vs actual columns
  var hasActuals = conf.actuals && conf.actuals.length > 0;
  var html = "<thead><tr>";
  html += "<th>Blast</th>";
  html += "<th class=\"num\">Planned BCM</th><th class=\"num\">Planned Exp (kg)</th>";
  if (hasActuals) {
    html += "<th class=\"num\" style=\"color:var(--accent-green)\">Actual BCM</th>";
    html += "<th class=\"num\" style=\"color:var(--accent-green)\">Actual Exp (kg)</th>";
    html += "<th class=\"num\">BCM Variance</th>";
  }
  html += "<th>Planned Date</th>";
  if (hasActuals) html += "<th>Actual Date</th>";
  html += "<th>Status</th>";
  html += "</tr></thead><tbody>";

  APP.blasts.forEach(function(b) {
    var actual = actualsMap[b.name];
    var statusBadge = b.status === "active" ? "badge-active" : b.status === "fired" ? "badge-complete" : "badge-drill";

    // Step 3a) Override status from actuals if present
    if (actual && actual.status) {
      var aStatus = actual.status.toLowerCase();
      if (aStatus === "fired" || aStatus === "complete" || aStatus === "blasted") {
        statusBadge = "badge-complete";
      } else if (aStatus === "active" || aStatus === "drilling") {
        statusBadge = "badge-active";
      }
    }

    html += "<tr>";
    html += "<td style=\"font-weight:600;color:var(--text-primary)\">" + b.name + "</td>";
    html += "<td class=\"num\">" + formatNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + formatNum(b.expMass) + "</td>";

    if (hasActuals) {
      if (actual) {
        var bcmVar = (actual.actualBCM || 0) - b.volume;
        var varColor = bcmVar >= 0 ? "var(--accent-green)" : "var(--accent-blast)";
        html += "<td class=\"num\" style=\"font-weight:600;color:var(--accent-green)\">" + formatNum(actual.actualBCM) + "</td>";
        html += "<td class=\"num\" style=\"color:var(--accent-green)\">" + formatNum(actual.actualExpKg) + "</td>";
        html += "<td class=\"num\" style=\"color:" + varColor + ";font-weight:600;\">" + (bcmVar >= 0 ? "+" : "") + formatNum(bcmVar) + "</td>";
      } else {
        html += "<td class=\"num\" style=\"color:var(--text-muted)\">\u2014</td>";
        html += "<td class=\"num\" style=\"color:var(--text-muted)\">\u2014</td>";
        html += "<td class=\"num\" style=\"color:var(--text-muted)\">\u2014</td>";
      }
    }

    html += "<td>" + formatDate(b.blastDate) + "</td>";
    if (hasActuals) {
      html += "<td>" + (actual && actual.actualBlastDate ? formatDate(actual.actualBlastDate) : "<span style=\"color:var(--text-muted)\">\u2014</span>") + "</td>";
    }
    html += "<td><span class=\"badge " + statusBadge + "\">" + (actual && actual.status ? actual.status : b.status) + "</span></td>";
    html += "</tr>";
  });
  html += "</tbody>";
  document.getElementById("confTable").innerHTML = html;

  // Step 3b) Update actuals count badge
  var countEl = document.getElementById("confActualsCount");
  if (countEl) {
    if (hasActuals) {
      countEl.textContent = blastsWithActuals + " of " + APP.blasts.length + " blasts have actuals";
    } else {
      countEl.textContent = "No actuals loaded";
    }
  }
}

// Step 4) Build a lookup map from blast name to actual data
function buildActualsMap() {
  var map = {};
  if (!APP.conformance.actuals) return map;
  APP.conformance.actuals.forEach(function(a) {
    map[a.blastName] = a;
  });
  return map;
}

// ============================================================
//  CSV ACTUALS IMPORT
// ============================================================

// Step 5) Parse actuals CSV — columns: BlastName, ActualBCM, ActualExpKg, ActualBlastDate, Status
function importActualsCSV(file) {
  var log = document.getElementById("confCSVLog");
  log.innerHTML = "<div class=\"log-info\">Reading " + file.name + "...</div>";

  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var lines = e.target.result.split(/\r?\n/).filter(function(l) { return l.trim().length > 0; });
      if (lines.length < 2) {
        log.innerHTML += "<div class=\"log-warn\">CSV has no data rows</div>";
        return;
      }

      var headers = parseCSVLine(lines[0]).map(function(h) { return h.trim().toLowerCase(); });
      var nameIdx = findColIdx(headers, ["blastname", "blast_name", "blast", "name"]);
      var bcmIdx = findColIdx(headers, ["actualbcm", "actual_bcm", "bcm", "volume"]);
      var expIdx = findColIdx(headers, ["actualexpkg", "actual_exp_kg", "expkg", "exp_mass", "explosive"]);
      var dateIdx = findColIdx(headers, ["actualblastdate", "actual_blast_date", "blastdate", "date"]);
      var statusIdx = findColIdx(headers, ["status", "blast_status"]);
      // Step 5-i) Optional columns for drill/load progress actuals
      var drillMetersIdx = findColIdx(headers, ["actualdrillmeters", "actual_drill_meters", "drillmeters", "drill_meters", "metersdrilled"]);
      var loadKgIdx = findColIdx(headers, ["actualloadkg", "actual_load_kg", "loadkg", "load_kg", "kgloaded", "actualloaded"]);

      if (nameIdx === -1) {
        log.innerHTML += "<div class=\"log-err\">Required column 'BlastName' not found. Headers: " + headers.join(", ") + "</div>";
        return;
      }

      var actuals = [];
      var matched = 0;
      var progressUpdated = 0;
      for (var i = 1; i < lines.length; i++) {
        var cols = parseCSVLine(lines[i]);
        var blastName = (cols[nameIdx] || "").trim();
        if (!blastName) continue;

        var actual = {
          blastName: blastName,
          actualBCM: bcmIdx !== -1 ? parseFloat(cols[bcmIdx]) || 0 : 0,
          actualExpKg: expIdx !== -1 ? parseFloat(cols[expIdx]) || 0 : 0,
          actualBlastDate: dateIdx !== -1 ? (cols[dateIdx] || "").trim() : "",
          status: statusIdx !== -1 ? (cols[statusIdx] || "").trim() : "",
          actualDrillMeters: drillMetersIdx !== -1 ? parseFloat(cols[drillMetersIdx]) || 0 : 0,
          actualLoadKg: loadKgIdx !== -1 ? parseFloat(cols[loadKgIdx]) || 0 : 0
        };
        actuals.push(actual);

        // Step 5a) Check if this blast name matches a scheduled blast
        var match = APP.blasts.find(function(b) { return b.name === blastName; });
        if (match) {
          matched++;
          // Step 5a-i) Auto-calculate drill/load progress from actuals
          if (actual.actualDrillMeters > 0) {
            var totalDrillM = getTotalDrillMeters(match);
            if (totalDrillM > 0) {
              match.drillProgress = Math.min(actual.actualDrillMeters / totalDrillM, 1);
              progressUpdated++;
            }
          }
          if (actual.actualLoadKg > 0 && match.expMass > 0) {
            match.loadProgress = Math.min(actual.actualLoadKg / match.expMass, 1);
            progressUpdated++;
          }
        }
      }

      APP.conformance.actuals = actuals;
      log.innerHTML += "<div class=\"log-ok\">Loaded " + actuals.length + " actual(s), " + matched + " matched to scheduled blasts</div>";
      if (progressUpdated > 0) {
        log.innerHTML += "<div class=\"log-ok\">" + progressUpdated + " progress update(s) applied from drill meters / load kg</div>";
      }
      if (actuals.length > matched) {
        log.innerHTML += "<div class=\"log-warn\">" + (actuals.length - matched) + " actuals did not match any scheduled blast name</div>";
      }

      debouncedSave();
      renderConformance();
    } catch (err) {
      log.innerHTML += "<div class=\"log-err\">CSV parse error: " + err.message + "</div>";
    }
  };
  reader.readAsText(file);
}

// Step 5b) Find column index by trying multiple possible header names
function findColIdx(headers, candidates) {
  for (var i = 0; i < candidates.length; i++) {
    var idx = headers.indexOf(candidates[i]);
    if (idx !== -1) return idx;
  }
  return -1;
}

// Step 5c) CSV line parser
function parseCSVLine(line) {
  var result = [];
  var current = "";
  var inQuotes = false;
  for (var i = 0; i < line.length; i++) {
    var ch = line[i];
    if (inQuotes) {
      if (ch === "\"" && i + 1 < line.length && line[i + 1] === "\"") {
        current += "\"";
        i++;
      } else if (ch === "\"") {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === "\"") {
        inQuotes = true;
      } else if (ch === ",") {
        result.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
  }
  result.push(current);
  return result;
}

// ============================================================
//  CSV TEMPLATE EXPORT
// ============================================================

// Step 6) Export a CSV template pre-populated with blast names from the schedule
function exportActualsTemplate() {
  var rows = ["BlastName,ActualBCM,ActualExpKg,ActualBlastDate,Status,ActualDrillMeters,ActualLoadKg"];
  APP.blasts.forEach(function(b) {
    rows.push(b.name + ",,," + (b.blastDate || "") + ",planned,,");
  });

  var blob = new Blob([rows.join("\n")], { type: "text/csv" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "conformance-actuals-template.csv";
  a.click();
  URL.revokeObjectURL(a.href);
}

// ============================================================
//  API PROVIDER ROUTING
//  Supports: Generic REST, Snowflake, CData Connect, OData v4
// ============================================================

// Step 7) Toggle provider-specific UI fields based on dropdown selection
function onProviderChange() {
  var provider = document.getElementById("confProvider").value;
  var sfFields = document.getElementById("confSnowflakeFields");
  var cdFields = document.getElementById("confCdataFields");
  var odFields = document.getElementById("confOdataFields");
  var urlInput = document.getElementById("confApiUrl");
  var urlLabel = document.getElementById("confUrlLabel");
  var authLabel = document.getElementById("confAuthLabel");
  var queryLabel = document.getElementById("confQueryLabel");
  var queryBox = document.getElementById("confApiQuery");

  // Step 7a) Hide all provider panels first
  sfFields.style.display = "none";
  cdFields.style.display = "none";
  odFields.style.display = "none";

  if (provider === "snowflake") {
    sfFields.style.display = "";
    urlLabel.textContent = "Snowflake Account URL";
    urlInput.placeholder = "https://abc12345.ap-southeast-2.aws.snowflakecomputing.com";
    authLabel.textContent = "Auth Token (Bearer / JWT)";
    queryLabel.textContent = "SQL Statement";
    queryBox.placeholder = "SELECT BlastName, ActualBCM, ActualExpKg, BlastDate, Status\nFROM BLAST_DB.PRODUCTION.BLAST_ACTUALS\nWHERE BLAST_MONTH = '2026-02'";
  } else if (provider === "cdata") {
    cdFields.style.display = "";
    urlLabel.textContent = "CData Connect Cloud URL";
    urlInput.placeholder = "https://cloud.cdata.com";
    authLabel.textContent = "Auth (email:PAT base64, or PAT)";
    queryLabel.textContent = "OData $filter (optional)";
    queryBox.placeholder = "BlastMonth eq '2026-02'";
  } else if (provider === "odata") {
    odFields.style.display = "";
    urlLabel.textContent = "OData Service Root URL";
    urlInput.placeholder = "https://your-server.com/odata/v4";
    authLabel.textContent = "Auth Token (Bearer) \u2014 leave blank if none";
    queryLabel.textContent = "OData $filter (optional)";
    queryBox.placeholder = "BlastMonth eq '2026-02'";
  } else {
    urlLabel.textContent = "API Endpoint URL";
    urlInput.placeholder = "https://your-api.com/blast-actuals";
    authLabel.textContent = "Auth Token (Bearer) \u2014 leave blank if none";
    queryLabel.textContent = "SQL Query / Filter (sent as request body)";
    queryBox.placeholder = "SELECT BlastName, ActualBCM, ActualExpKg, BlastDate, Status\nFROM blast_actuals WHERE period = '2026-02'";
  }
}

// Step 8) Fetch actuals — routes to the correct provider
function fetchActualsFromAPI() {
  var provider = document.getElementById("confProvider").value;
  if (provider === "snowflake") return fetchSnowflake();
  if (provider === "cdata") return fetchCData();
  if (provider === "odata") return fetchOData();
  return fetchGenericREST();
}

// ============================================================
//  GENERIC REST
// ============================================================

// Step 8a) Generic REST — POST with { query } or GET
function fetchGenericREST() {
  var log = document.getElementById("confApiLog");
  var url = document.getElementById("confApiUrl").value.trim();
  var query = document.getElementById("confApiQuery").value.trim();
  var token = document.getElementById("confAuthToken").value.trim();

  if (!url) { log.innerHTML = "<div class=\"log-err\">Please enter an API endpoint URL</div>"; return; }
  log.innerHTML = "<div class=\"log-info\">Fetching from " + url + "...</div>";

  var headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = "Bearer " + token;

  var opts = {};
  if (query) {
    opts = { method: "POST", headers: headers, body: JSON.stringify({ query: query }) };
  } else {
    opts = { headers: headers };
  }

  fetch(url, opts).then(function(resp) {
    if (!resp.ok) throw new Error("HTTP " + resp.status + " " + resp.statusText);
    return resp.json();
  }).then(function(data) {
    var rows = Array.isArray(data) ? data : (data.rows || data.data || data.results || []);
    processActualsRows(rows, log);
  }).catch(function(err) {
    log.innerHTML += "<div class=\"log-err\">Fetch error: " + err.message + "</div>";
  });
}

// ============================================================
//  SNOWFLAKE SQL API
// ============================================================

// Step 8b) Snowflake — POST to /api/v2/statements
function fetchSnowflake() {
  var log = document.getElementById("confApiLog");
  var baseUrl = document.getElementById("confApiUrl").value.trim().replace(/\/+$/, "");
  var token = document.getElementById("confAuthToken").value.trim();
  var query = document.getElementById("confApiQuery").value.trim();
  var db = document.getElementById("confSfDatabase").value.trim();
  var schema = document.getElementById("confSfSchema").value.trim();
  var wh = document.getElementById("confSfWarehouse").value.trim();

  if (!baseUrl) { log.innerHTML = "<div class=\"log-err\">Please enter the Snowflake account URL</div>"; return; }
  if (!token) { log.innerHTML = "<div class=\"log-err\">Snowflake requires an auth token (Bearer / JWT)</div>"; return; }
  if (!query) { log.innerHTML = "<div class=\"log-err\">Please enter a SQL statement</div>"; return; }

  var url = baseUrl + "/api/v2/statements";
  log.innerHTML = "<div class=\"log-info\">Querying Snowflake: " + url + "...</div>";

  var body = { statement: query, timeout: 60 };
  if (db) body.database = db;
  if (schema) body.schema = schema;
  if (wh) body.warehouse = wh;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
      "Accept": "application/json",
      "X-Snowflake-Authorization-Token-Type": "KEYPAIR_JWT"
    },
    body: JSON.stringify(body)
  }).then(function(resp) {
    if (!resp.ok) throw new Error("HTTP " + resp.status + " " + resp.statusText);
    return resp.json();
  }).then(function(data) {
    // Step 8b-i) Snowflake returns { data: [[val,val,...], ...], resultSetMetaData: { rowType: [{name}...] } }
    var colNames = [];
    if (data.resultSetMetaData && data.resultSetMetaData.rowType) {
      colNames = data.resultSetMetaData.rowType.map(function(c) { return c.name; });
    }
    var rawRows = data.data || [];
    log.innerHTML += "<div class=\"log-ok\">Snowflake returned " + rawRows.length + " row(s), " + colNames.length + " column(s)</div>";

    // Step 8b-ii) Convert array-of-arrays to array-of-objects
    var rows = rawRows.map(function(arr) {
      var obj = {};
      for (var i = 0; i < colNames.length; i++) {
        obj[colNames[i]] = arr[i];
      }
      return obj;
    });

    processActualsRows(rows, log);
  }).catch(function(err) {
    log.innerHTML += "<div class=\"log-err\">Snowflake error: " + err.message + "</div>";
  });
}

// ============================================================
//  CDATA CONNECT CLOUD (OData)
// ============================================================

// Step 8c) CData — GET from /api/odata/{workspace}/{connection}.{table}
function fetchCData() {
  var log = document.getElementById("confApiLog");
  var baseUrl = document.getElementById("confApiUrl").value.trim().replace(/\/+$/, "");
  var token = document.getElementById("confAuthToken").value.trim();
  var workspace = document.getElementById("confCdWorkspace").value.trim();
  var table = document.getElementById("confCdTable").value.trim();
  var filter = document.getElementById("confApiQuery").value.trim();

  if (!baseUrl) { log.innerHTML = "<div class=\"log-err\">Please enter the CData Connect Cloud URL</div>"; return; }
  if (!token) { log.innerHTML = "<div class=\"log-err\">CData requires auth (email:PAT)</div>"; return; }
  if (!workspace || !table) { log.innerHTML = "<div class=\"log-err\">Please enter Workspace and Connection/Table</div>"; return; }

  // Step 8c-i) Build OData URL: baseUrl/api/odata/workspace/table?$filter=...
  var url = baseUrl + "/api/odata/" + encodeURIComponent(workspace) + "/" + encodeURIComponent(table);
  if (filter) url += "?$filter=" + encodeURIComponent(filter);

  log.innerHTML = "<div class=\"log-info\">Querying CData: " + url + "...</div>";

  // Step 8c-ii) CData uses Basic Auth (base64 of email:PAT)
  var authHeader = "Basic " + (token.indexOf(":") !== -1 ? btoa(token) : token);

  fetch(url, {
    headers: {
      "Authorization": authHeader,
      "Accept": "application/json"
    }
  }).then(function(resp) {
    if (!resp.ok) throw new Error("HTTP " + resp.status + " " + resp.statusText);
    return resp.json();
  }).then(function(data) {
    // Step 8c-iii) CData OData returns { value: [...] }
    var rows = data.value || data.d || [];
    log.innerHTML += "<div class=\"log-ok\">CData returned " + rows.length + " row(s)</div>";
    processActualsRows(rows, log);
  }).catch(function(err) {
    log.innerHTML += "<div class=\"log-err\">CData error: " + err.message + "</div>";
  });
}

// ============================================================
//  ODATA v4
// ============================================================

// Step 8d) OData v4 — GET from serviceRoot/EntitySet?$filter=...
function fetchOData() {
  var log = document.getElementById("confApiLog");
  var baseUrl = document.getElementById("confApiUrl").value.trim().replace(/\/+$/, "");
  var token = document.getElementById("confAuthToken").value.trim();
  var entity = document.getElementById("confOdEntity").value.trim();
  var filter = document.getElementById("confApiQuery").value.trim();

  if (!baseUrl) { log.innerHTML = "<div class=\"log-err\">Please enter the OData service root URL</div>"; return; }
  if (!entity) { log.innerHTML = "<div class=\"log-err\">Please enter the Entity Set name (e.g. BlastActuals)</div>"; return; }

  // Step 8d-i) Build OData URL: serviceRoot/EntitySet?$filter=...
  var url = baseUrl + "/" + encodeURIComponent(entity);
  if (filter) url += "?$filter=" + encodeURIComponent(filter);

  log.innerHTML = "<div class=\"log-info\">Querying OData: " + url + "...</div>";

  var headers = { "Accept": "application/json" };
  if (token) headers["Authorization"] = "Bearer " + token;

  fetch(url, { headers: headers }).then(function(resp) {
    if (!resp.ok) throw new Error("HTTP " + resp.status + " " + resp.statusText);
    return resp.json();
  }).then(function(data) {
    // Step 8d-ii) OData v4 returns { value: [...] }, older v2/v3 may use { d: { results: [...] } }
    var rows = data.value || (data.d ? (data.d.results || data.d) : []);
    if (!Array.isArray(rows)) rows = [];
    log.innerHTML += "<div class=\"log-ok\">OData returned " + rows.length + " row(s)</div>";
    processActualsRows(rows, log);
  }).catch(function(err) {
    log.innerHTML += "<div class=\"log-err\">OData error: " + err.message + "</div>";
  });
}

// ============================================================
//  SHARED: MAP RESPONSE ROWS TO ACTUALS
// ============================================================

// Step 9) Convert array of row objects (from any provider) to conformance actuals
function processActualsRows(rows, log) {
  if (!Array.isArray(rows) || rows.length === 0) {
    log.innerHTML += "<div class=\"log-warn\">Response contained no data rows</div>";
    return;
  }

  var actuals = [];
  var matched = 0;
  rows.forEach(function(r) {
    var blastName = r.BlastName || r.blastName || r.blast_name || r.BLASTNAME || r.name || r.NAME || "";
    if (!blastName) return;
    var actual = {
      blastName: blastName,
      actualBCM: parseFloat(r.ActualBCM || r.actualBCM || r.actual_bcm || r.ACTUALBCM || r.bcm || r.volume || 0) || 0,
      actualExpKg: parseFloat(r.ActualExpKg || r.actualExpKg || r.actual_exp_kg || r.ACTUALEXPKG || r.expKg || r.explosive || 0) || 0,
      actualBlastDate: r.ActualBlastDate || r.actualBlastDate || r.actual_blast_date || r.ACTUALBLASTDATE || r.blastDate || r.date || "",
      status: r.Status || r.status || r.blast_status || r.STATUS || "",
      actualDrillMeters: parseFloat(r.ActualDrillMeters || r.actualDrillMeters || r.actual_drill_meters || r.ACTUALDRILLMETERS || r.drillMeters || 0) || 0,
      actualLoadKg: parseFloat(r.ActualLoadKg || r.actualLoadKg || r.actual_load_kg || r.ACTUALLOADKG || r.loadKg || 0) || 0
    };
    actuals.push(actual);
    var match = APP.blasts.find(function(b) { return b.name === blastName; });
    if (match) {
      matched++;
      // Step 9a) Auto-calculate progress from actuals
      if (actual.actualDrillMeters > 0) {
        var totalDrillM = getTotalDrillMeters(match);
        if (totalDrillM > 0) match.drillProgress = Math.min(actual.actualDrillMeters / totalDrillM, 1);
      }
      if (actual.actualLoadKg > 0 && match.expMass > 0) {
        match.loadProgress = Math.min(actual.actualLoadKg / match.expMass, 1);
      }
    }
  });

  APP.conformance.actuals = actuals;
  log.innerHTML += "<div class=\"log-ok\">" + actuals.length + " actual(s) loaded, " + matched + " matched to schedule</div>";
  if (actuals.length > matched && matched > 0) {
    log.innerHTML += "<div class=\"log-warn\">" + (actuals.length - matched) + " did not match any scheduled blast</div>";
  }
  debouncedSave();
  renderConformance();
}

// ============================================================
//  TEST CONNECTION
// ============================================================

// Step 10) Test the API connection for any provider
function testAPIConnection() {
  var log = document.getElementById("confApiLog");
  var provider = document.getElementById("confProvider").value;
  var baseUrl = document.getElementById("confApiUrl").value.trim().replace(/\/+$/, "");
  var token = document.getElementById("confAuthToken").value.trim();

  if (!baseUrl) { log.innerHTML = "<div class=\"log-err\">Please enter an endpoint URL</div>"; return; }

  var testUrl = baseUrl;
  var headers = { "Accept": "application/json" };

  if (provider === "snowflake") {
    testUrl = baseUrl + "/api/v2/statements";
    if (token) headers["Authorization"] = "Bearer " + token;
  } else if (provider === "cdata") {
    testUrl = baseUrl + "/api";
    if (token) headers["Authorization"] = "Basic " + (token.indexOf(":") !== -1 ? btoa(token) : token);
  } else if (provider === "odata") {
    if (token) headers["Authorization"] = "Bearer " + token;
  } else {
    if (token) headers["Authorization"] = "Bearer " + token;
  }

  log.innerHTML = "<div class=\"log-info\">Testing " + provider + " connection: " + testUrl + "...</div>";

  fetch(testUrl, { method: "GET", headers: headers }).then(function(resp) {
    if (resp.ok || resp.status === 405) {
      log.innerHTML += "<div class=\"log-ok\">Connection OK (HTTP " + resp.status + ")</div>";
    } else if (resp.status === 401 || resp.status === 403) {
      log.innerHTML += "<div class=\"log-warn\">Auth failed (HTTP " + resp.status + "). Check your token/credentials.</div>";
    } else {
      log.innerHTML += "<div class=\"log-warn\">Server responded HTTP " + resp.status + " " + resp.statusText + "</div>";
    }
  }).catch(function(err) {
    log.innerHTML += "<div class=\"log-err\">Connection failed: " + err.message + "</div>";
  });
}

// ============================================================
//  INITIALISATION
// ============================================================

// Step 11) Wire up conformance tab UI elements
function initConformance() {
  // Step 11a) CSV import
  setupDropZone("confCSVDropZone", "confCSVInput", importActualsCSV);

  var btnTemplate = document.getElementById("btnExportConfTemplate");
  if (btnTemplate) btnTemplate.addEventListener("click", exportActualsTemplate);

  // Step 11b) Provider dropdown — show/hide fields on change
  var providerSel = document.getElementById("confProvider");
  if (providerSel) providerSel.addEventListener("change", onProviderChange);

  // Step 11c) Fetch and test buttons
  var btnFetch = document.getElementById("btnFetchActuals");
  if (btnFetch) btnFetch.addEventListener("click", fetchActualsFromAPI);

  var btnTest = document.getElementById("btnTestConnection");
  if (btnTest) btnTest.addEventListener("click", testAPIConnection);
}

export { renderConformance, initConformance };
