# Equipment Edit & Duplicate Buttons
**Date:** 2026-02-23 15:30

## Summary
Added **Edit** (pencil icon) and **Duplicate** (copy icon) action buttons to all equipment tables: Drill Rigs, MPUs, Ancillary Equipment, and Personnel.

## Changes

### `src/views/equipmentView.js`
- **`buildEquipActions()`** — Added two new buttons before the existing Mob/Demob and Remove buttons:
  - Edit button (`.btn-edit-equip`) with pencil SVG icon
  - Duplicate button (`.btn-duplicate-equip`) with copy SVG icon
  - Mob/Demob buttons are now conditionally hidden for `person` type since personnel don't have equipment status
- **`attachEquipActionListeners()`** — Added click handlers for `.btn-edit-equip` and `.btn-duplicate-equip` that delegate to `showEditEquipModal()` and `duplicateEquip()` respectively
- **`renderPeopleTable()`** — Added an "Actions" column with Edit, Duplicate, and Remove buttons (previously had no actions)
- Imported `showEditEquipModal` and `duplicateEquip` from `equipmentModal.js`

### `src/dialogs/equipmentModal.js`
- **Refactored form builders** — Extracted `buildDrillForm(d)`, `buildMPUForm(m)`, `buildAncillaryForm(a)`, and `buildPersonForm(p)` as reusable HTML builders that accept an optional existing item to pre-fill fields
- **`showEditEquipModal(eqType, equipId)`** — New function that finds the item in its collection and opens the modal pre-filled with all current values
- **`duplicateEquip(eqType, equipId)`** — New function that deep-clones the item, assigns a unique ID (e.g. `D65-01-C1`), appends "(Copy)" to the name, resets status and maintenance, pushes to the collection, and immediately opens the edit modal so the user can rename
- **`saveEquipment()`** — Enhanced to support both **add** (push new) and **edit** (update in-place) modes based on `editingEquipIdx`
- **`propagateIdRename(eqType, oldId, newId)`** — New helper that updates all `APP.blasts` assignment arrays when an equipment ID is renamed (handles `assignedDrills`, `assignedMPUs`, `assignedAncillary`)
- **Duplicate ID validation** — `saveEquipment()` now checks for conflicting IDs before saving
- **Ancillary Add modal** — `showAddAncillaryModal()` added and wired to `btnAddAncillary` button (was previously missing)
- Imported `APP` from appState and `ancillary` from equipmentState

## Flow
1. **Edit:** Click pencil icon → Modal opens with title "Edit [Type]: [ID]" → All fields pre-filled → Change any field (including ID/Name) → Save updates in-place + renames propagated to blasts
2. **Duplicate:** Click copy icon → Item cloned with "-C1" suffix and "(Copy)" name → Edit modal opens immediately → User renames and saves
