# 1.0.8 — Bulk Pattern Prep + Excavation Cycle + Excavation Dependency

Date: 2026-07-08 21:56
Author: AI agent (planning with Brent)

## Overview

Three related scheduling features:

1. **Bulk "Send all patterns to Pattern Prep"** — one click seeds a Pattern Prep
   window (default 1 day) on every blast that doesn't already have one. Triggered
   from a button by the DRILLING section header AND a right-click action. Then the
   prep bars can be dragged/resized as usual.
2. **Excavation cycle** — a new 5th phase rendered BELOW Blasting. Its duration is
   rate-driven by the assigned ancillary equipment (dozer push, twin-dozer push,
   dragline, excavators) against the blast volume (bcm). Reuses the existing
   ancillary fleet.
3. **Excavation dependency** — a 4th predecessor type: the predecessor blast's
   excavation must FINISH before the next blast can start DRILLING
   (`excavation-before-drill`).

## Decisions (confirmed with Brent)

- Prep trigger: button + right-click. Scope: all blasts, skip ones already prepped. Default 1 day.
- Excavation duration: rate-driven by assigned ancillary (volume / sum(dig rate bcm/day)).
- Excavation equipment: reuse existing `ancillary[]` (Excavator/Loader/Dozer/Dragline types).
- Excavation dependency: `excavation-before-drill`.

---

## Feature 1 — Bulk Send to Pattern Prep

### Data
- No new fields. Reuses `prepStart`, `prepDays`, `assignedAncillary`.

### Logic
- Reuse/extend `applyPrepToBlast(blast, prepDays)` in `src/io/importPreview.js`
  (lines ~165-172). It already skips blasts that have prep. Export it (or move a
  shared copy) so the Gantt toolbar/context menu can call it.
- New function `sendAllToPatternPrep(prepDays)` (default 1) that iterates
  `APP.blasts`, calls `applyPrepToBlast`, then `debouncedSave()` + `renderGantt()`.
  Anchor rule unchanged: `prepStart = drillStart - prepDays` (or `planStart`).

### UI
- Button in the DRILLING section header row in `src/views/ganttView.js`
  (`renderSection` header, ~lines 447-454) labelled "→ Prep" / "Send to Prep",
  styled as a small `.btn btn-sm` (neutral, red on hover per brand).
- Right-click item in `index.html` (`#contextMenu`) + handler in
  `src/ui/contextMenu.js` (`initContextMenu`), e.g. `ctxSendAllPrep`.

### Files
- `src/io/importPreview.js` (export helper), `src/views/ganttView.js` (button),
  `index.html` + `src/ui/contextMenu.js` (right-click).

---

## Feature 2 — Excavation Cycle

### Data model (mirror Pattern Prep pattern)
New blast fields (defaults in `src/state/appState.js` `Blast()` factory + seeds):
- `excavStart` (ISO date | null)
- `excavDays` (number, default 0 until equipment assigned)
- `assignedExcavators` (string[] of ancillary ids) — NOTE: separate from
  `assignedAncillary` (prep) so prep and excavation fleets don't collide.
- `noExcav` (bool skip flag, mirrors noDrill/noLoad/noBlast)
- `excavStartManual` (bool, set when user drags the excavation bar)

### Equipment rate
- Ancillary currently has `rateM2_per_day` (area, used by prep). Excavation moves
  VOLUME, so add `rateBCM_per_day` to each ancillary unit in
  `src/state/equipmentState.js` (dozer push / dragline / excavator dig rates).
- Duration: `excavDays = max(1, ceil(blast.volume / sum(assignedExcavators.rateBCM_per_day)))`.
  If no volume or no equipment → default 1 day (draggable).
- Compute in `dependencyEngine.js` recalc (and/or `autoCalc.js`) alongside the
  other rate-driven durations. Store back-calc rate like prep does.

### Anchor
- `excavStart` defaults to `blastDate + 1 day` (excavate after firing). Respect
  `excavStartManual` when the user drags it.

### Gantt rendering
- Add `renderSection("EXCAVATION", "var(--accent-excav)", getRange)` AFTER the
  BLASTING section in `ganttView.js` (~after line 603). Bar class `"excav"`.
- Range getter returns `[excavStart, excavStart + excavDays - 1]` when
  `excavStart && excavDays && !noExcav`.
- Info columns: assigned excavator chips + volume (bcm) + est. days.

### Drag / resize
- `src/ui/ganttDrag.js` `applyOffsetToBlast` — add `"excavation"` branch: shift
  `excavStart`, set `excavStartManual = true`.
- `src/ui/ganttResize.js` — add `"excavation"` branch: update `excavDays`
  (+ left-edge `excavStart`), back-calc excavator rate.

### Colours
- `src/styles/main.css`: add `--accent-excav` + `--gantt-excav` (pick a distinct
  brown/orange earth tone, e.g. `#a16207`), and `.gantt-bar.excav` rule.
- Playback: `PHASE_COLORS`/`PHASE_OPACITY` in `src/three/BlastGeometry.js` add
  `excav`; `getBlastPhase()` in `src/three/PlaybackTimeline.js` add an excavation
  window check (after blastDay/completed); `ACTIVE_PHASES` in
  `src/views/playbackView.js` add `excav`.

### Equipment assignment UX
- Blast modal (`index.html` + `src/dialogs/blastModal.js`): new
  `fAssignedExcavators` multi-select (filtered to Excavator/Loader/Dozer/Dragline
  ancillary types) + save/load.
- Palette drop (`src/ui/delayPalette.js`): allow ancillary drop onto
  `section === "excavation"` → `assignedExcavators`.

### Persistence / IO
- `src/io/exportSchedule.js` (KGP + CSV columns), `src/io/kirraImport.js`,
  `src/io/kapImport.js`, `src/io/importPreview.js` (restore new fields).
- `src/views/blastCalendar.js` `SECTIONS`, `src/io/calendarExport.js` phases.

### Connectors (optional, phase 2)
- `src/ui/ganttConnectors.js`: blast→excavation arrow.

---

## Feature 3 — Excavation-before-drill dependency

### Engine (`src/engine/dependencyEngine.js`)
- `getBlastDeps()` — allow `predType: "excavation-before-drill"`.
- New helper `getExcavEnd(blast)` → `excavStart + excavDays - 1` (or null).
- In `recalcDependencies()` drill-constraint block (~lines 102-116): if predType is
  excavation-before-drill and `drillStart <= predExcavEnd`, push `drillStart` to
  `predExcavEnd + 1` (this one SHOULD auto-shift, not just warn, since the next
  pattern physically can't be drilled until the previous is dug out). Then cascade
  load/blast/excav as normal. Also set a `_depWarning` if manual override violates.
- `autoSchedule()` (~lines 337-350): honour excavation-before-drill when stacking.

### UI
- `index.html` `#fDepPredType` — new `<option value="excavation-before-drill">`.
- `src/dialogs/blastModal.js` save/load of predType (already handled generically).

---

## Rollout order (todos)

1. Feature 1 (bulk prep) — smallest, self-contained.
2. Feature 2 data model + Gantt section + colours (visible skeleton).
3. Feature 2 rate-driven duration + equipment assignment + drag/resize.
4. Feature 2 playback + IO persistence.
5. Feature 3 dependency type + engine + UI.
6. Version bump to 1.0.8, test, commit.

## Notes / conventions
- var (no let/const), no template literals, `"a " + v` concatenation.
- Add `Step #)` comments.
- Reuse FloatingDialog / existing form helpers; no bespoke dialogs.
- Do not transform Z / scale 3D.
