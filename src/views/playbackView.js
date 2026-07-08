// ============================================================
//  PLAYBACK VIEW
//  Main module for the 3D Playback tab.
//  Initialises scene, loads surfaces + blasts, drives timeline.
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus } from "../state/equipmentState.js";
import { findSolidForBlast } from "../utils/solidMatch.js";
import {
  initScene, resizeRenderer, setLocalOrigin, startRenderLoop, stopRenderLoop,
  fitCameraToBounds, setCameraTopDown, setCameraIsometric, setCameraPerspective,
  setDataBounds, setCameraMode, getCameraMode,
  setGridVisible, disposeScene
} from "../three/PlaybackScene.js";
import {
  addSurface, clearSurfaces, getAllSurfaceBounds, setSurfaceVisible,
  setSurfaceOpacity, setAllWireframes, getLoadedSurfaceNames,
  setSurfaceColorMode
} from "../three/PitShellRenderer.js";
import {
  addBlastPolygon, addBlastSolid, createBlastLabel, setBlastPhase,
  setAllLabelsVisible, setBlastLabelVisible, updateFlashAnimation,
  clearBlasts, getBlastCentroid, getBlastTopZ, setAllBlastsVisible
} from "../three/BlastGeometry.js";
import {
  placeEquipment, clearEquipment, setAllEquipmentVisible, setAllEquipLabelsVisible
} from "../three/EquipmentModels.js";
import {
  buildTimeline, getCurrentDay, getDayCount, getCurrentIndex,
  goToDay, nextDay, prevDay, goToStart, goToEnd,
  togglePlayPause, isPlaying, setSpeed, getSpeed, setLoop, onDayChange
} from "../three/PlaybackTimeline.js";

var _initialised = false;
var _resizeObserver = null;

// Step 1) Initialise the playback view (called when tab first shown)
function initPlayback() {
  if (_initialised) return;

  var canvas = document.getElementById("playbackCanvas");
  var viewport = document.getElementById("playbackViewport");
  if (!canvas || !viewport) return;

  // Step 1a) Init Three.js scene
  initScene(canvas);

  // Step 1b) Size to container
  var rect = viewport.getBoundingClientRect();
  resizeRenderer(rect.width, rect.height);

  // Step 1c) Observe container resizes
  _resizeObserver = new ResizeObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      var cr = entries[i].contentRect;
      resizeRenderer(cr.width, cr.height);
    }
  });
  _resizeObserver.observe(viewport);

  // Step 1d) Start render loop with flash animation callback
  startRenderLoop(function(deltaMs) {
    updateFlashAnimation(deltaMs);
  });

  // Step 1e) Wire up camera preset buttons (use stored data bounds, not a closure)
  document.getElementById("pbCamTop").addEventListener("click", function() { setCameraTopDown(); });
  document.getElementById("pbCamIso").addEventListener("click", function() { setCameraIsometric(); });
  document.getElementById("pbCamPersp").addEventListener("click", function() { setCameraPerspective(); });

  // Step 1e-ii) Wire up ortho camera toggle
  var orthoBtn = document.getElementById("pbCamOrtho");
  if (orthoBtn) {
    orthoBtn.addEventListener("click", function() {
      var isOrtho = getCameraMode() === "ortho";
      setCameraMode(isOrtho ? "perspective" : "ortho");
      orthoBtn.classList.toggle("active", !isOrtho);
      orthoBtn.textContent = isOrtho ? "Ortho" : "Persp";
    });
  }

  // Step 1e-iii) Wire up single-color surface toggle
  var colorToggle = document.getElementById("pbSingleColor");
  if (colorToggle) {
    colorToggle.addEventListener("change", function(e) {
      var picker = document.getElementById("pbSurfaceColor");
      var hex = picker ? parseInt(picker.value.replace("#", ""), 16) : 0x7799bb;
      setSurfaceColorMode(e.target.checked ? "single" : "spectrum", hex);
    });
  }

  // Step 1e-iv) Wire up surface color picker
  var colorPicker = document.getElementById("pbSurfaceColor");
  if (colorPicker) {
    colorPicker.addEventListener("input", function(e) {
      var toggle = document.getElementById("pbSingleColor");
      if (toggle && toggle.checked) {
        setSurfaceColorMode("single", parseInt(e.target.value.replace("#", ""), 16));
      }
    });
  }

  // Step 1f) Wire up sidebar toggles
  document.getElementById("pbShowAllBlasts").addEventListener("change", function(e) {
    setAllBlastsVisible(e.target.checked);
  });
  document.getElementById("pbShowEquipment").addEventListener("change", function(e) {
    setAllEquipmentVisible(e.target.checked);
  });
  document.getElementById("pbWireframe").addEventListener("change", function(e) {
    setAllWireframes(e.target.checked);
  });
  document.getElementById("pbGrid").addEventListener("change", function(e) {
    setGridVisible(e.target.checked);
  });

  // Step 1f-ii) Wire up label toggles — both re-run the central visibility logic so the
  //   master "Show blast labels" toggle and the "Only active-day blasts" option compose.
  var pbLabels = document.getElementById("pbShowLabels");
  if (pbLabels) {
    pbLabels.addEventListener("change", function() {
      applyLabelVisibility(getCurrentDay());
    });
  }
  var pbLabelsDayOnly = document.getElementById("pbLabelsDayOnly");
  if (pbLabelsDayOnly) {
    pbLabelsDayOnly.addEventListener("change", function() {
      applyLabelVisibility(getCurrentDay());
    });
  }
  var pbEquipLabels = document.getElementById("pbShowEquipLabels");
  if (pbEquipLabels) {
    pbEquipLabels.addEventListener("change", function(e) {
      setAllEquipLabelsVisible(e.target.checked);
    });
  }

  // Step 1g) Wire up timeline controls
  document.getElementById("pbTlStart").addEventListener("click", goToStart);
  document.getElementById("pbTlPrev").addEventListener("click", prevDay);
  document.getElementById("pbTlPlay").addEventListener("click", function() {
    togglePlayPause();
    updatePlayButton();
  });
  document.getElementById("pbTlNext").addEventListener("click", nextDay);
  document.getElementById("pbTlEnd").addEventListener("click", goToEnd);

  // Step 1h) Scrubber range input
  document.getElementById("pbTlRange").addEventListener("input", function(e) {
    goToDay(parseInt(e.target.value));
  });

  // Step 1i) Speed buttons
  var speedBtns = document.querySelectorAll(".pb-speed-btn");
  speedBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var s = parseInt(btn.getAttribute("data-speed"));
      setSpeed(s);
      speedBtns.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });

  // Step 1i-ii) Loop checkbox
  var loopCb = document.getElementById("pbTlLoop");
  if (loopCb) {
    loopCb.addEventListener("change", function(e) {
      setLoop(e.target.checked);
    });
  }

  // Step 1j) Day change callback — update UI and scene
  onDayChange(function(day) {
    updateTimelineUI(day);
    updateSceneForDay(day);
  });

  _initialised = true;
}

// Step 2) Refresh playback data (called whenever tab is shown or data changes)
function refreshPlayback() {
  if (!_initialised) initPlayback();

  // Step 2-resize) Re-measure the viewport and resize the renderer every time the
  //   tab is shown. This guarantees a valid camera aspect even if a prior 0x0
  //   ResizeObserver event (fired while the tab was hidden) had broken it — the
  //   reported "3D scene / grid / blasts all disappeared" symptom.
  var vpEl = document.getElementById("playbackViewport");
  if (vpEl) {
    var vpRect = vpEl.getBoundingClientRect();
    if (vpRect.width > 0 && vpRect.height > 0) {
      resizeRenderer(vpRect.width, vpRect.height);
    }
  }

  // Step 2a) Clear existing scene objects
  clearSurfaces();
  clearBlasts();
  clearEquipment();

  // Step 2b) Compute local origin from all spatial data
  var hasSpatial = false;
  var allX = [], allY = [], allZ = [];

  // Step 2b-i) Collect from surfaces
  var surfaces = APP.kirraProjectSurfaces || [];
  surfaces.forEach(function(s) {
    if (s.bounds && isFinite(s.bounds.minX) && isFinite(s.bounds.maxX)) {
      allX.push(s.bounds.minX, s.bounds.maxX);
      allY.push(s.bounds.minY, s.bounds.maxY);
      allZ.push(s.bounds.minZ, s.bounds.maxZ);
      hasSpatial = true;
    } else if (s.points && s.points.length > 0) {
      s.points.forEach(function(p) {
        allX.push(p.x);
        allY.push(p.y);
        allZ.push(p.z || 0);
      });
      hasSpatial = true;
    } else if (s.triangles && s.triangles.length > 0 && s.triangles[0].vertices) {
      // Step 2b-i-KAP) Vertex-per-triangle format — sample first+last triangle for bounds
      var sample = [s.triangles[0], s.triangles[Math.floor(s.triangles.length / 2)], s.triangles[s.triangles.length - 1]];
      sample.forEach(function(tri) {
        if (!tri.vertices) return;
        tri.vertices.forEach(function(v) {
          allX.push(v.x);
          allY.push(v.y);
          allZ.push(v.z || 0);
        });
      });
      hasSpatial = true;
    }
  });

  // Step 2b-ii) Collect from blast polygons
  APP.blasts.forEach(function(b) {
    if (b.polygons && b.polygons.length > 0) {
      b.polygons.forEach(function(p) {
        allX.push(p.x);
        allY.push(p.y);
        allZ.push(p.z || 0);
      });
      hasSpatial = true;
    }
  });

  // Step 2b-iii) Collect from blast solids
  var solids = APP.kirraProjectSolids || [];
  solids.forEach(function(s) {
    if (s.bounds && isFinite(s.bounds.minX)) {
      allX.push(s.bounds.minX, s.bounds.maxX);
      allY.push(s.bounds.minY, s.bounds.maxY);
      allZ.push(s.bounds.minZ, s.bounds.maxZ);
      hasSpatial = true;
    } else if (s.triangles && s.triangles.length > 0 && s.triangles[0].vertices) {
      var sample = [s.triangles[0], s.triangles[Math.floor(s.triangles.length / 2)], s.triangles[s.triangles.length - 1]];
      sample.forEach(function(tri) {
        if (!tri.vertices) return;
        tri.vertices.forEach(function(v) {
          allX.push(v.x);
          allY.push(v.y);
          allZ.push(v.z || 0);
        });
      });
      hasSpatial = true;
    }
  });

  // Step 2c) Show/hide no-data overlay
  var noDataEl = document.getElementById("playbackNoData");
  if (noDataEl) noDataEl.style.display = hasSpatial ? "none" : "flex";

  if (!hasSpatial) return;

  // Step 2d) Compute centroid and set local origin
  var cx = allX.reduce(function(a, b) { return a + b; }, 0) / allX.length;
  var cy = allY.reduce(function(a, b) { return a + b; }, 0) / allY.length;
  var cz = allZ.reduce(function(a, b) { return a + b; }, 0) / allZ.length;
  setLocalOrigin(cx, cy, cz);

  // Step 2e) Add surfaces to scene — supports both indexed and vertex-per-tri formats
  surfaces.forEach(function(s) {
    var hasPoints = s.points && s.points.length > 0;
    var hasTris = s.triangles && s.triangles.length > 0;
    var hasVertexPerTri = hasTris && s.triangles[0] && s.triangles[0].vertices !== undefined;

    if (hasTris && (hasPoints || hasVertexPerTri)) {
      addSurface(s.name, s.points || [], s.triangles, {
        opacity: s.opacity !== undefined ? s.opacity : 0.85,
        visible: true
      });
    }
  });

  // Step 2e-ii) Explicitly sync surface visibility so pit shell always shows (avoids checkbox-toggle workaround)
  surfaces.forEach(function(s) {
    var hasTris = s.triangles && s.triangles.length > 0;
    var hasVertexPerTri = hasTris && s.triangles[0] && s.triangles[0].vertices !== undefined;
    if (hasTris && (s.points || hasVertexPerTri)) {
      setSurfaceVisible(s.name, true);
    }
  });

  // Step 2f) Add blast polygons.
  //   Per-blast try/catch so one malformed blast can't abort the whole loop and
  //   leave the scene with only the surface (the reported regression).
  APP.blasts.forEach(function(b) {
    try {
      if (b.polygons && b.polygons.length > 0) {
        var avgZ = 0;
        b.polygons.forEach(function(p) { avgZ += (p.z || 0); });
        avgZ /= b.polygons.length;
        addBlastPolygon(b.name, b.polygons, avgZ, b.status || "planned");
      }
    } catch (err) {
      console.error("Playback: failed to add blast polygon for '" + b.name + "'", err);
    }
  });

  // Step 2f-ii) Add blast solids (3D volumes matched by name) — also guarded.
  //   The 3D scene regenerates off the gantt's blast list (APP.blasts). Each
  //   blast is resolved to its solid with the shared prefix-tolerant matcher so
  //   a rename or "EXTRUDED_" prefix drift can't orphan the blast from its solid
  //   (which previously made blasts vanish while the surface stayed visible).
  var _solidMatched = 0;
  var _unmatched = [];
  APP.blasts.forEach(function(b) {
    try {
      var solid = findSolidForBlast(b);
      if (solid) { addBlastSolid(b.name, solid); _solidMatched++; }
      else if (!(b.polygons && b.polygons.length > 0)) _unmatched.push(b.name);
    } catch (err) {
      console.error("Playback: failed to add blast solid for '" + b.name + "'", err);
    }
  });
  // Step 2f-iii) Diagnostic summary so name/geometry mismatches are visible.
  console.log("Playback: " + _solidMatched + "/" + APP.blasts.length +
    " blasts linked to a 3D solid. Solids available: " +
    ((APP.kirraProjectSolids || []).map(function(s) { return s.name; }).join(", ") || "none"));
  if (_unmatched.length > 0) {
    console.warn("Playback: blasts with NO solid and NO polygon (won't show in 3D): " + _unmatched.join(", "));
  }

  // Step 2f-iv) Create blast labels, then immediately sync their visibility to the
  //   current checkbox state. Labels are recreated on every refresh (default visible),
  //   so without this re-sync they would reappear even when "Show blast labels" is off
  //   — the reported "stale labels keep coming back" bug.
  APP.blasts.forEach(function(b) {
    try {
      createBlastLabel(b.name);
    } catch (err) {
      console.error("Playback: failed to create label for '" + b.name + "'", err);
    }
  });
  applyLabelVisibility(getCurrentDay());

  // Step 2g) Update surface list in sidebar
  updateSurfaceList();

  // Step 2g-ii) Re-apply single colour mode to newly added surfaces (avoids toggle-off-on refresh)
  var singleColorCb = document.getElementById("pbSingleColor");
  var surfaceColorPicker = document.getElementById("pbSurfaceColor");
  if (singleColorCb && singleColorCb.checked) {
    var hex = surfaceColorPicker ? parseInt(surfaceColorPicker.value.replace("#", ""), 16) : 0x7799bb;
    setSurfaceColorMode("single", hex);
  }

  // Step 2h) Fit camera to scene bounds and store for camera presets.
  //   Prefer surface bounds, but fall back to the bounds of ALL collected spatial data
  //   (blast solids + polygons) so the schedule still renders and frames correctly when
  //   there is no base surface loaded — e.g. a project of 3D blast solids only.
  var bounds = getAllSurfaceBounds();
  if (!bounds && allX.length > 0) {
    bounds = {
      minX: Math.min.apply(null, allX), maxX: Math.max.apply(null, allX),
      minY: Math.min.apply(null, allY), maxY: Math.max.apply(null, allY),
      minZ: Math.min.apply(null, allZ), maxZ: Math.max.apply(null, allZ)
    };
  }
  if (bounds) {
    setDataBounds(bounds);
    fitCameraToBounds(bounds.minX, bounds.maxX, bounds.minY, bounds.maxY, bounds.minZ, bounds.maxZ);
  }

  // Step 2i) Build and apply timeline.
  //   Guarded so a timeline error cannot prevent the already-added blast/surface
  //   geometry from remaining on screen.
  try {
    buildTimeline();
  } catch (err) {
    console.error("Playback: buildTimeline failed", err);
  }
  var totalDays = getDayCount();

  var rangeEl = document.getElementById("pbTlRange");
  if (rangeEl) {
    rangeEl.max = Math.max(0, totalDays - 1);
    rangeEl.value = 0;
  }

  // Step 2j) Apply initial day state
  var day0 = getCurrentDay();
  if (day0) {
    updateTimelineUI(day0);
    try {
      updateSceneForDay(day0);
    } catch (err) {
      console.error("Playback: updateSceneForDay(day0) failed", err);
    }
  } else {
    document.getElementById("pbTlDay").textContent = "No schedule data";
    document.getElementById("pbTlDate").textContent = "";
  }

  // Step 2k) Re-apply Loop checkbox state so loop works without toggle-off-on
  var loopCbRefresh = document.getElementById("pbTlLoop");
  if (loopCbRefresh) {
    setLoop(loopCbRefresh.checked);
  }
}

// Step 3) Update timeline UI elements
function updateTimelineUI(day) {
  if (!day) return;
  var total = getDayCount();
  document.getElementById("pbTlDay").textContent = "Day " + (day.index + 1) + " of " + total;
  document.getElementById("pbTlDate").textContent = day.date;
  document.getElementById("pbTlRange").value = day.index;
}

function updatePlayButton() {
  var btn = document.getElementById("pbTlPlay");
  if (btn) btn.innerHTML = isPlaying() ? "&#9646;&#9646;" : "&#9654;";
}

// Step 4) Update scene objects for a given day
function updateSceneForDay(day) {
  if (!day) return;

  // Step 4a) Update blast colours
  APP.blasts.forEach(function(b) {
    var state = day.blastStates[b.name];
    if (state) {
      setBlastPhase(b.name, state.phase);
    } else {
      setBlastPhase(b.name, "planned");
    }
  });

  // Step 4a-ii) Re-apply label visibility for the current day (keeps the
  //   "Only active-day blasts" option in sync as the timeline advances)
  applyLabelVisibility(day);

  // Step 4b) Position equipment
  clearEquipment();
  var placed = {};
  var showEquip = document.getElementById("pbShowEquipment");
  if (showEquip && !showEquip.checked) return;

  APP.blasts.forEach(function(b) {
    var state = day.blastStates[b.name];
    if (!state) return;

    // Step 4b-i) Place drills at drilling blasts — base (cuboid) at top of blast
    if (state.phase === "drilling" && state.drills) {
      state.drills.forEach(function(drillId) {
        if (placed[drillId]) return;
        var centroid = getBlastCentroid(b.name);
        var topZ = getBlastTopZ(b.name);
        if (!centroid) return;
        var drill = drills.find(function(d) { return d.id === drillId; });
        var type = drill ? (drill.model || drill.type) : "PV271";
        // Step) Offset multiple drills so they don't stack
        var offset = Object.keys(placed).length * 8;
        var pos = centroid.clone();
        pos.x += offset;
        if (topZ !== null) pos.z = topZ;
        placeEquipment(drillId, type, pos);
        placed[drillId] = true;
      });
    }

    // Step 4b-ii) Place MPUs at loading blasts (migrated from single mpu to mpus array)
    if (state.phase === "loading" && state.mpus && state.mpus.length > 0) {
      for (var mi = 0; mi < state.mpus.length; mi++) {
        var mpuId = state.mpus[mi];
        if (placed[mpuId]) continue;
        var centroid = getBlastCentroid(b.name);
        if (!centroid) continue;
        var pos = centroid.clone();
        pos.x -= 15 + (mi * 10);
        placeEquipment(mpuId, "MPU", pos);
        placed[mpuId] = true;
      }
    }
  });

  // Step 4c) Sync equipment label visibility with checkbox
  var eqLabelCb = document.getElementById("pbShowEquipLabels");
  if (eqLabelCb) setAllEquipLabelsVisible(eqLabelCb.checked);
}

// Step 4d) Central blast-label visibility logic.
//   Composes the master "Show blast labels" toggle with the "Only active-day blasts"
//   option. When day-only is on, only blasts that are actively being worked on the
//   given schedule day (any phase except "planned" or "completed") show their label,
//   so fired blasts and yet-to-be-worked blasts don't clutter the view.
function applyLabelVisibility(day) {
  var master = document.getElementById("pbShowLabels");
  var dayOnly = document.getElementById("pbLabelsDayOnly");
  var showLabels = master ? master.checked : true;
  var activeDayOnly = dayOnly ? dayOnly.checked : false;

  // Step 4d-i) Master off — hide everything and stop.
  if (!showLabels) {
    setAllLabelsVisible(false);
    return;
  }

  // Step 4d-ii) Master on, no day filter — show all labels.
  if (!activeDayOnly || !day) {
    setAllLabelsVisible(true);
    return;
  }

  // Step 4d-iii) Master on + day filter — show only blasts actively worked today.
  //   Retained-state phases (drilled/loaded) and idle/planned/completed are NOT
  //   "worked today", so their labels stay hidden to reduce clutter.
  var ACTIVE_PHASES = { prep: 1, drilling: 1, loading: 1, blastDay: 1, excavating: 1 };
  APP.blasts.forEach(function(b) {
    var state = day.blastStates[b.name];
    var phase = state ? state.phase : "planned";
    setBlastLabelVisible(b.name, !!ACTIVE_PHASES[phase]);
  });
}

// Step 5) Update surface list in sidebar
function updateSurfaceList() {
  var container = document.getElementById("playbackSurfaceList");
  if (!container) return;

  var names = getLoadedSurfaceNames();
  if (names.length === 0) {
    container.innerHTML = "<div class=\"playback-empty-msg\">No surfaces loaded.<br>Import a Kirra Project or DXF with 3DFACE data.</div>";
    return;
  }

  var html = "";
  names.forEach(function(name) {
    html += "<div class=\"playback-surface-item\">";
    html += "<label class=\"playback-toggle\">";
    html += "<input type=\"checkbox\" data-surface=\"" + name + "\" class=\"pb-surf-toggle\" checked>";
    html += " " + name;
    html += "</label>";
    html += "<input type=\"range\" min=\"0\" max=\"100\" value=\"85\" class=\"pb-surf-opacity\" data-surface=\"" + name + "\" title=\"Opacity\">";
    html += "</div>";
  });
  container.innerHTML = html;

  // Step 5a) Wire up visibility toggles
  container.querySelectorAll(".pb-surf-toggle").forEach(function(cb) {
    cb.addEventListener("change", function() {
      setSurfaceVisible(cb.getAttribute("data-surface"), cb.checked);
    });
  });

  // Step 5b) Wire up opacity sliders
  container.querySelectorAll(".pb-surf-opacity").forEach(function(slider) {
    slider.addEventListener("input", function() {
      setSurfaceOpacity(slider.getAttribute("data-surface"), parseInt(slider.value) / 100);
    });
  });
}

// Step 6) Export for main.js
function renderPlayback() {
  refreshPlayback();
}

function initPlaybackView() {
  // Step 6a) Lazy init — only init when tab is shown
  var tab = document.querySelector("[data-tab=\"playback\"]");
  if (tab) {
    tab.addEventListener("click", function() {
      setTimeout(function() { refreshPlayback(); }, 50);
    });
  }
}

export { initPlaybackView, renderPlayback };
