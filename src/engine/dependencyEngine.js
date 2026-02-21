// ============================================================
//  DEPENDENCY ENGINE
//  Calculates load/blast dates based on dependency thresholds
// ============================================================

import { APP } from "../state/appState.js";
import { drills, isDrillInMaintenance } from "../state/equipmentState.js";
import { addDays, isoDate, formatDate } from "../utils/dateUtils.js";

// Step 1) Get effective dependency values for a blast (per-blast override or global)
function getBlastDeps(blast) {
  var g = APP.deps;
  var b = blast.deps || {};
  return {
    drillPctForLoad:  (b.drillPctForLoad  !== null && b.drillPctForLoad  !== undefined && b.drillPctForLoad  !== "") ? parseFloat(b.drillPctForLoad) : g.drillPctForLoad,
    drillPctForBlast: (b.drillPctForBlast !== null && b.drillPctForBlast !== undefined && b.drillPctForBlast !== "") ? parseFloat(b.drillPctForBlast) : g.drillPctForBlast,
    loadPctForBlast:  1.0,  // HARD CONSTRAINT: loading must be 100% complete before blasting
    minLeadDays:      (b.minLeadDays      !== null && b.minLeadDays      !== undefined && b.minLeadDays      !== "") ? parseInt(b.minLeadDays) : g.minLeadDays,
    predecessor:      b.predecessor || null,
    predType:         b.predType || "blast-before-drill",
  };
}

// Step 2) Recalculate all load/blast dates based on dependency thresholds
function recalcDependencies() {
  // Step 2a) Read global settings from UI
  APP.deps.drillPctForLoad  = parseFloat(document.getElementById("depDrillForLoad").value) || 0;
  APP.deps.drillPctForBlast = parseFloat(document.getElementById("depDrillForBlast").value) || 1;
  APP.deps.loadPctForBlast  = 1.0; // Hard constraint: always 100%
  APP.deps.minLeadDays      = parseInt(document.getElementById("depMinLead").value) || 0;
  APP.deps.enforceSequence  = document.getElementById("depEnforceSeq").checked;

  // Step 2b) Process each blast
  APP.blasts.forEach(function(blast, idx) {
    if (!blast.drillStart || !blast.drillDays) return;

    // Step 2b-i) Reset warnings before recalculating
    blast._depWarning = "";

    var deps = getBlastDeps(blast);
    var drillStartDate = new Date(blast.drillStart);
    var drillDays = blast.drillDays || 1;

    // Step 2c) Loading start: after drill reaches threshold %
    var drillDaysForLoad = Math.ceil(drillDays * deps.drillPctForLoad);
    var loadEarliest = addDays(drillStartDate, drillDaysForLoad);

    // Step 2d) Predecessor constraint
    if (deps.predecessor) {
      var pred = APP.blasts.find(function(b) { return b.name === deps.predecessor; });
      if (pred) {
        if (deps.predType === "blast-before-drill" && pred.blastDate) {
          var predFire = new Date(pred.blastDate);
          if (drillStartDate < predFire) {
            blast._depWarning = "Drill starts before predecessor " + pred.name + " fires (" + formatDate(pred.blastDate) + ")";
          }
        } else if (deps.predType === "blast-before-load" && pred.blastDate) {
          var predFire2 = new Date(pred.blastDate);
          if (loadEarliest < predFire2) {
            loadEarliest = addDays(predFire2, 1);
          }
        } else if (deps.predType === "drill-before-drill") {
          var predDrillEnd = pred.drillStart ? addDays(new Date(pred.drillStart), pred.drillDays || 1) : null;
          if (predDrillEnd && drillStartDate < predDrillEnd) {
            blast._depWarning = "Drill overlaps with predecessor " + pred.name + " drill (ends " + formatDate(predDrillEnd) + ")";
          }
        }
      }
    }

    // Step 2e) Check maintenance conflicts for assigned drills
    blast._maintWarnings = [];
    if (blast.assignedDrills && blast.assignedDrills.length > 0) {
      var drillEndStr = isoDate(addDays(drillStartDate, drillDays - 1));
      blast.assignedDrills.forEach(function(drillId) {
        var drill = drills.find(function(d) { return d.id === drillId; });
        if (!drill) return;
        (drill.maintenance || []).forEach(function(m) {
          if (m.end >= blast.drillStart && m.start <= drillEndStr) {
            blast._maintWarnings.push(drill.id + " in maintenance " + formatDate(m.start) + "-" + formatDate(m.end) + " (" + m.reason + ")");
          }
        });
      });
    }

    // Step 2f) Set loading start — respect manual override or auto-calculate
    var autoLoadStart = isoDate(loadEarliest);
    if (blast.loadStartManual && blast.loadStart) {
      if (blast.loadStart < autoLoadStart) {
        blast._depWarning = (blast._depWarning ? blast._depWarning + "; " : "") +
          "Loading starts before " + Math.round(deps.drillPctForLoad * 100) + "% drill complete (earliest: " + formatDate(autoLoadStart) + ")";
      }
    } else {
      blast.loadStart = autoLoadStart;
    }

    var loadDays = blast.loadRate > 0 ? Math.ceil((blast.expMass || 0) / blast.loadRate) : 1;
    blast.loadDays = Math.max(loadDays, 1);

    // Step 2g) Blasting date: after both drill and load thresholds met + lead days
    var drillDaysForBlast = Math.ceil(drillDays * deps.drillPctForBlast);
    var drillReadyDate = addDays(drillStartDate, drillDaysForBlast);

    var loadStartForCalc = new Date(blast.loadStart);
    var loadDaysForBlast = Math.ceil(blast.loadDays * deps.loadPctForBlast);
    var loadReadyDate = addDays(loadStartForCalc, loadDaysForBlast);

    var blastEarliest = new Date(Math.max(drillReadyDate.getTime(), loadReadyDate.getTime()));
    blastEarliest = addDays(blastEarliest, deps.minLeadDays);

    // Step 2h) Blast date — respect manual override or auto-calculate
    var autoBlastDate = isoDate(blastEarliest);
    if (blast.blastDateManual && blast.blastDate) {
      if (blast.blastDate < autoBlastDate) {
        blast._depWarning = (blast._depWarning ? blast._depWarning + "; " : "") +
          "Blast date before dependencies met (earliest: " + formatDate(autoBlastDate) + ")";
      }
    } else {
      blast.blastDate = autoBlastDate;
    }

    // Step 2i) Store computed dependency info for rendering
    blast._computed = {
      drillPctForLoad: deps.drillPctForLoad,
      drillPctForBlast: deps.drillPctForBlast,
      loadPctForBlast: deps.loadPctForBlast,
      drillDayForLoadStart: drillDaysForLoad,
      loadStartDate: blast.loadStart,
      drillOverlapEnd: isoDate(addDays(drillStartDate, drillDays - 1)),
      loadOverlapStart: blast.loadStart,
      hasOverlap: deps.drillPctForLoad < 1.0,
      drillEndDate: isoDate(addDays(drillStartDate, drillDays - 1)),
      loadEndDate: isoDate(addDays(loadStartForCalc, blast.loadDays - 1)),
      autoLoadStart: autoLoadStart,
      autoBlastDate: autoBlastDate,
    };
  });
}

export { getBlastDeps, recalcDependencies };
