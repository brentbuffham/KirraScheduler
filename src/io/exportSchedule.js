// ============================================================
//  EXPORT SCHEDULE
//  Export blast schedule as JSON
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate } from "../utils/dateUtils.js";

// Step 1) Export the complete schedule to a JSON file download
function exportSchedule() {
  var data = {
    exportDate: new Date().toISOString(),
    settings: {
      planStart: isoDate(APP.planStart),
      rigHours: APP.rigHours,
      availability: APP.availability,
      utilisation: APP.utilisation
    },
    blasts: APP.blasts,
    patterns: APP.patterns,
    chargeConfigs: APP.chargeConfigs
  };

  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "blast_schedule_" + isoDate(new Date()) + ".json";
  a.click();
  URL.revokeObjectURL(url);
}

// Step 2) Initialise export button
function initExport() {
  document.getElementById("btnExport").addEventListener("click", exportSchedule);
}

export { exportSchedule, initExport };
