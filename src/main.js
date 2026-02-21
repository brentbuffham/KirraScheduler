// ============================================================
//  MAIN ENTRY POINT
//  Kirra Blast Scheduler — Vite Application
//  Initialises all modules and performs first render
// ============================================================

// Step 1) Import styles
import "./styles/main.css";

// Step 2) Import modules
import { recalcDependencies } from "./engine/dependencyEngine.js";
import { initTabs } from "./ui/tabs.js";
import { initContextMenu } from "./ui/contextMenu.js";
import { initGanttDrag } from "./ui/ganttDrag.js";
import { initThemeToggle } from "./ui/themeToggle.js";
import { initBlastModal } from "./dialogs/blastModal.js";
import { initEquipmentModals } from "./dialogs/equipmentModal.js";
import { initBlockEditModal } from "./dialogs/blockEditModal.js";
import { initImportPreview } from "./io/importPreview.js";
import { initExport } from "./io/exportSchedule.js";
import { setupDropZone } from "./io/dropZone.js";
import { parseDXFFile } from "./io/dxfImport.js";
import { parseKirraConfig, parseKirraProject } from "./io/kirraImport.js";
import { renderGantt } from "./views/ganttView.js";
import { renderBlasts } from "./views/blastOverview.js";
import { renderPatterns } from "./views/patternLibrary.js";
import { renderForecast } from "./views/forecastView.js";
import { renderConformance } from "./views/conformanceView.js";
import { renderEquipment } from "./views/equipmentView.js";

// Step 3) Initialise UI event listeners
initThemeToggle();
initTabs();
initContextMenu();
initBlastModal();
initEquipmentModals();
initBlockEditModal();
initImportPreview();
initExport();

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

// Step 6) Initial calculations and render
recalcDependencies();
renderGantt();
renderBlasts();
renderPatterns();
renderForecast();
renderConformance();
renderEquipment();

// Step 7) Initialise Gantt drag-to-move after initial render
initGanttDrag();

console.log("Kirra Scheduler initialised.");
