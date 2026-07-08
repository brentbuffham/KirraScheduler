// ============================================================
//  SOLID MATCH
//  Single source of truth for resolving a schedule blast to its 3D
//  volume in APP.kirraProjectSolids.
//
//  Names come from DIFFERENT sources: blast names derive from the
//  hole/pattern entity names, while solid names come from the imported
//  mesh's name/id. They frequently DO NOT match, and an "EXTRUDED_"
//  prefix may also be present. On top of that the user can rename
//  either side. A strict name compare therefore silently orphans a
//  blast from its solid, so the blast (and its equipment + phase
//  colour) vanishes from the 3D scene while the surface stays visible.
//
//  Matching strategy (in priority order):
//    1) Exact name.
//    2) "EXTRUDED_" prefix stripped (either side).
//    3) Spatial fallback — the solid whose bounds centroid is closest
//       to the blast's stored bounds/polygon centroid, within a sanity
//       tolerance. This survives ANY rename because geometry is stable.
// ============================================================

import { APP } from "../state/appState.js";

// Step 1) Strip the optional "EXTRUDED_" prefix used by KAP/Kirra solids.
function stripExtruded(name) {
  var n = name || "";
  return n.indexOf("EXTRUDED_") === 0 ? n.substring(9) : n;
}

// Step 2) Name-only match (exact, then prefix-tolerant both directions).
export function findMatchingSolid(blastName) {
  var solids = APP.kirraProjectSolids || [];
  var target = stripExtruded(blastName);
  for (var i = 0; i < solids.length; i++) {
    var sName = solids[i].name || "";
    if (sName === blastName) return solids[i];
    if (stripExtruded(sName) === target) return solids[i];
  }
  return null;
}

// Step 3) Centroid of a bounds object {minX,maxX,minY,maxY,minZ,maxZ}.
function boundsCentroid(b) {
  if (!b || !isFinite(b.minX) || !isFinite(b.maxX)) return null;
  return {
    x: (b.minX + b.maxX) / 2,
    y: (b.minY + b.maxY) / 2,
    z: (b.minZ + b.maxZ) / 2,
    // Step 3a) Half the XY diagonal — used as an acceptance tolerance
    r: Math.hypot(b.maxX - b.minX, b.maxY - b.minY) / 2
  };
}

// Step 4) Derive a bounds object for a blast even when it has no solidBounds,
//   by falling back to its boundary polygon extents.
function blastBounds(blast) {
  if (!blast) return null;
  if (blast.solidBounds) return blast.solidBounds;
  if (blast.polygons && blast.polygons.length > 0) {
    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (var i = 0; i < blast.polygons.length; i++) {
      var p = blast.polygons[i];
      if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
      var z = p.z || 0;
      if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
    }
    if (isFinite(minX)) return { minX: minX, maxX: maxX, minY: minY, maxY: maxY, minZ: minZ, maxZ: maxZ };
  }
  return null;
}

// Step 5) Resolve a blast object to its solid. Name match first, then a
//   spatial nearest-centroid fallback so renamed blasts still link up.
export function findSolidForBlast(blast) {
  if (!blast) return null;

  // Step 5a) Name-based match (fast path, covers the common case)
  var byName = findMatchingSolid(blast.name);
  if (byName) return byName;

  // Step 5b) Spatial fallback — needs a blast footprint to compare against
  var solids = APP.kirraProjectSolids || [];
  if (solids.length === 0) return null;
  var bc = boundsCentroid(blastBounds(blast));
  if (!bc) return null;

  var best = null;
  var bestDist = Infinity;
  for (var i = 0; i < solids.length; i++) {
    var sc = boundsCentroid(solids[i].bounds);
    if (!sc) continue;
    var d = Math.hypot(sc.x - bc.x, sc.y - bc.y);
    if (d < bestDist) { bestDist = d; best = solids[i]; }
  }

  // Step 5c) Accept only if the nearest solid overlaps the blast footprint
  //   (centroid within the combined footprint radius) so we never link a
  //   blast to a far-away solid.
  if (best) {
    var bsc = boundsCentroid(best.bounds);
    var tol = (bc.r || 0) + (bsc && bsc.r ? bsc.r : 0);
    if (tol > 0 && bestDist <= tol) {
      console.warn("Playback: blast '" + blast.name + "' linked to solid '" +
        best.name + "' by spatial match (names differ, dist=" + Math.round(bestDist) + "m)");
      return best;
    }
  }
  return null;
}
