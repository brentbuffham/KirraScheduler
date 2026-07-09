// ============================================================
//  GANTT HORIZONTAL SCALE (zoom + granularity)
//  Single source of truth for the timeline column width and the
//  granularity mode. Works like a video editor timeline: a continuous
//  zoom slider scales the column width, and preset buttons snap to
//  Weeks / Days / Hours.
//
//  Two column MODES:
//    - "day"  : one column = one calendar day  (granularity "weeks" or "days")
//    - "hour" : one column = one hour           (granularity "hours")
//
//  The active column width is published as a CSS custom property
//  (--gantt-day-width — kept for backwards-compat, but it now means
//  "slot width") so the CSS grid, drag math and resize math all read
//  ONE value. Persisted to localStorage (a view preference, so it is
//  intentionally NOT part of the KGP export).
// ============================================================

// Step 1) Zoom limits per mode (pixels per slot)
var DAY_LIMITS  = { min: 6,  max: 96, def: 32 };   // day columns
var HOUR_LIMITS = { min: 4,  max: 40, def: 16 };   // hour columns

// Step 2) Granularity presets — each fixes a mode + representative width.
var PRESETS = {
  weeks: { mode: "day",  width: 12 },
  days:  { mode: "day",  width: 32 },
  hours: { mode: "hour", width: 16 }
};

// Step 3) localStorage keys
var LS_WIDTH = "kirrasched.ganttSlotWidth";
var LS_GRAN  = "kirrasched.ganttGranularity";

// Step 4) In-memory state
var _granularity = "days";
var _mode = "day";
var _slotWidth = DAY_LIMITS.def;

// Step 5) Limits for the current mode
function limitsForMode(mode) {
  return mode === "hour" ? HOUR_LIMITS : DAY_LIMITS;
}

// Step 6) Clamp a width into the current mode's bounds
function clampWidth(px, mode) {
  var L = limitsForMode(mode || _mode);
  px = Math.round(px);
  if (isNaN(px)) px = L.def;
  if (px < L.min) px = L.min;
  if (px > L.max) px = L.max;
  return px;
}

// Step 7) In DAY mode, derive the weeks/days label from the raw width so the
//  preset buttons highlight the closest one while the user drags the slider.
function dayGranularityForWidth(px) {
  return px <= 18 ? "weeks" : "days";
}

// Step 8) Publish the current width + granularity class to the DOM.
function applyScaleCss() {
  document.documentElement.style.setProperty("--gantt-day-width", _slotWidth + "px");
  var scroll = document.getElementById("ganttScroll");
  if (scroll) {
    scroll.classList.remove("gantt-scale-weeks", "gantt-scale-days", "gantt-scale-hours");
    scroll.classList.add("gantt-scale-" + _granularity);
  }
}

// Step 9) Public getters
function getSlotWidth() { return _slotWidth; }
function getDayWidth()  { return _slotWidth; }   // backwards-compat alias
function getGranularity() { return _granularity; }
function isHoursMode() { return _mode === "hour"; }
function getScaleLimits() { return limitsForMode(_mode); }

// Step 10) Set an explicit slot width (slider / +- buttons). Stays in the
//  current mode; in day mode it re-derives the weeks/days label.
function setSlotWidth(px) {
  _slotWidth = clampWidth(px, _mode);
  if (_mode === "day") _granularity = dayGranularityForWidth(_slotWidth);
  applyScaleCss();
  persist();
}
// Backwards-compat alias
function setDayWidth(px) { setSlotWidth(px); }

// Step 11) Snap to a named granularity preset (Weeks / Days / Hours).
function setGranularity(name) {
  if (!PRESETS.hasOwnProperty(name)) return;
  var p = PRESETS[name];
  _granularity = name;
  _mode = p.mode;
  _slotWidth = clampWidth(p.width, _mode);
  applyScaleCss();
  persist();
}

// Step 12) Nudge zoom by a step (used by +/- buttons and Ctrl+Wheel).
function zoomBy(deltaPx) { setSlotWidth(_slotWidth + deltaPx); }

// Step 13) Persist the view preference
function persist() {
  try {
    localStorage.setItem(LS_WIDTH, String(_slotWidth));
    localStorage.setItem(LS_GRAN, _granularity);
  } catch (e) { /* storage unavailable — non-fatal for a view pref */ }
}

// Step 14) Initialise from storage and apply to the DOM. Call once at boot.
function initGanttScale() {
  try {
    var g = localStorage.getItem(LS_GRAN);
    if (g && PRESETS.hasOwnProperty(g)) {
      _granularity = g;
      _mode = PRESETS[g].mode;
    }
    var w = parseInt(localStorage.getItem(LS_WIDTH), 10);
    if (!isNaN(w)) _slotWidth = clampWidth(w, _mode);
    else _slotWidth = PRESETS[_granularity].width;
  } catch (e) {
    _granularity = "days"; _mode = "day"; _slotWidth = DAY_LIMITS.def;
  }
  applyScaleCss();
}

export {
  initGanttScale,
  applyScaleCss,
  getSlotWidth,
  getDayWidth,
  getGranularity,
  isHoursMode,
  getScaleLimits,
  setSlotWidth,
  setDayWidth,
  setGranularity,
  zoomBy
};
