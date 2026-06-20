// ============================================================
//  BLAST STATUS
//  Single source of truth for a blast's lifecycle status.
//  Used by the context menu, Gantt rows, and Blast Overview so
//  every surface shows the same colour/label/icon language.
//  Colours match the right-click menu dots:
//    planned ⚪ grey · drilling 🔵 blue · loading 🟡 amber · fired 🔴 red
// ============================================================

// Step 1) Status definitions — code, label, colour, badge class, dot icon
var BLAST_STATUSES = [
  { code: "planned",  label: "Planned",  color: "#94a3b8", badgeClass: "badge-planned",  icon: "⚪", terminal: false },
  { code: "drilling", label: "Drilling", color: "#3b82f6", badgeClass: "badge-drilling", icon: "🔵", terminal: false },
  { code: "loading",  label: "Loading",  color: "#f59e0b", badgeClass: "badge-loading",  icon: "🟡", terminal: false },
  { code: "fired",    label: "Fired",    color: "#ef4444", badgeClass: "badge-fired",    icon: "🔴", terminal: true }
];

// Step 2) Lookup helper — always returns a definition (falls back to planned)
function getBlastStatus(code) {
  for (var i = 0; i < BLAST_STATUSES.length; i++) {
    if (BLAST_STATUSES[i].code === code) return BLAST_STATUSES[i];
  }
  return BLAST_STATUSES[0];
}

// Step 3) Is this blast in a terminal (completed) state?
function isTerminalStatus(code) {
  return getBlastStatus(code).terminal;
}

export { BLAST_STATUSES, getBlastStatus, isTerminalStatus };
