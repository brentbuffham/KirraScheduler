// ============================================================
//  GANTT PALETTE
//  Drag-and-drop palette beside the Gantt:
//    - PATTERNS: drag onto any row to assign a drill pattern
//    - DRILLS:   drag onto a drilling row to assign a drill
//    - MPUs:     drag onto a loading row to assign an MPU
//    - DELAYS:   drag onto any row to add a delay block
// ============================================================

import { DELAY_TYPES, createDelay } from "../state/delayTypes.js";
import { CREW_ROLES, ensureCrewAllocated } from "../state/crewRoles.js";
import { drills, mpus, ancillary } from "../state/equipmentState.js";
import { APP } from "../state/appState.js";
import { isoDate } from "../utils/dateUtils.js";
import { syncBlastFromBlocks } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { showPatternAllocDialog } from "../views/blastOverview.js";

var CELL_WIDTH = 32;

// Step 1) Track collapsed palette sections between renders
var _paletteCollapsed = { patterns: false, drills: false, mpus: false, ancillary: true, crew: false, delays: false };

// Step 2) Render the full palette into its container
function renderDelayPalette() {
  var container = document.getElementById("delayPalette");
  if (!container) return;

  var html = "";

  // ---- PATTERNS SECTION ----
  html += buildPaletteSectionHeader("patterns", "PATTERNS", "var(--accent-cyan)");
  if (!_paletteCollapsed.patterns) {
    html += "<div class=\"palette-chips\">";
    if (APP.patterns.length === 0) {
      html += "<div style=\"font-size:11px;color:var(--text-muted);padding:4px 8px;\">No patterns loaded</div>";
    }
    APP.patterns.forEach(function(p) {
      var typeChar = p.type.charAt(0);
      var chipColor = "var(--accent-cyan)";
      if (p.type === "PRESPLIT") chipColor = "var(--presplit, var(--accent-purple))";
      else if (p.type === "BUFFER") chipColor = "var(--accent-load)";
      else if (p.type === "ORE") chipColor = "var(--ore, var(--accent-green))";
      else if (p.type === "WASTE") chipColor = "var(--waste, var(--text-muted))";
      html += "<div class=\"palette-chip pattern-chip\" draggable=\"true\" " +
        "data-drag-type=\"pattern\" data-drag-id=\"" + p.id + "\" " +
        "style=\"border-color:" + chipColor + ";\" " +
        "title=\"" + p.id + " — " + p.type + " | " + p.diam + "mm B" + p.burden + " S" + p.spacing + " BH" + p.benchHt + "m PF" + p.pf + "\">";
      html += "<span class=\"palette-chip-icon\" style=\"background:" + chipColor + ";\">" + typeChar + "</span>";
      html += "<span class=\"palette-chip-text\">" + p.id + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  // ---- DRILLS SECTION ----
  html += buildPaletteSectionHeader("drills", "DRILLS", "var(--accent-drill)");
  if (!_paletteCollapsed.drills) {
    html += "<div class=\"palette-chips\">";
    drills.forEach(function(drill) {
      var statusColor = drill.status === "demobilised" ? "var(--text-muted)" : "var(--accent-drill)";
      var opacity = drill.status === "demobilised" ? "opacity:0.4;" : "";
      var draggable = drill.status !== "demobilised" ? "true" : "false";
      html += "<div class=\"palette-chip drill-chip\" draggable=\"" + draggable + "\" " +
        "data-drag-type=\"drill\" data-drag-id=\"" + drill.id + "\" " +
        "style=\"border-color:" + statusColor + ";" + opacity + "\" " +
        "title=\"" + drill.name + " (" + drill.type + ") — " + drill.rateM_per_day + " m/hr\">";
      html += "<span class=\"palette-chip-icon\" style=\"background:" + statusColor + ";\">" + drill.type.charAt(0) + "</span>";
      html += "<span class=\"palette-chip-text\">" + drill.id + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  // ---- MPU SECTION ----
  html += buildPaletteSectionHeader("mpus", "MPUs", "var(--accent-load)");
  if (!_paletteCollapsed.mpus) {
    html += "<div class=\"palette-chips\">";
    mpus.forEach(function(mpu) {
      var statusColor = mpu.status === "demobilised" ? "var(--text-muted)" : "var(--accent-load)";
      var opacity = mpu.status === "demobilised" ? "opacity:0.4;" : "";
      var draggable = mpu.status !== "demobilised" ? "true" : "false";
      html += "<div class=\"palette-chip mpu-chip\" draggable=\"" + draggable + "\" " +
        "data-drag-type=\"mpu\" data-drag-id=\"" + mpu.id + "\" " +
        "style=\"border-color:" + statusColor + ";" + opacity + "\" " +
        "title=\"" + mpu.name + " (" + mpu.type + ") — " + mpu.rateKg_per_day + " kg/day\">";
      html += "<span class=\"palette-chip-icon\" style=\"background:" + statusColor + ";\">" + mpu.type.charAt(0) + "</span>";
      html += "<span class=\"palette-chip-text\">" + mpu.id + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  // ---- ANCILLARY SECTION ----
  html += buildPaletteSectionHeader("ancillary", "ANCILLARY", "var(--accent-prep)");
  if (!_paletteCollapsed.ancillary) {
    html += "<div class=\"palette-chips\">";
    ancillary.forEach(function(unit) {
      var statusColor = unit.status === "demobilised" ? "var(--text-muted)" : "var(--accent-prep)";
      var opacity = unit.status === "demobilised" ? "opacity:0.4;" : "";
      var draggable = unit.status !== "demobilised" ? "true" : "false";
      html += "<div class=\"palette-chip ancillary-chip\" draggable=\"" + draggable + "\" " +
        "data-drag-type=\"ancillary\" data-drag-id=\"" + unit.id + "\" " +
        "style=\"border-color:" + statusColor + ";" + opacity + "\" " +
        "title=\"" + unit.name + " (" + unit.type + ")\">";
      html += "<span class=\"palette-chip-icon\" style=\"background:" + statusColor + ";\">" + unit.type.charAt(0) + "</span>";
      html += "<span class=\"palette-chip-text\">" + unit.id + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  // ---- CREW SECTION ----
  html += buildPaletteSectionHeader("crew", "CREW", "var(--accent-purple)");
  if (!_paletteCollapsed.crew) {
    html += "<div class=\"palette-chips\">";
    CREW_ROLES.forEach(function(role) {
      html += "<div class=\"palette-chip crew-chip\" draggable=\"true\" " +
        "data-drag-type=\"crew\" data-drag-id=\"" + role.code + "\" " +
        "style=\"border-color:" + role.color + ";\" " +
        "title=\"" + role.label + "\">";
      html += "<span class=\"palette-chip-icon\" style=\"background:" + role.color + ";color:" + role.textColor + ";\">" + role.code.charAt(0) + "</span>";
      html += "<span class=\"palette-chip-text\">" + role.code + " — " + role.label + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  // ---- DELAYS SECTION ----
  html += buildPaletteSectionHeader("delays", "DELAYS", "var(--accent-blast)");
  if (!_paletteCollapsed.delays) {
    html += "<div class=\"palette-chips\">";
    DELAY_TYPES.forEach(function(dt) {
      html += "<div class=\"palette-chip delay-chip\" draggable=\"true\" " +
        "data-drag-type=\"delay\" data-drag-id=\"" + dt.code + "\" " +
        "style=\"background:" + dt.color + ";color:" + dt.textColor + ";border-color:" + dt.color + ";\" " +
        "title=\"" + dt.label + "\">";
      html += "<span class=\"delay-chip-code\">" + dt.code + "</span>";
      html += "<span class=\"delay-chip-label\">" + dt.label + "</span>";
      html += "</div>";
    });
    html += "</div>";
  }

  container.innerHTML = html;

  // Step 2b) Attach collapse toggles
  container.querySelectorAll(".palette-section-hdr").forEach(function(hdr) {
    hdr.addEventListener("click", function() {
      var secKey = hdr.dataset.paletteSection;
      _paletteCollapsed[secKey] = !_paletteCollapsed[secKey];
      renderDelayPalette();
      initPaletteDragEvents();
    });
  });
}

// Step 2c) Build a collapsible section header
function buildPaletteSectionHeader(key, label, color) {
  var arrow = _paletteCollapsed[key] ? "\u25B6" : "\u25BC";
  return "<div class=\"palette-section-hdr\" data-palette-section=\"" + key + "\" " +
    "style=\"border-left:3px solid " + color + ";\">" +
    "<span class=\"palette-arrow\">" + arrow + "</span> " + label + "</div>";
}

// Step 3) Initialise palette drag events
function initDelayPalette() {
  renderDelayPalette();
  initPaletteDragEvents();
  initGanttDropTarget();
  initPaletteReturnTarget();
}

// Step 3b) Attach drag events to all palette chips
function initPaletteDragEvents() {
  var container = document.getElementById("delayPalette");
  if (!container) return;

  // Step 3c) Use event delegation on the container
  container.ondragstart = function(e) {
    var chip = e.target.closest(".palette-chip");
    if (!chip) return;

    var dragType = chip.dataset.dragType;
    var dragId = chip.dataset.dragId;

    // Step 3d) Set transfer data: "drill:PV271-01", "mpu:MPU-01", "delay:UD"
    e.dataTransfer.setData("text/plain", dragType + ":" + dragId);
    e.dataTransfer.effectAllowed = "copy";

    chip.classList.add("palette-chip-dragging");

    // Step 3e) Clean up on dragend
    var cleanup = function() {
      chip.classList.remove("palette-chip-dragging");
      chip.removeEventListener("dragend", cleanup);
    };
    chip.addEventListener("dragend", cleanup);
  };
}

// Step 4) Make the Gantt scroll area a drop target for all palette chip types
function initGanttDropTarget() {
  var ganttScroll = document.getElementById("ganttScroll");
  if (!ganttScroll) return;

  // Step 4a) Prevent duplicate listener binding
  if (ganttScroll._paletteDropBound) return;
  ganttScroll._paletteDropBound = true;

  ganttScroll.addEventListener("dragover", function(e) {
    var data = e.dataTransfer.types;
    if (data.indexOf("text/plain") === -1) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    var cell = e.target.closest(".gantt-cell");
    if (cell) {
      clearDropHighlights();
      cell.classList.add("delay-drop-target");
    }
  });

  ganttScroll.addEventListener("dragleave", function(e) {
    var cell = e.target.closest(".gantt-cell");
    if (cell) cell.classList.remove("delay-drop-target");
  });

  ganttScroll.addEventListener("drop", function(e) {
    e.preventDefault();
    clearDropHighlights();

    var data = e.dataTransfer.getData("text/plain");
    if (!data) return;

    var parts = data.split(":");
    if (parts.length < 2) return;
    var dragType = parts[0];
    var dragId = parts[1];

    // Step 4b) Determine the target row
    var cell = e.target.closest(".gantt-cell");
    var row = e.target.closest(".gantt-row");
    if (!cell || !row) return;

    var blastIdx = parseInt(row.dataset.blast);
    var section = row.dataset.section;
    if (isNaN(blastIdx)) return;

    var blast = APP.blasts[blastIdx];
    if (!blast) return;

    // Step 4c) Route by drag type
    if (dragType === "pattern") {
      handlePatternDrop(blast, blastIdx, dragId);
    } else if (dragType === "delay") {
      handleDelayDrop(blast, dragId, section, cell, row);
    } else if (dragType === "drill") {
      handleDrillDrop(blast, dragId, section, row);
    } else if (dragType === "mpu") {
      handleMPUDrop(blast, dragId, section);
    } else if (dragType === "ancillary") {
      handleAncillaryDrop(blast, dragId, section);
    } else if (dragType === "crew") {
      handleCrewDrop(blast, dragId, section);
    } else if (dragType === "gantt-drill") {
      // Step 4c-b) Reassign drill from one blast to another via drag
      handleDrillReassign(blast, dragId, parseInt(parts[2]), section, row);
    } else if (dragType === "gantt-mpu") {
      // Step 4c-c) Reassign MPU from one blast to another via drag
      handleMPUReassign(blast, dragId, parseInt(parts[2]), section);
    }
  });
}

// Step 5) Handle delay drop — create a delay block
function handleDelayDrop(blast, typeCode, section, cell, row) {
  var dropDate = getDateFromCell(cell, row);
  if (!dropDate) return;

  if (!blast.delays) blast.delays = [];
  var delay = createDelay(typeCode, dropDate, 1, section);
  blast.delays.push(delay);

  debouncedSave();
  renderGantt();
}

// Step 5b) Handle pattern drop — open allocation dialog for pattern assignment
function handlePatternDrop(blast, blastIdx, patternId) {
  // Step 5b-i) Find the pattern by id
  var pattern = APP.patterns.find(function(p) { return p.id === patternId; });
  if (!pattern) {
    showDropFeedback("Pattern " + patternId + " not found");
    return;
  }

  // Step 5b-ii) Open the allocation dialog (shared with blast overview)
  showPatternAllocDialog(blast, blastIdx, pattern);
}

// Step 6) Handle drill drop — assign drill to blast or block
function handleDrillDrop(blast, drillId, section, row) {
  // Step 6a) Only valid on drilling rows
  if (section !== "drilling") {
    showDropFeedback("Drills can only be dropped on DRILLING rows");
    return;
  }

  // Step 6b) Check for block-level row
  var blockIdx = row.dataset.block !== undefined ? parseInt(row.dataset.block) : null;

  if (blockIdx !== null && blast.drillBlocks && blast.drillBlocks[blockIdx]) {
    // Step 6c) Assign to specific block
    var block = blast.drillBlocks[blockIdx];
    if ((block.assignedDrills || []).indexOf(drillId) !== -1) {
      showDropFeedback(drillId + " already assigned to block " + block.label);
      return;
    }
    if (!block.assignedDrills) block.assignedDrills = [];
    block.assignedDrills.push(drillId);

    // Step 6d) Set default pen rate from equipment
    var drill = drills.find(function(d) { return d.id === drillId; });
    if (drill) {
      if (!block.drillRates) block.drillRates = {};
      block.drillRates[drillId] = drill.rateM_per_day;
    }

    syncBlastFromBlocks(blast);
  } else {
    // Step 6e) Assign to blast level
    if ((blast.assignedDrills || []).indexOf(drillId) !== -1) {
      showDropFeedback(drillId + " already assigned to " + blast.name);
      return;
    }
    if (!blast.assignedDrills) blast.assignedDrills = [];
    blast.assignedDrills.push(drillId);
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(drillId + " assigned to " + blast.name, true);
}

// Step 7) Handle MPU drop — assign MPU to blast (migrated to assignedMPUs array)
function handleMPUDrop(blast, mpuId, section) {
  // Step 7a) Only valid on loading rows
  if (section !== "loading") {
    showDropFeedback("MPUs can only be dropped on LOADING rows");
    return;
  }

  // Step 7b) Assign the MPU to the array (add if not already present)
  if (!blast.assignedMPUs) blast.assignedMPUs = [];
  if (blast.assignedMPUs.indexOf(mpuId) !== -1) {
    showDropFeedback(mpuId + " already assigned to " + blast.name);
    return;
  }
  blast.assignedMPUs.push(mpuId);

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(mpuId + " assigned to " + blast.name, true);
}

// Step 7a-ii) Handle ancillary drop — assign ancillary equipment to pattern prep
function handleAncillaryDrop(blast, unitId, section) {
  // Step 7a-ii-a) Only valid on pattern prep rows
  if (section !== "pattern prep") {
    showDropFeedback("Ancillary can only be dropped on PATTERN PREP rows");
    return;
  }

  // Step 7a-ii-b) Add to array if not already assigned
  if (!blast.assignedAncillary) blast.assignedAncillary = [];
  if (blast.assignedAncillary.indexOf(unitId) !== -1) {
    showDropFeedback(unitId + " already assigned to " + blast.name);
    return;
  }
  blast.assignedAncillary.push(unitId);

  debouncedSave();
  renderGantt();
  showDropFeedback(unitId + " assigned to " + blast.name + " prep", true);
}

// Step 7b) Handle crew drop — increment crew allocation on a blast section
function handleCrewDrop(blast, roleCode, section) {
  // Step 7b-i) Only valid on drilling or loading rows
  if (section !== "drilling" && section !== "loading") {
    showDropFeedback("Crew can only be dropped on DRILLING or LOADING rows");
    return;
  }

  // Step 7b-ii) Ensure crewAllocated structure exists
  var crew = ensureCrewAllocated(blast);
  var sectionCrew = crew[section];

  // Step 7b-iii) Increment the role counter
  sectionCrew[roleCode] = (sectionCrew[roleCode] || 0) + 1;

  debouncedSave();
  renderGantt();
  showDropFeedback("+" + roleCode + " on " + blast.name + " " + section, true);
}

// Step 8) Get the date string from a Gantt cell based on column index
function getDateFromCell(cell, row) {
  var cells = row.querySelectorAll(".gantt-cell");
  var cellIdx = -1;
  for (var i = 0; i < cells.length; i++) {
    if (cells[i] === cell) { cellIdx = i; break; }
  }
  if (cellIdx < 0) return null;

  var visStart = new Date(APP.planStart);
  visStart.setDate(visStart.getDate() - 5);
  var date = new Date(visStart);
  date.setDate(date.getDate() + cellIdx);
  return isoDate(date);
}

// Step 9) Clear all drop highlights
function clearDropHighlights() {
  document.querySelectorAll(".delay-drop-target").forEach(function(el) {
    el.classList.remove("delay-drop-target");
  });
}

// Step 10) Show quick toast feedback after a drop
function showDropFeedback(message, success) {
  var existing = document.getElementById("dropFeedback");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.id = "dropFeedback";
  toast.className = "drop-feedback " + (success ? "drop-feedback-ok" : "drop-feedback-warn");
  toast.textContent = message;
  document.body.appendChild(toast);

  // Step 10a) Auto-remove after 2 seconds
  setTimeout(function() {
    toast.classList.add("drop-feedback-fade");
    setTimeout(function() { toast.remove(); }, 400);
  }, 2000);
}

// Step 10b) Handle dragging a drill chip from one blast to another drilling row
function handleDrillReassign(targetBlast, drillId, sourceBlastIdx, section, row) {
  if (section !== "drilling") {
    showDropFeedback("Drills can only be dropped on DRILLING rows");
    return;
  }

  var sourceBlast = APP.blasts[sourceBlastIdx];
  if (!sourceBlast) return;

  // Step 10b-i) If dropped on the same blast, do nothing
  if (sourceBlast === targetBlast) return;

  // Step 10b-ii) Remove from source
  var srcIdx = (sourceBlast.assignedDrills || []).indexOf(drillId);
  if (srcIdx !== -1) sourceBlast.assignedDrills.splice(srcIdx, 1);

  // Step 10b-iii) Add to target (check for block-level)
  var blockIdx = row.dataset.block !== undefined ? parseInt(row.dataset.block) : null;
  if (blockIdx !== null && targetBlast.drillBlocks && targetBlast.drillBlocks[blockIdx]) {
    var block = targetBlast.drillBlocks[blockIdx];
    if ((block.assignedDrills || []).indexOf(drillId) === -1) {
      if (!block.assignedDrills) block.assignedDrills = [];
      block.assignedDrills.push(drillId);
      var drill = drills.find(function(d) { return d.id === drillId; });
      if (drill) {
        if (!block.drillRates) block.drillRates = {};
        block.drillRates[drillId] = drill.rateM_per_day;
      }
    }
    syncBlastFromBlocks(targetBlast);
  } else {
    if ((targetBlast.assignedDrills || []).indexOf(drillId) === -1) {
      if (!targetBlast.assignedDrills) targetBlast.assignedDrills = [];
      targetBlast.assignedDrills.push(drillId);
    }
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(drillId + ": " + sourceBlast.name + " \u2192 " + targetBlast.name, true);
}

// Step 10c) Handle dragging an MPU chip from one blast to another loading row (migrated to array)
function handleMPUReassign(targetBlast, mpuId, sourceBlastIdx, section) {
  if (section !== "loading") {
    showDropFeedback("MPUs can only be dropped on LOADING rows");
    return;
  }

  var sourceBlast = APP.blasts[sourceBlastIdx];
  if (!sourceBlast) return;

  if (sourceBlast === targetBlast) return;

  // Step 10c-i) Remove from source array
  var srcMpus = sourceBlast.assignedMPUs || [];
  var srcIdx = srcMpus.indexOf(mpuId);
  if (srcIdx !== -1) srcMpus.splice(srcIdx, 1);
  sourceBlast.assignedMPUs = srcMpus;

  // Step 10c-ii) Add to target array
  if (!targetBlast.assignedMPUs) targetBlast.assignedMPUs = [];
  if (targetBlast.assignedMPUs.indexOf(mpuId) === -1) {
    targetBlast.assignedMPUs.push(mpuId);
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(mpuId + ": " + sourceBlast.name + " \u2192 " + targetBlast.name, true);
}

// Step 11) Make the palette a drop target for returning drills/MPUs from the Gantt.
//  When a drill/mpu chip is dragged from the info column back to the palette,
//  the equipment is unassigned from the blast.
function initPaletteReturnTarget() {
  var container = document.getElementById("delayPalette");
  if (!container || container._returnDropBound) return;
  container._returnDropBound = true;

  // Step 11a) Allow drop
  container.addEventListener("dragover", function(e) {
    var data = e.dataTransfer.types;
    if (data.indexOf("text/plain") === -1) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    container.classList.add("palette-drop-active");
  });

  container.addEventListener("dragleave", function(e) {
    if (!container.contains(e.relatedTarget)) {
      container.classList.remove("palette-drop-active");
    }
  });

  // Step 11b) Handle the drop
  container.addEventListener("drop", function(e) {
    e.preventDefault();
    container.classList.remove("palette-drop-active");

    var data = e.dataTransfer.getData("text/plain");
    if (!data) return;

    var parts = data.split(":");
    var dragType = parts[0];
    var dragId = parts[1];
    var blastIdx = parseInt(parts[2]);
    var blockIdx = parts.length > 3 ? parseInt(parts[3]) : null;

    if (isNaN(blastIdx)) return;
    var blast = APP.blasts[blastIdx];
    if (!blast) return;

    // Step 11c) Route by type
    if (dragType === "gantt-drill") {
      handleDrillReturn(blast, dragId, blockIdx);
    } else if (dragType === "gantt-mpu") {
      handleMPUReturn(blast, dragId);
    }
  });
}

// Step 12) Remove a drill from a blast when dropped back on palette
function handleDrillReturn(blast, drillId, blockIdx) {
  var isBlock = (blockIdx !== null && !isNaN(blockIdx) && blast.drillBlocks && blast.drillBlocks[blockIdx]);

  if (isBlock) {
    var block = blast.drillBlocks[blockIdx];
    var idx = (block.assignedDrills || []).indexOf(drillId);
    if (idx !== -1) block.assignedDrills.splice(idx, 1);
    if (block.drillRates) delete block.drillRates[drillId];
    syncBlastFromBlocks(blast);
  } else {
    var idx2 = (blast.assignedDrills || []).indexOf(drillId);
    if (idx2 !== -1) blast.assignedDrills.splice(idx2, 1);
  }

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(drillId + " removed from " + blast.name, true);
}

// Step 13) Remove an MPU from a blast when dropped back on palette (migrated to array)
function handleMPUReturn(blast, mpuId) {
  var mpuArr = blast.assignedMPUs || [];
  var idx = mpuArr.indexOf(mpuId);
  if (idx !== -1) mpuArr.splice(idx, 1);
  blast.assignedMPUs = mpuArr;

  recalcDependencies();
  debouncedSave();
  renderGantt();
  showDropFeedback(mpuId + " removed from " + blast.name, true);
}

export { initDelayPalette, renderDelayPalette };
