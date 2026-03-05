// ============================================================
//  PLAYBACK SCENE
//  Three.js scene setup — camera, lights, renderer, orbit controls
//  Handles local-origin transform for large UTM coordinates.
//  Supports perspective and orthographic camera modes.
// ============================================================

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var _scene = null;
var _perspCamera = null;
var _orthoCamera = null;
var _camera = null;
var _cameraMode = "perspective";
var _dataBounds = null;
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
  // Step 2a) Scene — background responds to theme
  _scene = new THREE.Scene();
  syncSceneBackground();

  // Step 2b) Perspective camera — wide FOV for mine-scale viewing
  _perspCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 50000);
  _perspCamera.position.set(0, 0, 500);
  _perspCamera.up.set(0, 0, 1);

  // Step 2b-ii) Orthographic camera — frustum updated on resize and data load
  _orthoCamera = new THREE.OrthographicCamera(-500, 500, 500, -500, 0.1, 50000);
  _orthoCamera.position.set(0, 0, 500);
  _orthoCamera.up.set(0, 0, 1);

  // Step 2b-iii) Active camera defaults to perspective
  _camera = _perspCamera;
  _cameraMode = "perspective";

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

// Step 2g) Sync scene background with light/dark theme
function syncSceneBackground() {
  if (!_scene) return;
  var isLight = document.documentElement.getAttribute("data-theme") === "light";
  _scene.background = new THREE.Color(isLight ? 0xf0f0f0 : 0x000000);

  if (_gridHelper) {
    _gridHelper.material.opacity = isLight ? 0.12 : 0.5;
  }
}

// Step 2h) Observe theme changes via MutationObserver on <html>
var _themeObserver = new MutationObserver(function() {
  syncSceneBackground();
});
_themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

// Step 3) Resize renderer to fit container
function resizeRenderer(width, height) {
  if (!_renderer) return;
  _renderer.setSize(width, height);
  var aspect = width / height;

  // Step 3a) Update perspective camera aspect
  if (_perspCamera) {
    _perspCamera.aspect = aspect;
    _perspCamera.updateProjectionMatrix();
  }

  // Step 3b) Update orthographic camera frustum preserving vertical extent
  if (_orthoCamera) {
    var halfH = (_orthoCamera.top - _orthoCamera.bottom) / 2;
    if (halfH < 1) halfH = 500;
    _orthoCamera.left = -halfH * aspect;
    _orthoCamera.right = halfH * aspect;
    _orthoCamera.updateProjectionMatrix();
  }
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

// Step 6) Start the render loop with delta time tracking for animations
var _lastFrameTime = 0;
var _onFrameCallback = null;

function startRenderLoop(onFrame) {
  _onFrameCallback = onFrame;
  _lastFrameTime = performance.now();

  function animate(now) {
    _animationId = requestAnimationFrame(animate);
    var deltaMs = now - _lastFrameTime;
    _lastFrameTime = now;
    if (deltaMs > 100) deltaMs = 16;

    if (_controls) _controls.update();
    if (_onFrameCallback) _onFrameCallback(deltaMs);
    if (_renderer && _scene && _camera) {
      _renderer.render(_scene, _camera);
    }
  }
  animate(performance.now());
}

// Step 7) Stop the render loop
function stopRenderLoop() {
  if (_animationId) {
    cancelAnimationFrame(_animationId);
    _animationId = null;
  }
}

// Step 8) Store data bounds so camera presets scale to the loaded data
function setDataBounds(bounds) {
  _dataBounds = bounds;
}

function getDataBounds() {
  return _dataBounds;
}

// Step 8a) Helper — sync orthographic frustum to a given half-extent
function _syncOrthoFrustum(halfExtent) {
  if (!_orthoCamera || !_renderer) return;
  var size = new THREE.Vector2();
  _renderer.getSize(size);
  var aspect = size.x / size.y;
  _orthoCamera.left = -halfExtent * aspect;
  _orthoCamera.right = halfExtent * aspect;
  _orthoCamera.top = halfExtent;
  _orthoCamera.bottom = -halfExtent;
  _orthoCamera.updateProjectionMatrix();
}

// Step 8b) Camera preset views — data-bounds-aware
function setCameraTopDown() {
  if (!_camera || !_controls) return;
  var b = _dataBounds;
  var cx = 0, cy = 0, cz = 0, maxDim = 1000;
  if (b) {
    cx = (b.minX + b.maxX) / 2;
    cy = (b.minY + b.maxY) / 2;
    cz = (b.minZ + b.maxZ) / 2;
    maxDim = Math.max(b.maxX - b.minX, b.maxY - b.minY, 100);
  }
  _camera.position.set(cx, cy, cz + maxDim * 1.2);
  _controls.target.set(cx, cy, cz);
  if (_cameraMode === "ortho") {
    _syncOrthoFrustum(maxDim * 0.6);
  }
  _controls.update();
}

function setCameraIsometric() {
  if (!_camera || !_controls) return;
  var b = _dataBounds;
  var cx = 0, cy = 0, cz = 0, maxDim = 1000;
  if (b) {
    cx = (b.minX + b.maxX) / 2;
    cy = (b.minY + b.maxY) / 2;
    cz = (b.minZ + b.maxZ) / 2;
    maxDim = Math.max(b.maxX - b.minX, b.maxY - b.minY, b.maxZ - b.minZ, 100);
  }
  var dist = maxDim * 0.8;
  _camera.position.set(cx + dist, cy - dist, cz + dist);
  _controls.target.set(cx, cy, cz);
  if (_cameraMode === "ortho") {
    _syncOrthoFrustum(maxDim * 0.6);
  }
  _controls.update();
}

function setCameraPerspective() {
  if (!_camera || !_controls) return;
  var b = _dataBounds;
  var cx = 0, cy = 0, cz = 0, maxDim = 1000;
  if (b) {
    cx = (b.minX + b.maxX) / 2;
    cy = (b.minY + b.maxY) / 2;
    cz = (b.minZ + b.maxZ) / 2;
    maxDim = Math.max(b.maxX - b.minX, b.maxY - b.minY, b.maxZ - b.minZ, 100);
  }
  var dist = maxDim * 1.0;
  _camera.position.set(cx + dist * 0.4, cy - dist * 0.8, cz + dist * 0.4);
  _controls.target.set(cx, cy, cz);
  if (_cameraMode === "ortho") {
    _syncOrthoFrustum(maxDim * 0.5);
  }
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

  // Step 9a) Also sync ortho frustum if in ortho mode
  if (_cameraMode === "ortho") {
    _syncOrthoFrustum(maxDim * 0.6);
  }
  _controls.update();
}

// Step 9b) Switch between perspective and orthographic camera
function setCameraMode(mode) {
  if (!_controls || !_renderer) return;
  if (mode === _cameraMode) return;

  var oldCam = _camera;
  _cameraMode = mode;

  if (mode === "ortho") {
    // Step 9b-i) Compute ortho frustum to match current perspective view
    var dist = oldCam.position.distanceTo(_controls.target);
    var halfH = dist * Math.tan(THREE.MathUtils.degToRad(_perspCamera.fov / 2));
    var aspect = _perspCamera.aspect;
    _orthoCamera.left = -halfH * aspect;
    _orthoCamera.right = halfH * aspect;
    _orthoCamera.top = halfH;
    _orthoCamera.bottom = -halfH;
    _orthoCamera.position.copy(oldCam.position);
    _orthoCamera.quaternion.copy(oldCam.quaternion);
    _orthoCamera.zoom = 1;
    _orthoCamera.updateProjectionMatrix();
    _camera = _orthoCamera;
  } else {
    // Step 9b-ii) Switch back to perspective — copy position from ortho
    _perspCamera.position.copy(oldCam.position);
    _perspCamera.quaternion.copy(oldCam.quaternion);
    _perspCamera.updateProjectionMatrix();
    _camera = _perspCamera;
  }

  // Step 9b-iii) Re-bind orbit controls to the new camera
  _controls.object = _camera;
  _controls.update();
}

function getCameraMode() {
  return _cameraMode;
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
  _perspCamera = null;
  _orthoCamera = null;
  _camera = null;
  _cameraMode = "perspective";
  _dataBounds = null;
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
  syncSceneBackground,
  setDataBounds,
  getDataBounds,
  setCameraTopDown,
  setCameraIsometric,
  setCameraPerspective,
  setCameraMode,
  getCameraMode,
  fitCameraToBounds,
  setGridVisible,
  getScene,
  getCamera,
  getRenderer,
  getControls,
  disposeScene
};
