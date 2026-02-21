// ============================================================
//  PATTERN LIBRARY
//  Renders the drill & blast pattern cards
// ============================================================

import { APP } from "../state/appState.js";

var typeColors = {
  WASTE: "var(--waste)",
  YELLOW: "var(--yellow-zone)",
  ORE: "var(--ore)",
  PRESPLIT: "var(--presplit)"
};

// Step 1) Render pattern library grid
function renderPatterns() {
  var grid = document.getElementById("patternGrid");
  var html = "";

  APP.patterns.forEach(function(p) {
    var color = typeColors[p.type] || "var(--text-muted)";
    html += "<div class=\"pattern-card\">";
    html += "  <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">";
    html += "    <div class=\"pattern-id\">" + p.id + "</div>";
    html += "    <span class=\"badge\" style=\"background:" + color + "20;color:" + color + "\">" + p.type + "</span>";
    html += "  </div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Bench Height</span><span class=\"value\">" + p.benchHt + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Diameter</span><span class=\"value\">" + p.diam + " mm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Burden</span><span class=\"value\">" + p.burden + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Spacing</span><span class=\"value\">" + p.spacing + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Powder Factor</span><span class=\"value\">" + p.pf + " kg/bcm</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Sub-drill</span><span class=\"value\">" + p.subdrill + " m</span></div>";
    html += "  <div class=\"pattern-detail\"><span class=\"label\">Stemming</span><span class=\"value\">" + p.stemming + " m</span></div>";
    html += "</div>";
  });

  grid.innerHTML = html;
}

export { renderPatterns };
