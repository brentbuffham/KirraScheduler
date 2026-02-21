// ============================================================
//  EQUIPMENT STATE
//  Drills, Mobile Processing Units (MPUs), People,
//  and Maintenance Windows
// ============================================================

// Step 1) Drill rig fleet — each drill has a diameter capability range
var drills = [
  {
    id: "D65-01", name: "D65 #1", type: "D65",
    minDiam: 127, maxDiam: 229,
    rateM_per_day: 19,
    status: "available",
    maintenance: [
      { start: "2026-03-10", end: "2026-03-12", reason: "5000hr Service" }
    ]
  },
  {
    id: "D65-02", name: "D65 #2", type: "D65",
    minDiam: 127, maxDiam: 229,
    rateM_per_day: 19,
    status: "available",
    maintenance: []
  },
  {
    id: "PV271-01", name: "PV271 #1", type: "PV271",
    minDiam: 200, maxDiam: 311,
    rateM_per_day: 20,
    status: "available",
    maintenance: [
      { start: "2026-03-15", end: "2026-03-17", reason: "Track replacement" }
    ]
  },
  {
    id: "PV271-02", name: "PV271 #2", type: "PV271",
    minDiam: 200, maxDiam: 311,
    rateM_per_day: 20,
    status: "available",
    maintenance: []
  },
  {
    id: "PV271-03", name: "PV271 #3", type: "PV271",
    minDiam: 200, maxDiam: 311,
    rateM_per_day: 20,
    status: "available",
    maintenance: [
      { start: "2026-03-20", end: "2026-03-22", reason: "Engine overhaul" }
    ]
  },
  {
    id: "PV271-04", name: "PV271 #4", type: "PV271",
    minDiam: 200, maxDiam: 311,
    rateM_per_day: 20,
    status: "available",
    maintenance: []
  }
];

// Step 2) Mobile Processing Units (MPUs) — emulsion loading trucks
var mpus = [
  {
    id: "MPU-01", name: "MPU #1", type: "Emulsion",
    capacity_kg: 20000, rateKg_per_day: 100000,
    status: "available",
    maintenance: []
  },
  {
    id: "MPU-02", name: "MPU #2", type: "Emulsion",
    capacity_kg: 20000, rateKg_per_day: 80000,
    status: "available",
    maintenance: [
      { start: "2026-03-08", end: "2026-03-09", reason: "Pump service" }
    ]
  }
];

// Step 3) Personnel list
var people = [
  { id: "P001", name: "John Smith",     role: "Drill Operator",     certifiedTypes: ["D65", "PV271"] },
  { id: "P002", name: "Sarah Johnson",  role: "Drill Operator",     certifiedTypes: ["PV271"] },
  { id: "P003", name: "Mike Williams",  role: "Drill Operator",     certifiedTypes: ["D65"] },
  { id: "P004", name: "Emma Davis",     role: "Shot Firer",         certifiedTypes: [] },
  { id: "P005", name: "James Wilson",   role: "Blast Engineer",     certifiedTypes: [] },
  { id: "P006", name: "Lisa Brown",     role: "Loading Operator",   certifiedTypes: [] },
  { id: "P007", name: "David Taylor",   role: "Drill Offsider",     certifiedTypes: ["D65"] },
  { id: "P008", name: "Amy Anderson",   role: "Loading Operator",   certifiedTypes: [] }
];

// Step 4) Helper — check if a drill can handle a given diameter (mm)
function canDrillDiameter(drill, diamMm) {
  return diamMm >= drill.minDiam && diamMm <= drill.maxDiam;
}

// Step 5) Helper — check if a drill is in maintenance on a given date
function isDrillInMaintenance(drill, dateStr) {
  for (var i = 0; i < drill.maintenance.length; i++) {
    var m = drill.maintenance[i];
    if (dateStr >= m.start && dateStr <= m.end) return true;
  }
  return false;
}

// Step 6) Helper — get all maintenance days for a drill between two dates
function getMaintenanceDays(drill, startStr, endStr) {
  var days = [];
  for (var i = 0; i < drill.maintenance.length; i++) {
    var m = drill.maintenance[i];
    // Overlap check
    if (m.end >= startStr && m.start <= endStr) {
      var mStart = m.start < startStr ? startStr : m.start;
      var mEnd = m.end > endStr ? endStr : m.end;
      var d = new Date(mStart);
      var end = new Date(mEnd);
      while (d <= end) {
        days.push(d.toISOString().split("T")[0]);
        d.setDate(d.getDate() + 1);
      }
    }
  }
  return days;
}

// Step 7) Helper — get drills compatible with a blast's hole diameters
function getCompatibleDrills(blast) {
  var diameters = [];
  (blast.holeTypes || []).forEach(function(ht) {
    var diamMm = ht.diam >= 1 ? ht.diam : ht.diam * 1000;
    if (diameters.indexOf(diamMm) === -1) diameters.push(diamMm);
  });

  var result = {};
  diameters.forEach(function(diamMm) {
    result[diamMm] = drills.filter(function(drill) {
      return canDrillDiameter(drill, diamMm);
    });
  });
  return result;
}

// Step 8) Helper — count effective drill days (excluding maintenance)
function effectiveDrillDays(drill, startStr, numDays) {
  var effectiveDays = 0;
  var calendarDays = 0;
  var d = new Date(startStr);
  while (effectiveDays < numDays) {
    var ds = d.toISOString().split("T")[0];
    if (!isDrillInMaintenance(drill, ds)) {
      effectiveDays++;
    }
    calendarDays++;
    d.setDate(d.getDate() + 1);
    if (calendarDays > numDays + 60) break; // safety limit
  }
  return calendarDays;
}

export {
  drills,
  mpus,
  people,
  canDrillDiameter,
  isDrillInMaintenance,
  getMaintenanceDays,
  getCompatibleDrills,
  effectiveDrillDays
};
