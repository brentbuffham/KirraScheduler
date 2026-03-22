// ============================================================
//  SCHEDULER DB
//  IndexedDB persistence for the Kirra Scheduler application.
//  Database: KIRRASCHEDULER_DB
//  Stores: blasts, patterns, equipment, settings, conformance
// ============================================================

import { APP } from "./appState.js";
import { drills, mpus, ancillary, people } from "./equipmentState.js";

var DB_NAME = "KIRRASCHEDULER_DB";
var DB_VERSION = 1;
var STORE_BLASTS = "blasts";
var STORE_PATTERNS = "patterns";
var STORE_EQUIPMENT = "equipment";
var STORE_SETTINGS = "settings";
var STORE_CONFORMANCE = "conformance";

var _db = null;
var _saveTimer = null;
var SAVE_DEBOUNCE_MS = 500;

// Step 1) Open (or create) the IndexedDB database
function openDB() {
  return new Promise(function(resolve, reject) {
    if (_db) { resolve(_db); return; }

    var request = indexedDB.open(DB_NAME, DB_VERSION);

    // Step 1a) Create object stores on first open / version upgrade
    request.onupgradeneeded = function(e) {
      var db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_BLASTS)) {
        db.createObjectStore(STORE_BLASTS, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_PATTERNS)) {
        db.createObjectStore(STORE_PATTERNS, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_EQUIPMENT)) {
        db.createObjectStore(STORE_EQUIPMENT, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_SETTINGS)) {
        db.createObjectStore(STORE_SETTINGS, { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains(STORE_CONFORMANCE)) {
        db.createObjectStore(STORE_CONFORMANCE, { keyPath: "key" });
      }
    };

    request.onsuccess = function(e) {
      _db = e.target.result;
      resolve(_db);
    };

    request.onerror = function(e) {
      console.error("KIRRASCHEDULER_DB open error:", e.target.error);
      reject(e.target.error);
    };
  });
}

// Step 2) Generic put helper — writes a single record to a store
function putRecord(storeName, key, data) {
  return openDB().then(function(db) {
    return new Promise(function(resolve, reject) {
      var tx = db.transaction(storeName, "readwrite");
      var store = tx.objectStore(storeName);
      store.put({ key: key, data: data });
      tx.oncomplete = function() { resolve(); };
      tx.onerror = function(e) {
        console.error("KIRRASCHEDULER_DB put error (" + storeName + "):", e.target.error);
        reject(e.target.error);
      };
    });
  });
}

// Step 3) Generic get helper — reads a single record from a store
function getRecord(storeName, key) {
  return openDB().then(function(db) {
    return new Promise(function(resolve, reject) {
      var tx = db.transaction(storeName, "readonly");
      var store = tx.objectStore(storeName);
      var request = store.get(key);
      request.onsuccess = function() {
        resolve(request.result ? request.result.data : null);
      };
      request.onerror = function(e) {
        console.error("KIRRASCHEDULER_DB get error (" + storeName + "):", e.target.error);
        reject(e.target.error);
      };
    });
  });
}

// Step 4) Strip transient/computed properties from blast data before saving
function cleanBlastForStorage(blast) {
  var clean = {};
  var skip = { _computed: true, _depWarning: true, _maintWarnings: true };
  var keys = Object.keys(blast);
  for (var i = 0; i < keys.length; i++) {
    if (!skip[keys[i]]) {
      clean[keys[i]] = blast[keys[i]];
    }
  }
  return clean;
}

// Step 5) Save the full application state to IndexedDB
function saveState() {
  // Step 5a) Blasts — strip computed props
  var cleanBlasts = [];
  for (var i = 0; i < APP.blasts.length; i++) {
    cleanBlasts.push(cleanBlastForStorage(APP.blasts[i]));
  }

  // Step 5b) Settings snapshot
  var settings = {
    planStart: APP.planStart ? APP.planStart.toISOString() : null,
    ganttWeeks: APP.ganttWeeks,
    rigHours: APP.rigHours,
    availability: APP.availability,
    utilisation: APP.utilisation,
    deps: APP.deps,
    planWeekStartDay: APP.planWeekStartDay,
    planCycleWeeks: APP.planCycleWeeks,
    planWeekColors: APP.planWeekColors
  };

  // Step 5c) Equipment snapshot
  var equipment = {
    drills: drills.slice(),
    mpus: mpus.slice(),
    ancillary: ancillary.slice(),
    people: people.slice()
  };

  return Promise.all([
    putRecord(STORE_BLASTS, "allBlasts", cleanBlasts),
    putRecord(STORE_PATTERNS, "allPatterns", APP.patterns),
    putRecord(STORE_EQUIPMENT, "allEquipment", equipment),
    putRecord(STORE_SETTINGS, "appSettings", settings),
    putRecord(STORE_CONFORMANCE, "conformanceData", APP.conformance),
    // Step 5d) Also persist charge configs, products, surfaces, and solids
    putRecord(STORE_SETTINGS, "chargeConfigs", APP.chargeConfigs || []),
    putRecord(STORE_SETTINGS, "products", APP.products || []),
    putRecord(STORE_SETTINGS, "kirraProjectSurfaces", APP.kirraProjectSurfaces || []),
    putRecord(STORE_SETTINGS, "kirraProjectSolids", APP.kirraProjectSolids || [])
  ]).then(function() {
    // Step 5e) Silent success
  }).catch(function(err) {
    console.error("KIRRASCHEDULER_DB save failed:", err);
  });
}

// Step 6) Debounced save — called after every state mutation
function debouncedSave() {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(function() {
    saveState();
  }, SAVE_DEBOUNCE_MS);
}

// Step 7) Load the full application state from IndexedDB
//  Returns true if data was found and restored, false if DB was empty
function loadState() {
  return openDB().then(function() {
    return Promise.all([
      getRecord(STORE_BLASTS, "allBlasts"),
      getRecord(STORE_PATTERNS, "allPatterns"),
      getRecord(STORE_EQUIPMENT, "allEquipment"),
      getRecord(STORE_SETTINGS, "appSettings"),
      getRecord(STORE_CONFORMANCE, "conformanceData"),
      getRecord(STORE_SETTINGS, "chargeConfigs"),
      getRecord(STORE_SETTINGS, "products"),
      getRecord(STORE_SETTINGS, "kirraProjectSurfaces"),
      getRecord(STORE_SETTINGS, "kirraProjectSolids")
    ]);
  }).then(function(results) {
    var savedBlasts = results[0];
    var savedPatterns = results[1];
    var savedEquipment = results[2];
    var savedSettings = results[3];
    var savedConformance = results[4];
    var savedChargeConfigs = results[5];
    var savedProducts = results[6];
    var savedSurfaces = results[7];
    var savedSolids = results[8];

    // Step 7a) If no blasts saved, DB is empty — return false
    if (!savedBlasts) return false;

    // Step 7b) Restore blasts
    APP.blasts.length = 0;
    for (var i = 0; i < savedBlasts.length; i++) {
      APP.blasts.push(savedBlasts[i]);
    }

    // Step 7c) Restore patterns
    if (savedPatterns) {
      APP.patterns.length = 0;
      for (var j = 0; j < savedPatterns.length; j++) {
        APP.patterns.push(savedPatterns[j]);
      }
    }

    // Step 7d) Restore equipment arrays (replace contents, keep references)
    if (savedEquipment) {
      if (savedEquipment.drills) {
        drills.length = 0;
        for (var d = 0; d < savedEquipment.drills.length; d++) {
          drills.push(savedEquipment.drills[d]);
        }
      }
      if (savedEquipment.mpus) {
        mpus.length = 0;
        for (var m = 0; m < savedEquipment.mpus.length; m++) {
          mpus.push(savedEquipment.mpus[m]);
        }
      }
      if (savedEquipment.ancillary) {
        ancillary.length = 0;
        for (var a = 0; a < savedEquipment.ancillary.length; a++) {
          ancillary.push(savedEquipment.ancillary[a]);
        }
      }
      if (savedEquipment.people) {
        people.length = 0;
        for (var p = 0; p < savedEquipment.people.length; p++) {
          people.push(savedEquipment.people[p]);
        }
      }
    }

    // Step 7e) Restore settings
    if (savedSettings) {
      if (savedSettings.planStart) APP.planStart = new Date(savedSettings.planStart);
      if (savedSettings.ganttWeeks !== undefined) APP.ganttWeeks = savedSettings.ganttWeeks;
      if (savedSettings.rigHours !== undefined) APP.rigHours = savedSettings.rigHours;
      if (savedSettings.availability !== undefined) APP.availability = savedSettings.availability;
      if (savedSettings.utilisation !== undefined) APP.utilisation = savedSettings.utilisation;
      if (savedSettings.deps) APP.deps = savedSettings.deps;
      if (savedSettings.planWeekStartDay !== undefined) APP.planWeekStartDay = savedSettings.planWeekStartDay;
      if (savedSettings.planCycleWeeks !== undefined) APP.planCycleWeeks = savedSettings.planCycleWeeks;
      if (savedSettings.planWeekColors) APP.planWeekColors = savedSettings.planWeekColors;
    }

    // Step 7f) Restore conformance
    if (savedConformance) {
      APP.conformance = savedConformance;
    }

    // Step 7g) Restore charge configs, products, surfaces, and solids
    if (savedChargeConfigs) APP.chargeConfigs = savedChargeConfigs;
    if (savedProducts) APP.products = savedProducts;
    if (savedSurfaces) APP.kirraProjectSurfaces = savedSurfaces;
    if (savedSolids) APP.kirraProjectSolids = savedSolids;

    return true;
  }).catch(function(err) {
    console.error("KIRRASCHEDULER_DB load failed:", err);
    return false;
  });
}

// Step 8) Clear all data from IndexedDB (used by Reset)
function clearDB() {
  return openDB().then(function(db) {
    var stores = [STORE_BLASTS, STORE_PATTERNS, STORE_EQUIPMENT, STORE_SETTINGS, STORE_CONFORMANCE];
    var promises = stores.map(function(storeName) {
      return new Promise(function(resolve, reject) {
        var tx = db.transaction(storeName, "readwrite");
        var store = tx.objectStore(storeName);
        store.clear();
        tx.oncomplete = function() { resolve(); };
        tx.onerror = function(e) { reject(e.target.error); };
      });
    });
    return Promise.all(promises);
  }).catch(function(err) {
    console.error("KIRRASCHEDULER_DB clear failed:", err);
  });
}

// Step 9) Sync UI inputs from restored settings
function syncUIFromState() {
  var el;
  el = document.getElementById("planStartDate");
  if (el && APP.planStart) el.value = APP.planStart.toISOString().split("T")[0];
  el = document.getElementById("ganttWeeks");
  if (el) el.value = APP.ganttWeeks;
  el = document.getElementById("rigHours");
  if (el) el.value = APP.rigHours;
  el = document.getElementById("rigAvail");
  if (el) el.value = APP.availability;
  el = document.getElementById("rigUtil");
  if (el) el.value = APP.utilisation;
  el = document.getElementById("depDrillForLoad");
  if (el && APP.deps) el.value = Math.round(APP.deps.drillPctForLoad * 100);
  el = document.getElementById("depDrillForBlast");
  if (el && APP.deps) el.value = Math.round(APP.deps.drillPctForBlast * 100);
  el = document.getElementById("depMinLead");
  if (el && APP.deps) el.value = APP.deps.minLeadDays;
  el = document.getElementById("depEnforceSeq");
  if (el && APP.deps) el.checked = APP.deps.enforceSequence !== false;
  el = document.getElementById("depDrillOverlap");
  if (el && APP.deps) el.value = Math.round((APP.deps.drillOverlapPct !== undefined ? APP.deps.drillOverlapPct : 1.0) * 100);
  el = document.getElementById("planWeekStartDay");
  if (el) el.value = APP.planWeekStartDay;
  el = document.getElementById("planCycleWeeks");
  if (el) el.value = APP.planCycleWeeks;
}

export { openDB, saveState, debouncedSave, loadState, clearDB, syncUIFromState };
