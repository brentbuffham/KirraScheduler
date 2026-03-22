// ============================================================
//  RESET DIALOG
//  Allows selective clearing of Kirra Scheduler data.
//  Each category can be independently checked.
//  "Reset All" is a master toggle that selects everything.
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills, mpus, ancillary, people } from "../state/equipmentState.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { renderPatterns } from "../views/patternLibrary.js";
import { renderForecast } from "../views/forecastView.js";
import { renderConformance } from "../views/conformanceView.js";
import { renderEquipment } from "../views/equipmentView.js";
import { clearStartupKey } from "./startupDialog.js";
import { clearDB, debouncedSave } from "../state/schedulerDB.js";

// Step 1) Show the reset dialog as a modal overlay
function showResetDialog() {
  // Step 1a) Prevent duplicate dialogs
  if (document.getElementById("resetDialogOverlay")) return;

  var overlay = document.createElement("div");
  overlay.id = "resetDialogOverlay";
  overlay.className = "reset-overlay";

  var dialog = document.createElement("div");
  dialog.className = "reset-dialog";

  // Step 1b) Build the dialog content
  var html = "";

  // Step 2) Header with warning icon
  html += "<div class=\"reset-header\">";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" width=\"28\" height=\"28\">";
  html += "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/>";
  html += "<line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/>";
  html += "</svg>";
  html += "<h3>Reset Kirra Scheduler</h3>";
  html += "</div>";

  // Step 3) Warning message
  html += "<div class=\"reset-warning\">";
  html += "<strong>This action cannot be undone.</strong> ";
  html += "Export a <em>Kirra Gantt Project (.kgp)</em> file first if you want to preserve your current schedule.";
  html += "</div>";

  // Step 4) Checkbox form
  html += "<div class=\"reset-form\">";

  // -- Reset All --
  html += "<label class=\"reset-option reset-option-all\">";
  html += "<input type=\"checkbox\" id=\"resetAll\" value=\"all\">";
  html += "<span class=\"reset-option-text\">Reset All</span>";
  html += "<span class=\"reset-option-desc\">Wipe the Kirra Gantt of all information</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Spatial
  // =========================================================
  html += "<div class=\"reset-section-label\">Spatial</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetPolygons\" value=\"polygons\">";
  html += "<span class=\"reset-option-text\">Remove Polygons and Volumes without Drill Holes</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetDrillPlans\" value=\"drillPlans\">";
  html += "<span class=\"reset-option-text\">Remove Designed Drill Plans</span>";
  html += "<span class=\"reset-option-desc\">Clears all blast entries from the schedule</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Configurations
  // =========================================================
  html += "<div class=\"reset-section-label\">Configurations</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetPatterns\" value=\"patterns\">";
  html += "<span class=\"reset-option-text\">Remove Pattern Specifications</span>";
  html += "<span class=\"reset-option-desc\">Clears the Pattern Library</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetChargeConfigs\" value=\"chargeConfigs\">";
  html += "<span class=\"reset-option-text\">Remove Charge Configurations</span>";
  html += "<span class=\"reset-option-desc\">Clears imported charge configs</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Equipment
  // =========================================================
  html += "<div class=\"reset-section-label\">Equipment</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetDrillFleet\" value=\"drillFleet\">";
  html += "<span class=\"reset-option-text\">Remove Drill Fleet</span>";
  html += "<span class=\"reset-option-desc\">Clears all drill rigs and their assignments</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetLoadFleet\" value=\"loadFleet\">";
  html += "<span class=\"reset-option-text\">Remove Loading Fleet</span>";
  html += "<span class=\"reset-option-desc\">Clears all MPUs and their assignments</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetMaintenance\" value=\"maintenance\">";
  html += "<span class=\"reset-option-text\">Remove Maintenance Windows</span>";
  html += "<span class=\"reset-option-desc\">Clears scheduled maintenance from drills and MPUs (keeps the rigs)</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetAncillary\" value=\"ancillary\">";
  html += "<span class=\"reset-option-text\">Remove Ancillary Fleet</span>";
  html += "<span class=\"reset-option-desc\">Clears dozers, graders, excavators, loaders, rollers</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetPersonnel\" value=\"personnel\">";
  html += "<span class=\"reset-option-text\">Remove Personnel Roster</span>";
  html += "<span class=\"reset-option-desc\">Clears the named personnel list</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Spatial / 3D
  // =========================================================
  html += "<div class=\"reset-section-label\">Spatial / 3D</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetSurfaces\" value=\"surfaces\">";
  html += "<span class=\"reset-option-text\">Remove 3D Surfaces</span>";
  html += "<span class=\"reset-option-desc\">Clears imported pit shell surfaces</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetSolids\" value=\"solids\">";
  html += "<span class=\"reset-option-text\">Remove 3D Solids</span>";
  html += "<span class=\"reset-option-desc\">Clears imported blast solids and block models</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetProducts\" value=\"products\">";
  html += "<span class=\"reset-option-text\">Remove Product Library</span>";
  html += "<span class=\"reset-option-desc\">Clears explosive product definitions from charge config imports</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Scheduling
  // =========================================================
  html += "<div class=\"reset-section-label\">Scheduling</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetDelays\" value=\"delays\">";
  html += "<span class=\"reset-option-text\">Remove All Delays</span>";
  html += "<span class=\"reset-option-desc\">Strips UD, SD, SM, UM, UP, SP, UW, SW, LP delays from all blasts</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetBlocks\" value=\"blocks\">";
  html += "<span class=\"reset-option-text\">Remove Drill Blocks / Splits</span>";
  html += "<span class=\"reset-option-desc\">Merges split blocks back to single-phase drilling per blast</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetCrew\" value=\"crew\">";
  html += "<span class=\"reset-option-text\">Remove Crew Allocations</span>";
  html += "<span class=\"reset-option-desc\">Clears OP/FT/SF crew assignments from all blasts</span>";
  html += "</label>";

  html += "<div class=\"reset-divider\"></div>";

  // =========================================================
  //  Section: Targets & Settings
  // =========================================================
  html += "<div class=\"reset-section-label\">Targets &amp; Settings</div>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetConformance\" value=\"conformance\">";
  html += "<span class=\"reset-option-text\">Reset Conformance Targets</span>";
  html += "<span class=\"reset-option-desc\">Resets target BCM, actual BCM, and target MTD to zero</span>";
  html += "</label>";

  html += "<label class=\"reset-option\">";
  html += "<input type=\"checkbox\" id=\"resetSettings\" value=\"settings\">";
  html += "<span class=\"reset-option-text\">Reset Global Settings to Defaults</span>";
  html += "<span class=\"reset-option-desc\">Rig hours 24, availability 0.85, utilisation 0.75, default dependency rules</span>";
  html += "</label>";

  html += "</div>";

  // Step 5) Action buttons
  html += "<div class=\"reset-actions\">";
  html += "<button class=\"btn reset-btn-cancel\" id=\"resetCancel\">Cancel</button>";
  html += "<button class=\"btn reset-btn-confirm\" id=\"resetConfirm\" disabled>";
  html += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"14\" height=\"14\">";
  html += "<path d=\"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>";
  html += "</svg>";
  html += " Reset Selected";
  html += "</button>";
  html += "</div>";

  dialog.innerHTML = html;
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  // Step 6) Wire up event listeners

  // Step 6a) "Reset All" master toggle
  var resetAllCb = document.getElementById("resetAll");
  var childCheckboxes = dialog.querySelectorAll(".reset-form input[type=\"checkbox\"]:not(#resetAll)");

  resetAllCb.addEventListener("change", function() {
    var checked = resetAllCb.checked;
    childCheckboxes.forEach(function(cb) {
      cb.checked = checked;
      cb.disabled = checked;
    });
    updateConfirmState();
  });

  // Step 6b) Individual checkboxes — auto-check "Reset All" when all ticked
  childCheckboxes.forEach(function(cb) {
    cb.addEventListener("change", function() {
      var allChecked = true;
      childCheckboxes.forEach(function(c) {
        if (!c.checked) allChecked = false;
      });
      resetAllCb.checked = allChecked;
      updateConfirmState();
    });
  });

  // Step 6c) Enable/disable confirm button based on selection
  function updateConfirmState() {
    var anyChecked = resetAllCb.checked;
    if (!anyChecked) {
      childCheckboxes.forEach(function(cb) {
        if (cb.checked) anyChecked = true;
      });
    }
    document.getElementById("resetConfirm").disabled = !anyChecked;
  }

  // Step 6d) Cancel button closes the dialog
  document.getElementById("resetCancel").addEventListener("click", function() {
    overlay.remove();
  });

  // Step 6e) Click outside dialog to close
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) overlay.remove();
  });

  // Step 6f) Escape key to close
  var escHandler = function(e) {
    if (e.key === "Escape") {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);

  // Step 6g) Confirm button — perform the reset
  document.getElementById("resetConfirm").addEventListener("click", function() {
    performReset();
    overlay.remove();
  });
}

// Step 7) Perform the actual data reset based on checked options
function performReset() {
  var isAll = document.getElementById("resetAll").checked;

  // Step 7a) Spatial — Remove blasts that have no drill holes (polygon/volume only)
  if (isAll || document.getElementById("resetPolygons").checked) {
    APP.blasts = APP.blasts.filter(function(b) {
      return getTotalDrillMeters(b) > 0;
    });
  }

  // Step 7b) Spatial — Remove designed drill plans (all blasts)
  if (isAll || document.getElementById("resetDrillPlans").checked) {
    APP.blasts = [];
    APP.importedBlasts = [];
  }

  // Step 7c) Configurations — Remove pattern specifications
  if (isAll || document.getElementById("resetPatterns").checked) {
    APP.patterns = [];
  }

  // Step 7d) Configurations — Remove charge configurations
  if (isAll || document.getElementById("resetChargeConfigs").checked) {
    APP.chargeConfigs = [];
  }

  // Step 7e) Equipment — Remove drill fleet
  if (isAll || document.getElementById("resetDrillFleet").checked) {
    drills.length = 0;
    APP.blasts.forEach(function(b) {
      b.assignedDrills = [];
      if (b.drillBlocks) {
        b.drillBlocks.forEach(function(block) {
          block.assignedDrills = [];
          block.drillRates = {};
        });
      }
    });
  }

  // Step 7f) Equipment — Remove loading fleet
  if (isAll || document.getElementById("resetLoadFleet").checked) {
    mpus.length = 0;
    // Step 7f-i) Clear MPU assignments (migrated to array)
    APP.blasts.forEach(function(b) {
      b.assignedMPUs = [];
    });
  }

  // Step 7g) Equipment — Remove maintenance windows only (keep rigs)
  if (isAll || document.getElementById("resetMaintenance").checked) {
    drills.forEach(function(d) { d.maintenance = []; });
    mpus.forEach(function(m) { m.maintenance = []; });
  }

  // Step 7h) Equipment — Remove ancillary fleet
  if (isAll || document.getElementById("resetAncillary").checked) {
    ancillary.length = 0;
    APP.blasts.forEach(function(b) {
      b.assignedAncillary = [];
    });
  }

  // Step 7h-ii) Equipment — Remove personnel roster
  if (isAll || document.getElementById("resetPersonnel").checked) {
    people.length = 0;
  }

  // Step 7h-iii) Spatial — Remove 3D surfaces
  if (isAll || document.getElementById("resetSurfaces").checked) {
    APP.kirraProjectSurfaces = [];
  }

  // Step 7h-iv) Spatial — Remove 3D solids
  if (isAll || document.getElementById("resetSolids").checked) {
    APP.kirraProjectSolids = [];
  }

  // Step 7h-v) Library — Remove product library
  if (isAll || document.getElementById("resetProducts").checked) {
    APP.products = [];
  }

  // Step 7i) Scheduling — Remove all delays from blasts
  if (isAll || document.getElementById("resetDelays").checked) {
    APP.blasts.forEach(function(b) {
      b.delays = [];
    });
  }

  // Step 7j) Scheduling — Remove drill blocks (merge back to single phase)
  if (isAll || document.getElementById("resetBlocks").checked) {
    APP.blasts.forEach(function(b) {
      if (b.drillBlocks && b.drillBlocks.length > 0) {
        // Step) Merge total meters from all blocks
        var totalMeters = 0;
        b.drillBlocks.forEach(function(block) {
          totalMeters += (block.meters || 0);
        });
        // Step) Collect unique drills from all blocks
        var allDrills = [];
        b.drillBlocks.forEach(function(block) {
          (block.assignedDrills || []).forEach(function(dId) {
            if (allDrills.indexOf(dId) === -1) allDrills.push(dId);
          });
        });
        b.assignedDrills = allDrills;
        delete b.drillBlocks;
      }
    });
  }

  // Step 7k) Scheduling — Remove crew allocations
  if (isAll || document.getElementById("resetCrew").checked) {
    APP.blasts.forEach(function(b) {
      delete b.crewAllocated;
    });
  }

  // Step 7l) Targets — Reset conformance
  if (isAll || document.getElementById("resetConformance").checked) {
    APP.conformance = {
      targetBCM: 0,
      actualBCM: 0,
      targetMTD: 0,
      monthStart: new Date().toISOString().split("T")[0].slice(0, 8) + "01"
    };
  }

  // Step 7m) Settings — Reset global settings to defaults
  if (isAll || document.getElementById("resetSettings").checked) {
    APP.rigHours = 24;
    APP.availability = 0.85;
    APP.utilisation = 0.75;
    APP.ganttWeeks = 8;
    APP.planWeekColors = [];
    APP.deps = {
      drillPctForLoad: 0.5,
      drillPctForBlast: 1.0,
      loadPctForBlast: 1.0,
      minLeadDays: 0,
      enforceSequence: true,
      drillOverlapPct: 1.0
    };
    // Step) Update the toolbar inputs to reflect defaults
    var elPlanStart = document.getElementById("planStart");
    var elWeeks = document.getElementById("ganttWeeks");
    var elRigHours = document.getElementById("rigHours");
    var elAvail = document.getElementById("availability");
    var elUtil = document.getElementById("utilisation");
    if (elWeeks) elWeeks.value = APP.ganttWeeks;
    if (elRigHours) elRigHours.value = APP.rigHours;
    if (elAvail) elAvail.value = APP.availability;
    if (elUtil) elUtil.value = APP.utilisation;
  }

  // Step 7n) If Reset All was selected, clear the startup key so the
  //          welcome dialog reappears on next page load
  if (isAll) {
    clearStartupKey();
  }

  // Step 8) Recalculate and re-render everything
  recalcDependencies();
  renderGantt();
  renderBlasts();
  renderPatterns();
  renderForecast();
  renderConformance();
  renderEquipment();

  // Step 8b) Persist the reset state (clear if Reset All, otherwise save current)
  if (isAll) {
    clearDB();
  } else {
    debouncedSave();
  }
}

// Step 9) Initialise the reset button event listener
function initResetDialog() {
  var btn = document.getElementById("btnResetGantt");
  if (btn) {
    btn.addEventListener("click", showResetDialog);
  }
}

export { initResetDialog, showResetDialog };
