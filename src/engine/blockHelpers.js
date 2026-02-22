// ============================================================
//  BLOCK HELPERS
//  Utility functions for drill block operations:
//  splitting, merging, and deriving blast-level values from blocks
// ============================================================

import { APP } from "../state/appState.js";
import { drills as drillFleet } from "../state/equipmentState.js";
import { addDays, isoDate } from "../utils/dateUtils.js";

// Step 0) Get effective rig hours per day from APP settings
// Rates stored on equipment/blocks are penetration rates (m/hr).
// Multiply by effective hours to get actual m/day production.
function getEffectiveHours() {
  var hours = APP.rigHours || 24;
  var avail = APP.availability || 0.85;
  var util = APP.utilisation || 0.75;
  return hours * avail * util;
}

// Step 1) Check if a blast uses drill blocks
function hasBlocks(blast) {
  return blast.drillBlocks && blast.drillBlocks.length > 0;
}

// Step 2) Calculate a block's drillDays from its meters and drill pen rates
function calcBlockDays(block) {
  var effectiveHrs = getEffectiveHours();
  var totalMPerDay = 0;

  (block.assignedDrills || []).forEach(function(drillId) {
    // Step 2a) Use block-level override (m/hr), else fall back to equipment default
    var penRate = 0;
    if (block.drillRates && block.drillRates[drillId] !== undefined) {
      penRate = block.drillRates[drillId];
    } else {
      var drill = drillFleet.find(function(d) { return d.id === drillId; });
      if (drill) penRate = drill.rateM_per_day;
    }
    // Step 2b) Convert pen rate (m/hr) to production rate (m/day)
    totalMPerDay += penRate * effectiveHrs;
  });

  if (totalMPerDay <= 0) return 1;
  return Math.ceil((block.meters || 0) / totalMPerDay);
}

// Step 3) Recalculate drillDays on all blocks of a blast
function recalcBlockDays(blast) {
  if (!hasBlocks(blast)) return;
  blast.drillBlocks.forEach(function(block) {
    block.drillDays = calcBlockDays(block);
  });
}

// Step 4) Derive blast-level values from blocks
function syncBlastFromBlocks(blast) {
  if (!hasBlocks(blast)) return;

  recalcBlockDays(blast);

  // Step 4a) Earliest start and latest end
  var earliest = null;
  var latest = null;
  var allDrills = [];

  blast.drillBlocks.forEach(function(block) {
    var start = new Date(block.drillStart);
    var end = addDays(start, (block.drillDays || 1) - 1);

    if (!earliest || start < earliest) earliest = start;
    if (!latest || end > latest) latest = end;

    (block.assignedDrills || []).forEach(function(id) {
      if (allDrills.indexOf(id) === -1) allDrills.push(id);
    });
  });

  if (earliest) blast.drillStart = isoDate(earliest);
  if (earliest && latest) {
    var span = Math.round((latest - earliest) / 86400000) + 1;
    blast.drillDays = span;
  }
  blast.assignedDrills = allDrills;
}

// Step 5) Split a blast into two blocks (50/50 meters by default)
// Inherits drillDays proportionally from the blast's existing schedule
function splitBlast(blast) {
  var totalMeters = (blast.d65Meters || 0) + (blast.pvMeters || 0);
  var halfMeters = Math.round(totalMeters / 2 * 10) / 10;
  var remainMeters = Math.round((totalMeters - halfMeters) * 10) / 10;
  var drillStart = blast.drillStart || isoDate(new Date());
  var currentDrills = blast.assignedDrills || [];
  var originalDays = blast.drillDays || 7;

  // Step 5a) Proportional day split based on meters ratio
  var daysA = Math.max(1, Math.ceil(originalDays * (halfMeters / totalMeters)));
  var daysB = Math.max(1, originalDays - daysA);

  // Step 5b) Build block A — first half, same start
  var blockA = {
    id: "block-0",
    label: "A",
    drillStart: drillStart,
    drillStartTime: blast.drillStartTime || "06:00",
    drillDays: daysA,
    meters: halfMeters,
    assignedDrills: currentDrills.slice(),
    drillRates: {}
  };

  // Step 5c) Populate default drill rates from equipment
  currentDrills.forEach(function(drillId) {
    var drill = drillFleet.find(function(d) { return d.id === drillId; });
    if (drill) blockA.drillRates[drillId] = drill.rateM_per_day;
  });

  // Step 5d) Build block B — second half, starts after A
  var blockBStart = addDays(new Date(drillStart), daysA);
  var blockB = {
    id: "block-1",
    label: "B",
    drillStart: isoDate(blockBStart),
    drillStartTime: "06:00",
    drillDays: daysB,
    meters: remainMeters,
    assignedDrills: currentDrills.slice(),
    drillRates: {}
  };

  currentDrills.forEach(function(drillId) {
    var drill = drillFleet.find(function(d) { return d.id === drillId; });
    if (drill) blockB.drillRates[drillId] = drill.rateM_per_day;
  });

  blast.drillBlocks = [blockA, blockB];
  syncBlastFromBlocks(blast);
}

// Step 6) Merge all blocks back into a single-schedule blast
function mergeBlocks(blast) {
  if (!hasBlocks(blast)) return;

  // Step 6a) Use the earliest block start and union of drills
  syncBlastFromBlocks(blast);

  // Step 6b) Recalculate drillDays using effective hours
  var effectiveHrs = getEffectiveHours();
  var totalMeters = (blast.d65Meters || 0) + (blast.pvMeters || 0);
  var totalMPerDay = 0;
  blast.assignedDrills.forEach(function(drillId) {
    var drill = drillFleet.find(function(d) { return d.id === drillId; });
    if (drill) totalMPerDay += drill.rateM_per_day * effectiveHrs;
  });
  blast.drillDays = totalMPerDay > 0 ? Math.ceil(totalMeters / totalMPerDay) : 1;

  // Step 6c) Remove blocks
  delete blast.drillBlocks;
}

// Step 7) Get the latest-ending block for dependency calculations
function getLatestBlockEnd(blast) {
  if (!hasBlocks(blast)) return null;
  var latest = null;
  blast.drillBlocks.forEach(function(block) {
    var end = addDays(new Date(block.drillStart), (block.drillDays || 1) - 1);
    if (!latest || end > latest) latest = end;
  });
  return latest;
}

// Step 8) Add a new block to an existing split
function addBlock(blast) {
  if (!hasBlocks(blast)) return;
  var idx = blast.drillBlocks.length;
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var label = idx < labels.length ? labels[idx] : "B" + idx;

  blast.drillBlocks.push({
    id: "block-" + idx,
    label: label,
    drillStart: blast.drillStart || isoDate(new Date()),
    drillStartTime: "06:00",
    drillDays: 1,
    meters: 0,
    assignedDrills: [],
    drillRates: {}
  });
}

// Step 9) Split a blast (or block) at a specific date and remove a drill from the
//  second part.  The remaining meters in the second block are recalculated with
//  fewer drills, which extends the timeline naturally.
//
//  Scenario: Blast has 4 drills drilling for 6 days.  On day 3, one drill
//  goes to maintenance.  User right-clicks the bar on day 3, selects
//  "Pull PV271-02 from 2026-03-05".
//
//  Result:  Block A — days 1-2, all 4 drills, proportional meters
//           Block B — day 3 onward, 3 drills, remaining meters (recalculated → longer)
function splitAndRemoveDrill(blast, drillId, fromDate, blockIdx) {
  var effectiveHrs = getEffectiveHours();

  if (hasBlocks(blast) && blockIdx !== null && blast.drillBlocks[blockIdx]) {
    // Step 9a) Already in blocks — split the target block
    var block = blast.drillBlocks[blockIdx];
    var blockStart = new Date(block.drillStart);
    var splitDate = new Date(fromDate);
    var daysBefore = Math.round((splitDate - blockStart) / 86400000);

    if (daysBefore <= 0) {
      // Step 9a-i) Removing from the very start — just remove the drill
      var idx = (block.assignedDrills || []).indexOf(drillId);
      if (idx !== -1) block.assignedDrills.splice(idx, 1);
      if (block.drillRates) delete block.drillRates[drillId];
      block.drillDays = calcBlockDays(block);
      syncBlastFromBlocks(blast);
      return;
    }

    // Step 9a-ii) Calculate meters drilled in the "before" period
    var totalMPerDay = 0;
    (block.assignedDrills || []).forEach(function(did) {
      var penRate = 0;
      if (block.drillRates && block.drillRates[did] !== undefined) {
        penRate = block.drillRates[did];
      } else {
        var drill = drillFleet.find(function(d) { return d.id === did; });
        if (drill) penRate = drill.rateM_per_day;
      }
      totalMPerDay += penRate * effectiveHrs;
    });

    var metersBefore = totalMPerDay * daysBefore;
    metersBefore = Math.min(metersBefore, block.meters || 0);
    var metersAfter = Math.max(0, (block.meters || 0) - metersBefore);

    // Step 9a-iii) Shrink the existing block to the "before" period
    var origLabel = block.label;
    block.drillDays = daysBefore;
    block.meters = Math.round(metersBefore * 10) / 10;

    // Step 9a-iv) Create a new block for the "after" period without the removed drill
    var newDrills = (block.assignedDrills || []).filter(function(did) {
      return did !== drillId;
    });

    var newRates = {};
    newDrills.forEach(function(did) {
      if (block.drillRates && block.drillRates[did] !== undefined) {
        newRates[did] = block.drillRates[did];
      } else {
        var drill = drillFleet.find(function(d) { return d.id === did; });
        if (drill) newRates[did] = drill.rateM_per_day;
      }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newIdx = blast.drillBlocks.length;
    var newLabel = newIdx < labels.length ? labels[newIdx] : "B" + newIdx;

    var newBlock = {
      id: "block-" + newIdx,
      label: newLabel,
      drillStart: isoDate(splitDate),
      drillStartTime: block.drillStartTime || "06:00",
      drillDays: 1,
      meters: Math.round(metersAfter * 10) / 10,
      assignedDrills: newDrills,
      drillRates: newRates
    };

    // Step 9a-v) Calculate how long the remaining meters will take with fewer drills
    newBlock.drillDays = calcBlockDays(newBlock);

    // Step 9a-vi) Insert the new block after the original
    blast.drillBlocks.splice(blockIdx + 1, 0, newBlock);

    syncBlastFromBlocks(blast);
    return;
  }

  // Step 9b) Blast is NOT yet in blocks — create two blocks from it
  var drillStart = new Date(blast.drillStart);
  var splitDate2 = new Date(fromDate);
  var daysBefore2 = Math.round((splitDate2 - drillStart) / 86400000);
  var currentDrills = blast.assignedDrills || [];
  var totalMeters = (blast.d65Meters || 0) + (blast.pvMeters || 0);

  if (daysBefore2 <= 0) {
    // Step 9b-i) Removing from the very start — just remove the drill
    var idx2 = currentDrills.indexOf(drillId);
    if (idx2 !== -1) currentDrills.splice(idx2, 1);
    return;
  }

  // Step 9b-ii) Calculate daily production with all drills
  var totalMPerDay2 = 0;
  currentDrills.forEach(function(did) {
    var drill = drillFleet.find(function(d) { return d.id === did; });
    if (drill) totalMPerDay2 += drill.rateM_per_day * effectiveHrs;
  });

  var metersBefore2 = totalMPerDay2 * daysBefore2;
  metersBefore2 = Math.min(metersBefore2, totalMeters);
  var metersAfter2 = Math.max(0, totalMeters - metersBefore2);

  // Step 9b-iii) Build block A — all drills, meters drilled so far
  var blockA = {
    id: "block-0",
    label: "A",
    drillStart: blast.drillStart,
    drillStartTime: blast.drillStartTime || "06:00",
    drillDays: daysBefore2,
    meters: Math.round(metersBefore2 * 10) / 10,
    assignedDrills: currentDrills.slice(),
    drillRates: {}
  };

  currentDrills.forEach(function(did) {
    var drill = drillFleet.find(function(d) { return d.id === did; });
    if (drill) blockA.drillRates[did] = drill.rateM_per_day;
  });

  // Step 9b-iv) Build block B — minus the removed drill, remaining meters
  var afterDrills = currentDrills.filter(function(did) { return did !== drillId; });
  var blockB = {
    id: "block-1",
    label: "B",
    drillStart: isoDate(splitDate2),
    drillStartTime: "06:00",
    drillDays: 1,
    meters: Math.round(metersAfter2 * 10) / 10,
    assignedDrills: afterDrills,
    drillRates: {}
  };

  afterDrills.forEach(function(did) {
    var drill = drillFleet.find(function(d) { return d.id === did; });
    if (drill) blockB.drillRates[did] = drill.rateM_per_day;
  });

  blockB.drillDays = calcBlockDays(blockB);

  // Step 9b-v) Apply blocks to the blast
  blast.drillBlocks = [blockA, blockB];
  syncBlastFromBlocks(blast);
}

export {
  hasBlocks,
  calcBlockDays,
  recalcBlockDays,
  syncBlastFromBlocks,
  splitBlast,
  mergeBlocks,
  getLatestBlockEnd,
  addBlock,
  splitAndRemoveDrill
};
