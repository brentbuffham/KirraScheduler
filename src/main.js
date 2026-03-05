// ============================================================
//  MAIN ENTRY POINT
//  Kirra Blast Scheduler — Vite Application
//  Initialises all modules and performs first render
// ============================================================

// Step 1) Import styles
import "./styles/main.css";
import "./styles/playback.css";

// Step 2) Import modules
import { APP } from "./state/appState.js";
import { recalcDependencies } from "./engine/dependencyEngine.js";
import { initTabs } from "./ui/tabs.js";
import { initContextMenu } from "./ui/contextMenu.js";
import { initGanttDrag } from "./ui/ganttDrag.js";
import { initGanttResize } from "./ui/ganttResize.js";
import { initDelayPalette } from "./ui/delayPalette.js";
import { initThemeToggle } from "./ui/themeToggle.js";
import { initModalTabs } from "./ui/modal.js";
import { initBlastModal } from "./dialogs/blastModal.js";
import { initEquipmentModals } from "./dialogs/equipmentModal.js";
import { initBlockEditModal } from "./dialogs/blockEditModal.js";
import { initImportPreview } from "./io/importPreview.js";
import { initExport } from "./io/exportSchedule.js";
import { initResetDialog } from "./dialogs/resetDialog.js";
import { setupDropZone } from "./io/dropZone.js";
import { parseDXFFile } from "./io/dxfImport.js";
import { parseKirraConfig, parseKirraProject } from "./io/kirraImport.js";
import { initKAPImport } from "./io/kapImport.js";
import { initCalendarExport } from "./io/calendarExport.js";
import { initGanttSelect } from "./ui/ganttSelect.js";
import { initGanttReorder } from "./ui/ganttReorder.js";
import { renderGantt } from "./views/ganttView.js";
import { renderBlasts } from "./views/blastOverview.js";
import { renderPatterns, initPatternLibrary } from "./views/patternLibrary.js";
import { renderForecast } from "./views/forecastView.js";
import { renderConformance, initConformance } from "./views/conformanceView.js";
import { renderEquipment } from "./views/equipmentView.js";
import { initEquipmentLibrary } from "./io/equipmentLibrary.js";
import { initPlaybackView } from "./views/playbackView.js";
import { shouldShowStartup, showStartupDialog, clearSeedData, markStartupComplete } from "./dialogs/startupDialog.js";
import { loadState, debouncedSave, syncUIFromState } from "./state/schedulerDB.js";

// Step 3) Initialise UI event listeners (safe before data decisions)
initThemeToggle();
initTabs();
initContextMenu();
initBlastModal();
initModalTabs();
initEquipmentModals();
initBlockEditModal();
initImportPreview();
initExport();
initResetDialog();
initPatternLibrary();
initEquipmentLibrary();
initConformance();
initCalendarExport();

// Step 4) Wire up Gantt toolbar buttons
document.getElementById("btnRefreshGantt").addEventListener("click", function() {
  recalcDependencies();
  debouncedSave();
  renderGantt();
});

document.getElementById("btnRecalcDates").addEventListener("click", function() {
  recalcDependencies();
  debouncedSave();
  renderGantt();
});

// Step 4b) Plan week banding controls — re-render Gantt on change
document.getElementById("planWeekStartDay").addEventListener("change", function() {
  APP.planWeekStartDay = parseInt(this.value);
  debouncedSave();
  renderGantt();
});
document.getElementById("planCycleWeeks").addEventListener("change", function() {
  APP.planCycleWeeks = parseInt(this.value) || 1;
  debouncedSave();
  renderGantt();
});

// Step 4c) Per-week colour picker popup
document.getElementById("btnPlanWeekColors").addEventListener("click", function(e) {
  e.stopPropagation();
  var existing = document.getElementById("planWeekColorPopup");
  if (existing) { existing.remove(); return; }

  var cycleLen = APP.planCycleWeeks || 1;
  var colors = APP.planWeekColors || [];

  var popup = document.createElement("div");
  popup.id = "planWeekColorPopup";
  popup.className = "plan-week-color-popup";

  var html = "";
  for (var i = 0; i < cycleLen; i++) {
    var val = colors[i] || "#888888";
    var hasColor = !!colors[i];
    html += "<div class=\"pw-row\">";
    html += "<span class=\"pw-label\">Wk " + (i + 1) + "</span>";
    html += "<input type=\"color\" data-pw-idx=\"" + i + "\" value=\"" + val + "\">";
    html += "<span class=\"pw-clear\" data-pw-clear=\"" + i + "\" title=\"Clear custom colour\">" + (hasColor ? "\u2716" : "\u2014") + "</span>";
    html += "</div>";
  }
  html += "<div class=\"pw-actions\">";
  html += "<button class=\"btn btn-sm\" id=\"pwClearAll\" style=\"font-size:10px;padding:2px 6px;\">Clear All</button>";
  html += "<button class=\"btn btn-sm btn-primary\" id=\"pwApply\" style=\"font-size:10px;padding:2px 6px;\">Apply</button>";
  html += "</div>";
  popup.innerHTML = html;

  // Step 4c-i) Position relative to button
  var btn = document.getElementById("btnPlanWeekColors");
  var btnRect = btn.getBoundingClientRect();
  popup.style.position = "fixed";
  popup.style.left = btnRect.left + "px";
  popup.style.top = (btnRect.bottom + 4) + "px";
  document.body.appendChild(popup);

  // Step 4c-ii) Apply button — read all color inputs
  document.getElementById("pwApply").addEventListener("click", function() {
    var newColors = [];
    var inputs = popup.querySelectorAll("input[type=\"color\"]");
    for (var j = 0; j < inputs.length; j++) {
      var clearBtn = popup.querySelector("[data-pw-clear=\"" + j + "\"]");
      if (clearBtn && clearBtn.textContent === "\u2014") {
        newColors.push("");
      } else {
        newColors.push(inputs[j].value);
      }
    }
    APP.planWeekColors = newColors;
    debouncedSave();
    renderGantt();
    popup.remove();
  });

  // Step 4c-iii) Clear All button
  document.getElementById("pwClearAll").addEventListener("click", function() {
    APP.planWeekColors = [];
    debouncedSave();
    renderGantt();
    popup.remove();
  });

  // Step 4c-iv) Clear individual week colour
  popup.querySelectorAll(".pw-clear").forEach(function(span) {
    span.addEventListener("click", function() {
      var idx = parseInt(span.dataset.pwClear);
      var input = popup.querySelector("input[data-pw-idx=\"" + idx + "\"]");
      if (span.textContent === "\u2716") {
        span.textContent = "\u2014";
        input.value = "#888888";
      } else {
        span.textContent = "\u2716";
      }
    });
  });

  // Step 4c-v) When a color input changes, mark it as active
  popup.querySelectorAll("input[type=\"color\"]").forEach(function(input) {
    input.addEventListener("input", function() {
      var idx = input.dataset.pwIdx;
      var clearBtn = popup.querySelector("[data-pw-clear=\"" + idx + "\"]");
      if (clearBtn) clearBtn.textContent = "\u2716";
    });
  });

  // Step 4c-vi) Close on outside click
  function closePopup(ev) {
    if (!popup.contains(ev.target) && ev.target !== btn) {
      popup.remove();
      document.removeEventListener("click", closePopup);
    }
  }
  setTimeout(function() { document.addEventListener("click", closePopup); }, 10);
});

// Step 5) Set up file drop zones
setupDropZone("dxfDropZone", "dxfFileInput", parseDXFFile);
setupDropZone("kirraDropZone", "kirraFileInput", parseKirraConfig);
setupDropZone("kirraProjectDropZone", "kirraProjectInput", parseKirraProject);

// Step 6) Startup gate — try IndexedDB first, fall back to startup dialog
//  Priority: IndexedDB saved state > startup dialog > seed/fresh data
(function boot() {
  loadState().then(function(hadSavedData) {
    if (hadSavedData) {
      // Step 6a) Restored from IndexedDB — sync UI inputs and render
      syncUIFromState();
      firstRender();
      console.log("Restored scheduler state from KIRRASCHEDULER_DB.");
    } else if (shouldShowStartup()) {
      // Step 6b) First visit, no DB — show welcome dialog
      showStartupDialog().then(function(choice) {
        if (choice === "fresh") {
          clearSeedData();
        }
        markStartupComplete(choice);
        firstRender();
        debouncedSave();
      });
    } else {
      // Step 6c) Returning visit, DB empty — honour the stored choice
      var stored = localStorage.getItem("kirra-scheduler-setup");
      if (stored === "fresh") {
        clearSeedData();
      }
      firstRender();
      debouncedSave();
    }
  }).catch(function() {
    // Step 6d) DB error — fall back to normal startup
    firstRender();
  });
})();

function firstRender() {
  // Step 7) Initial calculations and render
  recalcDependencies();
  renderGantt();
  renderBlasts();
  renderPatterns();
  renderForecast();
  renderConformance();
  renderEquipment();

  // Step 8) Initialise Gantt drag-to-move, resize, and multi-select after initial render
  initGanttDrag();
  initGanttResize();
  initGanttSelect();
  initGanttReorder();

  // Step 9) Initialise delay palette drag-and-drop
  initDelayPalette();

  // Step 10) Initialise 3D Playback view (lazy — scene created when tab shown)
  initPlaybackView();

  // Step 11) Initialise KAP file import
  initKAPImport();

  console.log("Kirra Scheduler initialised.");
}
