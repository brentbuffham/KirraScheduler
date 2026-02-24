# Drill Days Calculation Fix — Rig Efficiency Factor
**Date:** 2026-02-23 14:00

## Problem
After importing blast solids from a KAP file, merging them into the schedule, and assigning a pattern + drill rig, the blasts stayed at ~364 drill days instead of recalculating to realistic values.

## Root Cause
`saveBlast()` in `blastModal.js` was computing drill days as:
```
totalDailyM = ratePV * numPV
drillDays = ceil(drillMeters / totalDailyM)
```

This treated the drill rate (e.g. 20) as **meters per day per rig** and didn't apply the rig efficiency factor. The actual rate is **meters per HOUR per rig** — it must be multiplied by `rigHours * availability * utilisation` to get effective daily production.

**Verification against seed data:**
- Blast `S4_226_411`: ratePV=19, numPV=4, pvMeters=6459.4, drillDays=6
- Old formula: `4 * 19 = 76 m/day` → `ceil(6459/76) = 85 days` (WRONG)
- Fixed formula: `4 * 19 * 24 * 0.85 * 0.75 = 1162.8 m/day` → `ceil(6459/1162.8) = 6 days` (CORRECT)

The seed blasts were in Manual mode with manually set drillDays, so the bug was never noticed. It surfaced when auto-calculating from solid-derived drill meters.

## Fix Applied

### `src/dialogs/blastModal.js` (line ~249-257)
```javascript
// BEFORE (wrong):
var d65DailyM = numD65 > 0 ? rateD65 * numD65 : 0;
var pvDailyM = numPV > 0 ? ratePV * numPV : 0;

// AFTER (correct):
var effectiveHrs = APP.rigHours * APP.availability * APP.utilisation;
var d65DailyM = numD65 > 0 ? rateD65 * numD65 * effectiveHrs : 0;
var pvDailyM = numPV > 0 ? ratePV * numPV * effectiveHrs : 0;
```

### `index.html` — Form labels updated
- "D65 Rate (m/day)" → "D65 Rate (m/hr)"
- "PV271 Rate (m/day)" → "PV271 Rate (m/hr)"

### `src/io/exportSchedule.js` — CSV headers updated
- "Rate D65 (m/day)" → "Rate D65 (m/hr)"
- "Rate PV (m/day)" → "Rate PV (m/hr)"

## Consistency Check
`blockHelpers.js` was already correct — `calcBlockDays()` and `mergeBlocks()` both use `getEffectiveHours()` to multiply rates by the rig efficiency factor. Only `saveBlast()` was missing this multiplication.

## Rate Units Clarification
| Setting | Unit | Example |
|---------|------|---------|
| D65/PV Rate | m/hr per rig | 19 m/hr |
| Rig Hours | hrs/day | 24 |
| Availability | fraction | 0.85 |
| Utilisation | fraction | 0.75 |
| Effective Hours | hrs/day | 24 * 0.85 * 0.75 = 15.3 |
| Daily output (1 rig) | m/day | 19 * 15.3 = 290.7 |
| Daily output (4 rigs) | m/day | 4 * 290.7 = 1162.8 |
