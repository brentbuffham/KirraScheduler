# KAP Blast Solids Import — Volume Computation & Blast Creation
**Date:** 2026-02-23 13:30

## Problem
When importing a `.kap` file that contained a pit surface and 19 extruded blast solids (named as blasts like `S4_226_401` through `S4_226_414`, `PRESPLIT-A/B/C/D`):
1. **Blast solids were not detected** — all 20 entries in `surfaces.json` were treated uniformly as display-only pit surfaces
2. **No blast entries were created** from the solids — they never appeared in the blast list
3. **No volume was computed** from the closed triangulated mesh geometry
4. **The blast modal couldn't pull solid volume** when adding a blast manually
5. **Import preview didn't show volume/area** — and merge didn't carry volume through

## Root Cause
The KAP file's `surfaces.json` contains both pit surfaces and extruded blast solids in the same array. The old `processSurfaces()` treated every entry as a display surface for 3D playback. There was no logic to:
- Distinguish blast solids from pit surfaces
- Compute mesh volume from the triangulated geometry
- Create `importedBlasts` entries for scheduling

## KAP File Structure Observed
```
manifest.json     — 20 surfaces, 0 holes, 0 drawings, 138 charging, 9 configs
layers.json       — PIT-SURFACE layer + BLAST-SOLIDS layer (with entity IDs)
surfaces.json     — 1 pit surface + 19 EXTRUDED_ blast solids (80MB, vertex-per-tri)
charging.json     — 138 hole charging records for S4_214_410P
configs.json      — 9 charge configurations
products.json     — 20 explosive/initiator products
```

Each blast solid has:
- `id` starting with `EXTRUDED_`
- `layerId` matching the BLAST-SOLIDS layer
- `meshBounds` with minZ/maxZ giving bench height (e.g. 226→238 = 12m)
- `triangles` in vertex-per-tri format: `{vertices: [{x,y,z}, {x,y,z}, {x,y,z}]}`

## Fix Applied

### `src/io/kapImport.js` — Major rewrite
1. **Parse `layers.json` first** to identify BLAST-SOLIDS layer IDs
2. **Detect blast solids** via two methods:
   - Layer membership (layerId matches BLAST-SOLIDS layer)
   - ID prefix (`EXTRUDED_`)
3. **Compute mesh volume** using the signed tetrahedron method (divergence theorem):
   - Translates coordinates to local centroid origin for float precision with large UTM values
   - `V = |Σ (v0 · (v1 × v2)) / 6|` for each triangle
4. **Derive bench height** from `meshBounds.maxZ - meshBounds.minZ`
5. **Estimate surface area** from `volume / benchHeight`
6. **Create `importedBlasts` entries** with computed volume, area, bench height
7. **Separate storage**: pit surfaces → `APP.kirraProjectSurfaces`, blast solids → `APP.kirraProjectSolids`
8. **Call `showImportPreview()`** so users can review and merge blast solids into the schedule
9. **New `processCharging()`** — parses charging.json to compute total explosive mass per entity from deck data

### `src/io/importPreview.js` — Enhanced merge
1. Preview table now shows: Volume, Area, Bench Height, Explosive Mass, Source type (Solid/Holes)
2. Merge now carries **volume, surfaceArea, expMass, solidBounds, solidBenchHt** to scheduled blasts
3. Both new and existing blasts get updated with solid-derived data
4. Recalculates dependencies after merge

### `src/dialogs/blastModal.js` — Auto-fill from solids
1. New `findMatchingSolid(name)` helper searches `APP.kirraProjectSolids` by blast name
2. When saving a blast, if name matches a solid: auto-fills volume and area from the solid geometry
3. Preserves `solidBounds` and `solidBenchHt` through edit cycles

## Volume Computation Algorithm
```
function computeMeshVolume(triangles, bounds):
    // Translate to local origin for float precision (UTM coords ~477000, ~6770000)
    ox, oy, oz = bounds centroid

    for each triangle (v0, v1, v2):
        // Translate to local
        v0' = v0 - origin, v1' = v1 - origin, v2' = v2 - origin
        // Signed volume of tetrahedron with coordinate origin
        volume += (v0' · (v1' × v2')) / 6

    return |volume|
```

## Data Flow After Fix
```
KAP Import → processSurfaces()
  ├─ Pit surfaces → APP.kirraProjectSurfaces (3D display)
  └─ Blast solids → APP.kirraProjectSolids (3D display)
                   → APP.importedBlasts (with volume, area, benchHt)
                     → showImportPreview() → user clicks Merge
                       → APP.blasts (scheduled with volume)
                         → Gantt, Blast Overview, Forecasts
```
