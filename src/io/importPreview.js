// ============================================================
//  IMPORT PREVIEW
//  Shows a preview table of imported blast definitions
//  and handles merge/discard actions.
//  Supports blasts from: DXF holes, Kirra project, KAP solids.
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate, addDays } from "../utils/dateUtils.js";
import { recalcDependencies } from "../engine/dependencyEngine.js";
import { renderGantt } from "../views/ganttView.js";
import { renderBlasts } from "../views/blastOverview.js";
import { debouncedSave } from "../state/schedulerDB.js";
import { applyPrepToBlast } from "../utils/prep.js";
import { pushUndo } from "../state/undoManager.js";

// Step 1) Format number with locale separators
function fmtNum(v) {
  if (v === null || v === undefined || v === 0) return "\u2014";
  return Math.round(v).toLocaleString();
}

// Step 1b) Escape a string for safe use inside an HTML attribute value.
//   Blast/solid names can be blank or contain quotes, so the rename inputs
//   must escape them before being interpolated into the value="" attribute.
function escapeAttr(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Step 2) Display imported blasts in the preview table
function showImportPreview() {
  var container = document.getElementById("importPreview");
  container.style.display = "block";

  var html = "<thead><tr>";
  html += "<th>Blast Name</th><th>Source</th>";
  html += "<th class=\"num\">Volume (m3)</th><th class=\"num\">Area (m2)</th>";
  html += "<th class=\"num\">Bench Ht (m)</th><th class=\"num\">Exp. Mass (kg)</th>";
  html += "<th>Hole Types</th>";
  html += "</tr></thead><tbody>";

  APP.importedBlasts.forEach(function(b, idx) {
    var sourceType = b._sourceType || "import";
    var sourceLabel = sourceType === "solid" ? "Solid" : "Holes";
    var sourceBadge = sourceType === "solid" ? "badge-buffer" : "badge-production";

    html += "<tr>";
    // Step 2-i) Editable name so solids imported without (or with a generic)
    //   name can be renamed before merge. data-imp-idx routes to the change handler.
    html += "<td><input type=\"text\" class=\"import-rename\" data-imp-idx=\"" + idx +
      "\" value=\"" + escapeAttr(b.name) + "\" placeholder=\"Unnamed solid\" title=\"Rename this blast solid\"></td>";
    html += "<td><span class=\"badge " + sourceBadge + "\">" + sourceLabel + "</span></td>";
    html += "<td class=\"num\">" + fmtNum(b.volume) + "</td>";
    html += "<td class=\"num\">" + fmtNum(b.surfaceArea) + "</td>";
    html += "<td class=\"num\">" + (b.solidBenchHt ? b.solidBenchHt.toFixed(1) : "\u2014") + "</td>";
    html += "<td class=\"num\">" + fmtNum(b.expMass) + "</td>";

    // Step 2a) Hole types summary
    if (b.holeTypes && b.holeTypes.length > 0) {
      var htHtml = b.holeTypes.map(function(ht) {
        var badge = ht.type === "PRESPLIT" ? "badge-presplit" : ht.type === "BUFFER" ? "badge-buffer" : "badge-production";
        return "<span class=\"badge " + badge + "\">" + ht.type + "</span>";
      }).join(" ");
      html += "<td>" + htHtml + "</td>";
    } else {
      html += "<td style=\"color:var(--text-muted);font-size:11px;\">No hole data</td>";
    }
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("importTable").innerHTML = html;
}

// ============================================================
//  Step 2B) KAP SURFACE MANIFEST
//  Lists every surface found in a KAP file with a per-row
//  Blast/Surface toggle. Closed watertight meshes (and legacy
//  layer/ID matches) are pre-ticked as blasts. The user
//  confirms, then merge commits the split.
// ============================================================
function showKapSurfaceManifest() {
  var manifest = APP.kapSurfaceManifest || [];
  var container = document.getElementById("importPreview");
  container.style.display = "block";

  var title = container.querySelector(".table-title");
  if (title) title.textContent = "Surface Manifest — select which surfaces are blasts";

  var mergeBtn = document.getElementById("btnMergeImported");
  if (mergeBtn) mergeBtn.textContent = "Merge selected as blasts";

  var allChecked = manifest.length > 0 && manifest.every(function(m) { return m.isBlast; });

  var html = "<thead><tr>";
  html += "<th><input type=\"checkbox\" id=\"kapManifestAll\"" + (allChecked ? " checked" : "") + " title=\"Select all\"></th>";
  html += "<th>Surface</th><th>Mesh</th>";
  html += "<th class=\"num\">Volume (m3)</th><th class=\"num\">Area (m2)</th>";
  html += "<th class=\"num\">Bench (m)</th><th class=\"num\">Tris</th><th>Type</th>";
  html += "</tr></thead><tbody>";

  manifest.forEach(function(m, idx) {
    var meshBadge = m.closed
      ? "<span class=\"badge badge-production\">closed</span>"
      : "<span class=\"badge badge-presplit\">" + m.openEdges + " open</span>";
    html += "<tr>";
    html += "<td><input type=\"checkbox\" class=\"kap-manifest-cb\" data-idx=\"" + idx + "\"" + (m.isBlast ? " checked" : "") + "></td>";
    // Step 2B-i) Editable surface/solid name — renames the underlying surfObj
    //   AND its blastEntry so the blast<->solid link survives the merge.
    html += "<td><input type=\"text\" class=\"kap-rename\" data-kap-idx=\"" + idx +
      "\" value=\"" + escapeAttr(m.name) + "\" placeholder=\"Unnamed surface\" title=\"Rename this surface / blast solid\"></td>";
    html += "<td>" + meshBadge + "</td>";
    html += "<td class=\"num\">" + fmtNum(m.volume) + "</td>";
    html += "<td class=\"num\">" + fmtNum(m.surfaceArea) + "</td>";
    html += "<td class=\"num\">" + (m.benchHt ? m.benchHt.toFixed(1) : "—") + "</td>";
    html += "<td class=\"num\">" + m.triCount.toLocaleString() + "</td>";
    html += "<td><span class=\"kap-manifest-type badge " +
      (m.isBlast ? "badge-buffer" : "badge-muted") + "\" data-idx=\"" + idx +
      "\" role=\"button\" title=\"Click to toggle Blast / Surface\" style=\"cursor:pointer;\">" +
      (m.isBlast ? "Blast" : "Surface") + "</span></td>";
    html += "</tr>";
  });

  html += "</tbody>";
  document.getElementById("importTable").innerHTML = html;
}

// Step 2C) Resolve the manifest into committed surfaces/blasts.
//  loadBlasts=false (Discard) keeps every surface as a pit surface
//  so it stays viewable in 3D, but creates no schedule blasts.
function resolveKapManifest(loadBlasts) {
  var manifest = APP.kapSurfaceManifest || [];
  var pitSurfaces = [];
  var solids = [];
  var blastEntries = [];

  manifest.forEach(function(m) {
    if (loadBlasts && m.isBlast) {
      m.surfObj.isBlastSolid = true;
      solids.push(m.surfObj);
      blastEntries.push(m.blastEntry);
    } else {
      m.surfObj.isBlastSolid = false;
      pitSurfaces.push(m.surfObj);
    }
  });

  APP.kirraProjectSurfaces = pitSurfaces;
  APP.kirraProjectSolids = (APP.kirraProjectSolids || []).concat(solids);
  APP.importedBlasts = blastEntries;
  APP.kapSurfaceManifest = null;

  // Reset the shared preview chrome back to its default labels
  var title = document.querySelector("#importPreview .table-title");
  if (title) title.textContent = "Imported Blast Definitions";
  var mergeBtn = document.getElementById("btnMergeImported");
  if (mergeBtn) mergeBtn.textContent = "Merge into Schedule";
}

// Step 2D) Pattern Prep seeding now lives in src/utils/prep.js (applyPrepToBlast)
//  so the import merge, the Gantt toolbar button and the right-click menu all
//  share one implementation. Imported at the top of this module.

// Step 3) Merge imported blasts into the main schedule
function mergeImported() {
  // Step 3-undo) Snapshot before merging so an import can be reverted with Ctrl+Z.
  pushUndo("import merge");

  // Resolve a pending KAP manifest first — selected surfaces become the
  // importedBlasts the loop below commits; the rest become pit surfaces.
  if (APP.kapSurfaceManifest) {
    resolveKapManifest(true);
  }

  // Step 3-pre) Read the Pattern Prep import options from the footer controls
  var prepToggle = document.getElementById("importAddPrep");
  var prepDaysEl = document.getElementById("importPrepDays");
  var addPrep = prepToggle ? prepToggle.checked : false;
  var prepDays = prepDaysEl ? (parseInt(prepDaysEl.value) || 2) : 2;

  APP.importedBlasts.forEach(function(imp) {
    var existing = APP.blasts.find(function(b) { return b.name === imp.name; });
    if (existing) {
      // Step 3a) Update existing blast with imported data
      if (imp.volume && imp.volume > 0) {
        existing.volume = imp.volume;
      }
      if (imp.surfaceArea && imp.surfaceArea > 0) {
        existing.surfaceArea = imp.surfaceArea;
      }
      if (imp.expMass && imp.expMass > 0) {
        existing.expMass = imp.expMass;
      }
      if (imp.solidBenchHt && imp.solidBenchHt > 0) {
        existing.solidBenchHt = imp.solidBenchHt;
      }
      if (imp.solidBounds) {
        existing.solidBounds = imp.solidBounds;
      }
      if (imp.solidStats) {
        existing.solidStats = imp.solidStats;
      }
      if (imp.depthBinData) {
        existing.depthBinData = imp.depthBinData;
      }
      // Merge hole types if present
      if (imp.holeTypes && imp.holeTypes.length > 0) {
        existing.holeTypes = imp.holeTypes.map(function(ht) {
          return {
            type: ht.type,
            diam: ht.diam > 1 ? ht.diam / 1000 : ht.diam,
            burden: ht.burden,
            spacing: ht.spacing,
            holes: ht.holes || 0,
            drillMeters: ht.drillMeters || 0,
            expMass: ht.expMass || 0
          };
        });
      }
      // Step 3a-ii) Seed prep window if requested
      if (addPrep) applyPrepToBlast(existing, prepDays);
    } else {
      // Step 3b) Create new blast entry with all available data.
      // Auto-enable useBlockDepth for solid-sourced imports that have volume.
      var isSolid = (imp._sourceType === "solid" && imp.volume > 0);
      var newBlast = {
        name: imp.name,
        mode: "Manual",
        surfaceArea: imp.surfaceArea || 0,
        loadRate: imp.loadRate || 100000,
        volume: imp.volume || 0,
        expMass: imp.expMass || 0,
        drillStart: imp.drillStart || isoDate(APP.planStart),
        drillStartTime: imp.drillStartTime || "06:00",
        drillDays: imp.drillDays || 1,
        loadStart: null,
        loadDays: imp.loadDays || 0,
        blastDate: null,
        status: "planned",
        useBlockDepth: isSolid,
        deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
        assignedDrills: imp.assignedDrills || [],
        assignedMPUs: imp.assignedMPUs || (imp.assignedMPU ? [imp.assignedMPU] : []),
        holeTypes: (imp.holeTypes || []).map(function(ht) {
          return {
            patternId: ht.patternId || "",
            type: ht.type,
            diam: ht.diam > 1 ? ht.diam / 1000 : ht.diam,
            burden: ht.burden || 0,
            spacing: ht.spacing || 0,
            isLineDrill: ht.isLineDrill || false,
            holes: ht.holes || 0,
            holeDepth: ht.holeDepth || 0,
            drillMeters: ht.drillMeters || 0,
            expMass: ht.expMass || 0
          };
        }),
        solidBounds: imp.solidBounds || null,
        solidBenchHt: imp.solidBenchHt || null,
        solidStats: imp.solidStats || null,
        depthBinData: imp.depthBinData || null,
        drillProgress: 0,
        loadProgress: 0
      };
      // Step 3b-ii) Seed prep window if requested, then commit
      if (addPrep) applyPrepToBlast(newBlast, prepDays);
      APP.blasts.push(newBlast);
    }
  });

  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";

  // Step 3c) Log to appropriate log panel
  var kapLog = document.getElementById("kapProjectLog");
  var dxfLog = document.getElementById("dxfLog");
  if (kapLog) kapLog.innerHTML += "<div class=\"log-ok\" style=\"font-weight:700;\">Merged into schedule</div>";
  if (dxfLog) dxfLog.innerHTML += "<div class=\"log-ok\">Merged into schedule</div>";

  recalcDependencies();
  debouncedSave();
  renderGantt();
  renderBlasts();
}

// Step 4) Discard imported blasts.
//  For a KAP manifest, "discard" still loads the surfaces for 3D
//  viewing but creates no schedule blasts.
function clearImported() {
  if (APP.kapSurfaceManifest) {
    resolveKapManifest(false);
    debouncedSave();
  }
  APP.importedBlasts = [];
  document.getElementById("importPreview").style.display = "none";
}

// Step 5) Initialise import preview buttons + manifest interactions
function initImportPreview() {
  document.getElementById("btnMergeImported").addEventListener("click", mergeImported);
  document.getElementById("btnClearImported").addEventListener("click", clearImported);

  // Step 5a) Delegated handlers for the manifest: select-all + per-row
  //  checkbox (change) and the clickable Type badge (click). Both routes
  //  funnel through setManifestRow so they stay in sync.
  var table = document.getElementById("importTable");
  if (table) {
    table.addEventListener("change", function(e) {
      // Step 5a-0) Rename handlers run first — they apply to both preview modes
      //   and must not be blocked by the manifest early-return below.
      if (e.target.classList.contains("kap-rename")) {
        e.target.value = renameManifestRow(parseInt(e.target.getAttribute("data-kap-idx"), 10), e.target.value);
        return;
      }
      if (e.target.classList.contains("import-rename")) {
        e.target.value = renameImportedBlast(parseInt(e.target.getAttribute("data-imp-idx"), 10), e.target.value);
        return;
      }

      var manifest = APP.kapSurfaceManifest;
      if (!manifest) return;

      if (e.target.id === "kapManifestAll") {
        var on = e.target.checked;
        manifest.forEach(function(m) { m.isBlast = on; });
        showKapSurfaceManifest();
        return;
      }

      if (e.target.classList.contains("kap-manifest-cb")) {
        var idx = parseInt(e.target.getAttribute("data-idx"), 10);
        setManifestRow(idx, e.target.checked, e.target.closest("tr"));
      }
    });

    table.addEventListener("click", function(e) {
      if (!APP.kapSurfaceManifest) return;
      var badge = e.target.closest(".kap-manifest-type");
      if (!badge) return;
      var idx = parseInt(badge.getAttribute("data-idx"), 10);
      var m = APP.kapSurfaceManifest[idx];
      if (!m) return;
      setManifestRow(idx, !m.isBlast, badge.closest("tr"));
    });
  }
}

// Step 5a-i) Rename a KAP manifest row. Renames the display name, the
//   underlying surfObj, and the blastEntry together so the blast<->solid
//   link (matched by name) stays intact through the merge. Blank input
//   falls back to a generated "Surface_N" name so nothing is ever nameless.
function renameManifestRow(idx, rawName) {
  var manifest = APP.kapSurfaceManifest;
  if (!manifest || !manifest[idx]) return rawName;
  var m = manifest[idx];
  var name = (rawName || "").trim();
  if (!name) name = "Surface_" + (idx + 1);
  m.name = name;
  if (m.surfObj) m.surfObj.name = name;
  if (m.blastEntry) m.blastEntry.name = name;
  debouncedSave();
  return name;
}

// Step 5a-ii) Rename an imported blast (DXF holes or committed solid). If a
//   matching solid already sits in APP.kirraProjectSolids under the old name,
//   rename it too so findMatchingSolid() still resolves after merge.
function renameImportedBlast(idx, rawName) {
  var list = APP.importedBlasts || [];
  if (!list[idx]) return rawName;
  var oldName = list[idx].name;
  var name = (rawName || "").trim();
  if (!name) name = "Solid_" + (idx + 1);

  var solids = APP.kirraProjectSolids || [];
  for (var i = 0; i < solids.length; i++) {
    var sName = solids[i].name || "";
    var stripped = sName.indexOf("EXTRUDED_") === 0 ? sName.substring(9) : sName;
    if (sName === oldName || stripped === oldName) {
      solids[i].name = name;
    }
  }
  list[idx].name = name;
  debouncedSave();
  return name;
}

// Step 5b) Apply a Blast/Surface choice to one manifest row and sync the
//  row checkbox, the Type badge, and the select-all box — no full re-render.
function setManifestRow(idx, isBlast, row) {
  var manifest = APP.kapSurfaceManifest;
  if (!manifest || !manifest[idx]) return;
  manifest[idx].isBlast = isBlast;

  if (row) {
    var cb = row.querySelector(".kap-manifest-cb");
    if (cb) cb.checked = isBlast;
    var badge = row.querySelector(".kap-manifest-type");
    if (badge) {
      badge.className = "kap-manifest-type badge " + (isBlast ? "badge-buffer" : "badge-muted");
      badge.textContent = isBlast ? "Blast" : "Surface";
    }
  }

  var all = document.getElementById("kapManifestAll");
  if (all) all.checked = manifest.every(function(m) { return m.isBlast; });
}

export { showImportPreview, showKapSurfaceManifest, mergeImported, clearImported, initImportPreview };
