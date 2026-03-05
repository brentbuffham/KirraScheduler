// ============================================================
//  PIT SHELL RENDERER
//  Renders triangulated mine surfaces (pit shells, bench designs)
//  with elevation-based gradient colouring.
//  Supports multiple surfaces with visibility/opacity toggles.
// ============================================================

import * as THREE from "three";
import { getScene, toLocal } from "./PlaybackScene.js";

// Step 1) Map of surfaceName -> { mesh, wireframe, data }
var _surfaceMeshes = {};

// Step 1b) Color mode — "spectrum" uses elevation gradient, "single" uses flat Phong
var _colorMode = "spectrum";
var _singleColor = 0x7799bb;

// Step 2) Elevation colour gradient — terrain-style
function elevationColor(t) {
  // t is 0..1 normalised elevation
  // Deep blue -> green -> yellow -> orange -> red -> white
  if (t < 0.2) {
    var f = t / 0.2;
    return new THREE.Color(0.1, 0.2 + f * 0.4, 0.6 - f * 0.2);
  } else if (t < 0.4) {
    var f = (t - 0.2) / 0.2;
    return new THREE.Color(0.1 + f * 0.3, 0.6 + f * 0.2, 0.2 - f * 0.1);
  } else if (t < 0.6) {
    var f = (t - 0.4) / 0.2;
    return new THREE.Color(0.4 + f * 0.5, 0.8 - f * 0.1, 0.1);
  } else if (t < 0.8) {
    var f = (t - 0.6) / 0.2;
    return new THREE.Color(0.9, 0.7 - f * 0.3, 0.1);
  } else {
    var f = (t - 0.8) / 0.2;
    return new THREE.Color(0.9 + f * 0.1, 0.4 - f * 0.2, 0.1 + f * 0.1);
  }
}

// Step 3) Add a triangulated surface to the scene
function addSurface(name, points, triangles, options) {
  var scene = getScene();
  if (!scene) return null;
  if (!points || points.length === 0 || !triangles || triangles.length === 0) return null;

  var opts = options || {};
  var opacity = opts.opacity !== undefined ? opts.opacity : 0.85;
  var visible = opts.visible !== undefined ? opts.visible : true;

  // Step 3a) Find Z range for gradient
  // Handles both indexed (points[]) and vertex-per-triangle (triangles[].vertices) formats
  var minZ = Infinity;
  var maxZ = -Infinity;

  var hasVertexPerTri = triangles.length > 0 && triangles[0].vertices !== undefined;
  if (hasVertexPerTri) {
    for (var i = 0; i < triangles.length; i++) {
      var verts = triangles[i].vertices;
      if (!verts) continue;
      for (var v = 0; v < verts.length; v++) {
        var z = verts[v].z || 0;
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
      }
    }
  } else {
    for (var i = 0; i < points.length; i++) {
      var z = points[i].z || 0;
      if (z < minZ) minZ = z;
      if (z > maxZ) maxZ = z;
    }
  }
  var zRange = maxZ - minZ;
  if (zRange < 0.01) zRange = 1;

  // Step 3b) Build BufferGeometry
  // Supports two triangle formats:
  //   Indexed: { a, b, c } referencing points[] array
  //   Vertex-per-tri: { vertices: [{x,y,z}, {x,y,z}, {x,y,z}] } (KAP format)
  var isVertexPerTri = triangles.length > 0 && triangles[0].vertices !== undefined;

  var positions = new Float32Array(triangles.length * 3 * 3);
  var colors = new Float32Array(triangles.length * 3 * 3);
  var idx = 0;

  for (var t = 0; t < triangles.length; t++) {
    var tri = triangles[t];
    var pa, pb, pc;

    if (isVertexPerTri) {
      // Step 3b-KAP) Vertex-per-triangle format from KAP files
      if (!tri.vertices || tri.vertices.length < 3) continue;
      pa = tri.vertices[0];
      pb = tri.vertices[1];
      pc = tri.vertices[2];
    } else {
      // Step 3b-IDX) Indexed format with points[] array
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

    // Step 3b-i) Positions
    positions[idx * 9 + 0] = va.x; positions[idx * 9 + 1] = va.y; positions[idx * 9 + 2] = va.z;
    positions[idx * 9 + 3] = vb.x; positions[idx * 9 + 4] = vb.y; positions[idx * 9 + 5] = vb.z;
    positions[idx * 9 + 6] = vc.x; positions[idx * 9 + 7] = vc.y; positions[idx * 9 + 8] = vc.z;

    // Step 3b-ii) Colours from elevation gradient
    var ta = ((pa.z || 0) - minZ) / zRange;
    var tb = ((pb.z || 0) - minZ) / zRange;
    var tc = ((pc.z || 0) - minZ) / zRange;

    var ca = elevationColor(ta);
    var cb = elevationColor(tb);
    var cc = elevationColor(tc);

    colors[idx * 9 + 0] = ca.r; colors[idx * 9 + 1] = ca.g; colors[idx * 9 + 2] = ca.b;
    colors[idx * 9 + 3] = cb.r; colors[idx * 9 + 4] = cb.g; colors[idx * 9 + 5] = cb.b;
    colors[idx * 9 + 6] = cc.r; colors[idx * 9 + 7] = cc.g; colors[idx * 9 + 8] = cc.b;

    idx++;
  }

  // Step 3c) Trim arrays if some triangles were skipped
  var usedPositions = new Float32Array(positions.buffer, 0, idx * 9);
  var usedColors = new Float32Array(colors.buffer, 0, idx * 9);

  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(usedPositions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(usedColors, 3));
  geometry.computeVertexNormals();

  // Step 3d) Material — vertex colours, semi-transparent, double-sided
  var material = new THREE.MeshPhongMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    transparent: opacity < 1,
    opacity: opacity,
    shininess: 10,
    flatShading: false
  });

  var mesh = new THREE.Mesh(geometry, material);
  mesh.name = "surface_" + name;
  mesh.visible = visible;
  scene.add(mesh);

  // Step 3e) Optional wireframe overlay
  var wireMat = new THREE.MeshBasicMaterial({
    color: 0x444466,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  var wireMesh = new THREE.Mesh(geometry.clone(), wireMat);
  wireMesh.name = "wireframe_" + name;
  wireMesh.visible = false;
  scene.add(wireMesh);

  // Step 3f) Store reference
  _surfaceMeshes[name] = {
    mesh: mesh,
    wireframe: wireMesh,
    minZ: minZ,
    maxZ: maxZ,
    triCount: idx
  };

  return _surfaceMeshes[name];
}

// Step 4) Set surface visibility
function setSurfaceVisible(name, visible) {
  var entry = _surfaceMeshes[name];
  if (entry) {
    entry.mesh.visible = visible;
    if (entry.wireframe.visible && !visible) entry.wireframe.visible = false;
  }
}

// Step 5) Set surface opacity
function setSurfaceOpacity(name, opacity) {
  var entry = _surfaceMeshes[name];
  if (entry && entry.mesh.material) {
    entry.mesh.material.transparent = opacity < 1;
    entry.mesh.material.opacity = opacity;
    entry.mesh.material.needsUpdate = true;
  }
}

// Step 6) Toggle wireframe overlay
function setSurfaceWireframe(name, show) {
  var entry = _surfaceMeshes[name];
  if (entry) {
    entry.wireframe.visible = show && entry.mesh.visible;
  }
}

// Step 7) Toggle all wireframes
function setAllWireframes(show) {
  var names = Object.keys(_surfaceMeshes);
  for (var i = 0; i < names.length; i++) {
    setSurfaceWireframe(names[i], show);
  }
}

// Step 8) Get bounds of all loaded surfaces (in world coords)
function getAllSurfaceBounds() {
  var names = Object.keys(_surfaceMeshes);
  if (names.length === 0) return null;

  var minX = Infinity, maxX = -Infinity;
  var minY = Infinity, maxY = -Infinity;
  var minZ = Infinity, maxZ = -Infinity;

  for (var i = 0; i < names.length; i++) {
    var entry = _surfaceMeshes[names[i]];
    var box = new THREE.Box3().setFromObject(entry.mesh);
    if (box.min.x < minX) minX = box.min.x;
    if (box.max.x > maxX) maxX = box.max.x;
    if (box.min.y < minY) minY = box.min.y;
    if (box.max.y > maxY) maxY = box.max.y;
    if (box.min.z < minZ) minZ = box.min.z;
    if (box.max.z > maxZ) maxZ = box.max.z;
  }

  return { minX: minX, maxX: maxX, minY: minY, maxY: maxY, minZ: minZ, maxZ: maxZ };
}

// Step 9) Remove all surfaces
function clearSurfaces() {
  var scene = getScene();
  var names = Object.keys(_surfaceMeshes);
  for (var i = 0; i < names.length; i++) {
    var entry = _surfaceMeshes[names[i]];
    if (scene) {
      scene.remove(entry.mesh);
      scene.remove(entry.wireframe);
    }
    entry.mesh.geometry.dispose();
    entry.mesh.material.dispose();
    entry.wireframe.geometry.dispose();
    entry.wireframe.material.dispose();
  }
  _surfaceMeshes = {};
}

// Step 10) Get loaded surface names
function getLoadedSurfaceNames() {
  return Object.keys(_surfaceMeshes);
}

function getSurfaceEntry(name) {
  return _surfaceMeshes[name] || null;
}

// Step 11) Switch color mode for all surfaces
//   mode = "spectrum" — elevation gradient via vertex colors
//   mode = "single"   — flat Phong with _singleColor
function setSurfaceColorMode(mode, hexColor) {
  _colorMode = mode;
  if (hexColor !== undefined) _singleColor = hexColor;

  var names = Object.keys(_surfaceMeshes);
  for (var i = 0; i < names.length; i++) {
    var entry = _surfaceMeshes[names[i]];
    var mat = entry.mesh.material;

    if (mode === "single") {
      // Step 11a) Disable vertex colors, apply flat Phong color
      mat.vertexColors = false;
      mat.color.setHex(_singleColor);
      mat.needsUpdate = true;
    } else {
      // Step 11b) Re-enable vertex colors (geometry still has color attribute)
      mat.vertexColors = true;
      mat.color.setHex(0xffffff);
      mat.needsUpdate = true;
    }
  }
}

function getSurfaceColorMode() {
  return _colorMode;
}

function getSingleColor() {
  return _singleColor;
}

export {
  addSurface,
  setSurfaceVisible,
  setSurfaceOpacity,
  setSurfaceWireframe,
  setAllWireframes,
  getAllSurfaceBounds,
  clearSurfaces,
  getLoadedSurfaceNames,
  getSurfaceEntry,
  setSurfaceColorMode,
  getSurfaceColorMode,
  getSingleColor
};
