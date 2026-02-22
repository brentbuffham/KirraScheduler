# Drill & MPU Drag-and-Drop Palette

**Date:** 2026-02-22 21:45  
**Feature:** Equipment drag-and-drop palette for Gantt scheduling

## Summary

Extended the existing delay-only palette to a three-section **Gantt Palette** that supports drag-and-drop for:
- **Drills** — drag a drill rig onto a DRILLING row to assign it to a blast/block
- **MPUs** — drag an MPU onto a LOADING row to assign it to a blast
- **Delays** — existing delay chip drag-and-drop (unchanged)

## Changes Made

### Modified Files

1. **`src/ui/delayPalette.js`** — Complete rewrite to support three collapsible sections:
   - Renders drill fleet from `equipmentState.drills` with status-aware styling (demobilised = greyed out, not draggable)
   - Renders MPU fleet from `equipmentState.mpus` with same status logic
   - Renders delay types (unchanged from before)
   - Collapsible section headers with arrow toggles
   - Drop handler routes by type: `drill:ID`, `mpu:ID`, `delay:CODE`
   - Drill drops add to `blast.assignedDrills` (or `block.assignedDrills` for block rows)
   - MPU drops set `blast.assignedMPU`
   - Toast feedback on successful/invalid drops

2. **`src/ui/contextMenu.js`** — Added dynamic equipment removal items:
   - `buildDynamicEquipItems()` generates "Remove [drillId]" items for each assigned drill
   - Shows "Remove [mpuId]" for the loading section when an MPU is assigned
   - Dynamic items are cleaned up on each menu open to prevent stale entries
   - `removeDrillFromBlast()` handles both blast-level and block-level removal

3. **`src/views/ganttView.js`** — Two additions:
   - Loading section now shows assigned MPU ID in the sticky info column
   - `renderDelayPalette()` is called at the end of `renderGantt()` so palette refreshes with equipment state

4. **`src/styles/main.css`** — New styles:
   - Palette section headers with collapsible arrows
   - Generic `palette-chip` styling (drill/MPU chips)
   - `palette-chip-icon` colored badges
   - Toast feedback (`.drop-feedback`, `.drop-feedback-ok`, `.drop-feedback-warn`)
   - Context menu label styling (`.ctx-label`)

### Unchanged Files
- `index.html` — No HTML changes needed, palette container ID unchanged
- `src/main.js` — No changes, already initialises the palette
- `src/state/equipmentState.js` — No changes, already has drill/mpu arrays

## Interaction Flow

1. User drags a drill chip (e.g., "D65-01") from the palette
2. Drops it onto a DRILLING row in the Gantt
3. System adds "D65-01" to `blast.assignedDrills[]`
4. Sets default pen rate from the drill's `rateM_per_day`
5. Recalculates dependencies and re-renders Gantt
6. Toast shows "D65-01 assigned to S4_214_410P_V2"

For removal:
1. Right-click on a drilling bar → context menu shows "Remove D65-01"
2. Click to unassign → removes from `assignedDrills`, recalculates

## Build Status
- Clean build, no errors
- No console errors at runtime
