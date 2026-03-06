# Use Block Depth for Drill Meter Calculations
**Date:** 2026-03-06 14:00

## Summary
Added a "Use Block Depth" checkbox per blast that derives bench height from the block's volume instead of the pattern specification. This ensures that when a solid/block is uploaded (e.g. from KAP import), the vertical depth of the block is used to calculate drill meters rather than the fixed pattern bench height.

## Problem
Previously, drill meters were always calculated using the pattern's `benchHt`:
```
depth = pattern.benchHt / sin(angle) + subdrill
drillMeters = holes * depth
```
When a block (solid) is 10m deep but the pattern spec says 12m bench height, the drill meters were overstated. The block's actual vertical extent should drive the calculation.

## Formula (when Use Block Depth is ON)
```
[1] holes = (XYArea * Pattern%) / Burden / Spacing
[2] blockBenchHt = (Volume * Pattern%) / (holes * Burden * Spacing)
    -- equivalent to: Volume / surfaceArea (bench height from block geometry)
[3] depth = blockBenchHt / sin(holeAngle) + subdrill
[4] drillMeters = holes * depth
```
Note: The divisor `(holes * burden * spacing)` converts from volume-per-hole to bench height.
Each hole covers a footprint of burden * spacing, so `volume / (holes * B * S)` gives the
average vertical height of rock above each hole.

Explosive mass also uses `blockBenchHt` instead of `pattern.benchHt` for production holes.

## Behaviour
- **Checkbox OFF (default for manual/DXF):** Uses pattern `benchHt` as before.
- **Checkbox ON (auto-enabled for KAP solid imports):** Derives bench height from block volume.
- **DXF imports:** Do not have volume data, so `useBlockDepth` defaults to OFF and pattern bench height is used.
- **KAP solid imports:** Have volume and surface area from the triangulated mesh. `useBlockDepth` is auto-enabled on merge.

## Files Modified
- `index.html` / `docs/index.html` - Added "Use Block Depth" checkbox in blast modal
- `src/dialogs/blastModal.js` - New `calcBlockHoleDepth()` function; updated `recalcHolesFromPct()`, `recalcHoleTypes()`, `collectHoleTypes()`, `saveBlast()`, `editBlast()`, `showAddBlastModal()`, `initBlastModal()`
- `src/views/blastOverview.js` - Updated pattern allocation dialog and `recalcAllocFields()` to honour block depth
- `src/io/importPreview.js` - Auto-sets `useBlockDepth: true` for solid-sourced imports

## NOTE: Decaying Vertical Deltas
For blocks where the top and bottom surfaces are not parallel (i.e. the vertical delta varies across the XY footprint), the current formula uses a **uniform average** bench height:

```
avgBenchHt = Volume / surfaceArea
```

This is accurate for blocks with flat top/bottom caps at consistent elevations. However, for blocks with **decaying or variable vertical deltas** between the top and bottom surfaces (e.g. wedge-shaped blocks, toe-of-bench irregularities, or blocks that thin out towards edges), the average bench height underestimates depth in thick areas and overestimates in thin areas.

**Future improvement:** To handle variable-depth blocks accurately, the calculation would need to:
1. Discretise the block footprint into a grid of cells
2. For each cell, compute the local top-to-bottom Z delta
3. Assign holes to cells based on the pattern grid
4. Calculate per-hole depth from the local Z delta at each hole location
5. Sum individual hole depths for total drill meters

This per-hole approach would give exact drill meters for any block geometry, but requires access to the triangulated mesh at calculation time rather than just volume/area summary values.
