// ============================================================
//  PLAYBACK VIEW
//  Main module for the 3D Playback tab.
//  Initialises scene, loads surfaces + blasts, drives timeline.
// ============================================================

import { APP } from "../state/appState.js";
import { drills, mpus } from "../state/equipmentState.js";
import {
  initScene, resizeRenderer, setLocalOrigin, startRenderLoop, stopRenderLoop,
  fitCameraToBounds, setCameraTopDown, setCameraIsometric, setCameraPerspective,
  setGridVisible, disposeScene
} from "../three/PlaybackScene.js";
import {
  addSurface, clearSurfaces, getAllSurfaceBounds, setSurfaceVisible,
  setSurfaceOpacity, setAllWireframes, getLoadedSurfaceNames
} from "../three/PitShellRenderer.js";
import {
  addBlastPolygon, setBlastPhase, clearBlasts, getBlastCentroid, setAllBlastsVisible
} from "../three/BlastGeometry.js";
import {
  placeEquipment, clearEquipment, setAllEquipmentVisible
} from "../three/EquipmentModels.js";
import {
  buildTimeline, getCurrentDay, getDayCount, getCurrentIndex,
  goToDay, nextDay, prevDay, goToStart, goToEnd,
  togglePlayPause, isPlaying, setSpeed, getSpeed, onDayChange
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

  // Step 1d) Start render loop
  startRenderLoop(null);

  // Step 1e) Wire up camera preset buttons
  var avgZ = 0;
  document.getElementById("pbCamTop").addEventListener("click", function() { setCameraTopDown(avgZ); });
  document.getElementById("pbCamIso").addEventListener("click", function() { setCameraIsometric(avgZ); });
  document.getElementById("pbCamPersp").addEventListener("click", function() { setCameraPerspective(avgZ); });

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

  // Step 2c) Show/hide no-data overlay
  var noDataEl = document.getElementById("playbackNoData");
  if (noDataEl) noDataEl.style.display = hasSpatial ? "none" : "flex";

  if (!hasSpatial) return;

  // Step 2d) Compute centroid and set local origin
  var cx = allX.reduce(function(a, b) { return a + b; }, 0) / allX.length;
  var cy = allY.reduce(function(a, b) { return a + b; }, 0) / allY.length;
  var cz = allZ.reduce(function(a, b) { return a + b; }, 0) / allZ.length;
  setLocalOrigin(cx, cy, cz);

  // Step 2e) Add surfaces to scene
  surfaces.forEach(function(s) {
    if (s.points && s.points.length > 0 && s.triangles && s.triangles.length > 0) {
      addSurface(s.name, s.points, s.triangles, {
        opacity: s.opacity !== undefined ? s.opacity : 0.85,
        visible: s.visible !== undefined ? s.visible : true
      });
    }
  });

  // Step 2f) Add blast polygons
  APP.blasts.forEach(function(b) {
    if (b.polygons && b.polygons.length > 0) {
      var avgZ = 0;
      b.polygons.forEach(function(p) { avgZ += (p.z || 0); });
      avgZ /= b.polygons.length;
      addBlastPolygon(b.name, b.polygons, avgZ, b.status || "planned");
    }
  });

  // Step 2g) Update surface list in sidebar
  updateSurfaceList();

  // Step 2h) Fit camera to scene bounds
  var bounds = getAllSurfaceBounds();
  if (bounds) {
    fitCameraToBounds(bounds.minX, bounds.maxX, bounds.minY, bounds.maxY, bounds.minZ, bounds.maxZ);
  }

  // Step 2i) Build and apply timeline
  buildTimeline();
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
    updateSceneForDay(day0);
  } else {
    document.getElementById("pbTlDay").textContent = "No schedule data";
    document.getElementById("pbTlDate").textContent = "";
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

  // Step 4b) Position equipment
  clearEquipment();
  var placed = {};
  var showEquip = document.getElementById("pbShowEquipment");
  if (showEquip && !showEquip.checked) return;

  APP.blasts.forEach(function(b) {
    var state = day.blastStates[b.name];
    if (!state) return;

    // Step 4b-i) Place drills at drilling blasts
    if (state.phase === "drilling" && state.drills) {
      state.drills.forEach(function(drillId) {
        if (placed[drillId]) return;
        var centroid = getBlastCentroid(b.name);
        if (!centroid) return;
        var drill = drills.find(function(d) { return d.id === drillId; });
        var type = drill ? drill.type : "PV271";
        // Step) Offset multiple drills so they don't stack
        var offset = Object.keys(placed).length * 8;
        var pos = centroid.clone();
        pos.x += offset;
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
