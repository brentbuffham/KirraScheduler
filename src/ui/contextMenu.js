// ============================================================
//  CONTEXT MENU
//  Right-click menu for blast rows in the Gantt chart
//  Supports section-aware items and drill block operations
// ============================================================

import { APP } from "../state/appState.js";
import { editBlast } from "../dialogs/blastModal.js";
import { splitBlast, mergeBlocks, hasBlocks } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";

// Step 1) Show context menu at cursor position
function showCtxMenu(e, idx, section, blockIdx) {
  e.preventDefault();
  APP.ctxBlastIdx = idx;
  APP.ctxSection = section;
  APP.ctxBlockIdx = (blockIdx !== null && blockIdx !== undefined) ? blockIdx : null;

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

  menu.style.display = "block";
  menu.style.left = e.clientX + "px";
  menu.style.top = e.clientY + "px";
}

// Step 2) Edit blast from context menu
function editBlastFromCtx() {
  editBlast(APP.ctxBlastIdx);
}

// Step 3) Set blast status from context menu
function setBlastStatus(status) {
  APP.blasts[APP.ctxBlastIdx].status = status;
  renderGantt();
}

// Step 4) Duplicate a blast
function duplicateBlast() {
  var b = JSON.parse(JSON.stringify(APP.blasts[APP.ctxBlastIdx]));
  b.name += "_copy";
  b.status = "planned";
  APP.blasts.push(b);
  renderGantt();
}

// Step 5) Remove a blast with confirmation
function removeBlast() {
  if (confirm("Remove " + APP.blasts[APP.ctxBlastIdx].name + "?")) {
    APP.blasts.splice(APP.ctxBlastIdx, 1);
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
  renderGantt();
}

// Step 7) Merge all blocks back into single schedule
function mergeBlocksFromCtx() {
  var blast = APP.blasts[APP.ctxBlastIdx];
  if (!blast) return;
  mergeBlocks(blast);
  recalcDependencies();
  renderGantt();
}

// Step 8) Edit a specific block — dispatch event for blockEditModal
function editBlockFromCtx() {
  document.dispatchEvent(new CustomEvent("editBlock", {
    detail: { blastIdx: APP.ctxBlastIdx, blockIdx: APP.ctxBlockIdx }
  }));
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
}

export { showCtxMenu, initContextMenu };
