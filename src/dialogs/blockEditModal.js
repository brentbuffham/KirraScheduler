// ============================================================
//  BLOCK EDIT MODAL
//  Lightweight popup for editing a drill block:
//  - Assign drills (multi-select)
//  - Per-drill penetration rate
//  - Meters allocation
//  - Start date and time
// ============================================================

import { APP, getTotalDrillMeters } from "../state/appState.js";
import { drills as drillFleet } from "../state/equipmentState.js";
import { calcBlockDays, syncBlastFromBlocks } from "../engine/blockHelpers.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { debouncedSave } from "../state/schedulerDB.js";

// Step 1) Listen for editBlock custom events
function initBlockEditModal() {
  document.addEventListener("editBlock", function(e) {
    var blastIdx = e.detail.blastIdx;
    var blockIdx = e.detail.blockIdx;
    showBlockEditor(blastIdx, blockIdx);
  });
}

// Step 2) Build and show the block editor modal
function showBlockEditor(blastIdx, blockIdx) {
  var blast = APP.blasts[blastIdx];
  if (!blast || !blast.drillBlocks || !blast.drillBlocks[blockIdx]) return;
  var block = blast.drillBlocks[blockIdx];

  // Step 2a) Calculate total meters and remaining meters for other blocks
  var totalMeters = getTotalDrillMeters(blast);
  var otherMeters = 0;
  blast.drillBlocks.forEach(function(b, i) {
    if (i !== blockIdx) otherMeters += (b.meters || 0);
  });
  var maxMeters = Math.round((totalMeters - otherMeters) * 10) / 10;

  // Step 2b) Build form HTML
  var formHtml = "<div class=\"block-edit-form\" style=\"display:grid;gap:10px;\">";

  // Step) Block label and blast name
  formHtml += "<div style=\"font-weight:700;font-size:14px;color:var(--text-primary);\">" +
    blast.name + " — Block " + block.label + "</div>";

  // Step) Start date
  formHtml += "<div class=\"form-row\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\">";
  formHtml += "<label style=\"font-size:12px;\">Start Date<br><input type=\"date\" id=\"beStartDate\" value=\"" + (block.drillStart || "") + "\" style=\"width:100%;padding:4px;\"></label>";
  formHtml += "<label style=\"font-size:12px;\">Start Time<br><input type=\"time\" id=\"beStartTime\" value=\"" + (block.drillStartTime || "06:00") + "\" step=\"1800\" style=\"width:100%;padding:4px;\"></label>";
  formHtml += "</div>";

  // Step) Meters allocation
  formHtml += "<label style=\"font-size:12px;\">Meters for this block (max " + maxMeters + "m of " + Math.round(totalMeters) + "m total)<br>";
  formHtml += "<input type=\"number\" id=\"beMeters\" value=\"" + (block.meters || 0) + "\" min=\"0\" max=\"" + maxMeters + "\" step=\"0.1\" style=\"width:100%;padding:4px;\"></label>";

  // Step) Drill assignment with per-drill pen rate
  formHtml += "<div style=\"font-size:12px;font-weight:600;margin-top:4px;\">Assigned Drills & Pen Rate (m/hr)</div>";
  formHtml += "<div id=\"beDrillList\" style=\"display:grid;gap:6px;\">";

  drillFleet.forEach(function(drill) {
    var isAssigned = (block.assignedDrills || []).indexOf(drill.id) !== -1;
    var rate = (block.drillRates && block.drillRates[drill.id] !== undefined) ? block.drillRates[drill.id] : drill.rateM_per_day;
    var checked = isAssigned ? " checked" : "";

    formHtml += "<div style=\"display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;\">";
    formHtml += "<label style=\"font-size:11px;white-space:nowrap;\"><input type=\"checkbox\" class=\"be-drill-cb\" value=\"" + drill.id + "\"" + checked + "> " + drill.id + " (" + (drill.model || drill.type) + ")</label>";
    formHtml += "<div></div>";
    formHtml += "<input type=\"number\" class=\"be-drill-rate\" data-drill=\"" + drill.id + "\" value=\"" + rate + "\" min=\"1\" step=\"1\" style=\"width:60px;padding:2px 4px;font-size:11px;text-align:right;\"" + (isAssigned ? "" : " disabled") + ">";
    formHtml += "</div>";
  });

  formHtml += "</div>";

  // Step) Calculated drill days preview
  formHtml += "<div id=\"beCalcPreview\" style=\"font-size:11px;color:var(--text-muted);margin-top:4px;\"></div>";

  formHtml += "</div>";

  // Step 2c) Remove any existing block edit modal
  var existing = document.getElementById("blockEditOverlay");
  if (existing) existing.remove();

  // Step 2d) Create modal overlay
  var overlay = document.createElement("div");
  overlay.id = "blockEditOverlay";
  overlay.style.cssText = "position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);";

  var modal = document.createElement("div");
  modal.style.cssText = "background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;min-width:360px;max-width:460px;box-shadow:var(--shadow);";

  modal.innerHTML = formHtml +
    "<div style=\"display:flex;gap:8px;justify-content:flex-end;margin-top:14px;\">" +
    "<button class=\"btn\" id=\"beCancelBtn\">Cancel</button>" +
    "<button class=\"btn btn-success\" id=\"beSaveBtn\">Save Block</button>" +
    "</div>";

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Step 2e) Wire up drill checkbox toggle to enable/disable rate input
  modal.querySelectorAll(".be-drill-cb").forEach(function(cb) {
    cb.addEventListener("change", function() {
      var rateInput = modal.querySelector(".be-drill-rate[data-drill=\"" + cb.value + "\"]");
      if (rateInput) rateInput.disabled = !cb.checked;
      updateCalcPreview();
    });
  });

  // Step 2f) Wire up calculation preview
  function updateCalcPreview() {
    var meters = parseFloat(document.getElementById("beMeters").value) || 0;
    var totalPenRate = 0;
    modal.querySelectorAll(".be-drill-cb:checked").forEach(function(cb) {
      var rateInput = modal.querySelector(".be-drill-rate[data-drill=\"" + cb.value + "\"]");
      totalPenRate += parseFloat(rateInput.value) || 0;
    });
    var effectiveHrs = (APP.rigHours || 24) * (APP.availability || 0.85) * (APP.utilisation || 0.75);
    var mPerDay = totalPenRate * effectiveHrs;
    var days = mPerDay > 0 ? Math.ceil(meters / mPerDay) : "?";
    var preview = document.getElementById("beCalcPreview");
    if (preview) {
      preview.textContent = "Estimated: " + days + " drill day(s) — " +
        Math.round(totalPenRate) + " m/hr pen rate x " +
        effectiveHrs.toFixed(1) + " eff hrs = " +
        Math.round(mPerDay) + " m/day";
    }
  }

  document.getElementById("beMeters").addEventListener("input", updateCalcPreview);
  modal.querySelectorAll(".be-drill-rate").forEach(function(inp) {
    inp.addEventListener("input", updateCalcPreview);
  });
  updateCalcPreview();

  // Step 2g) Cancel button
  document.getElementById("beCancelBtn").addEventListener("click", function() {
    overlay.remove();
  });

  // Step 2h) Overlay click to close
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) overlay.remove();
  });

  // Step 2i) Save button
  document.getElementById("beSaveBtn").addEventListener("click", function() {
    // Step) Read values
    block.drillStart = document.getElementById("beStartDate").value;
    block.drillStartTime = document.getElementById("beStartTime").value || "06:00";
    block.meters = parseFloat(document.getElementById("beMeters").value) || 0;

    // Step) Read assigned drills and rates
    block.assignedDrills = [];
    block.drillRates = {};
    modal.querySelectorAll(".be-drill-cb:checked").forEach(function(cb) {
      block.assignedDrills.push(cb.value);
      var rateInput = modal.querySelector(".be-drill-rate[data-drill=\"" + cb.value + "\"]");
      block.drillRates[cb.value] = parseFloat(rateInput.value) || 20;
    });

    // Step) Recalculate block days
    block.drillDays = calcBlockDays(block);

    // Step) Sync blast-level values from blocks
    syncBlastFromBlocks(blast);

    // Step) Cleanup, persist, and re-render
    overlay.remove();
    recalcDependencies();
    debouncedSave();
    renderGantt();
  });
}

export { initBlockEditModal };
