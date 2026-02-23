# Pattern Preparation Phase & Multi-MPU Assignment
**Date:** 2026-02-23 22:45
**Feature:** Added Pattern Preparation Gantt section, ancillary equipment, and multi-MPU loading support

## Summary

Two major features were added to the Kirra Scheduler:

### 1. Pattern Preparation Phase
A new Gantt section **PATTERN PREP** (teal) now appears before DRILLING. This represents the floor preparation work that must happen before drill rigs can move onto a pattern:

- **Excavator** pulls the walls
- **Loader** loads out the batter trims  
- **Dozer** preps the floor roughly
- **Grader** and **Roller** do final preparation

Users can assign **any or none** of these ancillary machines to each blast's prep phase via the blast modal or drag-and-drop from the palette.

### 2. Multi-MPU Assignment
The `assignedMPU` (single string) field was migrated to `assignedMPUs` (array) across the entire codebase. Multiple MPUs on one blast **proportionally reduce loading time** — the dependency engine now sums the `rateKg_per_day` of all assigned MPUs to calculate the effective load rate.

## Files Changed

### State / Data Model
- `src/state/equipmentState.js` — Added `ancillary` array (Dozer, Grader, Loader, Excavator, Roller), exported it
- `src/state/appState.js` — Changed `assignedMPU` to `assignedMPUs` (array) on all seed blasts; added `prepStart`, `prepDays`, `assignedAncillary` fields to example blasts

### Engine
- `src/engine/dependencyEngine.js` — Multi-MPU load rate calculation: sums `rateKg_per_day` from all assigned MPUs to determine loading duration

### Views
- `src/views/ganttView.js` — Added PATTERN PREP section rendering before DRILLING; `buildMPUChips()` for multi-MPU chip display; bar class mapping for "prep" bars
- `src/views/equipmentView.js` — Added `renderAncillaryTable()`, ancillary stat card, import of `ancillary` from equipment state

### Dialogs
- `src/dialogs/blastModal.js` — Added prep fields (`fPrepStart`, `fPrepDays`), ancillary multi-select (`fAssignedAncillary`), MPU changed to multi-select (`fAssignedMPUs`)
- `src/dialogs/startupDialog.js` — Added `ancillary.length = 0` to `clearSeedData()`

### UI Interactions
- `src/ui/delayPalette.js` — Added ANCILLARY palette section; `handleAncillaryDrop()` for drag-and-drop onto pattern prep rows
- `src/ui/ganttDrag.js` — Added pattern prep bar dragging support
- `src/ui/ganttResize.js` — Added pattern prep bar resize support

### CSS
- `src/styles/main.css` — Added `--accent-prep: #14b8a6`, `--gantt-prep: #14b8a6`, `.gantt-bar.prep` style, prep bar drag/resize cursors

### HTML
- `index.html` — Added Pattern Preparation section in blast modal (prep start, prep days, ancillary multi-select); changed MPU to multi-select; added Ancillary Equipment table in Equipment tab

### Migration (assignedMPU → assignedMPUs)
All 13+ files referencing `assignedMPU` were updated to use `assignedMPUs` (array) with backward compatibility pattern:
```
var mpuList = blast.assignedMPUs || (blast.assignedMPU ? [blast.assignedMPU] : []);
```

Files touched: blastModal.js, ganttView.js, equipmentView.js, resetDialog.js, delayPalette.js, contextMenu.js, crewRoles.js, exportSchedule.js, importPreview.js, kirraImport.js, kapImport.js, PlaybackTimeline.js, playbackView.js

## Multi-MPU Load Rate Logic

When multiple MPUs are assigned to a blast:
1. Sum the `rateKg_per_day` of each assigned MPU
2. Use that combined rate to calculate `loadDays = ceil(expMass / combinedRate)`
3. Falls back to `blast.loadRate` (manual override) if no MPUs assigned

Example: 2 MPUs at 100,000 kg/day each = 200,000 kg/day combined, halving the loading duration.
