// ============================================================
//  DELAY TYPES
//  Definitions for schedule delay/interruption categories
//  Used in Gantt delay blocks and the drag-and-drop palette
// ============================================================

// Step 1) Delay type definitions — each has a code, label, color, and category
var DELAY_TYPES = [
  { code: "UD", label: "Unscheduled Down",        color: "#ef4444", category: "down",        textColor: "#fff" },
  { code: "SD", label: "Scheduled Down",           color: "#f97316", category: "down",        textColor: "#fff" },
  { code: "SM", label: "Scheduled Maintenance",    color: "#a855f7", category: "maintenance", textColor: "#fff" },
  { code: "UM", label: "Unscheduled Maintenance",  color: "#ec4899", category: "maintenance", textColor: "#fff" },
  { code: "UP", label: "Unscheduled Process",      color: "#06b6d4", category: "process",     textColor: "#fff" },
  { code: "SP", label: "Scheduled Process",        color: "#14b8a6", category: "process",     textColor: "#fff" },
  { code: "UW", label: "Unscheduled Weather",      color: "#64748b", category: "weather",     textColor: "#fff" },
  { code: "SW", label: "Scheduled Weather",        color: "#94a3b8", category: "weather",     textColor: "#000" },
  { code: "LP", label: "Low People",               color: "#eab308", category: "people",      textColor: "#000" }
];

// Step 2) Lookup helper — get delay definition by code
function getDelayType(code) {
  for (var i = 0; i < DELAY_TYPES.length; i++) {
    if (DELAY_TYPES[i].code === code) return DELAY_TYPES[i];
  }
  return null;
}

// Step 3) Generate a unique delay ID
var _delayCounter = 0;
function nextDelayId() {
  _delayCounter++;
  return "delay-" + Date.now() + "-" + _delayCounter;
}

// Step 4) Create a new delay object for a blast
function createDelay(typeCode, startDate, days, section) {
  var dt = getDelayType(typeCode);
  return {
    id: nextDelayId(),
    type: typeCode,
    label: dt ? dt.label : typeCode,
    start: startDate,
    days: days || 1,
    section: section || "drilling"
  };
}

export { DELAY_TYPES, getDelayType, nextDelayId, createDelay };
