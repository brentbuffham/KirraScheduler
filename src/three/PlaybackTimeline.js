// ============================================================
//  PLAYBACK TIMELINE
//  Day-by-day schedule state calculation.
//  Determines which blasts are drilling/loading/blasting per day.
//  Drives the timeline scrubber and animation.
// ============================================================

import { APP } from "../state/appState.js";
import { isoDate } from "../utils/dateUtils.js";

// Step 1) Timeline state
var _days = [];
var _currentIdx = 0;
var _playing = false;
var _speed = 1;
var _intervalId = null;
var _onDayChange = null;

// Step 2) Build the day array from schedule data
function buildTimeline() {
  _days = [];
  if (APP.blasts.length === 0) return _days;

  // Step 2a) Find earliest and latest dates across all blasts
  var earliest = null;
  var latest = null;

  APP.blasts.forEach(function(b) {
    var dates = [b.drillStart, b.loadStart, b.blastDate];
    dates.forEach(function(d) {
      if (!d) return;
      if (!earliest || d < earliest) earliest = d;
      if (!latest || d > latest) latest = d;
    });

    // Step 2a-i) Account for drill duration
    if (b.drillStart && b.drillDays) {
      var endD = new Date(b.drillStart);
      endD.setDate(endD.getDate() + (b.drillDays || 0));
      var endStr = isoDate(endD);
      if (!latest || endStr > latest) latest = endStr;
    }
    // Step 2a-ii) Account for load duration
    if (b.loadStart && b.loadDays) {
      var endL = new Date(b.loadStart);
      endL.setDate(endL.getDate() + (b.loadDays || 0));
      var endStr = isoDate(endL);
      if (!latest || endStr > latest) latest = endStr;
    }
  });

  if (!earliest || !latest) return _days;

  // Step 2b) Generate each day
  var d = new Date(earliest);
  var end = new Date(latest);
  end.setDate(end.getDate() + 1);
  var dayIdx = 0;

  while (d <= end) {
    var dateStr = isoDate(d);

    // Step 2c) Build phase map for this day
    var blastStates = {};
    APP.blasts.forEach(function(b) {
      var phase = getBlastPhase(b, dateStr);
      if (phase) {
        blastStates[b.name] = phase;
      }
    });

    _days.push({
      index: dayIdx,
      date: dateStr,
      blastStates: blastStates
    });

    dayIdx++;
    d.setDate(d.getDate() + 1);
  }

  _currentIdx = 0;
  return _days;
}

// Step 3) Determine what phase a blast is in on a given date
function getBlastPhase(blast, dateStr) {
  // Step 3a) Blast day
  if (blast.blastDate && dateStr === blast.blastDate) {
    return { phase: "blastDay", drills: blast.assignedDrills || [], mpu: blast.assignedMPU || "" };
  }

  // Step 3b) Loading phase
  if (blast.loadStart && blast.loadDays) {
    var loadEnd = new Date(blast.loadStart);
    loadEnd.setDate(loadEnd.getDate() + blast.loadDays - 1);
    var loadEndStr = isoDate(loadEnd);
    if (dateStr >= blast.loadStart && dateStr <= loadEndStr) {
      return { phase: "loading", drills: [], mpu: blast.assignedMPU || "" };
    }
  }

  // Step 3c) Drilling phase (check blocks first)
  if (blast.drillBlocks && blast.drillBlocks.length > 0) {
    for (var i = 0; i < blast.drillBlocks.length; i++) {
      var block = blast.drillBlocks[i];
      if (block.drillStart && block.drillDays) {
        var blockEnd = new Date(block.drillStart);
        blockEnd.setDate(blockEnd.getDate() + block.drillDays - 1);
        var blockEndStr = isoDate(blockEnd);
        if (dateStr >= block.drillStart && dateStr <= blockEndStr) {
          return { phase: "drilling", drills: block.assignedDrills || [], mpu: "" };
        }
      }
    }
  } else if (blast.drillStart && blast.drillDays) {
    var drillEnd = new Date(blast.drillStart);
    drillEnd.setDate(drillEnd.getDate() + blast.drillDays - 1);
    var drillEndStr = isoDate(drillEnd);
    if (dateStr >= blast.drillStart && dateStr <= drillEndStr) {
      return { phase: "drilling", drills: blast.assignedDrills || [], mpu: "" };
    }
  }

  // Step 3d) Past blast date = completed
  if (blast.blastDate && dateStr > blast.blastDate) {
    return { phase: "completed", drills: [], mpu: "" };
  }

  // Step 3e) Has a drill start but date is before = planned
  if (blast.drillStart && dateStr >= blast.drillStart) {
    return { phase: "planned", drills: [], mpu: "" };
  }

  return null;
}

// Step 4) Get current day data
function getCurrentDay() {
  if (_days.length === 0) return null;
  return _days[_currentIdx] || null;
}

function getDayCount() {
  return _days.length;
}

function getCurrentIndex() {
  return _currentIdx;
}

// Step 5) Navigate timeline
function goToDay(idx) {
  if (idx < 0) idx = 0;
  if (idx >= _days.length) idx = _days.length - 1;
  _currentIdx = idx;
  if (_onDayChange) _onDayChange(_days[_currentIdx]);
}

function nextDay() {
  if (_currentIdx < _days.length - 1) goToDay(_currentIdx + 1);
  else pause();
}

function prevDay() {
  if (_currentIdx > 0) goToDay(_currentIdx - 1);
}

function goToStart() { goToDay(0); }
function goToEnd() { goToDay(_days.length - 1); }

// Step 6) Play / pause
function play() {
  if (_days.length === 0) return;
  _playing = true;
  if (_intervalId) clearInterval(_intervalId);
  var ms = Math.max(50, 1000 / _speed);
  _intervalId = setInterval(function() {
    if (_currentIdx < _days.length - 1) {
      nextDay();
    } else {
      pause();
    }
  }, ms);
}

function pause() {
  _playing = false;
  if (_intervalId) { clearInterval(_intervalId); _intervalId = null; }
}

function togglePlayPause() {
  if (_playing) pause(); else play();
}

function isPlaying() { return _playing; }

// Step 7) Speed control
function setSpeed(s) {
  _speed = s;
  if (_playing) {
    pause();
    play();
  }
}

function getSpeed() { return _speed; }

// Step 8) Callback registration
function onDayChange(fn) {
  _onDayChange = fn;
}

export {
  buildTimeline,
  getCurrentDay,
  getDayCount,
  getCurrentIndex,
  goToDay,
  nextDay,
  prevDay,
  goToStart,
  goToEnd,
  play,
  pause,
  togglePlayPause,
  isPlaying,
  setSpeed,
  getSpeed,
  onDayChange
};
