// ============================================================
//  EXCAVATION HELPERS
//  Shared logic for seeding an Excavation cycle on a blast.
//  Kept dependency-light (no view/db imports) so it can be reused by
//  the Gantt toolbar button and the right-click menu without creating
//  circular module dependencies. Duration is finalised by the
//  dependency engine (rate-driven from assigned dig equipment); this
//  just establishes the cycle so the engine has something to compute.
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate, addDays } from "./dateUtils.js";
import { pickDefaultExcavator } from "../state/equipmentState.js";

// Step 1) Seed an Excavation cycle on a single blast.
//   Excavation begins the day AFTER the blast fires. Blasts that already
//   have an excavation start are left untouched. The excavDays value is a
//   1-day placeholder — the engine overrides it from the dig-rate once
//   excavation equipment is assigned (unless the user manually resized it).
export function applyExcavToBlast(blast) {
  if (!blast) return false;
  // Step 1a) Clear any previous "no excavation" flag so the cycle shows.
  blast.noExcav = false;
  // Step 1b) Never overwrite an existing excavation window.
  if (blast.excavStart) return false;
  // Step 1c) Anchor to the day after firing; fall back to plan start when
  //   the blast has no blast date yet (e.g. no-blast grade-control blasts).
  var anchor = blast.blastDate || isoDate(APP.planStart);
  blast.excavStart = isoDate(addDays(new Date(anchor), 1));
  blast.excavStartManual = false;
  if (!blast.excavDays) blast.excavDays = 1;
  blast.excavDaysManual = false;
  // Step 1d) Auto-assign a dig unit when none selected so Gantt duration,
  //  dependency recalc and 3D playback all have equipment to work with.
  if (!blast.assignedExcavators || blast.assignedExcavators.length === 0) {
    var defUnit = pickDefaultExcavator();
    if (defUnit) blast.assignedExcavators = [defUnit.id];
  }
  return true;
}

// Step 2) Bulk-seed Excavation on every blast that doesn't already have one.
//   Returns the number of blasts newly given an excavation cycle. Callers
//   are responsible for recalc/persist/re-render.
export function sendAllToExcavation() {
  var count = 0;
  (APP.blasts || []).forEach(function(b) {
    if (applyExcavToBlast(b)) count++;
  });
  return count;
}
