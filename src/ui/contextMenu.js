// ============================================================
//  CONTEXT MENU
//  Right-click menu for blast rows in the Gantt chart
// ============================================================

import { APP } from "../state/appState.js";
import { editBlast } from "../dialogs/blastModal.js";
import { renderGantt } from "../views/ganttView.js";

// Step 1) Show context menu at cursor position
function showCtxMenu(e, idx, section) {
  e.preventDefault();
  APP.ctxBlastIdx = idx;
  APP.ctxSection = section;
  var menu = document.getElementById("contextMenu");
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

// Step 6) Initialise context menu event listeners
function initContextMenu() {
  // Close context menu on any click
  document.addEventListener("click", function() {
    document.getElementById("contextMenu").style.display = "none";
  });

  // Bind menu items
  document.getElementById("ctxEdit").addEventListener("click", editBlastFromCtx);
  document.getElementById("ctxDrilling").addEventListener("click", function() { setBlastStatus("drilling"); });
  document.getElementById("ctxLoading").addEventListener("click", function() { setBlastStatus("loading"); });
  document.getElementById("ctxFired").addEventListener("click", function() { setBlastStatus("fired"); });
  document.getElementById("ctxDuplicate").addEventListener("click", duplicateBlast);
  document.getElementById("ctxRemove").addEventListener("click", removeBlast);
}

export { showCtxMenu, initContextMenu };
