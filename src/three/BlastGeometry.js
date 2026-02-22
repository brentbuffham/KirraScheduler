// ============================================================
//  BLAST GEOMETRY
//  Renders blast boundary polygons and drill holes in 3D.
//  Polygons rendered as extruded outlines on the bench surface.
//  Colour-coded by blast status / current playback phase.
// ============================================================

import * as THREE from "three";
import { getScene, toLocal } from "./PlaybackScene.js";

// Step 1) Map of blastName -> { outlineMesh, fillMesh, labelSprite, holes[] }
var _blastMeshes = {};

// Step 2) Phase colours
var PHASE_COLORS = {
  planned: 0x555566,
  drilling: 0x3b82f6,
  loading: 0xf59e0b,
  blastDay: 0xef4444,
  completed: 0x22c55e,
  active: 0x3b82f6
};

// Step 3) Add a blast polygon to the scene
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
  // Step 3a-i) Close the polygon
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
  for (var i = 1; i < linePoints.length - 1; i++) {
    shape.lineTo(linePoints[i].x, linePoints[i].y);
  }
  shape.closePath();

  var shapeGeom = new THREE.ShapeGeometry(shape);
  // Step 3b-i) Set Z for all vertices
  var posArr = shapeGeom.attributes.position.array;
  for (var i = 2; i < posArr.length; i += 3) {
    posArr[i] = linePoints[0].z;
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
  for (var i = 0; i < linePoints.length - 1; i++) {
    cx += linePoints[i].x;
    cy += linePoints[i].y;
  }
  cx /= (linePoints.length - 1);
  cy /= (linePoints.length - 1);

  // Step 3d) Store reference
  _blastMeshes[blastName] = {
    outline: outlineMesh,
    fill: fillMesh,
    centroid: new THREE.Vector3(cx, cy, cz),
    status: status,
    color: color
  };

  return _blastMeshes[blastName];
}

// Step 4) Update blast phase colour
function setBlastPhase(blastName, phase) {
  var entry = _blastMeshes[blastName];
  if (!entry) return;

  var color = PHASE_COLORS[phase] || PHASE_COLORS.planned;
  entry.outline.material.color.setHex(color);
  entry.fill.material.color.setHex(color);
  entry.status = phase;
  entry.color = color;
}

// Step 5) Get blast centroid (local coords)
function getBlastCentroid(blastName) {
  var entry = _blastMeshes[blastName];
  return entry ? entry.centroid : null;
}

// Step 6) Set blast visibility
function setBlastVisible(blastName, visible) {
  var entry = _blastMeshes[blastName];
  if (entry) {
    entry.outline.visible = visible;
    entry.fill.visible = visible;
  }
}

// Step 7) Set all blasts visible/hidden
function setAllBlastsVisible(visible) {
  var names = Object.keys(_blastMeshes);
  for (var i = 0; i < names.length; i++) {
    setBlastVisible(names[i], visible);
  }
}

// Step 8) Clear all blast geometry
function clearBlasts() {
  var scene = getScene();
  var names = Object.keys(_blastMeshes);
  for (var i = 0; i < names.length; i++) {
    var entry = _blastMeshes[names[i]];
    if (scene) {
      scene.remove(entry.outline);
      scene.remove(entry.fill);
    }
    entry.outline.geometry.dispose();
    entry.outline.material.dispose();
    entry.fill.geometry.dispose();
    entry.fill.material.dispose();
  }
  _blastMeshes = {};
}

// Step 9) Get blast entry
function getBlastEntry(blastName) {
  return _blastMeshes[blastName] || null;
}

function getLoadedBlastNames() {
  return Object.keys(_blastMeshes);
}

export {
  addBlastPolygon,
  setBlastPhase,
  getBlastCentroid,
  setBlastVisible,
  setAllBlastsVisible,
  clearBlasts,
  getBlastEntry,
  getLoadedBlastNames,
  PHASE_COLORS
};
