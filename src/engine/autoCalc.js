// ============================================================
//  AUTO CALC ENGINE
//  Recalculates blast durations from equipment rates when a
//  blast switches from Manual back to Auto mode.
//
//  Key rule: completed work (based on progress %) is excluded
//  from the recalculation. Only the remaining meters/kg/area
//  are used to compute the remaining days.
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills as drillFleet, mpus as mpuFleet, ancillary as ancillaryFleet } from "../state/equipmentState.js";
import { hasBlocks, syncBlastFromBlocks, calcBlockDays } from "./blockHelpers.js";
import { recalcDependencies } from "./dependencyEngine.js";

// Step 1) Recalculate a single blast's durations from equipment rates,
//  excluding already-completed work based on progress percentages.
function recalcBlastAuto(blast) {
  var effHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);

  // Step 2) Recalculate drill days
  if (hasBlocks(blast)) {
    // Step 2a) Block-level recalc — each block uses its own drills/rates
    blast.drillBlocks.forEach(function(block) {
      var blockProgress = block.drillProgress || 0;
      var remainingMeters = (block.meters || 0) * (1 - blockProgress);
      if (remainingMeters <= 0) {
        block.drillDays = Math.max(1, Math.ceil((block.meters || 0) * blockProgress));
        return;
      }

      var totalMPerDay = 0;
      (block.assignedDrills || []).forEach(function(drillId) {
        var penRate = 0;
        if (block.drillRates && block.drillRates[drillId] !== undefined) {
          penRate = block.drillRates[drillId];
        } else {
          var drill = drillFleet.find(function(d) { return d.id === drillId; });
          if (drill) penRate = drill.rateM_per_day;
        }
        totalMPerDay += penRate * effHrs;
      });

      if (totalMPerDay > 0) {
        var completedDays = Math.floor((block.meters || 0) * blockProgress / totalMPerDay);
        var remainingDays = Math.ceil(remainingMeters / totalMPerDay);
        block.drillDays = Math.max(1, completedDays + remainingDays);
      }
    });
    syncBlastFromBlocks(blast);

  } else {
    // Step 2b) Whole-blast drill recalc
    var totalMeters = getTotalDrillMeters(blast);
    var drillProgress = blast.drillProgress || 0;
    var remainingMeters = totalMeters * (1 - drillProgress);

    if (totalMeters > 0 && blast.assignedDrills && blast.assignedDrills.length > 0) {
      var combinedDrillRate = 0;
      for (var di = 0; di < blast.assignedDrills.length; di++) {
        var drillObj = drillFleet.find(function(d) { return d.id === blast.assignedDrills[di]; });
        if (drillObj) combinedDrillRate += (drillObj.rateM_per_day || 0) * effHrs;
      }
      if (combinedDrillRate > 0) {
        var completedDrillDays = Math.floor(totalMeters * drillProgress / combinedDrillRate);
        var remainingDrillDays = Math.ceil(remainingMeters / combinedDrillRate);
        blast.drillDays = Math.max(1, completedDrillDays + remainingDrillDays);
      }
    }
  }

  // Step 3) Recalculate load days from MPU rates (excluding completed load %)
  var loadProgress = blast.loadProgress || 0;
  var totalExpMass = blast.expMass || 0;
  var remainingMass = totalExpMass * (1 - loadProgress);

  var mpuList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
  var combinedLoadRate = 0;
  for (var mi = 0; mi < mpuList.length; mi++) {
    var mpu = mpuFleet.find(function(m) { return m.id === mpuList[mi]; });
    if (mpu) combinedLoadRate += (mpu.rateKg_per_day || 0);
  }
  var effectiveLoadRate = combinedLoadRate > 0 ? combinedLoadRate : (blast.loadRate || 100000);

  if (totalExpMass > 0 && effectiveLoadRate > 0) {
    var completedLoadDays = Math.floor(totalExpMass * loadProgress / effectiveLoadRate);
    var remainingLoadDays = Math.ceil(remainingMass / effectiveLoadRate);
    blast.loadDays = Math.max(1, completedLoadDays + remainingLoadDays);
    blast.loadRate = effectiveLoadRate;
  }

  // Step 4) Recalculate prep days from ancillary rates (excluding completed area)
  if (blast.surfaceArea > 0 && blast.assignedAncillary && blast.assignedAncillary.length > 0) {
    var combinedPrepRate = 0;
    for (var ai = 0; ai < blast.assignedAncillary.length; ai++) {
      var anc = ancillaryFleet.find(function(a) { return a.id === blast.assignedAncillary[ai]; });
      if (anc) combinedPrepRate += (anc.rateM2_per_day || 0);
    }
    if (combinedPrepRate > 0) {
      blast.prepDays = Math.max(1, Math.ceil(blast.surfaceArea / combinedPrepRate));
    }
  }

  // Step 5) Clear manual override flags so dependency engine auto-calculates dates
  blast.loadStartManual = false;
  blast.blastDateManual = false;

  // Step 6) Recalc all dependencies to cascade date changes
  recalcDependencies();
}

export { recalcBlastAuto };
