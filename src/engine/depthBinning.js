// ============================================================
//  DEPTH BINNING ENGINE
//  Analyses a blast solid's 3D geometry to produce a depth
//  histogram: area percentage per meter-depth bin.
//  Used to auto-populate multiple holeType rows with accurate
//  per-depth-band hole counts.
//
//  Approach:
//    1. Normalise triangle data to vertex-per-tri
//    2. Build 2D sampling grid over XY bounding box
//    3. For each cell centre, cast vertical ray through mesh
//    4. Compute depth at each cell from Z intersection pairs
//    5. Bin depths into 1-meter bands with area percentages
// ============================================================

// Step 1) Normalise all triangle formats into [{v0,v1,v2}]
//  Handles: vertex-per-tri {vertices:[{x,y,z},...]},
//           indexed arrays [i0,i1,i2], indexed objects {a,b,c}
function normaliseTriangles(tris, pts) {
  var out = [];
  if (!tris || tris.length === 0) return out;

  var isVertexPerTri = tris[0] && tris[0].vertices !== undefined;

  for (var i = 0; i < tris.length; i++) {
    var tri = tris[i];
    var v0, v1, v2;

    if (isVertexPerTri) {
      var verts = tri.vertices;
      if (!verts || verts.length < 3) continue;
      v0 = { x: verts[0].x, y: verts[0].y, z: verts[0].z || 0 };
      v1 = { x: verts[1].x, y: verts[1].y, z: verts[1].z || 0 };
      v2 = { x: verts[2].x, y: verts[2].y, z: verts[2].z || 0 };
    } else if (Array.isArray(tri)) {
      if (tri[0] >= pts.length || tri[1] >= pts.length || tri[2] >= pts.length) continue;
      v0 = { x: pts[tri[0]].x, y: pts[tri[0]].y, z: pts[tri[0]].z || 0 };
      v1 = { x: pts[tri[1]].x, y: pts[tri[1]].y, z: pts[tri[1]].z || 0 };
      v2 = { x: pts[tri[2]].x, y: pts[tri[2]].y, z: pts[tri[2]].z || 0 };
    } else if (tri.a !== undefined) {
      if (tri.a >= pts.length || tri.b >= pts.length || tri.c >= pts.length) continue;
      v0 = { x: pts[tri.a].x, y: pts[tri.a].y, z: pts[tri.a].z || 0 };
      v1 = { x: pts[tri.b].x, y: pts[tri.b].y, z: pts[tri.b].z || 0 };
      v2 = { x: pts[tri.c].x, y: pts[tri.c].y, z: pts[tri.c].z || 0 };
    } else {
      continue;
    }
    out.push({ v0: v0, v1: v1, v2: v2 });
  }
  return out;
}

// Step 2) Ray-triangle intersection — vertical ray at (rx, ry) going in Z.
//  Returns the Z value of intersection, or null if the ray misses.
//  Uses 2D barycentric coordinates in the XY plane.
function rayTriangleZ(rx, ry, v0, v1, v2) {
  // Step 2a) Edge vectors in XY
  var e1x = v1.x - v0.x;
  var e1y = v1.y - v0.y;
  var e2x = v2.x - v0.x;
  var e2y = v2.y - v0.y;

  // Step 2b) Denominator (2x area of triangle in XY)
  var det = e1x * e2y - e1y * e2x;
  if (Math.abs(det) < 1e-12) return null;

  var invDet = 1.0 / det;

  // Step 2c) Vector from v0 to ray origin in XY
  var dx = rx - v0.x;
  var dy = ry - v0.y;

  // Step 2d) Barycentric coordinates u, v
  var u = (dx * e2y - dy * e2x) * invDet;
  if (u < -1e-8 || u > 1.0 + 1e-8) return null;

  var v = (e1x * dy - e1y * dx) * invDet;
  if (v < -1e-8 || u + v > 1.0 + 1e-8) return null;

  // Step 2e) Interpolate Z at (u, v)
  var e1z = v1.z - v0.z;
  var e2z = v2.z - v0.z;
  return v0.z + u * e1z + v * e2z;
}

// Step 3) Build a spatial grid index for fast triangle lookup.
//  Divides XY bounding box into cells and assigns triangles to cells
//  based on their XY bounding box overlap.
function buildTriangleGrid(normTris, bounds, cellSize) {
  var gridNx = Math.ceil((bounds.maxX - bounds.minX) / cellSize) || 1;
  var gridNy = Math.ceil((bounds.maxY - bounds.minY) / cellSize) || 1;
  var grid = new Array(gridNx * gridNy);
  for (var g = 0; g < grid.length; g++) grid[g] = [];

  for (var t = 0; t < normTris.length; t++) {
    var tri = normTris[t];
    var triMinX = Math.min(tri.v0.x, tri.v1.x, tri.v2.x);
    var triMaxX = Math.max(tri.v0.x, tri.v1.x, tri.v2.x);
    var triMinY = Math.min(tri.v0.y, tri.v1.y, tri.v2.y);
    var triMaxY = Math.max(tri.v0.y, tri.v1.y, tri.v2.y);

    var ix0 = Math.max(0, Math.floor((triMinX - bounds.minX) / cellSize));
    var ix1 = Math.min(gridNx - 1, Math.floor((triMaxX - bounds.minX) / cellSize));
    var iy0 = Math.max(0, Math.floor((triMinY - bounds.minY) / cellSize));
    var iy1 = Math.min(gridNy - 1, Math.floor((triMaxY - bounds.minY) / cellSize));

    for (var iy = iy0; iy <= iy1; iy++) {
      for (var ix = ix0; ix <= ix1; ix++) {
        grid[iy * gridNx + ix].push(tri);
      }
    }
  }

  return { grid: grid, nx: gridNx, ny: gridNy, cellSize: cellSize };
}

// Step 4) Main entry — compute depth bins for a blast solid.
//  resolution: sampling grid spacing in metres (auto-selected if omitted)
//  Returns: { depthBins: [...], gridResolution, totalCells, benchHt, maxDepth }
function computeDepthBins(solid, resolution) {
  if (!solid || !solid.triangles || solid.triangles.length === 0) return null;
  if (!solid.bounds) return null;

  var bounds = solid.bounds;
  var xyArea = (bounds.maxX - bounds.minX) * (bounds.maxY - bounds.minY);

  // Step 4a) Auto-select resolution: 1m if < 50,000 m^2, else 2m
  if (!resolution) {
    resolution = xyArea < 50000 ? 1 : 2;
  }

  // Step 4b) Normalise triangles into uniform format
  var normTris = normaliseTriangles(solid.triangles, solid.points || []);
  if (normTris.length === 0) return null;

  // Step 4c) Build spatial acceleration grid (cell size = 5x sample resolution)
  var accelCellSize = resolution * 5;
  var triGrid = buildTriangleGrid(normTris, bounds, accelCellSize);

  // Step 4d) Create sampling grid and cast vertical rays
  var nx = Math.ceil((bounds.maxX - bounds.minX) / resolution);
  var ny = Math.ceil((bounds.maxY - bounds.minY) / resolution);
  if (nx < 1) nx = 1;
  if (ny < 1) ny = 1;

  var benchHt = Math.abs(bounds.maxZ - bounds.minZ);
  var maxBin = Math.ceil(benchHt) + 1;
  var binCounts = new Array(maxBin);
  for (var b = 0; b < maxBin; b++) binCounts[b] = 0;
  var binDepthSums = new Array(maxBin);
  for (var b = 0; b < maxBin; b++) binDepthSums[b] = 0;

  var validCells = 0;

  for (var iy = 0; iy < ny; iy++) {
    var ry = bounds.minY + (iy + 0.5) * resolution;
    for (var ix = 0; ix < nx; ix++) {
      var rx = bounds.minX + (ix + 0.5) * resolution;

      // Step 4d-i) Find which acceleration cell this sample is in
      var gx = Math.min(triGrid.nx - 1, Math.floor((rx - bounds.minX) / accelCellSize));
      var gy = Math.min(triGrid.ny - 1, Math.floor((ry - bounds.minY) / accelCellSize));
      var candidates = triGrid.grid[gy * triGrid.nx + gx];

      // Step 4d-ii) Cast vertical ray, collect all Z intersections
      var zHits = [];
      for (var t = 0; t < candidates.length; t++) {
        var tri = candidates[t];
        var z = rayTriangleZ(rx, ry, tri.v0, tri.v1, tri.v2);
        if (z !== null) zHits.push(z);
      }

      if (zHits.length < 2) continue;

      // Step 4d-iii) Sort Z hits and compute depth from pairs (top-bottom)
      zHits.sort(function(a, b) { return b - a; });
      var depth = zHits[0] - zHits[zHits.length - 1];

      if (depth <= 0.01) continue;

      // Step 4d-iv) Bin this cell's depth
      var binIdx = Math.floor(depth);
      if (binIdx >= maxBin) binIdx = maxBin - 1;
      binCounts[binIdx]++;
      binDepthSums[binIdx] += depth;
      validCells++;
    }
  }

  if (validCells === 0) return null;

  // Step 4e) Build output bins with area percentages
  var depthBins = [];
  var maxDepthFound = 0;

  for (var b = 0; b < maxBin; b++) {
    if (binCounts[b] === 0) continue;
    var areaPct = Math.round((binCounts[b] / validCells) * 10000) / 100;
    var avgDepth = Math.round((binDepthSums[b] / binCounts[b]) * 100) / 100;
    if (b + 1 > maxDepthFound) maxDepthFound = b + 1;

    depthBins.push({
      minDepth: b,
      maxDepth: b + 1,
      areaPct: areaPct,
      avgDepth: avgDepth,
      cellCount: binCounts[b]
    });
  }

  // Step 4f) Sort bins by minDepth ascending
  depthBins.sort(function(a, b) { return a.minDepth - b.minDepth; });

  return {
    depthBins: depthBins,
    gridResolution: resolution,
    totalCells: validCells,
    benchHt: benchHt,
    maxDepth: maxDepthFound
  };
}

// Step 5) Render a compact depth profile bar (HTML string).
//  Returns an inline stacked bar with coloured segments and a tooltip.
function renderDepthProfileBar(depthBinData) {
  if (!depthBinData || !depthBinData.depthBins || depthBinData.depthBins.length === 0) {
    return "<span style=\"color:var(--text-muted)\">\u2014</span>";
  }

  var bins = depthBinData.depthBins;
  var maxDepth = depthBinData.maxDepth || 1;

  // Step 5a) Colour ramp from light (shallow) to dark (deep)
  var colors = [
    "#4fc3f7", "#29b6f6", "#039be5", "#0277bd",
    "#01579b", "#0d47a1", "#1a237e", "#311b92",
    "#4a148c", "#880e4f"
  ];

  // Step 5b) Build tooltip text
  var tooltipParts = [];
  for (var i = 0; i < bins.length; i++) {
    var bin = bins[i];
    if (bin.areaPct < 1) continue;
    tooltipParts.push(bin.minDepth + "-" + bin.maxDepth + "m: " + bin.areaPct + "%");
  }
  var tooltip = tooltipParts.join(" | ");

  // Step 5c) Build stacked bar HTML
  var barHtml = "<div class=\"depth-profile-bar\" title=\"" + tooltip + "\" style=\"display:inline-flex;width:80px;height:14px;border-radius:3px;overflow:hidden;vertical-align:middle;border:1px solid var(--border);\">";
  for (var i = 0; i < bins.length; i++) {
    var bin = bins[i];
    if (bin.areaPct < 0.5) continue;
    var colorIdx = Math.min(Math.floor(bin.minDepth / maxDepth * colors.length), colors.length - 1);
    barHtml += "<div style=\"width:" + bin.areaPct + "%;background:" + colors[colorIdx] + ";\" title=\"" + bin.minDepth + "-" + bin.maxDepth + "m: " + bin.areaPct + "%\"></div>";
  }
  barHtml += "</div>";

  return barHtml;
}

// Step 6) Render a detailed depth profile panel (HTML string for blast modal).
//  Shows a horizontal bar chart with text labels per bin.
function renderDepthProfilePanel(depthBinData) {
  if (!depthBinData || !depthBinData.depthBins || depthBinData.depthBins.length === 0) {
    return "<div style=\"color:var(--text-muted);font-size:12px;padding:8px;\">No depth profile data available. Import a 3D solid (KAP) matching this blast name.</div>";
  }

  var bins = depthBinData.depthBins;
  var maxPct = 0;
  for (var i = 0; i < bins.length; i++) {
    if (bins[i].areaPct > maxPct) maxPct = bins[i].areaPct;
  }
  if (maxPct < 1) maxPct = 1;

  var colors = [
    "#4fc3f7", "#29b6f6", "#039be5", "#0277bd",
    "#01579b", "#0d47a1", "#1a237e", "#311b92",
    "#4a148c", "#880e4f"
  ];
  var maxDepth = depthBinData.maxDepth || 1;

  var html = "<div style=\"font-size:11px;\">";
  html += "<div style=\"display:flex;justify-content:space-between;margin-bottom:6px;color:var(--text-muted);\">";
  html += "<span>Grid: " + depthBinData.gridResolution + "m | Cells: " + depthBinData.totalCells + "</span>";
  html += "<span>Bench: " + depthBinData.benchHt.toFixed(1) + "m</span>";
  html += "</div>";

  for (var i = 0; i < bins.length; i++) {
    var bin = bins[i];
    if (bin.areaPct < 0.5) continue;
    var barWidth = Math.round((bin.areaPct / maxPct) * 100);
    var colorIdx = Math.min(Math.floor(bin.minDepth / maxDepth * colors.length), colors.length - 1);

    html += "<div style=\"display:flex;align-items:center;margin-bottom:2px;\">";
    html += "<span style=\"width:50px;text-align:right;padding-right:6px;color:var(--text-muted);\">" + bin.minDepth + "-" + bin.maxDepth + "m</span>";
    html += "<div style=\"flex:1;background:var(--bg-primary);border-radius:3px;overflow:hidden;height:14px;\">";
    html += "<div style=\"width:" + barWidth + "%;height:100%;background:" + colors[colorIdx] + ";border-radius:3px;min-width:2px;\"></div>";
    html += "</div>";
    html += "<span style=\"width:55px;text-align:right;padding-left:6px;font-weight:600;\">" + bin.areaPct + "%</span>";
    html += "</div>";
  }

  html += "</div>";
  return html;
}

export { computeDepthBins, renderDepthProfileBar, renderDepthProfilePanel };
