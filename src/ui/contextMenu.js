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
import { DELAY_TYPES, createDelay } from "../state/delayTypes.js";
import { CREW_ROLES, ensureCrewAllocated } from "../state/crewRoles.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 1) Show context menu at cursor position (from sticky-col right-click)
function showCtxMenu(e, idx, section, blockIdx) {
  e.preventDefault();
  APP.ctxBlastIdx = idx;
  APP.ctxSection = section;
  APP.ctxBlockIdx = (blockIdx !== null && blockIdx !== undefined) ? blockIdx : null;
  APP.ctxDelayIdx = null;

  var menu = document.getElementById("contextMenu");
  var blast = APP.blasts[idx];

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

    // Step 1f-iii) Build dynamic equipment items for bar context too
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
        // Step 1g-iii-a) Remove this MPU from the array
        var arr = blast.assignedMPUs || [];
        var ri = arr.indexOf(mpuId);
        if (ri !== -1) arr.splice(ri, 1);
        blast.assignedMPUs = arr;
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
}

export { showCtxMenu, showBarCtxMenu, initContextMenu };
