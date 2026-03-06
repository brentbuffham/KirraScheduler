// ============================================================
//  BLAST GEOMETRY
//  Renders blast boundary polygons AND solid meshes in 3D.
//  Polygons rendered as extruded outlines on the bench surface.
//  Solids rendered as triangulated meshes from KAP/Kirra data.
//  Colour-coded by blast status / current playback phase.
//  Flash animation for blast-day detonation effect.
// ============================================================

import * as THREE from "three";
import { getScene, toLocal } from "./PlaybackScene.js";

// Step 1) Map of blastName -> { outlineMesh, fillMesh, solidMesh, solidWire, centroid, status }
var _blastMeshes = {};

// Step 2) Phase colours — matches user specification
var PHASE_COLORS = {
  planned:   0x666677,   // Grey — not yet active
  prep:      0x22c55e,   // Green — pattern prep
  drilling:  0x3b82f6,   // Blue — active drilling
  inactive:  0x555566,   // Grey — gap between phases
  loading:   0xf59e0b,   // Orange/Yellow — loading explosives
  blastDay:  0xef4444,   // Red — detonation (will flash)
  completed: 0x111111,   // Near-black — post-blast shadow
  active:    0x3b82f6    // Alias for drilling
};

// Step 2b) Phase opacity for solid meshes (opaque for all except completed)
var PHASE_OPACITY = {
  planned:   1.0,
  prep:      1.0,
  drilling:  1.0,
  inactive:  1.0,
  loading:   1.0,
  blastDay:  1.0,
  completed: 0.10
};

// Step 2c) Flash animation state
var _flashBlasts = [];
var _flashClock = 0;

// Step 3) Add a blast polygon to the scene (outline + flat fill)
function addBlastPolygon(blastName, polygonPoints, elevation, status) {
  var scene = getScene();
  if (!scene || !polygonPoints || polygonPoints.length < 3) return null;

  var z = elevation || 0;
  var color = PHASE_COLORS[status] || PHASE_COLORS.planned;

  // Step 3a) Build outline from polygon points
  var linePoints = [];
  for (var i = 0; i < polygonPoints.length; i++) {
    var p = polygonPoints[i];
    var lp = toLocal(p.x, p.y, p.z || z);
    linePoints.push(lp);
  }
  if (linePoints.length > 0) {
    linePoints.push(linePoints[0].clone());
  }

  var lineGeom = new THREE.BufferGeometry().setFromPoints(linePoints);
  var lineMat = new THREE.LineBasicMaterial({ color: color, linewidth: 2 });
  var outlineMesh = new THREE.Line(lineGeom, lineMat);
  outlineMesh.name = "blast_outline_" + blastName;
  scene.add(outlineMesh);

  // Step 3b) Semi-transparent fill
  var shape = new THREE.Shape();
  shape.moveTo(linePoints[0].x, linePoints[0].y);
  for (var j = 1; j < linePoints.length - 1; j++) {
    shape.lineTo(linePoints[j].x, linePoints[j].y);
  }
  shape.closePath();

  var shapeGeom = new THREE.ShapeGeometry(shape);
  var posArr = shapeGeom.attributes.position.array;
  for (var k = 2; k < posArr.length; k += 3) {
    posArr[k] = linePoints[0].z;
  }
  shapeGeom.attributes.position.needsUpdate = true;
  shapeGeom.computeVertexNormals();

  var fillMat = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide
  });
  var fillMesh = new THREE.Mesh(shapeGeom, fillMat);
  fillMesh.name = "blast_fill_" + blastName;
  scene.add(fillMesh);

  // Step 3c) Centroid for label and equipment placement
  var cx = 0, cy = 0, cz = linePoints[0].z;
  for (var m = 0; m < linePoints.length - 1; m++) {
    cx += linePoints[m].x;
    cy += linePoints[m].y;
  }
  cx /= (linePoints.length - 1);
  cy /= (linePoints.length - 1);

  // Step 3d) Store reference
  if (!_blastMeshes[blastName]) {
    _blastMeshes[blastName] = {
      outline: null, fill: null, solidMesh: null, label: null,
      centroid: null, status: status, color: color
    };
  }
  _blastMeshes[blastName].outline = outlineMesh;
  _blastMeshes[blastName].fill = fillMesh;
  _blastMeshes[blastName].centroid = new THREE.Vector3(cx, cy, cz);
  _blastMeshes[blastName].status = status;
  _blastMeshes[blastName].color = color;

  return _blastMeshes[blastName];
}

// Step 4) Add a blast solid mesh (triangulated 3D volume)
function addBlastSolid(blastName, solidData) {
  var scene = getScene();
  if (!scene || !solidData) return null;
  if (!solidData.triangles || solidData.triangles.length === 0) return null;

  var hasVertexPerTri = solidData.triangles[0].vertices !== undefined;
  var points = solidData.points || [];
  var triangles = solidData.triangles;

  // Step 4a) Build geometry from triangles
  var positions = new Float32Array(triangles.length * 9);
  var idx = 0;

  for (var t = 0; t < triangles.length; t++) {
    var tri = triangles[t];
    var pa, pb, pc;

    if (hasVertexPerTri) {
      if (!tri.vertices || tri.vertices.length < 3) continue;
      pa = tri.vertices[0];
      pb = tri.vertices[1];
      pc = tri.vertices[2];
    } else {
      var ia = tri.a !== undefined ? tri.a : tri[0];
      var ib = tri.b !== undefined ? tri.b : tri[1];
      var ic = tri.c !== undefined ? tri.c : tri[2];
      if (ia >= points.length || ib >= points.length || ic >= points.length) continue;
      pa = points[ia];
      pb = points[ib];
      pc = points[ic];
    }

    var va = toLocal(pa.x, pa.y, pa.z || 0);
    var vb = toLocal(pb.x, pb.y, pb.z || 0);
    var vc = toLocal(pc.x, pc.y, pc.z || 0);

    positions[idx * 9 + 0] = va.x; positions[idx * 9 + 1] = va.y; positions[idx * 9 + 2] = va.z;
    positions[idx * 9 + 3] = vb.x; positions[idx * 9 + 4] = vb.y; positions[idx * 9 + 5] = vb.z;
    positions[idx * 9 + 6] = vc.x; positions[idx * 9 + 7] = vc.y; positions[idx * 9 + 8] = vc.z;
    idx++;
  }

  var usedPositions = new Float32Array(positions.buffer, 0, idx * 9);
  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(usedPositions, 3));
  geometry.computeVertexNormals();

  // Step 4b) Solid mesh material — opaque Phong, only transparent when completed
  var color = PHASE_COLORS.planned;
  var material = new THREE.MeshPhongMaterial({
    color: color,
    transparent: false,
    opacity: 1.0,
    side: THREE.DoubleSide,
    shininess: 30,
    flatShading: true,
    depthWrite: true
  });
  var solidMesh = new THREE.Mesh(geometry, material);
  solidMesh.name = "blast_solid_" + blastName;
  scene.add(solidMesh);

  // Step 4c) Compute centroid from solid geometry if not already set
  var box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
  var center = new THREE.Vector3();
  box.getCenter(center);

  if (!_blastMeshes[blastName]) {
    _blastMeshes[blastName] = {
      outline: null, fill: null, solidMesh: null, label: null,
      centroid: center, status: "planned", color: color
    };
  }
  _blastMeshes[blastName].solidMesh = solidMesh;
  if (!_blastMeshes[blastName].centroid) {
    _blastMeshes[blastName].centroid = center;
  }

  return _blastMeshes[blastName];
}

// Step 5) Update blast phase colour — applies to polygon and solid
function setBlastPhase(blastName, phase) {
  var entry = _blastMeshes[blastName];
  if (!entry) return;

  var color = PHASE_COLORS[phase] || PHASE_COLORS.planned;
  var opacity = PHASE_OPACITY[phase] !== undefined ? PHASE_OPACITY[phase] : 1.0;
  var isCompleted = (phase === "completed");

  // Step 5a) Update polygon outline + fill
  if (entry.outline) {
    entry.outline.material.color.setHex(color);
    entry.outline.material.opacity = isCompleted ? 0.1 : 1.0;
    entry.outline.material.transparent = isCompleted;
  }
  if (entry.fill) {
    entry.fill.material.color.setHex(color);
    entry.fill.material.opacity = isCompleted ? 0.05 : 0.25;
  }

  // Step 5b) Update solid mesh — opaque for active phases, transparent for completed
  if (entry.solidMesh) {
    entry.solidMesh.material.color.setHex(color);
    entry.solidMesh.material.transparent = isCompleted;
    entry.solidMesh.material.opacity = opacity;
    entry.solidMesh.material.depthWrite = !isCompleted;
    // Step 5b-i) Reset emissive when leaving blastDay (flash animation sets it; otherwise grey appears tinted)
    if (phase !== "blastDay") {
      entry.solidMesh.material.emissive.setHex(0x000000);
    }
    entry.solidMesh.material.needsUpdate = true;
  }

  // Step 5c) Manage flash list
  var flashIdx = _flashBlasts.indexOf(blastName);
  if (phase === "blastDay") {
    if (flashIdx === -1) _flashBlasts.push(blastName);
  } else {
    if (flashIdx !== -1) _flashBlasts.splice(flashIdx, 1);
  }

  entry.status = phase;
  entry.color = color;
}

// Step 6) Per-frame flash animation — called from the render loop
function updateFlashAnimation(deltaMs) {
  if (_flashBlasts.length === 0) return;

  _flashClock += deltaMs * 0.006;
  // Step 6a) Oscillate between red and bright white/yellow
  var pulse = (Math.sin(_flashClock * 8) + 1) * 0.5;
  var flashColor = new THREE.Color();
  flashColor.setRGB(1.0, pulse * 0.3, pulse * 0.1);

  for (var i = 0; i < _flashBlasts.length; i++) {
    var entry = _blastMeshes[_flashBlasts[i]];
    if (!entry) continue;

    if (entry.outline) entry.outline.material.color.copy(flashColor);
    if (entry.fill) {
      entry.fill.material.color.copy(flashColor);
      entry.fill.material.opacity = 0.3 + pulse * 0.4;
    }
    if (entry.solidMesh) {
      entry.solidMesh.material.color.copy(flashColor);
      entry.solidMesh.material.opacity = 0.5 + pulse * 0.4;
      entry.solidMesh.material.emissive = flashColor.clone().multiplyScalar(0.3);
      entry.solidMesh.material.needsUpdate = true;
    }
  }
}

// Step 7) Create a text label sprite for a blast
function createBlastLabel(blastName) {
  var entry = _blastMeshes[blastName];
  if (!entry || !entry.centroid) return;
  if (entry.label) return;

  var scene = getScene();
  if (!scene) return;

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 64;
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, 256, 64);
  ctx.font = "bold 28px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.strokeText(blastName, 128, 32);
  ctx.fillText(blastName, 128, 32);

  var texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  var spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false
  });
  var sprite = new THREE.Sprite(spriteMat);
  sprite.name = "blast_label_" + blastName;
  sprite.position.copy(entry.centroid);
  sprite.position.z += 8;
  sprite.scale.set(40, 10, 1);
  scene.add(sprite);

  entry.label = sprite;
}

// Step 7b) Show or hide all blast labels
function setAllLabelsVisible(visible) {
  var names = Object.keys(_blastMeshes);
  for (var i = 0; i < names.length; i++) {
    var entry = _blastMeshes[names[i]];
    if (entry.label) entry.label.visible = visible;
  }
}

// Step 8) Get blast centroid (local coords)
function getBlastCentroid(blastName) {
  var entry = _blastMeshes[blastName];
  return entry ? entry.centroid : null;
}

// Step 8b) Get blast top Z for drill placement (base sits on top of blast)
function getBlastTopZ(blastName) {
  var entry = _blastMeshes[blastName];
  if (!entry) return null;
  if (entry.solidMesh && entry.solidMesh.geometry) {
    var box = new THREE.Box3().setFromBufferAttribute(entry.solidMesh.geometry.attributes.position);
    return box.max.z;
  }
  return entry.centroid ? entry.centroid.z : null;
}

// Step 9) Set blast visibility
function setBlastVisible(blastName, visible) {
  var entry = _blastMeshes[blastName];
  if (entry) {
    if (entry.outline) entry.outline.visible = visible;
    if (entry.fill) entry.fill.visible = visible;
    if (entry.solidMesh) entry.solidMesh.visible = visible;
    if (entry.label) entry.label.visible = visible;
  }
}

// Step 9) Set all blasts visible/hidden
function setAllBlastsVisible(visible) {
  var names = Object.keys(_blastMeshes);
  for (var i = 0; i < names.length; i++) {
    setBlastVisible(names[i], visible);
  }
}

// Step 11) Clear all blast geometry
function clearBlasts() {
  var scene = getScene();
  var names = Object.keys(_blastMeshes);
  for (var i = 0; i < names.length; i++) {
    var entry = _blastMeshes[names[i]];
    if (scene) {
      if (entry.outline) scene.remove(entry.outline);
      if (entry.fill) scene.remove(entry.fill);
      if (entry.solidMesh) scene.remove(entry.solidMesh);
      if (entry.label) scene.remove(entry.label);
    }
    if (entry.outline) { entry.outline.geometry.dispose(); entry.outline.material.dispose(); }
    if (entry.fill) { entry.fill.geometry.dispose(); entry.fill.material.dispose(); }
    if (entry.solidMesh) { entry.solidMesh.geometry.dispose(); entry.solidMesh.material.dispose(); }
    if (entry.label) { entry.label.material.map.dispose(); entry.label.material.dispose(); }
  }
  _blastMeshes = {};
  _flashBlasts = [];
  _flashClock = 0;
}

// Step 11) Accessors
function getBlastEntry(blastName) {
  return _blastMeshes[blastName] || null;
}

function getLoadedBlastNames() {
  return Object.keys(_blastMeshes);
}

export {
  addBlastPolygon,
  addBlastSolid,
  createBlastLabel,
  setBlastPhase,
  setAllLabelsVisible,
  updateFlashAnimation,
  getBlastCentroid,
  getBlastTopZ,
  setBlastVisible,
  setAllBlastsVisible,
  clearBlasts,
  getBlastEntry,
  getLoadedBlastNames,
  PHASE_COLORS,
  PHASE_OPACITY
};
