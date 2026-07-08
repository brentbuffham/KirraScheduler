// ============================================================
//  UNDO / REDO MANAGER
//  Snapshot-based history for the blast schedule (APP.blasts).
//  A snapshot is taken BEFORE any mutating action via pushUndo().
//  Restoring simply swaps APP.blasts back to a captured clone — the
//  clone already carries the correct _computed dates, so no recalc
//  is needed (which keeps the restored state exactly faithful).
// ============================================================

import { APP } from "./appState.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { debouncedSave } from "./schedulerDB.js";

// Step U0) History stacks — capped at MAX_UNDO levels each.
var MAX_UNDO = 20;
var undoStack = [];   // each entry: { label: string, blasts: [...] }
var redoStack = [];

// Step U0a) Deep-clone the schedule. structuredClone is fastest and
//   preserves nested polygons/deps/_computed; JSON is the fallback.
function cloneBlasts() {
  try {
    if (typeof structuredClone === "function") return structuredClone(APP.blasts);
  } catch (e) { /* fall through to JSON */ }
  return JSON.parse(JSON.stringify(APP.blasts || []));
}

// Step U1) Capture the current schedule BEFORE a mutating action.
//   Call this at the top of any handler that changes APP.blasts.
function pushUndo(label) {
  undoStack.push({ label: label || "edit", blasts: cloneBlasts() });
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  // Step U1a) A fresh action invalidates the redo history.
  redoStack.length = 0;
  updateUndoUI();
}

// Step U2) Restore the most recent snapshot (Ctrl+Z).
function undo() {
  if (undoStack.length === 0) { showUndoToast("Nothing to undo", false); return; }
  // Step U2a) Stash current state so the undo itself can be redone.
  redoStack.push({ label: "state", blasts: cloneBlasts() });
  if (redoStack.length > MAX_UNDO) redoStack.shift();
  var snap = undoStack.pop();
  APP.blasts = snap.blasts;
  afterRestore("Undo: " + snap.label);
}

// Step U3) Re-apply the last undone snapshot (Ctrl+Y / Ctrl+Shift+Z).
function redo() {
  if (redoStack.length === 0) { showUndoToast("Nothing to redo", false); return; }
  undoStack.push({ label: "state", blasts: cloneBlasts() });
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  var snap = redoStack.pop();
  APP.blasts = snap.blasts;
  afterRestore("Redo");
}

// Step U4) Common re-render + persist after a restore.
function afterRestore(msg) {
  debouncedSave();
  try { renderGantt(); } catch (e) { console.error("Undo: renderGantt failed", e); }
  try { renderBlasts(); } catch (e) { console.error("Undo: renderBlasts failed", e); }
  updateUndoUI();
  showUndoToast(msg, true);
}

// Step U5) Enable/disable the header Undo/Redo buttons to reflect depth.
function updateUndoUI() {
  var u = document.getElementById("btnUndo");
  var r = document.getElementById("btnRedo");
  if (u) {
    u.disabled = undoStack.length === 0;
    u.title = undoStack.length === 0 ? "Nothing to undo (Ctrl+Z)" : "Undo " + undoStack[undoStack.length - 1].label + " (Ctrl+Z) — " + undoStack.length + " level(s)";
  }
  if (r) r.disabled = redoStack.length === 0;
}

// Step U6) Transient toast so the user gets clear confirmation of an undo/redo.
function showUndoToast(message, success) {
  var existing = document.getElementById("undoToast");
  if (existing) existing.remove();
  var toast = document.createElement("div");
  toast.id = "undoToast";
  toast.className = "drop-feedback " + (success ? "drop-feedback-ok" : "drop-feedback-warn");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.classList.add("drop-feedback-fade");
    setTimeout(function() { if (toast.parentNode) toast.remove(); }, 400);
  }, 1800);
}

// Step U7) Wire buttons + keyboard shortcuts. Call once at app init.
function initUndo() {
  var u = document.getElementById("btnUndo");
  var r = document.getElementById("btnRedo");
  if (u) u.addEventListener("click", undo);
  if (r) r.addEventListener("click", redo);

  document.addEventListener("keydown", function(e) {
    // Step U7a) Ignore shortcuts while typing in a field.
    var t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
    var ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;
    var key = (e.key || "").toLowerCase();
    if (key === "z" && !e.shiftKey) {
      e.preventDefault();
      undo();
    } else if ((key === "y") || (key === "z" && e.shiftKey)) {
      e.preventDefault();
      redo();
    }
  });

  updateUndoUI();
}

export { pushUndo, undo, redo, initUndo, updateUndoUI };
