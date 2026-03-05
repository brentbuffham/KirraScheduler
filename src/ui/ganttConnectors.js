// ============================================================
//  GANTT CONNECTORS
//  Draws SVG dependency arrows between Gantt chart sections
//  (Drill → Load → Blast) for each blast.
//  Handles collapsed sections: when a source section is hidden,
//  the arrow enters the visible target row from the top.
// ============================================================

import { APP } from "../state/appState.js";

// Step 1) Check if a row is visible (not in a collapsed section)
function isRowVisible(row) {
  return row && !row.classList.contains("section-hidden");
}

// Step 2) Main render function — call after renderGantt()
function renderConnectors() {
  var scrollEl = document.getElementById("ganttScroll");
  var table = document.getElementById("ganttTable");
  if (!scrollEl || !table) return;

  // Step 3) Ensure a wrapper div exists so SVG scrolls with content
  var wrapper = table.parentElement;
  if (!wrapper || wrapper.id !== "ganttContentWrapper") {
    wrapper = document.createElement("div");
    wrapper.id = "ganttContentWrapper";
    wrapper.style.cssText = "position:relative;display:inline-block;min-width:100%;";
    scrollEl.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }

  // Step 4) Remove old SVG if present
  var oldSvg = document.getElementById("ganttConnectorSvg");
  if (oldSvg) oldSvg.remove();

  // Step 5) Create SVG element sized to the table
  var ns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(ns, "svg");
  svg.id = "ganttConnectorSvg";
  svg.setAttribute("width", table.scrollWidth || table.offsetWidth);
  svg.setAttribute("height", table.scrollHeight || table.offsetHeight);

  // Step 6) Read theme-aware colors from CSS variables
  var styles = getComputedStyle(document.documentElement);
  var colorOk = styles.getPropertyValue("--accent-green").trim() || "#10b981";
  var colorBreach = styles.getPropertyValue("--accent-blast").trim() || "#ef4444";

  // Step 6b) Define arrowhead markers using theme colors
  var defs = document.createElementNS(ns, "defs");
  defs.appendChild(makeMarker(ns, "arrOk", colorOk));
  defs.appendChild(makeMarker(ns, "arrWarn", colorBreach));
  svg.appendChild(defs);

  // Step 7) Gather blast rows indexed by (blastIdx, section)
  var groups = {};
  var allRows = document.querySelectorAll(".gantt-row[data-blast]");
  allRows.forEach(function(row) {
    var key = row.dataset.blast;
    var sec = row.dataset.section;
    if (!groups[key]) groups[key] = {};

    if (sec === "drilling" && row.dataset.block !== undefined) {
      if (!groups[key]._drillRows) groups[key]._drillRows = [];
      groups[key]._drillRows.push(row);
    } else {
      groups[key][sec] = row;
    }
  });

  // Step 7b) For block blasts, find the last-ending drilling row
  Object.keys(groups).forEach(function(key) {
    var g = groups[key];
    if (g._drillRows && g._drillRows.length > 0 && !g.drilling) {
      var lastRow = null;
      var lastRight = -Infinity;
      g._drillRows.forEach(function(row) {
        var bars = row.querySelectorAll(".gantt-bar");
        if (!bars.length) return;
        var lastBar = bars[bars.length - 1];
        var cell = lastBar.closest("td");
        if (cell) {
          var r = cell.getBoundingClientRect();
          if (r.right > lastRight) {
            lastRight = r.right;
            lastRow = row;
          }
        }
      });
      if (lastRow) g.drilling = lastRow;
    }
  });

  // Step 8) Draw connectors for each blast
  var tableRect = table.getBoundingClientRect();

  Object.keys(groups).forEach(function(key) {
    var blast = APP.blasts[parseInt(key)];
    if (!blast) return;

    var g = groups[key];
    var breach = !!blast._depWarning;

    // Step 8a) Drill end → Load start connector
    if (g.drilling && g.loading) {
      var fromVisible = isRowVisible(g.drilling);
      var toVisible = isRowVisible(g.loading);

      if (fromVisible && toVisible) {
        // Step 8a-i) Both visible: standard L-shaped path going downward
        var from = lastBarPos(g.drilling, tableRect);
        var to = firstBarPos(g.loading, tableRect);
        if (from && to) drawDownPath(ns, svg, from, to, breach, colorOk, colorBreach);
      } else if (!fromVisible && toVisible) {
        // Step 8a-ii) Drill collapsed: arrow enters loading from the top
        var to1 = firstBarPos(g.loading, tableRect);
        if (to1) drawFromTopPath(ns, svg, to1, breach, colorOk, colorBreach);
      }
      // If target is collapsed, skip — no visible endpoint
    }

    // Step 8b) Load end → Blast connector
    if (g.loading && g.blasting) {
      var fromVisible2 = isRowVisible(g.loading);
      var toVisible2 = isRowVisible(g.blasting);

      if (fromVisible2 && toVisible2) {
        // Step 8b-i) Both visible: standard L-shaped path going downward
        var from2 = lastBarPos(g.loading, tableRect);
        var to2 = midBarPos(g.blasting, tableRect);
        if (from2 && to2) drawDownPath(ns, svg, from2, to2, breach, colorOk, colorBreach);
      } else if (!fromVisible2 && toVisible2) {
        // Step 8b-ii) Loading collapsed: arrow enters blasting from the top
        var to3 = midBarPos(g.blasting, tableRect);
        if (to3) drawFromTopPath(ns, svg, to3, breach, colorOk, colorBreach);
      }
    }

    // Step 8c) Drill → Blast when loading is absent (noLoad) or both drill + load collapsed
    if (g.drilling && !g.loading && g.blasting) {
      var dVis = isRowVisible(g.drilling);
      var bVis = isRowVisible(g.blasting);

      if (dVis && bVis) {
        var fromD = lastBarPos(g.drilling, tableRect);
        var toB = midBarPos(g.blasting, tableRect);
        if (fromD && toB) drawDownPath(ns, svg, fromD, toB, breach, colorOk, colorBreach);
      } else if (!dVis && bVis) {
        var toB2 = midBarPos(g.blasting, tableRect);
        if (toB2) drawFromTopPath(ns, svg, toB2, breach, colorOk, colorBreach);
      }
    }
  });

  // Step 9) Append SVG to wrapper
  wrapper.appendChild(svg);
}

// Step 10) Create an SVG arrowhead <marker>
function makeMarker(ns, id, color) {
  var m = document.createElementNS(ns, "marker");
  m.setAttribute("id", id);
  m.setAttribute("markerWidth", "8");
  m.setAttribute("markerHeight", "6");
  m.setAttribute("refX", "7");
  m.setAttribute("refY", "3");
  m.setAttribute("orient", "auto");
  var p = document.createElementNS(ns, "polygon");
  p.setAttribute("points", "0 0, 8 3, 0 6");
  p.setAttribute("fill", color);
  m.appendChild(p);
  return m;
}

// Step 11) Position helpers — relative to table origin
function relPos(el, tableRect) {
  var r = el.getBoundingClientRect();
  return {
    left: r.left - tableRect.left,
    top: r.top - tableRect.top,
    width: r.width,
    height: r.height
  };
}

function lastBarPos(row, tableRect) {
  var bars = row.querySelectorAll(".gantt-bar");
  if (!bars.length) return null;
  var cell = bars[bars.length - 1].closest("td");
  if (!cell) return null;
  var rr = relPos(row, tableRect);
  var cr = relPos(cell, tableRect);
  return { x: cr.left + cr.width, y: rr.top + rr.height / 2 };
}

function firstBarPos(row, tableRect) {
  var bars = row.querySelectorAll(".gantt-bar");
  if (!bars.length) return null;
  var cell = bars[0].closest("td");
  if (!cell) return null;
  var rr = relPos(row, tableRect);
  var cr = relPos(cell, tableRect);
  return { x: cr.left, y: rr.top + rr.height / 2 };
}

function midBarPos(row, tableRect) {
  var bars = row.querySelectorAll(".gantt-bar");
  if (!bars.length) return null;
  var cell = bars[0].closest("td");
  if (!cell) return null;
  var rr = relPos(row, tableRect);
  var cr = relPos(cell, tableRect);
  return { x: cr.left + cr.width / 2, y: rr.top + rr.height / 2 };
}

// Step 12) Draw a downward L-shaped SVG path between two points
//          Always routes right from "from", then down, then across to "to"
function drawDownPath(ns, svg, from, to, breach, colorOk, colorBreach) {
  var path = document.createElementNS(ns, "path");
  var mx = from.x + 6;
  var d = "M " + from.x + " " + from.y +
          " L " + mx + " " + from.y +
          " L " + mx + " " + to.y +
          " L " + to.x + " " + to.y;

  applyPathStyle(path, d, breach, colorOk, colorBreach);
  svg.appendChild(path);
}

// Step 13) Draw a "from top" connector — vertical arrow entering from above
//          Used when the source section is collapsed
function drawFromTopPath(ns, svg, to, breach, colorOk, colorBreach) {
  var path = document.createElementNS(ns, "path");
  var topY = to.y - 16;
  var d = "M " + to.x + " " + topY +
          " L " + to.x + " " + to.y;

  applyPathStyle(path, d, breach, colorOk, colorBreach);
  svg.appendChild(path);
}

// Step 14) Shared path styling
function applyPathStyle(path, d, breach, colorOk, colorBreach) {
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", breach ? colorBreach : colorOk);
  path.setAttribute("stroke-width", "2");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("marker-end", "url(#" + (breach ? "arrWarn" : "arrOk") + ")");
  path.setAttribute("opacity", "0.85");
  if (breach) {
    path.setAttribute("stroke-dasharray", "4 2");
  }
}

export { renderConnectors };
