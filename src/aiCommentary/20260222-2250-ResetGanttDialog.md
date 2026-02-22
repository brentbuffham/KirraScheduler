# Reset Gantt Dialog

**Date:** 2026-02-22 22:50
**Feature:** Reset Kirra Scheduler — selective data clearing dialog

## Summary

Added a **[Reset]** button (red with warning icon) to the header toolbar. Clicking it opens a modal dialog that allows the user to selectively clear different categories of scheduler data.

## Files Changed

| File | Action | Description |
|------|--------|-------------|
| `src/dialogs/resetDialog.js` | **NEW** | Reset dialog module — builds the modal overlay, checkbox form, master toggle logic, and `performReset()` |
| `index.html` | Modified | Added `btnResetGantt` button (red `.btn-danger`) to the `.header-actions` row, before the Export button |
| `src/main.js` | Modified | Imported and initialised `initResetDialog()` |
| `src/styles/main.css` | Modified | Added Step 47 CSS block — `.reset-overlay`, `.reset-dialog`, `.reset-header`, `.reset-warning`, `.reset-form`, `.reset-option`, `.reset-actions`, animations |

## Behaviour

1. **Reset All** master checkbox — when checked, selects all child checkboxes and disables them; unchecking re-enables children.
2. Individual child checkboxes can be toggled independently; if all become checked, "Reset All" auto-checks.
3. **Reset Selected** button stays disabled until at least one checkbox is ticked.
4. Warning banner: "This action cannot be undone. Export a *Kirra Gantt Project* file first."
5. Dialog closes on: Cancel button, clicking outside the overlay, pressing Escape.

## Reset Categories

| Checkbox | Action |
|----------|--------|
| Reset All | Selects everything below |
| Remove Polygons and Volumes without Drill Holes | Filters `APP.blasts` to only keep entries with drill meters > 0 |
| Remove Designed Drill Plans | Clears `APP.blasts` and `APP.importedBlasts` entirely |
| Remove Pattern Specifications | Clears `APP.patterns` |
| Remove Charge Configurations | Clears `APP.chargeConfigs` |
| Remove Drill Fleet | Empties the `drills` array and strips `assignedDrills` from all remaining blasts |
| Remove Loading Fleet | Empties the `mpus` array and strips `assignedMPU` from all remaining blasts |

After reset, calls `recalcDependencies()` + all six render functions to refresh every view.

## Verification

- Clean build (0 errors)
- Browser test confirmed: dialog opens, "Reset All" toggles children, Cancel dismisses, no console errors
