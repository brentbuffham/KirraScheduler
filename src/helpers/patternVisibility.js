// ============================================================
//  PATTERN VISIBILITY — group + per-pattern Gantt palette gate
// ============================================================

import { APP } from "../state/appState.js";

// Step 1) Find which group owns a pattern id
function findGroupForPattern(patternId) {
  if (!APP.patternGroups) return null;
  for (var gi = 0; gi < APP.patternGroups.length; gi++) {
    var g = APP.patternGroups[gi];
    if ((g.patternIds || []).indexOf(patternId) !== -1) return g;
  }
  return null;
}

// Step 2) Group-level Gantt visibility (default visible)
function isGroupVisibleToGantt(group) {
  if (!group) return true;
  return group.visibleToGantt !== false;
}

// Step 3) Effective visibility — pattern AND its group must be visible
function isPatternVisibleToGantt(patternOrId) {
  var pattern = patternOrId;
  if (typeof patternOrId === "string") {
    pattern = null;
    for (var i = 0; i < APP.patterns.length; i++) {
      if (APP.patterns[i].id === patternOrId) {
        pattern = APP.patterns[i];
        break;
      }
    }
  }
  if (!pattern) return false;
  if (pattern.visibleToGantt === false) return false;
  var group = findGroupForPattern(pattern.id);
  return isGroupVisibleToGantt(group);
}

export { findGroupForPattern, isGroupVisibleToGantt, isPatternVisibleToGantt };
