// ============================================================
//  CREW ROLES
//  Generic role types for equipment crew allocation.
//  OP = Operator, FT = Field Technician, SF = Shot Firer
// ============================================================

// Step 1) Role definitions — code, label, and palette chip colour
var CREW_ROLES = [
  { code: "OP", label: "Operator",         color: "#22d3ee", textColor: "#000" },
  { code: "FT", label: "Field Technician", color: "#a78bfa", textColor: "#fff" },
  { code: "SF", label: "Shot Firer",       color: "#fb923c", textColor: "#000" }
];

// Step 2) Look up a role by its code
function getCrewRole(code) {
  for (var i = 0; i < CREW_ROLES.length; i++) {
    if (CREW_ROLES[i].code === code) return CREW_ROLES[i];
  }
  return null;
}

// Step 3) Compute crew required for a blast's drilling phase
//  Sums crewRequired from each assigned drill
function calcDrillCrewRequired(blast, drillsArr) {
  var needed = { OP: 0, FT: 0, SF: 0 };
  var assignedIds = blast.assignedDrills || [];

  for (var i = 0; i < assignedIds.length; i++) {
    var drill = null;
    for (var j = 0; j < drillsArr.length; j++) {
      if (drillsArr[j].id === assignedIds[i]) { drill = drillsArr[j]; break; }
    }
    if (drill && drill.crewRequired) {
      var cr = drill.crewRequired;
      needed.OP += cr.OP || 0;
      needed.FT += cr.FT || 0;
      needed.SF += cr.SF || 0;
    }
  }
  return needed;
}

// Step 4) Compute crew required for a blast's loading phase
//  Uses crewRequired from the assigned MPU
function calcLoadCrewRequired(blast, mpusArr) {
  var needed = { OP: 0, FT: 0, SF: 0 };
  if (!blast.assignedMPU) return needed;

  var mpu = null;
  for (var i = 0; i < mpusArr.length; i++) {
    if (mpusArr[i].id === blast.assignedMPU) { mpu = mpusArr[i]; break; }
  }
  if (mpu && mpu.crewRequired) {
    var cr = mpu.crewRequired;
    needed.OP += cr.OP || 0;
    needed.FT += cr.FT || 0;
    needed.SF += cr.SF || 0;
  }
  return needed;
}

// Step 5) Ensure a blast has a crewAllocated structure (initialise if missing)
function ensureCrewAllocated(blast) {
  if (!blast.crewAllocated) {
    blast.crewAllocated = {
      drilling: { OP: 0, FT: 0, SF: 0 },
      loading:  { OP: 0, FT: 0, SF: 0 }
    };
  }
  if (!blast.crewAllocated.drilling) blast.crewAllocated.drilling = { OP: 0, FT: 0, SF: 0 };
  if (!blast.crewAllocated.loading)  blast.crewAllocated.loading  = { OP: 0, FT: 0, SF: 0 };
  return blast.crewAllocated;
}

// Step 6) Build an HTML badge string for crew fill status
//  Returns something like: <span class="crew-badge crew-ok">OP:2/2</span>
function buildCrewBadges(allocated, required) {
  var html = "";
  for (var i = 0; i < CREW_ROLES.length; i++) {
    var code = CREW_ROLES[i].code;
    var need = required[code] || 0;
    if (need === 0) continue;

    var have = allocated[code] || 0;
    var cls = "crew-badge";
    if (have >= need) {
      cls += " crew-ok";
    } else if (have > 0) {
      cls += " crew-warn";
    } else {
      cls += " crew-empty";
    }
    html += "<span class=\"" + cls + "\">" + code + ":" + have + "/" + need + "</span>";
  }
  return html;
}

export {
  CREW_ROLES,
  getCrewRole,
  calcDrillCrewRequired,
  calcLoadCrewRequired,
  ensureCrewAllocated,
  buildCrewBadges
};
