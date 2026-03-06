// ============================================================
//  EQUIPMENT MODELS
//  Procedural fallback meshes for drills and MPUs.
//  GLTF import support added in a later phase.
// ============================================================

import * as THREE from "three";
import { getScene } from "./PlaybackScene.js";

// Step 1) Cache of placed equipment: equipId -> { group, label, type }
var _equipmentMap = {};

// Step 2) Build a procedural drill rig mesh (generic tracked drill)
// Reference: yellow base, vertical light grey mast, small cap at top
function buildDrillMesh(type) {
  var group = new THREE.Group();

  // Step 2a) Tracked base — yellow rectangular prism (cuboid)
  var isSmall = (type === "D65");
  var baseW = isSmall ? 3 : 4;
  var baseD = isSmall ? 6 : 8;
  var baseH = 2;
  var baseGeom = new THREE.BoxGeometry(baseW, baseD, baseH);
  var baseMat = new THREE.MeshPhongMaterial({ color: 0xfbbf24, flatShading: true });
  var baseMesh = new THREE.Mesh(baseGeom, baseMat);
  baseMesh.position.set(0, 0, baseH / 2);
  group.add(baseMesh);

  // Step 2b) Vertical mast — light grey cylinder, 30% shorter (Z-up scene)
  var mastH = isSmall ? 20 : 28;
  var mastGeom = new THREE.CylinderGeometry(0.25, 0.35, mastH, 8);
  var mastMat = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, flatShading: true });
  var mastMesh = new THREE.Mesh(mastGeom, mastMat);
  mastMesh.rotation.x = Math.PI / 2;
  mastMesh.position.set(0, 0, baseH + mastH / 2);
  group.add(mastMesh);

  // Step 2c) Mast cap — small sphere at top
  var capGeom = new THREE.SphereGeometry(0.35, 8, 6);
  var capMat = new THREE.MeshPhongMaterial({ color: 0xaaaaaa, flatShading: true });
  var capMesh = new THREE.Mesh(capGeom, capMat);
  capMesh.position.set(0, 0, baseH + mastH);
  group.add(capMesh);

  return group;
}

// Step 3) Build a procedural MPU mesh (emulsion truck)
function buildMPUMesh() {
  var group = new THREE.Group();

  // Step 3a) Chassis — long box
  var chassisGeom = new THREE.BoxGeometry(3, 10, 1.5);
  var chassisMat = new THREE.MeshPhongMaterial({ color: 0x2563eb, flatShading: true });
  var chassisMesh = new THREE.Mesh(chassisGeom, chassisMat);
  chassisMesh.position.set(0, 0, 1.5);
  group.add(chassisMesh);

  // Step 3b) Cab — front box
  var cabGeom = new THREE.BoxGeometry(2.6, 2.5, 2.5);
  var cabMat = new THREE.MeshPhongMaterial({ color: 0x1d4ed8, flatShading: true });
  var cabMesh = new THREE.Mesh(cabGeom, cabMat);
  cabMesh.position.set(0, -4.5, 3);
  group.add(cabMesh);

  // Step 3c) Tank — cylinder
  var tankGeom = new THREE.CylinderGeometry(1.2, 1.2, 6, 12);
  var tankMat = new THREE.MeshPhongMaterial({ color: 0x3b82f6, flatShading: true });
  var tankMesh = new THREE.Mesh(tankGeom, tankMat);
  tankMesh.position.set(0, 1, 3.5);
  group.add(tankMesh);

  // Step 3d) Wheels — 6 cylinders
  var wheelGeom = new THREE.CylinderGeometry(0.6, 0.6, 0.5, 8);
  wheelGeom.rotateZ(Math.PI / 2);
  var wheelMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a });
  var wheelPositions = [
    [-1.8, -3.5, 0.6], [1.8, -3.5, 0.6],
    [-1.8, 1, 0.6], [1.8, 1, 0.6],
    [-1.8, 3, 0.6], [1.8, 3, 0.6]
  ];
  for (var i = 0; i < wheelPositions.length; i++) {
    var w = new THREE.Mesh(wheelGeom, wheelMat);
    w.position.set(wheelPositions[i][0], wheelPositions[i][1], wheelPositions[i][2]);
    group.add(w);
  }

  return group;
}

// Step 4) Build a floating text label sprite
function buildLabelSprite(text) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 48;
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, 256, 48);
  ctx.font = "bold 22px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 3;
  ctx.strokeText(text, 128, 24);
  ctx.fillText(text, 128, 24);

  var texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  var mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  var sprite = new THREE.Sprite(mat);
  sprite.scale.set(30, 6, 1);
  return sprite;
}

// Step 5) Place equipment at a position with label
function placeEquipment(equipId, type, position) {
  var scene = getScene();
  if (!scene) return null;

  // Step 5a) Remove and dispose existing if repositioning
  if (_equipmentMap[equipId]) {
    scene.remove(_equipmentMap[equipId].group);
    disposeGroup(_equipmentMap[equipId].group);
  }

  // Step 5b) Build appropriate mesh — "MPU" builds truck, everything else builds drill rig
  var group;
  var isDrill = (type !== "MPU");
  if (isDrill) {
    group = buildDrillMesh(type);
  } else {
    group = buildMPUMesh();
  }

  // Step 5c) Add label above equipment
  var label = buildLabelSprite(equipId);
  var labelHeight = isDrill ? 48 : 12;
  label.position.set(0, 0, labelHeight);
  group.add(label);

  // Step 5d) Position
  group.position.copy(position);
  group.name = "equip_" + equipId;
  scene.add(group);

  _equipmentMap[equipId] = {
    group: group,
    label: label,
    type: type
  };

  return _equipmentMap[equipId];
}

// Step 4b) Dispose all geometries and materials in a group (recursive)
function disposeGroup(group) {
  if (!group) return;
  group.traverse(function(obj) {
    if (obj.geometry) {
      obj.geometry.dispose();
      obj.geometry = null;
    }
    if (obj.material) {
      if (obj.material.map) obj.material.map.dispose();
      if (Array.isArray(obj.material)) {
        obj.material.forEach(function(m) { m.dispose(); });
      } else {
        obj.material.dispose();
      }
      obj.material = null;
    }
  });
}

// Step 5) Remove equipment from scene and dispose resources
function removeEquipment(equipId) {
  var scene = getScene();
  var entry = _equipmentMap[equipId];
  if (entry && scene) {
    scene.remove(entry.group);
    disposeGroup(entry.group);
    delete _equipmentMap[equipId];
  }
}

// Step 6) Set equipment visibility
function setEquipmentVisible(equipId, visible) {
  var entry = _equipmentMap[equipId];
  if (entry) entry.group.visible = visible;
}

// Step 7) Set all equipment visible/hidden
function setAllEquipmentVisible(visible) {
  var ids = Object.keys(_equipmentMap);
  for (var i = 0; i < ids.length; i++) {
    _equipmentMap[ids[i]].group.visible = visible;
  }
}

// Step 8) Toggle equipment labels
function setAllEquipLabelsVisible(visible) {
  var ids = Object.keys(_equipmentMap);
  for (var i = 0; i < ids.length; i++) {
    var entry = _equipmentMap[ids[i]];
    if (entry.label) entry.label.visible = visible;
  }
}

// Step 9) Clear all equipment and dispose geometries/materials
function clearEquipment() {
  var scene = getScene();
  var ids = Object.keys(_equipmentMap);
  for (var i = 0; i < ids.length; i++) {
    var entry = _equipmentMap[ids[i]];
    if (scene && entry) {
      scene.remove(entry.group);
      disposeGroup(entry.group);
    }
  }
  _equipmentMap = {};
}

// Step 9) Get all placed equipment IDs
function getPlacedEquipmentIds() {
  return Object.keys(_equipmentMap);
}

export {
  placeEquipment,
  removeEquipment,
  setEquipmentVisible,
  setAllEquipmentVisible,
  setAllEquipLabelsVisible,
  clearEquipment,
  getPlacedEquipmentIds
};
