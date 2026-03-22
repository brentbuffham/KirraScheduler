// ============================================================
//  STARTUP DIALOG
//  First-run dialog asking the user whether to load example
//  data or start from a blank slate.
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus, ancillary, people } from "../state/equipmentState.js";

var STORAGE_KEY = "kirra-scheduler-setup";

// Step 1) Check whether the startup dialog should be shown
function shouldShowStartup() {
  return !localStorage.getItem(STORAGE_KEY);
}

// Step 2) Clear all seed data for a fresh start
function clearSeedData() {
  // Step 2a) Remove all example blasts and imported blasts
  APP.blasts.length = 0;
  APP.importedBlasts.length = 0;

  // Step 2b) Remove all example equipment
  drills.length = 0;
  mpus.length = 0;
  ancillary.length = 0;
  people.length = 0;

  // Step 2c) Clear pattern library
  APP.patterns.length = 0;

  // Step 2d) Clear charge configurations and product library
  APP.chargeConfigs.length = 0;
  APP.products.length = 0;

  // Step 2e) Clear 3D spatial data (surfaces and solids)
  APP.kirraProjectSurfaces.length = 0;
  APP.kirraProjectSolids.length = 0;

  // Step 2f) Clear per-week custom colours
  APP.planWeekColors.length = 0;

  // Step 2g) Reset conformance to zeroes
  APP.conformance = {
    targetBCM: 0,
    actualBCM: 0,
    targetMTD: 0,
    monthStart: new Date().toISOString().split("T")[0].slice(0, 8) + "01",
    actuals: [],
    dateLocale: "australia"
  };
}

// Step 3) Mark startup as complete so the dialog does not reappear
function markStartupComplete(choice) {
  localStorage.setItem(STORAGE_KEY, choice);
}

// Step 4) Clear the startup key (called by Reset to re-show dialog)
function clearStartupKey() {
  localStorage.removeItem(STORAGE_KEY);
}

// Step 5) Show the startup dialog and return a Promise that resolves
//         with "examples" or "fresh"
function showStartupDialog() {
  return new Promise(function(resolve) {
    // Step 5a) Build overlay
    var overlay = document.createElement("div");
    overlay.className = "startup-overlay";

    var dialog = document.createElement("div");
    dialog.className = "startup-dialog";

    // Step 5b) Logo and heading
    dialog.innerHTML =
      "<div class=\"startup-logo\">" +
        "<img src=\"icons/icon-192.png\" alt=\"Kirra\" width=\"64\" height=\"64\" onerror=\"this.style.display='none'\">" +
      "</div>" +
      "<h2 class=\"startup-title\">Welcome to Kirra Scheduler</h2>" +
      "<p class=\"startup-subtitle\">Drill &amp; Blast Open Cut Planning</p>" +
      "<div class=\"startup-divider\"></div>" +
      "<p class=\"startup-prompt\">How would you like to get started?</p>" +
      "<div class=\"startup-options\">" +
        "<button class=\"startup-btn startup-btn-examples\" id=\"startupExamples\">" +
          "<span class=\"startup-btn-icon\">&#x1F4CB;</span>" +
          "<span class=\"startup-btn-label\">Load Example Data</span>" +
          "<span class=\"startup-btn-desc\">Pre-loaded blasts, equipment, and patterns so you can explore the app right away</span>" +
        "</button>" +
        "<button class=\"startup-btn startup-btn-fresh\" id=\"startupFresh\">" +
          "<span class=\"startup-btn-icon\">&#x2728;</span>" +
          "<span class=\"startup-btn-label\">Start From Scratch</span>" +
          "<span class=\"startup-btn-desc\">Empty schedule — set up your own equipment, patterns, and blasts</span>" +
        "</button>" +
      "</div>" +
      "<p class=\"startup-hint\">You can always reset later with the <strong style=\"color:var(--accent-blast)\">Reset</strong> button.</p>";

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    // Step 5c) Animate in
    requestAnimationFrame(function() {
      overlay.classList.add("visible");
    });

    // Step 5d) Wire button handlers
    document.getElementById("startupExamples").addEventListener("click", function() {
      close("examples");
    });
    document.getElementById("startupFresh").addEventListener("click", function() {
      close("fresh");
    });

    function close(choice) {
      overlay.classList.remove("visible");
      setTimeout(function() {
        overlay.remove();
        resolve(choice);
      }, 300);
    }
  });
}

export { shouldShowStartup, showStartupDialog, clearSeedData, markStartupComplete, clearStartupKey };
