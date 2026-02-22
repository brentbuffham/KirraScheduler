# Equipment Management, Delay Blocks, and Gantt Resize Handles

**Date:** 2026-02-22 21:27 AEST  
**Session:** Equipment Actions, Drag-and-Drop Delays, Bar Resize with Rate Adjustment

---

## Summary

Three major feature sets were implemented in the Kirra Scheduler:

### 1. Equipment Management (Mobilise / Demobilise / Add / Remove)

**Files Modified:**
- `src/state/equipmentState.js` — Added `mobiliseEquipment()`, `demobiliseEquipment()`, `removeEquipment()`, `setEquipmentStatus()` functions
- `src/views/equipmentView.js` — Added Actions column to Drill and MPU tables with Mob/Demob/Remove buttons
- `src/styles/main.css` — Added `.btn-equip-action`, `.badge-demobilised`, `.badge-mobilised` styles

**How it works:**
- Each drill rig and MPU row now has an Actions column
- Available/Mobilised equipment shows a "Demob" button
- Demobilised equipment shows a "Mob" button
- All equipment has a "Remove" (trash) button with confirmation
- Status badges update immediately: available (cyan), mobilised (green), demobilised (grey)

### 2. Gantt Delay Blocks (Drag-and-Drop)

**New Files:**
- `src/state/delayTypes.js` — Defines 9 delay types: UD, SD, SM, UM, UP, SP, UW, SW, LP with colors and categories
- `src/ui/delayPalette.js` — Renders the delay chip palette and handles drag-and-drop onto Gantt

**Files Modified:**
- `src/views/ganttView.js` — Renders delay blocks as overlay bars on Gantt cells
- `src/ui/contextMenu.js` — Added delay-specific right-click menu items (Extend, Shrink, Remove Delay)
- `src/ui/ganttDrag.js` — Skip drag-to-move for resize handles and delay bars
- `index.html` — Added delay palette container, delay-specific context menu items, `ctx-general`/`ctx-delay-only` classes
- `src/styles/main.css` — Delay palette, delay chip, delay bar, drop target styles

**Delay Types:**
| Code | Label | Color | Category |
|------|-------|-------|----------|
| UD | Unscheduled Down | Red | Down |
| SD | Scheduled Down | Orange | Down |
| SM | Scheduled Maintenance | Purple | Maintenance |
| UM | Unscheduled Maintenance | Pink | Maintenance |
| UP | Unscheduled Process | Cyan | Process |
| SP | Scheduled Process | Teal | Process |
| UW | Unscheduled Weather | Slate | Weather |
| SW | Scheduled Weather | Light slate | Weather |
| LP | Low People | Yellow | People |

**How it works:**
- Delay palette sits on the right side of the Gantt
- Drag a delay chip from the palette onto any Gantt cell
- Delay appears as a colored overlay bar at the bottom of the cell
- Right-click a delay bar to Extend (+1 day), Shrink (-1 day), or Remove
- Delays are stored in `blast.delays[]` array

### 3. Gantt Resize Handles (Rate Adjustment)

**New File:**
- `src/ui/ganttResize.js` — Handles mousedown/move/up for left and right edge resize

**Files Modified:**
- `src/views/ganttView.js` — Adds `.gantt-resize-handle` divs on first and last cells of each bar
- `src/styles/main.css` — Resize handle styling (invisible until hover, ew-resize cursor)

**How it works:**
- Each drill and load bar has invisible resize handles on left and right edges
- On hover, handles become subtly visible (semi-transparent white)
- Dragging the **right handle** extends or shortens the duration
- Dragging the **left handle** moves the start date and adjusts duration
- **For drill blocks:** Resizing back-calculates penetration rates (m/hr) across all assigned drills so that the total meters fit the new duration
- **For blast-level drill:** Adjusts `rateD65` / `ratePV` at the blast level
- **For loading bars:** Back-calculates the MPU `loadRate` (kg/day) to fit the explosive mass into the new duration
- **For delay bars:** Simple duration adjustment (no rate recalculation)
- Right-click context menu also works on all bar types

### 4. Bar-Level Right-Click Context Menu

**Files Modified:**
- `src/ui/contextMenu.js` — Added `showBarCtxMenu()` function, delay-specific items
- `src/views/ganttView.js` — Added `contextmenu` event listener on all `.gantt-bar` elements
- `index.html` — Context menu items now have `ctx-general` and `ctx-delay-only` classes

**How it works:**
- Right-clicking any Gantt bar (not just the sticky name column) opens the context menu
- For drill/load/blast bars: shows the standard Edit/Status/Split/Merge/Duplicate/Remove items
- For delay bars: shows Extend/Shrink/Remove Delay items
- Menu dynamically toggles visibility of item groups based on what was clicked

---

## Data Model Changes

### blast.delays (new property)
```javascript
blast.delays = [
  {
    id: "delay-1740...",
    type: "UD",        // Delay type code
    label: "Unscheduled Down",
    start: "2026-03-01",
    days: 2,
    section: "drilling" // Which Gantt section
  }
]
```

### Equipment status values (expanded)
- `"available"` — Ready for assignment (default)
- `"mobilised"` — Actively on site
- `"demobilised"` — Taken off site / unavailable

---

## Architecture Notes

- All new modules follow the existing pattern: ES6 modules with Step-numbered comments
- No template literals used (concatenation only per project rules)
- Resize handles avoid conflict with drag-to-move via early return in `ganttDrag.js`
- Delay palette uses HTML5 drag-and-drop API (dragstart/dragover/drop)
- Resize uses raw mousedown/mousemove/mouseup for pixel-level control
- Build passes cleanly (33 modules, 0 errors)
