// ============================================================
//  GANTT CONNECTORS
//  Draws SVG dependency arrows between Gantt chart sections
//  (Drill → Load → Blast) for each blast
// ============================================================

import { APP } from "../state/appState.js";

// Step 1) Main render function — call after renderGantt()
function renderConnectors() {
  var scrollEl = document.getElementById("ganttScroll");
  var table = document.getElementById("ganttTable");
  if (!scrollEl || !table) return;

  // Step 2) Ensure a wrapper div exists so SVG scrolls with content
  var wrapper = table.parentElement;
  if (!wrapper || wrapper.id !== "ganttContentWrapper") {
    wrapper = document.createElement("div");
    wrapper.id = "ganttContentWrapper";
    wrapper.style.cssText = "position:relative;display:inline-block;min-width:100%;";
    scrollEl.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }

  // Step 3) Remove old SVG if present
  var oldSvg = document.getElementById("ganttConnectorSvg");
  if (oldSvg) oldSvg.remove();

  // Step 4) Create SVG element sized to the table
  var ns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(ns, "svg");
  svg.id = "ganttConnectorSvg";
  svg.setAttribute("width", table.scrollWidth || table.offsetWidth);
  svg.setAttribute("height", table.scrollHeight || table.offsetHeight);

  // Step 5) Read theme-aware colors from CSS variables
  var styles = getComputedStyle(document.documentElement);
  var colorOk = styles.getPropertyValue("--accent-green").trim() || "#10b981";
  var colorBreach = styles.getPropertyValue("--accent-blast").trim() || "#ef4444";

  // Step 5b) Define arrowhead markers using theme colors
  var defs = document.createElementNS(ns, "defs");
  defs.appendChild(makeMarker(ns, "arrOk", colorOk));
  defs.appendChild(makeMarker(ns, "arrWarn", colorBreach));
  svg.appendChild(defs);

  // Step 6) Gather blast rows indexed by (blastIdx, section)
  var groups = {};
  var allRows = document.querySelectorAll(".gantt-row[data-blast]");
  allRows.forEach(function(row) {
    var key = row.dataset.blast;
    var sec = row.dataset.section;
    if (!groups[key]) groups[key] = {};
    groups[key][sec] = row;
  });

  // Step 7) Draw connectors for each blast
  var tableRect = table.getBoundingClientRect();

  Object.keys(groups).forEach(function(key) {
    var blast = APP.blasts[parseInt(key)];
    if (!blast) return;

    var g = groups[key];
    var breach = !!blast._depWarning;

    // Step 7a) Drill end → Load start connector
    if (g.drilling && g.loading) {
      var from = lastBarPos(g.drilling, tableRect);
      var to = firstBarPos(g.loading, tableRect);
      if (from && to) {
        drawPath(ns, svg, from, to, breach, colorOk, colorBreach);
      }
    }

    // Step 7b) Load end → Blast connector
    if (g.loading && g.blasting) {
      var from2 = lastBarPos(g.loading, tableRect);
      var to2 = midBarPos(g.blasting, tableRect);
      if (from2 && to2) {
        drawPath(ns, svg, from2, to2, breach, colorOk, colorBreach);
      }
    }
  });

  // Step 8) Append SVG to wrapper
  wrapper.appendChild(svg);
}

// Step 9) Create an SVG arrowhead <marker>
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

// Step 10) Position helpers — relative to table origin
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

// Step 11) Draw an L-shaped SVG path between two points
function drawPath(ns, svg, from, to, breach, colorOk, colorBreach) {
  var path = document.createElementNS(ns, "path");
  var mx = from.x + 6;
  var d = "M " + from.x + " " + from.y +
          " L " + mx + " " + from.y +
          " L " + mx + " " + to.y +
          " L " + to.x + " " + to.y;

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

  svg.appendChild(path);
}

export { renderConnectors };
