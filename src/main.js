// ============================================================
//  MAIN ENTRY POINT
//  Kirra Blast Scheduler — Vite Application
//  Initialises all modules and performs first render
// ============================================================

// Step 1) Import styles
import "./styles/main.css";
import "./styles/playback.css";

// Step 2) Import modules
import { recalcDependencies } from "./engine/dependencyEngine.js";
import { initTabs } from "./ui/tabs.js";
import { initContextMenu } from "./ui/contextMenu.js";
import { initGanttDrag } from "./ui/ganttDrag.js";
import { initGanttResize } from "./ui/ganttResize.js";
import { initDelayPalette } from "./ui/delayPalette.js";
import { initThemeToggle } from "./ui/themeToggle.js";
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
import { renderGantt } from "./views/ganttView.js";
import { renderBlasts } from "./views/blastOverview.js";
import { renderPatterns, initPatternLibrary } from "./views/patternLibrary.js";
import { renderForecast } from "./views/forecastView.js";
import { renderConformance, initConformance } from "./views/conformanceView.js";
import { renderEquipment } from "./views/equipmentView.js";
import { initEquipmentLibrary } from "./io/equipmentLibrary.js";
import { initPlaybackView } from "./views/playbackView.js";
import { shouldShowStartup, showStartupDialog, clearSeedData, markStartupComplete } from "./dialogs/startupDialog.js";

// Step 3) Initialise UI event listeners (safe before data decisions)
initThemeToggle();
initTabs();
initContextMenu();
initBlastModal();
initEquipmentModals();
initBlockEditModal();
initImportPreview();
initExport();
initResetDialog();
initPatternLibrary();
initEquipmentLibrary();
initConformance();

// Step 4) Wire up Gantt toolbar buttons
document.getElementById("btnRefreshGantt").addEventListener("click", function() {
  recalcDependencies();
  renderGantt();
});

document.getElementById("btnRecalcDates").addEventListener("click", function() {
  recalcDependencies();
  renderGantt();
});

// Step 5) Set up file drop zones
setupDropZone("dxfDropZone", "dxfFileInput", parseDXFFile);
setupDropZone("kirraDropZone", "kirraFileInput", parseKirraConfig);
setupDropZone("kirraProjectDropZone", "kirraProjectInput", parseKirraProject);

// Step 6) Startup gate — ask user on first run, then render
//         On subsequent loads, re-apply the stored choice (ES modules
//         reinitialise seed data on every page load)
(function boot() {
  if (shouldShowStartup()) {
    // Step 6a) First visit — show the welcome dialog
    showStartupDialog().then(function(choice) {
      if (choice === "fresh") {
        clearSeedData();
      }
      markStartupComplete(choice);
      firstRender();
    });
  } else {
    // Step 6b) Returning visit — honour the stored choice
    var stored = localStorage.getItem("kirra-scheduler-setup");
    if (stored === "fresh") {
      clearSeedData();
    }
    firstRender();
  }
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

  // Step 8) Initialise Gantt drag-to-move and resize after initial render
  initGanttDrag();
  initGanttResize();

  // Step 9) Initialise delay palette drag-and-drop
  initDelayPalette();

  // Step 10) Initialise 3D Playback view (lazy — scene created when tab shown)
  initPlaybackView();

  // Step 11) Initialise KAP file import
  initKAPImport();

  console.log("Kirra Scheduler initialised.");
}
