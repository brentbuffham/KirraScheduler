// ============================================================
//  CONTEXT MENU
//  Right-click menu for blast rows in the Gantt chart
//  Supports section-aware items, drill block operations,
//  delay operations, and bar-level right-click
// ============================================================

import { APP } from "../state/appState.js";
import { editBlast } from "../dialogs/blastModal.js";
import { splitBlast, mergeBlocks, hasBlocks, syncBlastFromBlocks, splitAndRemoveDrill } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { DELAY_TYPES, createDelay } from "../state/delayTypes.js";
import { CREW_ROLES, ensureCrewAllocated } from "../state/crewRoles.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { isoDate } from "../utils/dateUtils.js";
import { getSelection, clearSelection } from "./ganttSelect.js";
import { drills } from "../state/equipmentState.js";

// Step 0) Update phase toggle labels in context menu
function updatePhaseToggleLabels(blast) {
  var nd = document.getElementById("ctxToggleNoDrill");
  var nl = document.getElementById("ctxToggleNoLoad");
  var nb = document.getElementById("ctxToggleNoBlast");
  if (nd && blast) nd.textContent = blast.noDrill ? "\u2705 Enable Drilling" : "\uD83D\uDEAB No Drill";
  if (nl && blast) nl.textContent = blast.noLoad  ? "\u2705 Enable Loading"  : "\uD83D\uDEAB No Load";
  if (nb && blast) nb.textContent = blast.noBlast ? "\u2705 Enable Blasting" : "\uD83D\uDEAB No Blast";
}

// Step 0b) Show or hide the multi-select menu items.
// When multi-select is active, hide single-blast items and show multi items.
// When not active, hide multi items (single-blast items managed by caller).
function setMultiSelectMode(menu, isMulti, selectionCount) {
  var multiItems = menu.querySelectorAll(".ctx-multi");
  multiItems.forEach(function(el) {
    el.style.display = isMulti ? "" : "none";
  });
  if (isMulti) {
    // Step 0b-i) Hide all single-blast items
    menu.querySelectorAll(".ctx-general").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-drill-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-block-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-delay-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-dynamic").forEach(function(el) { el.remove(); });

    // Step 0b-ii) Update the label with count
    var label = document.getElementById("ctxMultiLabel");
    if (label) label.textContent = selectionCount + " blasts selected";
  }
}

// Step 1) Show context menu at cursor position (from sticky-col right-click)
function showCtxMenu(e, idx, section, blockIdx) {
  e.preventDefault();
  APP.ctxBlastIdx = idx;
  APP.ctxSection = section;
  APP.ctxBlockIdx = (blockIdx !== null && blockIdx !== undefined) ? blockIdx : null;
  APP.ctxDelayIdx = null;

  var menu = document.getElementById("contextMenu");
  var blast = APP.blasts[idx];

  // Step 1-MULTI) Check if we have a multi-selection
  var sel = getSelection();
  if (sel.length > 1) {
    setMultiSelectMode(menu, true, getUniqueBlastIndices(sel).length);
    menu.style.display = "block";
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    return;
  }
  setMultiSelectMode(menu, false, 0);

  // Step 1a) Show/hide section-specific items
  var drillItems = menu.querySelectorAll(".ctx-drill-only");
  drillItems.forEach(function(el) {
    el.style.display = (section === "drilling") ? "" : "none";
  });

  // Step 1b) Show/hide block-specific items
  var blockItems = menu.querySelectorAll(".ctx-block-only");
  var isBlockBlast = blast && hasBlocks(blast);
  blockItems.forEach(function(el) {
    el.style.display = (section === "drilling" && isBlockBlast) ? "" : "none";
  });

  // Step 1c) Update split label based on state
  var splitItem = document.getElementById("ctxSplitDrill");
  if (splitItem) {
    if (isBlockBlast) {
      splitItem.textContent = "\u2702 Add Block";
    } else {
      splitItem.textContent = "\u2702 Split Drill";
    }
  }

  // Step 1d) Hide delay-specific items in this mode
  var delayItems = menu.querySelectorAll(".ctx-delay-only");
  delayItems.forEach(function(el) { el.style.display = "none"; });

  // Step 1e) Show general items
  menu.querySelectorAll(".ctx-general").forEach(function(el) { el.style.display = ""; });

  // Step 1e-ii) Update phase toggle labels
  updatePhaseToggleLabels(blast);

  // Step 1f-pre) Build dynamic equipment items for this blast/section
  buildDynamicEquipItems(menu, blast, section, APP.ctxBlockIdx);

  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
}

// Step 1f) Show context menu from bar right-click — supports delay bars too
function showBarCtxMenu(e, blastIdx, section, blockIdx, delayIdx, clickDate) {
  e.preventDefault();
  APP.ctxBlastIdx = blastIdx;
  APP.ctxSection = section;
  APP.ctxBlockIdx = (blockIdx !== null && blockIdx !== undefined) ? blockIdx : null;
  APP.ctxDelayIdx = (delayIdx !== null && delayIdx !== undefined) ? delayIdx : null;
  APP.ctxClickDate = clickDate || null;

  var menu = document.getElementById("contextMenu");
  var blast = APP.blasts[blastIdx];

  // Step 1f-MULTI) Check if we have a multi-selection
  var sel = getSelection();
  if (sel.length > 1) {
    setMultiSelectMode(menu, true, getUniqueBlastIndices(sel).length);
    menu.style.display = "block";
    menu.style.left = e.clientX + "px";
    menu.style.top = e.clientY + "px";
    return;
  }
  setMultiSelectMode(menu, false, 0);

  // Step 1f-i) If a delay bar was right-clicked, show delay-specific items
  if (delayIdx !== null) {
    menu.querySelectorAll(".ctx-general").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-drill-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-block-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-delay-only").forEach(function(el) { el.style.display = ""; });
  } else {
    // Step 1f-ii) Standard bar right-click — same as sticky-col
    var drillItems = menu.querySelectorAll(".ctx-drill-only");
    drillItems.forEach(function(el) {
      el.style.display = (section === "drilling") ? "" : "none";
    });

    var blockItems = menu.querySelectorAll(".ctx-block-only");
    var isBlockBlast = blast && hasBlocks(blast);
    blockItems.forEach(function(el) {
      el.style.display = (section === "drilling" && isBlockBlast) ? "" : "none";
    });

    var splitItem = document.getElementById("ctxSplitDrill");
    if (splitItem) {
      splitItem.textContent = isBlockBlast ? "\u2702 Add Block" : "\u2702 Split Drill";
    }

    menu.querySelectorAll(".ctx-delay-only").forEach(function(el) { el.style.display = "none"; });
    menu.querySelectorAll(".ctx-general").forEach(function(el) { el.style.display = ""; });

    // Step 1f-iii) Update phase toggle labels
    updatePhaseToggleLabels(blast);

    // Step 1f-iv) Build dynamic equipment items for bar context too
    buildDynamicEquipItems(menu, blast, section, APP.ctxBlockIdx);
  }

  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
}

// Step 1g) Build dynamic "Remove Drill" / "Remove MPU" items in context menu
function buildDynamicEquipItems(menu, blast, section, blockIdx) {
  // Step 1g-i) Remove any previously generated dynamic items
  menu.querySelectorAll(".ctx-dynamic").forEach(function(el) { el.remove(); });

  if (!blast) return;
  var dividerRef = menu.querySelector(".ctx-divider.ctx-general");

  // Step 1g-ii) For DRILLING section, show "Remove [drillId]" for each assigned drill
  if (section === "drilling") {
    var assignedDrills;
    var isBlock = (blockIdx !== null && blast.drillBlocks && blast.drillBlocks[blockIdx]);

    if (isBlock) {
      assignedDrills = blast.drillBlocks[blockIdx].assignedDrills || [];
    } else {
      assignedDrills = blast.assignedDrills || [];
    }

    if (assignedDrills.length > 0) {
      var sep = document.createElement("div");
      sep.className = "ctx-divider ctx-dynamic";
      menu.insertBefore(sep, dividerRef);

      var label = document.createElement("div");
      label.className = "ctx-label ctx-dynamic";
      label.textContent = "Assigned Drills";
      menu.insertBefore(label, dividerRef);

      assignedDrills.forEach(function(drillId) {
        var item = document.createElement("div");
        item.className = "ctx-item ctx-dynamic";
        item.style.color = "var(--accent-blast)";
        item.innerHTML = "\u2716 Remove " + drillId + " entirely";
        item.addEventListener("click", function() {
          removeDrillFromBlast(blast, drillId, blockIdx);
        });
        menu.insertBefore(item, dividerRef);
      });

      // Step 1g-ii-b) "Remove drill from [date] onward" — splits into blocks
      if (APP.ctxClickDate && assignedDrills.length > 1) {
        var drillRange = getDrillRange(blast, blockIdx);
        var isFirstDay = (APP.ctxClickDate === drillRange.start);
        var isLastDay = (APP.ctxClickDate === drillRange.end);

        // Step) Only show date-split options if we're NOT on the first or last day
        if (!isFirstDay && !isLastDay) {
          var dateSep = document.createElement("div");
          dateSep.className = "ctx-divider ctx-dynamic";
          menu.insertBefore(dateSep, dividerRef);

          var dateLabel = document.createElement("div");
          dateLabel.className = "ctx-label ctx-dynamic";
          dateLabel.textContent = "Remove from " + APP.ctxClickDate + " onward";
          menu.insertBefore(dateLabel, dividerRef);

          assignedDrills.forEach(function(drillId) {
            var dateItem = document.createElement("div");
            dateItem.className = "ctx-item ctx-dynamic";
            dateItem.style.color = "var(--accent-load)";
            dateItem.innerHTML = "\u2702 Pull " + drillId + " from " + APP.ctxClickDate;
            dateItem.addEventListener("click", function() {
              removeDrillFromDate(blast, drillId, APP.ctxClickDate, blockIdx);
            });
            menu.insertBefore(dateItem, dividerRef);
          });
        }
      }
    }
  }

  // Step 1g-iii) For LOADING section, show "Remove MPU" for each assigned MPU (migrated to array)
  var assignedMPUList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
  if (section === "loading" && assignedMPUList.length > 0) {
    var sep2 = document.createElement("div");
    sep2.className = "ctx-divider ctx-dynamic";
    menu.insertBefore(sep2, dividerRef);

    var mpuLabel = document.createElement("div");
    mpuLabel.className = "ctx-label ctx-dynamic";
    mpuLabel.textContent = "Assigned MPUs";
    menu.insertBefore(mpuLabel, dividerRef);

    assignedMPUList.forEach(function(mpuId) {
      var mpuItem = document.createElement("div");
      mpuItem.className = "ctx-item ctx-dynamic";
      mpuItem.style.color = "var(--accent-blast)";
      mpuItem.innerHTML = "\u2716 Remove " + mpuId;
      mpuItem.addEventListener("click", function() {
        // Step 1g-iii-a) Remove this MPU from the array and clear rate overrides
        var arr = blast.assignedMPUs || [];
        var ri = arr.indexOf(mpuId);
        if (ri !== -1) arr.splice(ri, 1);
        blast.assignedMPUs = arr;
        delete blast.mpuRates;
        recalcDependencies();
        renderGantt();
      });
      menu.insertBefore(mpuItem, dividerRef);
    });
  }

  // Step 1g-iv) Show crew removal items for this section
  var crew = ensureCrewAllocated(blast);
  var sectionCrew = crew[section];
  if (!sectionCrew) return;

  var hasAnyCrew = false;
  for (var ci = 0; ci < CREW_ROLES.length; ci++) {
    if ((sectionCrew[CREW_ROLES[ci].code] || 0) > 0) { hasAnyCrew = true; break; }
  }

  if (hasAnyCrew) {
    var crewSep = document.createElement("div");
    crewSep.className = "ctx-divider ctx-dynamic";
    menu.insertBefore(crewSep, dividerRef);

    var crewLabel = document.createElement("div");
    crewLabel.className = "ctx-label ctx-dynamic";
    crewLabel.textContent = "Crew (" + section + ")";
    menu.insertBefore(crewLabel, dividerRef);

    CREW_ROLES.forEach(function(role) {
      var count = sectionCrew[role.code] || 0;
      if (count <= 0) return;

      var crewItem = document.createElement("div");
      crewItem.className = "ctx-item ctx-dynamic";
      crewItem.style.color = role.color;
      crewItem.innerHTML = "\u2716 Remove 1 " + role.code + " (have " + count + ")";
      crewItem.addEventListener("click", function() {
        sectionCrew[role.code] = Math.max(0, (sectionCrew[role.code] || 0) - 1);
        renderGantt();
      });
      menu.insertBefore(crewItem, dividerRef);
    });
  }
}

// Step 1g-v) Get start/end dates for the drilling phase of a blast (or block)
function getDrillRange(blast, blockIdx) {
  var isBlock = (blockIdx !== null && blast.drillBlocks && blast.drillBlocks[blockIdx]);
  if (isBlock) {
    var block = blast.drillBlocks[blockIdx];
    var s = block.drillStart;
    var days = block.drillDays || 1;
    var end = new Date(s);
    end.setDate(end.getDate() + days - 1);
    return { start: s, end: end.toISOString().split("T")[0] };
  }
  var s2 = blast.drillStart;
  var days2 = blast.drillDays || 1;
  var end2 = new Date(s2);
  end2.setDate(end2.getDate() + days2 - 1);
  return { start: s2, end: end2.toISOString().split("T")[0] };
}

// Step 1g-vi) Remove a drill from a specific date onward — auto-splits into blocks
function removeDrillFromDate(blast, drillId, fromDate, blockIdx) {
  var blastIdx = APP.blasts.indexOf(blast);
  splitAndRemoveDrill(blast, drillId, fromDate, blockIdx);
  recalcDependencies();
  renderGantt();
}

// Step 1h) Remove a specific drill from a blast (or block)
function removeDrillFromBlast(blast, drillId, blockIdx) {
  var isBlock = (blockIdx !== null && blast.drillBlocks && blast.drillBlocks[blockIdx]);

  if (isBlock) {
    var block = blast.drillBlocks[blockIdx];
    var idx = (block.assignedDrills || []).indexOf(drillId);
    if (idx !== -1) block.assignedDrills.splice(idx, 1);
    if (block.drillRates) delete block.drillRates[drillId];
    syncBlastFromBlocks(blast);
  } else {
    var idx2 = (blast.assignedDrills || []).indexOf(drillId);
    if (idx2 !== -1) blast.assignedDrills.splice(idx2, 1);
    // Step 1h-i) Clear per-blast drill rate overrides when equipment changes
    delete blast.drillRates;
  }

  recalcDependencies();
  renderGantt();
}

// Step 2) Edit blast from context menu
function editBlastFromCtx() {
  editBlast(APP.ctxBlastIdx);
}

// Step 3) Set blast status from context menu
function setBlastStatus(status) {
  APP.blasts[APP.ctxBlastIdx].status = status;
  debouncedSave();
  renderGantt();
}

// Step 4) Duplicate a blast
function duplicateBlast() {
  var b = JSON.parse(JSON.stringify(APP.blasts[APP.ctxBlastIdx]));
  b.name += "_copy";
  b.status = "planned";
  APP.blasts.push(b);
  debouncedSave();
  renderGantt();
}

// Step 5) Remove a blast with confirmation
function removeBlast() {
  if (confirm("Remove " + APP.blasts[APP.ctxBlastIdx].name + "?")) {
    APP.blasts.splice(APP.ctxBlastIdx, 1);
    debouncedSave();
    renderGantt();
  }
}

// Step 6) Split drill into two blocks (or add a block if already split)
function splitDrillFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;

  if (hasBlocks(blast)) {
    // Step 6a) Already split — add another block
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newIdx = blast.drillBlocks.length;
    var label = newIdx < labels.length ? labels[newIdx] : "B" + newIdx;
    blast.drillBlocks.push({
      id: "block-" + newIdx,
      label: label,
      drillStart: blast.drillStart,
      drillStartTime: "06:00",
      drillDays: 1,
      meters: 0,
      assignedDrills: [],
      drillRates: {}
    });
  } else {
    // Step 6b) First split — create two blocks from current schedule
    splitBlast(blast);
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
}

// Step 7) Merge all blocks back into single schedule
function mergeBlocksFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;
  mergeBlocks(blast);
  recalcDependencies();
  debouncedSave();
  renderGantt();
}

// Step 8) Edit a specific block — dispatch event for blockEditModal
function editBlockFromCtx() {
  document.dispatchEvent(new CustomEvent("editBlock", {
    detail: { blastIdx: APP.ctxBlastIdx, blockIdx: APP.ctxBlockIdx }
  }));
}

// Step 8b) Remove a delay from the current blast
function removeDelayFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast || !blast.delays || APP.ctxDelayIdx === null) return;
  blast.delays.splice(APP.ctxDelayIdx, 1);
  renderGantt();
}

// Step 8c) Extend delay by 1 day
function extendDelayFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast || !blast.delays || APP.ctxDelayIdx === null) return;
  blast.delays[APP.ctxDelayIdx].days += 1;
  renderGantt();
}

// Step 8d) Shrink delay by 1 day (min 1)
function shrinkDelayFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast || !blast.delays || APP.ctxDelayIdx === null) return;
  var delay = blast.delays[APP.ctxDelayIdx];
  if (delay.days > 1) delay.days -= 1;
  renderGantt();
}

// Step 8e) Toggle No-Drill mode (decoupled load/blast without drilling)
function toggleNoDrillFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;

  blast.noDrill = !blast.noDrill;

  if (blast.noDrill) {
    if (!blast.loadStart) {
      blast.loadStart = blast.drillStart || isoDate(APP.planStart);
      blast.loadStartManual = true;
    }
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
}

// Step 8f) Toggle No-Load mode (drill/blast without loading)
function toggleNoLoadFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;
  blast.noLoad = !blast.noLoad;
  recalcDependencies();
  debouncedSave();
  renderGantt();
}

// Step 8g) Toggle No-Blast mode (drill/load only — grade control)
function toggleNoBlastFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;
  blast.noBlast = !blast.noBlast;
  recalcDependencies();
  debouncedSave();
  renderGantt();
}

// ============================================================
//  MULTI-SELECT ACTIONS
// ============================================================

// Step MS-1) Get unique blast indices from the selection array
function getUniqueBlastIndices(sel) {
  var seen = {};
  var result = [];
  for (var i = 0; i < sel.length; i++) {
    var idx = sel[i].blastIdx;
    if (!seen[idx]) {
      seen[idx] = true;
      result.push(idx);
    }
  }
  return result;
}

// Step MS-2) Recalculate block meters for all selected blasts.
// Uses Volume / Surface Area as the average bench height for each blast,
// then recalculates hole depth, drill meters, and explosive mass per holeType.
function recalcBlockMetersMulti() {
  var sel = getSelection();
  var indices = getUniqueBlastIndices(sel);
  var updated = 0;
  var skipped = 0;

  for (var i = 0; i < indices.length; i++) {
    var blast = APP.blasts[indices[i]];
    if (!blast) continue;

    // Step MS-2a) Require volume, surface area, and at least one holeType
    if (!blast.volume || blast.volume <= 0 || !blast.surfaceArea || blast.surfaceArea <= 0) {
      skipped++;
      continue;
    }
    if (!blast.holeTypes || blast.holeTypes.length === 0) {
      skipped++;
      continue;
    }

    // Step MS-2b) Enable useBlockDepth flag
    blast.useBlockDepth = true;

    // Step MS-2c) Calculate average bench height from the 3D solid
    var blockBenchHt = blast.volume / blast.surfaceArea;

    // Step MS-2d) Recalculate each holeType's depth, meters, and mass
    var totalExpMass = 0;
    for (var h = 0; h < blast.holeTypes.length; h++) {
      var ht = blast.holeTypes[h];
      var pattern = APP.patterns.find(function(p) { return p.id === ht.patternId; });
      if (!pattern) continue;

      // Step MS-2e) Depth = blockBenchHt / sin(angle) + subdrill
      var angle = pattern.holeAngle || 90;
      var radians = angle * Math.PI / 180;
      var sinAngle = Math.sin(radians);
      if (sinAngle < 0.01) sinAngle = 1;
      var depth = Math.round((blockBenchHt / sinAngle + (pattern.subdrill || 0)) * 100) / 100;

      ht.holeDepth = depth;
      ht.drillMeters = Math.round(ht.holes * depth * 10) / 10;

      // Step MS-2f) Explosive mass
      if (ht.isLineDrill) {
        ht.expMass = Math.round(ht.drillMeters * pattern.pf);
      } else {
        ht.expMass = Math.round(ht.holes * pattern.burden * pattern.spacing * blockBenchHt * pattern.pf);
      }
      totalExpMass += ht.expMass;
    }

    // Step MS-2g) Update blast-level explosive mass
    blast.expMass = totalExpMass;

    // Step MS-2h) Recalculate drill days from equipment rates
    var totalMeters = 0;
    for (var h2 = 0; h2 < blast.holeTypes.length; h2++) {
      totalMeters += blast.holeTypes[h2].drillMeters || 0;
    }
    if (totalMeters > 0 && blast.assignedDrills && blast.assignedDrills.length > 0) {
      var effHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);
      var totalDailyM = 0;
      for (var d = 0; d < blast.assignedDrills.length; d++) {
        var drillObj = drills.find(function(dd) { return dd.id === blast.assignedDrills[d]; });
        if (drillObj) totalDailyM += (drillObj.rateM_per_day || 0) * effHrs;
      }
      if (totalDailyM > 0) {
        blast.drillDays = Math.max(1, Math.ceil(totalMeters / totalDailyM));
      }
    }

    // Step MS-2i) Recalculate load days
    var effectiveLoadRate = blast.loadRate || 100000;
    if (blast.expMass > 0 && effectiveLoadRate > 0) {
      blast.loadDays = Math.max(1, Math.ceil(blast.expMass / effectiveLoadRate));
    }

    updated++;
  }

  // Step MS-2j) Persist, recalculate dependencies, and re-render
  recalcDependencies();
  debouncedSave();
  renderGantt();
  renderBlasts();

  // Step MS-2k) Summary notification
  var msg = "Recalculated block meters for " + updated + " blast" + (updated !== 1 ? "s" : "");
  if (skipped > 0) msg += " (" + skipped + " skipped — missing volume or area)";
  console.log("[Multi-Select] " + msg);
}

// Step MS-3) Enable "Use Block Depth" on all selected blasts, then recalculate
function enableBlockDepthMulti() {
  var sel = getSelection();
  var indices = getUniqueBlastIndices(sel);
  for (var i = 0; i < indices.length; i++) {
    var blast = APP.blasts[indices[i]];
    if (blast) blast.useBlockDepth = true;
  }
  recalcBlockMetersMulti();
}

// Step MS-4) Remove all selected blasts with confirmation
function removeSelectedBlasts() {
  var sel = getSelection();
  var indices = getUniqueBlastIndices(sel);
  if (indices.length === 0) return;
  if (!confirm("Remove " + indices.length + " selected blast" + (indices.length !== 1 ? "s" : "") + "?")) return;

  // Step MS-4a) Sort descending so splice indices stay valid
  indices.sort(function(a, b) { return b - a; });
  for (var i = 0; i < indices.length; i++) {
    APP.blasts.splice(indices[i], 1);
  }
  clearSelection();
  debouncedSave();
  recalcDependencies();
  renderGantt();
  renderBlasts();
}

// Step 9) Initialise context menu event listeners
function initContextMenu() {
  // Step 9a) Close context menu on any click
  document.addEventListener("click", function() {
    document.getElementById("contextMenu").style.display = "none";
  });

  // Step 9b) Bind menu items
  document.getElementById("ctxEdit").addEventListener("click", editBlastFromCtx);
  document.getElementById("ctxDrilling").addEventListener("click", function() { setBlastStatus("drilling"); });
  document.getElementById("ctxLoading").addEventListener("click", function() { setBlastStatus("loading"); });
  document.getElementById("ctxFired").addEventListener("click", function() { setBlastStatus("fired"); });
  document.getElementById("ctxToggleNoDrill").addEventListener("click", toggleNoDrillFromCtx);
  document.getElementById("ctxToggleNoLoad").addEventListener("click", toggleNoLoadFromCtx);
  document.getElementById("ctxToggleNoBlast").addEventListener("click", toggleNoBlastFromCtx);
  document.getElementById("ctxDuplicate").addEventListener("click", duplicateBlast);
  document.getElementById("ctxRemove").addEventListener("click", removeBlast);
  document.getElementById("ctxSplitDrill").addEventListener("click", splitDrillFromCtx);
  document.getElementById("ctxMergeBlocks").addEventListener("click", mergeBlocksFromCtx);
  document.getElementById("ctxEditBlock").addEventListener("click", editBlockFromCtx);

  // Step 9c) Bind delay context menu items
  var ctxRemoveDelay = document.getElementById("ctxRemoveDelay");
  var ctxExtendDelay = document.getElementById("ctxExtendDelay");
  var ctxShrinkDelay = document.getElementById("ctxShrinkDelay");
  if (ctxRemoveDelay) ctxRemoveDelay.addEventListener("click", removeDelayFromCtx);
  if (ctxExtendDelay) ctxExtendDelay.addEventListener("click", extendDelayFromCtx);
  if (ctxShrinkDelay) ctxShrinkDelay.addEventListener("click", shrinkDelayFromCtx);

  // Step 9d) Bind multi-select context menu items
  var ctxRecalc = document.getElementById("ctxRecalcBlockMeters");
  var ctxEnableBD = document.getElementById("ctxEnableBlockDepth");
  var ctxRemoveSel = document.getElementById("ctxRemoveSelected");
  if (ctxRecalc) ctxRecalc.addEventListener("click", recalcBlockMetersMulti);
  if (ctxEnableBD) ctxEnableBD.addEventListener("click", enableBlockDepthMulti);
  if (ctxRemoveSel) ctxRemoveSel.addEventListener("click", removeSelectedBlasts);
}

export { showCtxMenu, showBarCtxMenu, initContextMenu };
