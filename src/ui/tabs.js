// ============================================================
//  TAB NAVIGATION
//  Manages switching between tab panels
// ============================================================

import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { renderPatterns } from "../views/patternLibrary.js";
import { renderForecast } from "../views/forecastView.js";
import { renderConformance } from "../views/conformanceView.js";
import { renderEquipment } from "../views/equipmentView.js";
import { renderBlastCalendar } from "../views/blastCalendar.js";

// Step 1) Initialise tab click handlers
function initTabs() {
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      // Step 2) Deactivate all tabs and panels
      document.querySelectorAll(".tab").forEach(function(t) { t.classList.remove("active"); });
      document.querySelectorAll(".tab-panel").forEach(function(p) { p.classList.remove("active"); });

      // Step 3) Activate selected tab and panel
      tab.classList.add("active");
      document.getElementById("tab-" + tab.dataset.tab).classList.add("active");

      // Step 4) Render the corresponding view on switch
      var id = tab.dataset.tab;
      if (id === "gantt") renderGantt();
      else if (id === "blasts") {
        renderBlasts();
        // Step 4a) Also render calendar if its sub-tab is active
        var calTab = document.querySelector(".blast-sub-tab[data-subtab='blastCalendarPane'].active");
        if (calTab) renderBlastCalendar();
      }
      else if (id === "patterns") renderPatterns();
      else if (id === "forecast") renderForecast();
      else if (id === "conformance") renderConformance();
      else if (id === "equipment") renderEquipment();
    });
  });
}

export { initTabs };
