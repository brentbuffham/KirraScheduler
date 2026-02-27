# 20260227-1500 — IndexedDB Full Persistence

## Summary

Extended the KIRRASCHEDULER_DB IndexedDB persistence to cover the **entire** application state — not just blasts and Gantt layout, but patterns, equipment, charge configs, products, surfaces, solids, and conformance actuals. Every state-mutating action in the app now triggers a debounced save so nothing is lost on reload.

## What Changed

### 1. schedulerDB.js — Extended State Coverage

`saveState()` now persists 4 additional data stores beyond the original 5:
- **chargeConfigs** — imported Kirra charge configurations
- **products** — product library (explosives, initiators, etc.)
- **kirraProjectSurfaces** — pit surfaces for 3D playback
- **kirraProjectSolids** — blast solids for 3D playback

`loadState()` restores all of these back into `APP` on startup.

### 2. Pattern Library — patternLibrary.js

Added `debouncedSave()` after CSV pattern import replaces `APP.patterns`.

### 3. Equipment View — equipmentView.js

Added `debouncedSave()` after:
- Mobilise equipment
- Demobilise equipment
- Remove equipment

### 4. Equipment Modal — equipmentModal.js

Added `debouncedSave()` after:
- Save new equipment (drill, MPU, ancillary, person)
- Edit existing equipment
- Duplicate equipment
- Save maintenance window

### 5. Block Edit Modal — blockEditModal.js

Added `debouncedSave()` after saving block drill assignments, meters, and rates.

### 6. Import Flows

| File | Trigger |
|---|---|
| `kirraImport.js` | After KGP project restore, after charge config JSON/ZIP import |
| `kapImport.js` | After KAP file processing complete |
| `equipmentLibrary.js` | After equipment CSV import |
| `importPreview.js` | After merging imported blasts into schedule |

### 7. Conformance — conformanceView.js

Added `debouncedSave()` after:
- CSV actuals import
- API actuals fetch (Generic REST, Snowflake, CData, OData)

## Files Modified

| File | Change |
|---|---|
| `src/state/schedulerDB.js` | Extended save/load to cover chargeConfigs, products, surfaces, solids |
| `src/views/patternLibrary.js` | debouncedSave after pattern CSV import |
| `src/views/equipmentView.js` | debouncedSave after mobilise/demobilise/remove |
| `src/views/conformanceView.js` | debouncedSave after actuals CSV import + API fetch |
| `src/dialogs/equipmentModal.js` | debouncedSave after equipment save/duplicate/maintenance |
| `src/dialogs/blockEditModal.js` | debouncedSave after block edit save |
| `src/io/kirraImport.js` | debouncedSave after KGP restore + charge config import |
| `src/io/kapImport.js` | debouncedSave after KAP processing |
| `src/io/equipmentLibrary.js` | debouncedSave after equipment CSV import |
| `src/io/importPreview.js` | debouncedSave after blast merge |

## Architecture Note

All saves use the same `debouncedSave()` function (500ms debounce). This prevents excessive IndexedDB writes when multiple mutations happen in quick succession (e.g. importing a CSV with many rows). The full state is serialised on each save — this is simple and reliable for the current data sizes.
