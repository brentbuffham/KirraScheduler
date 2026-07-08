// ============================================================
//  PATTERN PREP HELPERS
//  Shared logic for seeding a Pattern Prep window on a blast.
//  Kept dependency-light (no view/db imports) so it can be reused by
//  the import merge, the Gantt toolbar button and the right-click menu
//  without creating circular module dependencies.
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate, addDays } from "./dateUtils.js";

// Step 1) Seed a Pattern Prep window on a single blast.
//   Prep finishes the day BEFORE drilling starts (or plan start if the blast
//   has no drill date yet). Blasts that already have prep are left untouched.
export function applyPrepToBlast(blast, prepDays) {
  if (!blast || !prepDays || prepDays < 1) return false;
  // Step 1a) Never overwrite existing prep
  if (blast.prepStart && blast.prepDays) return false;
  var anchor = blast.drillStart || isoDate(APP.planStart);
  blast.prepStart = isoDate(addDays(new Date(anchor), -prepDays));
  blast.prepDays = prepDays;
  return true;
}

// Step 2) Bulk-seed Pattern Prep on every blast that doesn't already have one.
//   Returns the number of blasts that were newly prepped. Callers are
//   responsible for persisting (debouncedSave) and re-rendering the Gantt.
export function sendAllToPatternPrep(prepDays) {
  var days = prepDays && prepDays >= 1 ? prepDays : 1;
  var count = 0;
  (APP.blasts || []).forEach(function(b) {
    if (applyPrepToBlast(b, days)) count++;
  });
  return count;
}
