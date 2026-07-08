// ============================================================
//  GANTT COLUMNS
//  Definition + width state for the Gantt's frozen (sticky) columns.
//  The single "Blast" + "Info" columns were split into discrete,
//  resizable columns: [grip] [edit] [NAME] [EQUIPMENT] [QTY].
//  Widths persist in localStorage (UI-only; not part of the KGP file).
// ============================================================

// Step 1) Column definitions — key, header label, default + minimum width (px).
//   Order here IS the on-screen order, left-to-right.
var COL_DEFS = [
  { key: "handle", label: "",          def: 26,  min: 20 },  // reorder grip
  { key: "edit",   label: "",          def: 60,  min: 44 },  // edit pencil + Auto/Manual toggle
  { key: "name",   label: "Blast",     def: 160, min: 90 },  // name + status + phase badges
  { key: "equip",  label: "Equipment", def: 120, min: 60 },  // drill / MPU / ancillary chips
  { key: "value",  label: "Qty",       def: 100, min: 60 }   // metres / kg / bcm + progress + crew
];

var STORAGE_KEY = "kirraGanttColW";

// Step 2) Live width map (key -> px), seeded from defaults then overridden by storage
var _widths = {};
(function initWidths() {
  for (var i = 0; i < COL_DEFS.length; i++) {
    _widths[COL_DEFS[i].key] = COL_DEFS[i].def;
  }
  try {
    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      var saved = JSON.parse(raw);
      for (var k in saved) {
        if (_widths[k] !== undefined && typeof saved[k] === "number") {
          _widths[k] = saved[k];
        }
      }
    }
  } catch (err) {
    // Step 2a) Ignore storage/parse errors — fall back to defaults
  }
})();

// Step 3) Persist current widths to localStorage
function _persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(_widths));
  } catch (err) {
    // Step 3a) Non-fatal — widths simply won't survive reload
  }
}

// Step 4) Accessors
function getColumns() {
  return COL_DEFS.map(function(c) {
    return { key: c.key, label: c.label, min: c.min, width: _widths[c.key] };
  });
}

function getColumnCount() {
  return COL_DEFS.length;
}

// Step 5) Cumulative left offset (px) of the column at index i
function getLeftOffset(i) {
  var left = 0;
  for (var j = 0; j < i && j < COL_DEFS.length; j++) {
    left += _widths[COL_DEFS[j].key];
  }
  return left;
}

// Step 6) Total width of all sticky columns
function getTotalWidth() {
  var total = 0;
  for (var i = 0; i < COL_DEFS.length; i++) {
    total += _widths[COL_DEFS[i].key];
  }
  return total;
}

// Step 7) Set a column width (clamped to its minimum) and persist
function setWidth(key, w) {
  var def = null;
  for (var i = 0; i < COL_DEFS.length; i++) {
    if (COL_DEFS[i].key === key) { def = COL_DEFS[i]; break; }
  }
  if (!def) return;
  _widths[key] = Math.max(def.min, Math.round(w));
  _persist();
}

// Step 8) Build the inline style string for a sticky cell of a given column index.
//   Freezes the cell at its cumulative left offset with a fixed width.
function cellStyle(i) {
  var key = COL_DEFS[i].key;
  var w = _widths[key];
  var left = getLeftOffset(i);
  return "left:" + left + "px;width:" + w + "px;min-width:" + w + "px;max-width:" + w + "px;";
}

// Step 9) Re-apply left/width to every sticky cell already in the DOM WITHOUT a full
//   re-render — used for smooth live dragging of a column divider.
function applyColumnLayout() {
  for (var i = 0; i < COL_DEFS.length; i++) {
    var key = COL_DEFS[i].key;
    var w = _widths[key];
    var left = getLeftOffset(i);
    var cells = document.querySelectorAll(".gantt-sticky[data-col-key=\"" + key + "\"]");
    for (var c = 0; c < cells.length; c++) {
      var el = cells[c];
      el.style.left = left + "px";
      el.style.width = w + "px";
      el.style.minWidth = w + "px";
      el.style.maxWidth = w + "px";
    }
  }
}

export {
  getColumns,
  getColumnCount,
  getLeftOffset,
  getTotalWidth,
  setWidth,
  cellStyle,
  applyColumnLayout
};
