// ============================================================
//  DEPENDENCY ENGINE
//  Calculates load/blast dates based on dependency thresholds
//  Block-aware: uses latest block end when blast has drillBlocks
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills, mpus, isDrillInMaintenance } from "../state/equipmentState.js";
import { hasBlocks, syncBlastFromBlocks, getLatestBlockEnd } from "../engine/blockHelpers.js";
import { addDays, isoDate, formatDate } from "../utils/dateUtils.js";

// Step 1) Get effective dependency values for a blast (per-blast override or global)
function getBlastDeps(blast) {
  var g = APP.deps;
  var b = blast.deps || {};
  return {
    drillPctForLoad:  (b.drillPctForLoad  !== null && b.drillPctForLoad  !== undefined && b.drillPctForLoad  !== "") ? parseFloat(b.drillPctForLoad) : g.drillPctForLoad,
    drillPctForBlast: (b.drillPctForBlast !== null && b.drillPctForBlast !== undefined && b.drillPctForBlast !== "") ? parseFloat(b.drillPctForBlast) : g.drillPctForBlast,
    loadPctForBlast:  1.0,
    minLeadDays:      (b.minLeadDays      !== null && b.minLeadDays      !== undefined && b.minLeadDays      !== "") ? parseInt(b.minLeadDays) : g.minLeadDays,
    predecessor:      b.predecessor || null,
    predType:         b.predType || "blast-before-drill",
  };
}

// Step 2) Recalculate all load/blast dates based on dependency thresholds
function recalcDependencies() {
  // Step 2a) Read global settings from UI (inputs are 0-100 integers, internal state is 0-1 decimals)
  APP.deps.drillPctForLoad  = (parseFloat(document.getElementById("depDrillForLoad").value) || 0) / 100;
  APP.deps.drillPctForBlast = (parseFloat(document.getElementById("depDrillForBlast").value) || 100) / 100;
  APP.deps.loadPctForBlast  = 1.0;
  APP.deps.minLeadDays      = parseInt(document.getElementById("depMinLead").value) || 0;
  APP.deps.enforceSequence  = document.getElementById("depEnforceSeq").checked;

  // Step 2b) Process each blast
  APP.blasts.forEach(function(blast, idx) {
    // Step 2b-i) Sync block-level derived values if blast has blocks
    if (hasBlocks(blast)) {
      syncBlastFromBlocks(blast);
    }

    // Step 2b-ia) Refresh blast.expMass from holeTypes, recalculating any missing values
    //             from the pattern library (pf * burden * spacing * benchHt * holes)
    if (blast.holeTypes && blast.holeTypes.length > 0) {
      var htMassTotal = 0;
      for (var hi = 0; hi < blast.holeTypes.length; hi++) {
        var ht = blast.holeTypes[hi];
        if (!ht.expMass && ht.patternId && ht.holes > 0) {
          var pat = APP.patterns.find(function(p) { return p.id === ht.patternId; });
          if (pat && pat.pf > 0) {
            ht.expMass = Math.round(pat.pf * (ht.burden || pat.burden) * (ht.spacing || pat.spacing) * (pat.benchHt || 12) * ht.holes);
          }
        }
        htMassTotal += ht.expMass || 0;
      }
      if (htMassTotal > 0) blast.expMass = htMassTotal;
    }

    // Step 2b-ii) Recalculate drillDays for non-block blasts from assigned drill rates
    //             Uses per-blast drillRates overrides (from resize) when present, else fleet defaults
    if (!hasBlocks(blast) && blast.assignedDrills && blast.assignedDrills.length > 0) {
      var totalMeters = getTotalDrillMeters(blast);
      if (totalMeters > 0) {
        var effHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);
        var combinedDrillRate = 0;
        for (var di = 0; di < blast.assignedDrills.length; di++) {
          var drillId = blast.assignedDrills[di];
          if (blast.drillRates && blast.drillRates[drillId] !== undefined) {
            combinedDrillRate += blast.drillRates[drillId] * effHrs;
          } else {
            var drillObj = drills.find(function(d) { return d.id === drillId; });
            if (drillObj) combinedDrillRate += (drillObj.rateM_per_day || 0) * effHrs;
          }
        }
        if (combinedDrillRate > 0) {
          blast.drillDays = Math.ceil(totalMeters / combinedDrillRate);
        }
      }
    }

    blast._depWarning = "";
    blast._maintWarnings = [];

    var deps = getBlastDeps(blast);
    var hasDrill = !blast.noDrill && blast.drillStart && blast.drillDays;
    var hasLoad = !blast.noLoad;
    var hasBlastPhase = !blast.noBlast;

    // Step 2c) Decoupled blasts: handle any combination of noDrill / noLoad / noBlast
    // If none of the required phases have data, bail out early
    if (!hasDrill && !hasLoad && !hasBlastPhase) return;

    // Step 2c-i) Skip entirely if only drill exists but no drill data
    if (!blast.noDrill && (!blast.drillStart || !blast.drillDays) && !hasLoad && !hasBlastPhase) return;

    var drillStartDate = hasDrill ? new Date(blast.drillStart) : null;
    var drillDays = hasDrill ? (blast.drillDays || 1) : 0;
    var drillDaysForLoad = 0;

    // Step 2d) Drill-based calculations (only when drilling is active)
    if (hasDrill) {
      // Step 2d-i) Predecessor constraint on drilling
      if (deps.predecessor) {
        var pred = APP.blasts.find(function(b) { return b.name === deps.predecessor; });
        if (pred) {
          if (deps.predType === "blast-before-drill" && pred.blastDate) {
            if (drillStartDate < new Date(pred.blastDate)) {
              blast._depWarning = "Drill starts before predecessor " + pred.name + " fires (" + formatDate(pred.blastDate) + ")";
            }
          } else if (deps.predType === "drill-before-drill") {
            var predDrillEnd = pred.drillStart ? addDays(new Date(pred.drillStart), pred.drillDays || 1) : null;
            if (predDrillEnd && drillStartDate < predDrillEnd) {
              blast._depWarning = "Drill overlaps with predecessor " + pred.name + " drill (ends " + formatDate(predDrillEnd) + ")";
            }
          }
        }
      }

      // Step 2d-ii) Check maintenance conflicts for assigned drills
      if (hasBlocks(blast)) {
        blast.drillBlocks.forEach(function(block) {
          if (!block.drillStart || !block.assignedDrills) return;
          var blockEnd = isoDate(addDays(new Date(block.drillStart), (block.drillDays || 1) - 1));
          block.assignedDrills.forEach(function(drillId) {
            var drill = drills.find(function(d) { return d.id === drillId; });
            if (!drill) return;
            (drill.maintenance || []).forEach(function(m) {
              if (m.end >= block.drillStart && m.start <= blockEnd) {
                blast._maintWarnings.push(drill.id + " [Block " + block.label + "] maint " + formatDate(m.start) + "-" + formatDate(m.end) + " (" + m.reason + ")");
              }
            });
          });
        });
      } else if (blast.assignedDrills && blast.assignedDrills.length > 0) {
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
    }

    // Step 2e) Loading calculations (only when loading is active)
    var autoLoadStart = null;
    if (hasLoad) {
      if (hasDrill) {
        // Step 2e-i) Load start derived from drill progress threshold
        drillDaysForLoad = Math.ceil(drillDays * deps.drillPctForLoad);
        var loadEarliest = addDays(drillStartDate, drillDaysForLoad);

        if (hasBlocks(blast)) {
          var latestEnd = getLatestBlockEnd(blast);
          if (latestEnd && deps.drillPctForLoad >= 1.0) {
            loadEarliest = addDays(latestEnd, 1);
          }
        }

        // Step 2e-ii) Predecessor constraint on load start
        if (deps.predecessor) {
          var predL = APP.blasts.find(function(b) { return b.name === deps.predecessor; });
          if (predL && predL.blastDate && deps.predType === "blast-before-load") {
            var predFireL = new Date(predL.blastDate);
            if (loadEarliest < predFireL) {
              loadEarliest = addDays(predFireL, 1);
            }
          }
        }

        autoLoadStart = isoDate(loadEarliest);
        if (blast.loadStartManual && blast.loadStart) {
          if (blast.loadStart < autoLoadStart) {
            blast._depWarning = (blast._depWarning ? blast._depWarning + "; " : "") +
              "Loading starts before " + Math.round(deps.drillPctForLoad * 100) + "% drill complete (earliest: " + formatDate(autoLoadStart) + ")";
          }
        } else {
          blast.loadStart = autoLoadStart;
        }
      } else {
        // Step 2e-iii) No drilling: loadStart is manual
        autoLoadStart = blast.loadStart || null;
        if (!blast.loadStart) {
          blast.loadStart = isoDate(APP.planStart);
          blast.loadStartManual = true;
          autoLoadStart = blast.loadStart;
        }
      }

      // Step 2e-iv) Compute loadDays from MPU rates
      var mpuList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
      var combinedLoadRate = 0;
      if (mpuList.length > 0) {
        for (var mi = 0; mi < mpuList.length; mi++) {
          var mpuId = mpuList[mi];
          if (blast.mpuRates && blast.mpuRates[mpuId] !== undefined) {
            combinedLoadRate += blast.mpuRates[mpuId];
          } else {
            var mpu = mpus.find(function(m) { return m.id === mpuId; });
            if (mpu) combinedLoadRate += (mpu.rateKg_per_day || 0);
          }
        }
      }
      var effectiveLoadRate = combinedLoadRate > 0 ? combinedLoadRate : (blast.loadRate || 100000);
      var loadDays = effectiveLoadRate > 0 ? Math.ceil((blast.expMass || 0) / effectiveLoadRate) : 1;
      blast.loadDays = Math.max(loadDays, 1);
    }

    // Step 2f) Blast date calculation (only when blasting is active)
    if (hasBlastPhase) {
      var blastConstraints = [];

      if (hasDrill) {
        var drillDaysForBlast = Math.ceil(drillDays * deps.drillPctForBlast);
        var drillReadyDate = addDays(drillStartDate, drillDaysForBlast);
        if (hasBlocks(blast) && deps.drillPctForBlast >= 1.0) {
          var latestEnd2 = getLatestBlockEnd(blast);
          if (latestEnd2) drillReadyDate = addDays(latestEnd2, 1);
        }
        blastConstraints.push(drillReadyDate.getTime());
      }

      if (hasLoad && blast.loadStart) {
        var loadStartForCalc = new Date(blast.loadStart);
        var loadDaysForBlast = Math.ceil((blast.loadDays || 1) * deps.loadPctForBlast);
        var loadReadyDate = addDays(loadStartForCalc, loadDaysForBlast);
        blastConstraints.push(loadReadyDate.getTime());
      }

      if (blastConstraints.length > 0) {
        var blastEarliest = new Date(Math.max.apply(null, blastConstraints));
        blastEarliest = addDays(blastEarliest, deps.minLeadDays);
        var autoBlastDate = isoDate(blastEarliest);

        if (blast.blastDateManual && blast.blastDate) {
          if (blast.blastDate < autoBlastDate) {
            blast._depWarning = (blast._depWarning ? blast._depWarning + "; " : "") +
              "Blast date before dependencies met (earliest: " + formatDate(autoBlastDate) + ")";
          }
        } else {
          blast.blastDate = autoBlastDate;
        }
      }
    }

    // Step 2g) Store computed dependency info for rendering
    var drillEndIso = hasDrill ? isoDate(addDays(drillStartDate, drillDays - 1)) : null;
    var loadEndIso = (hasLoad && blast.loadStart) ? isoDate(addDays(new Date(blast.loadStart), (blast.loadDays || 1) - 1)) : null;
    blast._computed = {
      drillPctForLoad: deps.drillPctForLoad,
      drillPctForBlast: deps.drillPctForBlast,
      loadPctForBlast: deps.loadPctForBlast,
      drillDayForLoadStart: drillDaysForLoad,
      loadStartDate: blast.loadStart,
      drillOverlapEnd: drillEndIso,
      loadOverlapStart: hasLoad ? blast.loadStart : null,
      hasOverlap: hasDrill && hasLoad && deps.drillPctForLoad < 1.0,
      drillEndDate: drillEndIso,
      loadEndDate: loadEndIso,
      autoLoadStart: autoLoadStart,
      autoBlastDate: blast.blastDate,
    };
  });
}

// ============================================================
//  AUTO SCHEDULE
//  Stacks drill start dates top-to-bottom through the blast list.
//  Each blast's drillStart is derived from the previous blast's
//  drilling progress, using the global Drill Overlap % threshold.
//  Per-blast predecessor overrides take priority over the global
//  stacking rule.  After stacking, recalcDependencies() cascades
//  load/blast dates as normal.
// ============================================================

// Step 3) Auto-schedule drill starts by stacking blasts sequentially
function autoSchedule() {
  // Step 3a) Read the global drill overlap threshold from the UI (input is 0-200 integer, internal is 0-2 decimal)
  var overlapEl = document.getElementById("depDrillOverlap");
  var drillOverlapPct = overlapEl ? (parseFloat(overlapEl.value) || 100) / 100 : 1.0;
  if (isNaN(drillOverlapPct)) drillOverlapPct = 1.0;
  APP.deps.drillOverlapPct = drillOverlapPct;

  // Step 3b) First pass — ensure drillDays are up to date for all blasts
  APP.blasts.forEach(function(blast) {
    if (hasBlocks(blast)) {
      syncBlastFromBlocks(blast);
    }
    if (!hasBlocks(blast) && blast.assignedDrills && blast.assignedDrills.length > 0) {
      var totalMeters = getTotalDrillMeters(blast);
      if (totalMeters > 0) {
        var effHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);
        var combinedRate = 0;
        for (var di = 0; di < blast.assignedDrills.length; di++) {
          var drillId = blast.assignedDrills[di];
          if (blast.drillRates && blast.drillRates[drillId] !== undefined) {
            combinedRate += blast.drillRates[drillId] * effHrs;
          } else {
            var drillObj = drills.find(function(d) { return d.id === drillId; });
            if (drillObj) combinedRate += (drillObj.rateM_per_day || 0) * effHrs;
          }
        }
        if (combinedRate > 0) {
          blast.drillDays = Math.ceil(totalMeters / combinedRate);
        }
      }
    }
  });

  // Step 3c) Walk blasts top-to-bottom and stack drill starts
  var prevBlast = null;
  for (var i = 0; i < APP.blasts.length; i++) {
    var blast = APP.blasts[i];

    // Step 3c-i) Skip blasts with drilling disabled
    if (blast.noDrill) { continue; }

    // Step 3c-ii) First drillable blast keeps its existing drillStart as the anchor
    if (!prevBlast) {
      if (!blast.drillStart) {
        blast.drillStart = isoDate(APP.planStart);
      }
      prevBlast = blast;
      continue;
    }

    // Step 3c-iii) Check for per-blast predecessor override
    var deps = getBlastDeps(blast);
    if (deps.predecessor) {
      var pred = APP.blasts.find(function(b) { return b.name === deps.predecessor; });
      if (pred) {
        var newStart = null;

        if (deps.predType === "blast-before-drill" && pred.blastDate) {
          // Step) Drill starts the day after predecessor fires
          newStart = addDays(new Date(pred.blastDate), 1);

        } else if (deps.predType === "drill-before-drill" && pred.drillStart && pred.drillDays) {
          // Step) Drill starts after predecessor finishes drilling
          newStart = addDays(new Date(pred.drillStart), pred.drillDays || 1);

        } else if (deps.predType === "blast-before-load" && pred.blastDate) {
          // Step) For blast-before-load, drill still stacks off prev using overlap
          var prevDays = prevBlast.drillDays || 1;
          var offsetDays = Math.ceil(prevDays * drillOverlapPct);
          newStart = addDays(new Date(prevBlast.drillStart), offsetDays);
        }

        if (newStart) {
          blast.drillStart = isoDate(newStart);
          blast.loadStartManual = false;
          blast.blastDateManual = false;
          prevBlast = blast;
          continue;
        }
      }
    }

    // Step 3c-iv) Default stacking: previous blast's drillStart + (drillDays * overlapPct)
    if (prevBlast.drillStart && prevBlast.drillDays) {
      var prevDrillStart = new Date(prevBlast.drillStart);
      var prevDays2 = prevBlast.drillDays || 1;
      var offsetDays2 = Math.ceil(prevDays2 * drillOverlapPct);

      // Step 3c-v) Use block-level latest end when overlap >= 100% and blast has blocks
      if (drillOverlapPct >= 1.0 && hasBlocks(prevBlast)) {
        var latestEnd = getLatestBlockEnd(prevBlast);
        if (latestEnd) {
          blast.drillStart = isoDate(addDays(latestEnd, 1));
        } else {
          blast.drillStart = isoDate(addDays(prevDrillStart, offsetDays2));
        }
      } else {
        blast.drillStart = isoDate(addDays(prevDrillStart, offsetDays2));
      }

      // Step 3c-vi) Clear manual overrides so recalcDependencies cascades freely
      blast.loadStartManual = false;
      blast.blastDateManual = false;
    }

    prevBlast = blast;
  }

  // Step 3d) Now cascade load/blast dates via the existing dependency engine
  recalcDependencies();
}

export { getBlastDeps, recalcDependencies, autoSchedule };
