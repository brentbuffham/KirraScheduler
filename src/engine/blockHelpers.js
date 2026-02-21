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

export {
  hasBlocks,
  calcBlockDays,
  recalcBlockDays,
  syncBlastFromBlocks,
  splitBlast,
  mergeBlocks,
  getLatestBlockEnd,
  addBlock
};
