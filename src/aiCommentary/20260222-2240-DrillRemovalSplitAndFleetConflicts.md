# 2026-02-22 22:40 — Drill Removal Split & Fleet Conflict Detection

## Overview

Implemented two related features:
1. **Per-day drill removal with auto-split** — Right-click a drill bar on a specific date to pull a rig off that blast from that date onward. The blast auto-splits into blocks, redistributing meters.
2. **Fleet conflict detection** — Detects when a drill rig is double-booked across overlapping blasts and shows visual warnings (red hatching on bars, CONFLICT badge in info column).

## Files Created

### `src/engine/fleetConflicts.js` (NEW)
- `buildDailyDrillUsage()` — Builds a map of drillId -> date -> [blastNames] across all blasts (supports blocks).
- `detectFleetConflicts()` — Returns an array of conflicts where a drill is used on 2+ blasts on the same day.
- `detectTypeOverAllocation()` — Per-type daily count vs fleet size (e.g., 5 PV271s used but only 4 available).
- `buildConflictCellSet()` — Returns a quick-lookup set of "blastName|date" entries for the Gantt renderer.

## Files Modified

### `src/engine/blockHelpers.js`
- Added `splitAndRemoveDrill(blast, drillId, fromDate, blockIdx)` (Step 9)
  - For non-block blasts: Creates block A (all drills, meters up to split date) + block B (remaining drills minus removed one, remaining meters → recalculated → longer)
  - For block blasts: Splits the target block at the date, removes the drill from the second part
  - Correctly handles edge cases: removing from first/last day, already-split blasts
- Exported the new function

### `src/ui/contextMenu.js`
- `showBarCtxMenu()` now accepts a `clickDate` parameter (6th arg), stored as `APP.ctxClickDate`
- `buildDynamicEquipItems()` enhanced:
  - Existing "Remove [drill] entirely" items preserved
  - New "Remove from [date] onward" section added when:
    - Click date is available (`APP.ctxClickDate`)
    - More than 1 drill is assigned (no point splitting with 1 drill)
    - Not the first or last day of the range
  - Each item calls `removeDrillFromDate()` which delegates to `splitAndRemoveDrill()`
- Added helper functions:
  - `getDrillRange(blast, blockIdx)` — returns start/end dates for drill phase
  - `removeDrillFromDate(blast, drillId, fromDate, blockIdx)` — orchestrates split + recalc + re-render

### `src/views/ganttView.js`
- Imported `buildConflictCellSet` from fleetConflicts.js
- Computes `_conflictCells` once per render (Step 1d-post)
- Bar context menu handler now extracts `data-tt-date` from the clicked bar and passes it to `showBarCtxMenu()`
- Each drill cell checks for conflicts and renders:
  - Red hatched overlay (`<div class="fleet-conflict-indicator">`) on the bar itself
  - Diagonal stripe background on the cell
- Info column shows `⚠ CONFLICT` badge when any day of the blast's drilling range has a fleet conflict

### `src/styles/main.css`
- Added Step 45: `.fleet-conflict-indicator` — red diagonal hatching overlay on bars
- Added `.fleet-conflict-badge` — inline badge for the info column

## How the Split Works

**Scenario:** Blast S4_226_411 has 4 PV271 drills, 6,459m to drill, starts Feb 28, takes ~5 days.

**User action:** Right-click on the drill bar on March 3rd → "Pull PV271-02 from 2026-03-03"

**Result:**
- **Block A:** Feb 28 – Mar 2 (3 days), all 4 drills, ~1,224m drilled (proportional)
- **Block B:** Mar 3 onward, 3 drills (PV271-01, PV271-03, PV271-04), ~5,235m remaining
- Block B takes longer because fewer drills are doing the remaining work
- This extends the overall timeline naturally

## Fleet Conflict Detection

The system scans all blasts and builds a daily usage map. When a specific drill rig (e.g., PV271-03) is assigned to two different blasts that overlap in time, both blasts' Gantt rows show:
- Red diagonal hatching on the overlapping cells
- A "⚠ CONFLICT" badge in the info column

This gives schedulers immediate visual feedback when they over-allocate their fleet.

## Drag-and-Drop Equipment Return (Follow-Up)

After the initial implementation, a drag-and-drop workflow was added for unassigning equipment:

### Draggable Chips in the Info Column
- Each drill ID in the info column is now a small, individually draggable cyan chip (`gantt-drill-chip`)
- Each MPU ID in the loading info column is a small, draggable orange chip (`gantt-mpu-chip`)
- Chips carry `data-blast-idx` and `data-block-idx` to identify their source

### Three Drag Destinations
1. **Drop on Palette** → Unassigns the drill/MPU from the blast (palette glows green when accepting)
2. **Drop on a different blast row** → Reassigns the equipment between blasts (e.g., drag PV271-02 from S4_226_411 to S4_226_413)
3. **Drop on same blast** → No-op (ignored)

### Files Modified (Follow-Up)
- `src/views/ganttView.js` — Added `buildDrillChips()` and `buildMPUChip()` helpers, replaced plain text IDs with draggable chips, attached dragstart/dragend listeners
- `src/ui/delayPalette.js` — Added `initPaletteReturnTarget()` (drop handler on palette), `handleDrillReturn()`, `handleMPUReturn()`, `handleDrillReassign()`, `handleMPUReassign()`
- `src/styles/main.css` — Added Step 46: `.gantt-drill-chip`, `.gantt-mpu-chip`, `.palette-drop-active` styles

## Testing

1. Right-click any drill bar mid-schedule → see "Pull [drill] from [date]" options
2. Click to split → blast becomes two blocks with proper meter redistribution
3. Check info column for CONFLICT badges on rows where drills are double-booked
4. Drag a drill chip from the info column back to the DRILLS palette → drill unassigned
5. Drag a drill chip from one blast row to another → drill reassigned
6. Drag an MPU chip back to the MPUS palette → MPU unassigned
7. No console errors
