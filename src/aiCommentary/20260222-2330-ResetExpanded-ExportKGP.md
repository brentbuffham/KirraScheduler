# Reset Dialog Expansion + Export .kgp/.csv

**Date:** 2026-02-22 23:30

## Changes

### 1. Reset Dialog — New Checkboxes

Added 7 new reset categories (13 total, up from 6):

| Section | New Checkbox | Action |
|---------|-------------|--------|
| Equipment | Remove Maintenance Windows | Clears `drill.maintenance[]` and `mpu.maintenance[]` (keeps the rigs) |
| Equipment | Remove Personnel Roster | Empties `people[]` array |
| Scheduling | Remove All Delays | Strips `blast.delays[]` from every blast |
| Scheduling | Remove Drill Blocks / Splits | Deletes `blast.drillBlocks`, merges assigned drills back to blast level |
| Scheduling | Remove Crew Allocations | Deletes `blast.crewAllocated` from every blast |
| Targets & Settings | Reset Conformance Targets | Zeros out `APP.conformance` |
| Targets & Settings | Reset Global Settings to Defaults | Restores rigHours=24, availability=0.85, utilisation=0.75, default deps |

### 2. Export — .kgp and .csv

Replaced the single JSON export with a dropdown menu offering two formats:

**Kirra Gantt Project (.kgp)**
- JSON file with `format: "KirraGanttProject"` header
- Contains: settings, blasts, patterns, chargeConfigs, drills, mpus, people, conformance
- Can be re-imported to fully restore scheduler state

**Schedule Spreadsheet (.csv)**
- 27-column CSV of all blasts
- Columns: Blast Name, Status, Mode, Pattern, Area, Volume, ExpMass, Meters, Dates, Drills, MPU, Rates, Dependencies
- Opens directly in Excel / Google Sheets

### 3. .kgp Import Support

Added `parseKGPProject()` to `kirraImport.js`:
- Detects `.kgp` extension and `format: "KirraGanttProject"` header
- Restores all state: settings, blasts, patterns, drills, mpus, people, conformance
- Syncs toolbar inputs after restore
- Falls back to standard Kirra project import if format doesn't match

Updated `index.html` drop zone to accept `.kgp` files alongside `.kirra` and `.json`.

## Files Modified

| File | Changes |
|------|---------|
| `src/dialogs/resetDialog.js` | Added 7 new checkboxes and their performReset handlers |
| `src/io/exportSchedule.js` | Rewritten: exportKGP(), exportCSV(), showExportMenu() dropdown |
| `src/io/kirraImport.js` | Added parseKGPProject() for .kgp restore, routes .kgp files automatically |
| `src/styles/main.css` | Added Step 48: .export-menu dropdown styling |
| `index.html` | Updated drop zone to accept .kgp, updated description text |
