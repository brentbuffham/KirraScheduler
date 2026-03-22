// ============================================================
//  FLEET CONFLICTS
//  Detects over-allocation of drills across overlapping blasts.
//  Builds a daily usage map and flags days where a drill type
//  is used more times than the fleet count.
// ============================================================

import { APP } from "../state/appState.js";
import { drills as drillFleet } from "../state/equipmentState.js";
import { hasBlocks } from "./blockHelpers.js";
import { addDays, isoDate } from "../utils/dateUtils.js";

// Step 1) Build a map of drillId -> [dates] for every blast
//  Returns { "PV271-01": { "2026-03-01": ["XYZ-226-412"], ... }, ... }
function buildDailyDrillUsage() {
  var usage = {};

  APP.blasts.forEach(function(blast) {
    if (!blast.drillStart) return;

    if (hasBlocks(blast)) {
      // Step 1a) Block-level assignments
      (blast.drillBlocks || []).forEach(function(block) {
        if (!block.drillStart || !block.assignedDrills) return;
        var start = new Date(block.drillStart);
        var days = block.drillDays || 1;

        block.assignedDrills.forEach(function(drillId) {
          if (!usage[drillId]) usage[drillId] = {};
          for (var d = 0; d < days; d++) {
            var ds = isoDate(addDays(start, d));
            if (!usage[drillId][ds]) usage[drillId][ds] = [];
            usage[drillId][ds].push(blast.name);
          }
        });
      });
    } else {
      // Step 1b) Blast-level assignments
      var assignedDrills = blast.assignedDrills || [];
      if (assignedDrills.length === 0) return;
      var start = new Date(blast.drillStart);
      var days = blast.drillDays || 1;

      assignedDrills.forEach(function(drillId) {
        if (!usage[drillId]) usage[drillId] = {};
        for (var d = 0; d < days; d++) {
          var ds = isoDate(addDays(start, d));
          if (!usage[drillId][ds]) usage[drillId][ds] = [];
          usage[drillId][ds].push(blast.name);
        }
      });
    }
  });

  return usage;
}

// Step 2) Detect conflicts: any drill used on 2+ blasts on the same day
//  Returns array of { drillId, date, blasts: [name, name], drillType }
function detectFleetConflicts() {
  var usage = buildDailyDrillUsage();
  var conflicts = [];

  Object.keys(usage).forEach(function(drillId) {
    var dates = usage[drillId];
    Object.keys(dates).forEach(function(ds) {
      if (dates[ds].length > 1) {
        var drill = drillFleet.find(function(d) { return d.id === drillId; });
        conflicts.push({
          drillId: drillId,
          drillType: drill ? (drill.model || drill.type) : "Unknown",
          date: ds,
          blasts: dates[ds]
        });
      }
    });
  });

  return conflicts;
}

  // Step 3) Build a per-model daily count vs fleet size
  //  Returns { "PV271": { "2026-03-01": { used: 5, available: 4, over: true }, ... } }
function detectTypeOverAllocation() {
  var usage = buildDailyDrillUsage();
  var typeOverMap = {};

  // Step 3a) Count how many of each model are in the fleet
  var typeCounts = {};
  drillFleet.forEach(function(drill) {
    if (drill.status === "demobilised") return;
    var modelKey = drill.model || drill.type;
    if (!typeCounts[modelKey]) typeCounts[modelKey] = 0;
    typeCounts[modelKey]++;
  });

  // Step 3b) Count daily usage per model
  var typeDailyUsage = {};
  Object.keys(usage).forEach(function(drillId) {
    var drill = drillFleet.find(function(d) { return d.id === drillId; });
    if (!drill) return;
    var modelKey = drill.model || drill.type;
    if (!typeDailyUsage[modelKey]) typeDailyUsage[modelKey] = {};

    Object.keys(usage[drillId]).forEach(function(ds) {
      if (!typeDailyUsage[modelKey][ds]) typeDailyUsage[modelKey][ds] = 0;
      typeDailyUsage[modelKey][ds]++;
    });
  });

  // Step 3c) Compare against fleet size
  Object.keys(typeDailyUsage).forEach(function(type) {
    var avail = typeCounts[type] || 0;
    var dates = typeDailyUsage[type];

    Object.keys(dates).forEach(function(ds) {
      var used = dates[ds];
      if (used > avail) {
        if (!typeOverMap[type]) typeOverMap[type] = {};
        typeOverMap[type][ds] = { used: used, available: avail };
      }
    });
  });

  return typeOverMap;
}

// Step 4) Build a quick-lookup set: "blastName|date" entries where a conflict exists
//  Used by ganttView to mark cells
function buildConflictCellSet() {
  var conflicts = detectFleetConflicts();
  var cellSet = {};

  conflicts.forEach(function(c) {
    c.blasts.forEach(function(blastName) {
      var key = blastName + "|" + c.date;
      if (!cellSet[key]) cellSet[key] = [];
      cellSet[key].push(c.drillId);
    });
  });

  return cellSet;
}

export {
  buildDailyDrillUsage,
  detectFleetConflicts,
  detectTypeOverAllocation,
  buildConflictCellSet
};
