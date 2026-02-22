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
function buildDrillMesh(type) {
  var group = new THREE.Group();

  // Step 2a) Tracked base — box
  var baseW = type === "D65" ? 3 : 4;
  var baseD = type === "D65" ? 6 : 8;
  var baseH = 2;
  var baseGeom = new THREE.BoxGeometry(baseW, baseD, baseH);
  var baseMat = new THREE.MeshPhongMaterial({ color: 0xf59e0b, flatShading: true });
  var baseMesh = new THREE.Mesh(baseGeom, baseMat);
  baseMesh.position.set(0, 0, baseH / 2);
  group.add(baseMesh);

  // Step 2b) Cab — smaller box on front
  var cabGeom = new THREE.BoxGeometry(baseW * 0.7, baseD * 0.3, 2.5);
  var cabMat = new THREE.MeshPhongMaterial({ color: 0x1e40af, flatShading: true });
  var cabMesh = new THREE.Mesh(cabGeom, cabMat);
  cabMesh.position.set(0, -baseD * 0.3, baseH + 1.25);
  group.add(cabMesh);

  // Step 2c) Mast — tall cylinder
  var mastH = type === "D65" ? 14 : 20;
  var mastGeom = new THREE.CylinderGeometry(0.3, 0.4, mastH, 8);
  var mastMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, flatShading: true });
  var mastMesh = new THREE.Mesh(mastGeom, mastMat);
  mastMesh.rotation.x = Math.PI / 2;
  mastMesh.rotation.z = Math.PI / 2;
  mastMesh.position.set(0, baseD * 0.1, baseH + mastH / 2);
  group.add(mastMesh);

  // Step 2d) Drill string — thin cylinder inside mast
  var dsGeom = new THREE.CylinderGeometry(0.1, 0.1, mastH * 0.9, 6);
  var dsMat = new THREE.MeshPhongMaterial({ color: 0x888888 });
  var dsMesh = new THREE.Mesh(dsGeom, dsMat);
  dsMesh.rotation.x = Math.PI / 2;
  dsMesh.rotation.z = Math.PI / 2;
  dsMesh.position.set(0, baseD * 0.1, baseH + mastH * 0.45);
  group.add(dsMesh);

  return group;
}

// Step 3) Build a procedural MPU mesh (emulsion truck)
function buildMPUMesh() {
  var group = new THREE.Group();

  // Step 3a) Chassis — long box
  var chassisGeom = new THREE.BoxGeometry(3, 10, 1.5);
  var chassisMat = new THREE.MeshPhongMaterial({ color: 0x374151, flatShading: true });
  var chassisMesh = new THREE.Mesh(chassisGeom, chassisMat);
  chassisMesh.position.set(0, 0, 1.5);
  group.add(chassisMesh);

  // Step 3b) Cab — front box
  var cabGeom = new THREE.BoxGeometry(2.6, 2.5, 2.5);
  var cabMat = new THREE.MeshPhongMaterial({ color: 0xdc2626, flatShading: true });
  var cabMesh = new THREE.Mesh(cabGeom, cabMat);
  cabMesh.position.set(0, -4.5, 3);
  group.add(cabMesh);

  // Step 3c) Tank — cylinder
  var tankGeom = new THREE.CylinderGeometry(1.2, 1.2, 6, 12);
  var tankMat = new THREE.MeshPhongMaterial({ color: 0x9ca3af, flatShading: true });
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

// Step 4) Place equipment at a position
function placeEquipment(equipId, type, position) {
  var scene = getScene();
  if (!scene) return null;

  // Step 4a) Remove existing if repositioning
  if (_equipmentMap[equipId]) {
    scene.remove(_equipmentMap[equipId].group);
  }

  // Step 4b) Build appropriate mesh
  var group;
  if (type === "D65" || type === "PV271") {
    group = buildDrillMesh(type);
  } else {
    group = buildMPUMesh();
  }

  // Step 4c) Position
  group.position.copy(position);
  group.name = "equip_" + equipId;
  scene.add(group);

  _equipmentMap[equipId] = {
    group: group,
    type: type
  };

  return _equipmentMap[equipId];
}

// Step 5) Remove equipment from scene
function removeEquipment(equipId) {
  var scene = getScene();
  var entry = _equipmentMap[equipId];
  if (entry && scene) {
    scene.remove(entry.group);
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

// Step 8) Clear all equipment
function clearEquipment() {
  var scene = getScene();
  var ids = Object.keys(_equipmentMap);
  for (var i = 0; i < ids.length; i++) {
    if (scene) scene.remove(_equipmentMap[ids[i]].group);
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
  clearEquipment,
  getPlacedEquipmentIds
};
