// ============================================================
//  GANTT CONNECTORS
//  Draws SVG dependency arrows on the Gantt:
//    • Within each blast: Prep → Drill → Load → Blast → Excavation
//    • Cross-blast predecessor links (green = satisfied, red = breached)
//  Handles collapsed sections: when a source section is hidden,
//  the arrow enters the visible target row from the top.
// ============================================================

import { APP } from "../state/appState.js";
import { getBlastDeps } from "../engine/dependencyEngine.js";
import { addDays, isoDate } from "../utils/dateUtils.js";

// Step 0) Show/hide preference — persisted locally (not exported in KGP)
var LS_SHOW_LINKS = "kirrasched.ganttShowDepLinks";
var _showLinks = true;

function loadShowLinksPref() {
  try {
    var stored = localStorage.getItem(LS_SHOW_LINKS);
    if (stored === "0" || stored === "false") _showLinks = false;
    else if (stored === "1" || stored === "true") _showLinks = true;
  } catch (e) { /* ignore */ }
}

function saveShowLinksPref() {
  try {
    localStorage.setItem(LS_SHOW_LINKS, _showLinks ? "1" : "0");
  } catch (e) { /* ignore */ }
}

function areConnectorsVisible() {
  return _showLinks;
}

function setConnectorsVisible(show) {
  _showLinks = !!show;
  saveShowLinksPref();
  syncDepLinksButton();
  renderConnectors();
}

function toggleConnectorsVisible() {
  setConnectorsVisible(!_showLinks);
}

// Step 0b) Wire the show/hide button in the Dependencies bar
function initConnectorLinksToggle() {
  loadShowLinksPref();
  var btn = document.getElementById("btnToggleDepLinks");
  if (!btn || btn._depLinksBound) return;
  btn._depLinksBound = true;
  btn.addEventListener("click", function() {
    toggleConnectorsVisible();
  });
  syncDepLinksButton();
}

function syncDepLinksButton() {
  var btn = document.getElementById("btnToggleDepLinks");
  if (!btn) return;
  if (_showLinks) {
    btn.classList.add("active");
    btn.title = "Hide dependency arrows on the Gantt chart";
    btn.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><path d=\"M5 12h14\"/><path d=\"M12 5l7 7-7 7\"/></svg> Hide Links";
  } else {
    btn.classList.remove("active");
    btn.title = "Show dependency arrows on the Gantt chart";
    btn.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"width:12px;height:12px\"><path d=\"M5 12h14\"/><path d=\"M12 5l7 7-7 7\"/></svg> Show Links";
  }
}

loadShowLinksPref();

// Step 1) Check if a row is visible (not in a collapsed section)
function isRowVisible(row) {
  return row && !row.classList.contains("section-hidden");
}

// Step 2) Phase end/start helpers for breach colouring
function prepEndIso(blast) {
  if (!blast.prepStart || !blast.prepDays) return null;
  return isoDate(addDays(new Date(blast.prepStart), Math.max((blast.prepDays || 1) - 1, 0)));
}

function drillEndIso(blast) {
  if (blast.noDrill || !blast.drillStart || !blast.drillDays) return null;
  return isoDate(addDays(new Date(blast.drillStart), Math.max((blast.drillDays || 1) - 1, 0)));
}

function loadEndIso(blast) {
  if (blast.noLoad || !blast.loadStart) return null;
  var days = blast.loadDays || 1;
  return isoDate(addDays(new Date(blast.loadStart), Math.max(days - 1, 0)));
}

function excavEndIso(blast) {
  if (blast.noExcav || !blast.excavStart || !blast.excavDays) return null;
  return isoDate(addDays(new Date(blast.excavStart), Math.max((blast.excavDays || 1) - 1, 0)));
}

// Step 2b) True when the target phase starts before the source phase has finished
function startsBeforeEnd(endIso, startIso) {
  if (!endIso || !startIso) return false;
  return new Date(startIso) < new Date(endIso);
}

// Step 2c) First row that receives the drill-cycle entry (prep if present, else drill)
function getDrillEntryRow(g, blast) {
  if (g["pattern prep"] && blast.prepStart && blast.prepDays) return g["pattern prep"];
  return g.drilling || null;
}

// Step 3) Main render function — call after renderGantt()
function renderConnectors() {
  var scrollEl = document.getElementById("ganttScroll");
  var table = document.getElementById("ganttTable");
  if (!scrollEl || !table) return;

  // Step 3a) Ensure a wrapper div exists so SVG scrolls with content
  var wrapper = table.parentElement;
  if (!wrapper || wrapper.id !== "ganttContentWrapper") {
    wrapper = document.createElement("div");
    wrapper.id = "ganttContentWrapper";
    wrapper.style.cssText = "position:relative;display:inline-block;min-width:100%;";
    scrollEl.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  }

  // Step 3b) Remove old SVG if present
  var oldSvg = document.getElementById("ganttConnectorSvg");
  if (oldSvg) oldSvg.remove();

  // Step 3b-ii) User toggled links off — leave SVG removed
  if (!_showLinks) return;

  // Step 3c) Create SVG element sized to the table
  var ns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(ns, "svg");
  svg.id = "ganttConnectorSvg";
  svg.setAttribute("width", table.scrollWidth || table.offsetWidth);
  svg.setAttribute("height", table.scrollHeight || table.offsetHeight);

  // Step 3d) Read theme-aware colours from CSS variables
  var styles = getComputedStyle(document.documentElement);
  var colorOk = styles.getPropertyValue("--accent-green").trim() || "#10b981";
  var colorBreach = styles.getPropertyValue("--accent-blast").trim() || "#ef4444";

  // Step 3e) Define arrowhead markers using theme colours
  var defs = document.createElementNS(ns, "defs");
  defs.appendChild(makeMarker(ns, "arrOk", colorOk));
  defs.appendChild(makeMarker(ns, "arrWarn", colorBreach));
  svg.appendChild(defs);

  // Step 4) Gather blast rows indexed by (blastIdx, section)
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

  // Step 4b) For block blasts, find the last-ending drilling row
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

  var tableRect = table.getBoundingClientRect();
  var drawCtx = { ns: ns, svg: svg, tableRect: tableRect, colorOk: colorOk, colorBreach: colorBreach };

  // Step 5) Within-blast cycle connectors
  Object.keys(groups).forEach(function(key) {
    var blast = APP.blasts[parseInt(key)];
    if (!blast) return;
    var g = groups[key];

    // Step 5a) Pattern Prep end → Drill start
    if (g["pattern prep"] && g.drilling && blast.prepStart && blast.drillStart) {
      var prepBreach = startsBeforeEnd(prepEndIso(blast), blast.drillStart);
      connectRows(g["pattern prep"], g.drilling, lastBarPos, firstBarPos, prepBreach, drawCtx);
    }

    // Step 5b) Drill end → Load start
    if (g.drilling && g.loading && !blast.noDrill && !blast.noLoad) {
      var drillLoadBreach = startsBeforeEnd(drillEndIso(blast), blast.loadStart);
      connectRows(g.drilling, g.loading, lastBarPos, firstBarPos, drillLoadBreach, drawCtx);
    }

    // Step 5c) Load end → Blast
    if (g.loading && g.blasting && !blast.noLoad && !blast.noBlast) {
      var loadBlastBreach = blast.blastDate && blast.loadStart
        ? startsBeforeEnd(loadEndIso(blast), blast.blastDate) : false;
      connectRows(g.loading, g.blasting, lastBarPos, midBarPos, loadBlastBreach, drawCtx);
    }

    // Step 5d) Drill → Blast when loading is skipped
    if (g.drilling && !g.loading && g.blasting && !blast.noDrill && !blast.noBlast && blast.noLoad) {
      var drillBlastBreach = blast.blastDate && blast.drillStart
        ? startsBeforeEnd(drillEndIso(blast), blast.blastDate) : false;
      connectRows(g.drilling, g.blasting, lastBarPos, midBarPos, drillBlastBreach, drawCtx);
    }

    // Step 5e) Blast → Excavation start (dig-out after firing)
    if (g.blasting && g.excavation && !blast.noBlast && !blast.noExcav && blast.blastDate && blast.excavStart) {
      var blastExcavBreach = new Date(blast.excavStart) < new Date(blast.blastDate);
      connectRows(g.blasting, g.excavation, midBarPos, firstBarPos, blastExcavBreach, drawCtx);
    }
  });

  // Step 6) Cross-blast predecessor connectors
  for (var si = 0; si < APP.blasts.length; si++) {
    var succ = APP.blasts[si];
    var deps = getBlastDeps(succ);
    if (!deps.predecessor) continue;

    var pred = null;
    var predIdx = -1;
    for (var pi = 0; pi < APP.blasts.length; pi++) {
      if (APP.blasts[pi].name === deps.predecessor) {
        pred = APP.blasts[pi];
        predIdx = pi;
        break;
      }
    }
    if (!pred || predIdx < 0) continue;

    var predG = groups[String(predIdx)];
    var succG = groups[String(si)];
    if (!predG || !succG) continue;

    var predType = deps.predType || "blast-before-drill";
    var fromRow = null;
    var toRow = null;
    var fromPosFn = lastBarPos;
    var toPosFn = firstBarPos;
    var breach = false;

    // Step 6a) Predecessor excavated before this drill (arrow to prep or drill)
    if (predType === "excav-before-drill") {
      fromRow = predG.excavation;
      fromPosFn = lastBarPos;
      toRow = getDrillEntryRow(succG, succ);
      if (toRow === succG["pattern prep"]) {
        breach = succ.prepStart && pred.excavStart
          ? startsBeforeEnd(excavEndIso(pred), succ.prepStart) : false;
        if (!breach && succ.drillStart) {
          breach = startsBeforeEnd(excavEndIso(pred), succ.drillStart);
        }
      } else if (toRow === succG.drilling && succ.drillStart) {
        breach = startsBeforeEnd(excavEndIso(pred), succ.drillStart);
      }
    // Step 6b) Predecessor must fire before drill
    } else if (predType === "blast-before-drill") {
      fromRow = predG.blasting;
      fromPosFn = midBarPos;
      toRow = getDrillEntryRow(succG, succ);
      if (succ.drillStart && pred.blastDate) {
        breach = new Date(succ.drillStart) < new Date(pred.blastDate);
      }
    // Step 6c) Predecessor drill done before this drill
    } else if (predType === "drill-before-drill") {
      fromRow = predG.drilling;
      fromPosFn = lastBarPos;
      toRow = getDrillEntryRow(succG, succ);
      if (succ.drillStart && pred.drillStart) {
        breach = startsBeforeEnd(drillEndIso(pred), succ.drillStart);
      }
    // Step 6d) Predecessor must fire before loading
    } else if (predType === "blast-before-load") {
      fromRow = predG.blasting;
      fromPosFn = midBarPos;
      toRow = succG.loading;
      if (succ.loadStart && pred.blastDate) {
        breach = new Date(succ.loadStart) < new Date(pred.blastDate);
      }
    }

    if (fromRow && toRow) {
      connectRows(fromRow, toRow, fromPosFn, toPosFn, breach, drawCtx);
    }
  }

  // Step 7) Append SVG to wrapper
  wrapper.appendChild(svg);
}

// Step 8) Connect two rows — handles collapsed source sections
function connectRows(fromRow, toRow, fromPosFn, toPosFn, breach, ctx) {
  var fromVisible = isRowVisible(fromRow);
  var toVisible = isRowVisible(toRow);
  if (!toVisible) return;

  if (fromVisible) {
    var from = fromPosFn(fromRow, ctx.tableRect);
    var to = toPosFn(toRow, ctx.tableRect);
    if (from && to) {
      drawConnectorPath(ctx.ns, ctx.svg, from, to, breach, ctx.colorOk, ctx.colorBreach);
    }
  } else {
    var toOnly = toPosFn(toRow, ctx.tableRect);
    if (toOnly) {
      drawFromTopPath(ctx.ns, ctx.svg, toOnly, breach, ctx.colorOk, ctx.colorBreach);
    }
  }
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

// Step 11) L-shaped connector — works for targets above or below the source
function drawConnectorPath(ns, svg, from, to, breach, colorOk, colorBreach) {
  var path = document.createElementNS(ns, "path");
  var mx = Math.max(from.x, to.x) + 10;
  var d = "M " + from.x + " " + from.y +
          " L " + mx + " " + from.y +
          " L " + mx + " " + to.y +
          " L " + to.x + " " + to.y;

  applyPathStyle(path, d, breach, colorOk, colorBreach);
  svg.appendChild(path);
}

// Step 12) Vertical arrow entering from above when the source section is collapsed
function drawFromTopPath(ns, svg, to, breach, colorOk, colorBreach) {
  var path = document.createElementNS(ns, "path");
  var topY = to.y - 16;
  var d = "M " + to.x + " " + topY +
          " L " + to.x + " " + to.y;

  applyPathStyle(path, d, breach, colorOk, colorBreach);
  svg.appendChild(path);
}

// Step 13) Shared path styling — green solid = OK, red dashed = breached
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

export { renderConnectors, initConnectorLinksToggle, areConnectorsVisible, setConnectorsVisible };
