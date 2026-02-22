# Crew Allocation via Gantt Drag-and-Drop

**Date:** 2026-02-22 22:00  
**Feature:** Generic crew role allocation (OP, FT, SF) with drag-and-drop on the Gantt

## Summary

Implemented a crew allocation system using generic role types (Operator, Field Technician, Shot Firer) that can be dragged from the palette onto Gantt rows to fill equipment crew requirements. Each equipment type defines how many of each role it needs, and the Gantt shows colour-coded fill badges.

## Design Decisions

- **Generic roles over named people**: OP/FT/SF chips represent role slots, not specific individuals. The existing named people array is preserved for future linking.
- **Counter model**: Each blast section (drilling/loading) tracks how many of each role are allocated. Required counts are computed from assigned equipment.
- **Crew requirements on equipment**: Each drill/MPU stores a `crewRequired` object (e.g. `{OP:1}` for drills, `{OP:1, SF:1}` for MPUs). Editable when adding new equipment.

## Files Changed

### New File
- **`src/state/crewRoles.js`** — CREW_ROLES definitions, crew computation functions (`calcDrillCrewRequired`, `calcLoadCrewRequired`), badge builder (`buildCrewBadges`), and `ensureCrewAllocated` initialiser.

### Modified Files
1. **`src/state/equipmentState.js`** — Added `crewRequired` property to all 6 drills (`{OP:1}`) and both MPUs (`{OP:1, SF:1}`).

2. **`src/ui/delayPalette.js`** — Added CREW section between MPUs and DELAYS with 3 draggable chips (OP, FT, SF). New `handleCrewDrop()` increments `blast.crewAllocated[section][role]`. Import of `CREW_ROLES` and `ensureCrewAllocated`.

3. **`src/views/ganttView.js`** — Imports crew functions. Drilling info column now shows crew badges (e.g. `OP:0/2`). Loading info column shows both OP and SF badges when MPU is assigned. Also applied to block-level drill rows.

4. **`src/ui/contextMenu.js`** — `buildDynamicEquipItems()` extended with crew removal items. Shows "Remove 1 OP (have 2)" etc. when right-clicking bars with allocated crew. Import of `CREW_ROLES` and `ensureCrewAllocated`.

5. **`src/dialogs/equipmentModal.js`** — Drill modal gains "Crew Required — OP" and "Crew Required — FT" spinners. MPU modal gains "Crew Required — OP" and "Crew Required — SF" spinners. `saveEquipment()` reads these into the `crewRequired` object.

6. **`src/views/equipmentView.js`** — Drill and MPU tables gain a "Crew Req" column showing badge summaries like `OP:1` or `OP:1 SF:1`. New helper `formatCrewRequired()`.

7. **`src/styles/main.css`** — Added `.crew-chip`, `.crew-badge`, `.crew-ok` (green), `.crew-warn` (orange), `.crew-empty` (red) styles.

## Interaction Flow

1. User drags an **OP** chip from the CREW section onto a drilling row
2. `blast.crewAllocated.drilling.OP` increments by 1
3. Gantt re-renders showing badge change: `OP:0/1` (red) -> `OP:1/1` (green)
4. To remove, right-click the bar -> "Remove 1 OP (have 1)" -> decrements back

## Build Status
- Clean build (34 modules), no errors
- No console errors at runtime
