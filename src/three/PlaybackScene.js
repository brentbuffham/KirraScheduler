// ============================================================
//  PLAYBACK SCENE
//  Three.js scene setup — camera, lights, renderer, orbit controls
//  Handles local-origin transform for large UTM coordinates.
// ============================================================

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var _scene = null;
var _camera = null;
var _renderer = null;
var _controls = null;
var _gridHelper = null;
var _animationId = null;

// Step 1) Local origin offset (subtracted from all world coords)
var _originX = 0;
var _originY = 0;
var _originZ = 0;

// Step 2) Initialise the Three.js scene, camera, renderer, and controls
function initScene(canvas) {
  // Step 2a) Scene
  _scene = new THREE.Scene();
  _scene.background = new THREE.Color(0x1a1a2e);

  // Step 2b) Camera — perspective, wide FOV for mine-scale viewing
  _camera = new THREE.PerspectiveCamera(60, 1, 0.1, 50000);
  _camera.position.set(0, 0, 500);
  _camera.up.set(0, 0, 1);

  // Step 2c) Renderer — use the provided canvas
  _renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false
  });
  _renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  _renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Step 2d) Lights
  var ambient = new THREE.AmbientLight(0xffffff, 0.6);
  _scene.add(ambient);

  var directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(200, 300, 500);
  _scene.add(directional);

  var fillLight = new THREE.DirectionalLight(0x8888cc, 0.3);
  fillLight.position.set(-200, -100, 200);
  _scene.add(fillLight);

  // Step 2e) Orbit controls — Z-up, pan default
  _controls = new OrbitControls(_camera, _renderer.domElement);
  _controls.enableDamping = true;
  _controls.dampingFactor = 0.12;
  _controls.screenSpacePanning = true;
  _controls.maxPolarAngle = Math.PI;
  _controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
  };

  // Step 2f) Ground grid
  _gridHelper = new THREE.GridHelper(2000, 40, 0x333355, 0x222244);
  _gridHelper.rotation.x = Math.PI / 2;
  _scene.add(_gridHelper);

  return { scene: _scene, camera: _camera, renderer: _renderer, controls: _controls };
}

// Step 3) Resize renderer to fit container
function resizeRenderer(width, height) {
  if (!_renderer || !_camera) return;
  _renderer.setSize(width, height);
  _camera.aspect = width / height;
  _camera.updateProjectionMatrix();
}

// Step 4) Set local origin from data bounds
function setLocalOrigin(cx, cy, cz) {
  _originX = cx;
  _originY = cy;
  _originZ = cz;
}

function getLocalOrigin() {
  return { x: _originX, y: _originY, z: _originZ };
}

// Step 5) Convert world XYZ to local scene coordinates
function toLocal(wx, wy, wz) {
  return new THREE.Vector3(wx - _originX, wy - _originY, wz - _originZ);
}

// Step 6) Start the render loop
function startRenderLoop(onFrame) {
  function animate() {
    _animationId = requestAnimationFrame(animate);
    if (_controls) _controls.update();
    if (onFrame) onFrame();
    if (_renderer && _scene && _camera) {
      _renderer.render(_scene, _camera);
    }
  }
  animate();
}

// Step 7) Stop the render loop
function stopRenderLoop() {
  if (_animationId) {
    cancelAnimationFrame(_animationId);
    _animationId = null;
  }
}

// Step 8) Camera preset views
function setCameraTopDown(targetZ) {
  if (!_camera || !_controls) return;
  var z = targetZ || 0;
  _camera.position.set(0, 0, z + 1000);
  _controls.target.set(0, 0, z);
  _controls.update();
}

function setCameraIsometric(targetZ) {
  if (!_camera || !_controls) return;
  var z = targetZ || 0;
  _camera.position.set(500, -500, z + 500);
  _controls.target.set(0, 0, z);
  _controls.update();
}

function setCameraPerspective(targetZ) {
  if (!_camera || !_controls) return;
  var z = targetZ || 0;
  _camera.position.set(300, -600, z + 300);
  _controls.target.set(0, 0, z);
  _controls.update();
}

// Step 9) Fit camera to bounding box
function fitCameraToBounds(minX, maxX, minY, maxY, minZ, maxZ) {
  if (!_camera || !_controls) return;
  var cx = (minX + maxX) / 2;
  var cy = (minY + maxY) / 2;
  var cz = (minZ + maxZ) / 2;
  var dx = maxX - minX;
  var dy = maxY - minY;
  var dz = maxZ - minZ;
  var maxDim = Math.max(dx, dy, dz);
  var dist = maxDim * 1.5;

  _controls.target.set(cx, cy, cz);
  _camera.position.set(cx + dist * 0.5, cy - dist * 0.7, cz + dist * 0.5);
  _controls.update();
}

// Step 10) Toggle grid visibility
function setGridVisible(visible) {
  if (_gridHelper) _gridHelper.visible = visible;
}

// Step 11) Accessors
function getScene() { return _scene; }
function getCamera() { return _camera; }
function getRenderer() { return _renderer; }
function getControls() { return _controls; }

// Step 12) Dispose everything
function disposeScene() {
  stopRenderLoop();
  if (_controls) { _controls.dispose(); _controls = null; }
  if (_renderer) { _renderer.dispose(); _renderer = null; }
  _scene = null;
  _camera = null;
  _gridHelper = null;
}

export {
  initScene,
  resizeRenderer,
  setLocalOrigin,
  getLocalOrigin,
  toLocal,
  startRenderLoop,
  stopRenderLoop,
  setCameraTopDown,
  setCameraIsometric,
  setCameraPerspective,
  fitCameraToBounds,
  setGridVisible,
  getScene,
  getCamera,
  getRenderer,
  getControls,
  disposeScene
};
