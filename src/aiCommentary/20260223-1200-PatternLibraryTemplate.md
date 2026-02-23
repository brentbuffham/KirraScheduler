# Pattern Library Template - Export & Import
**Date:** 2026-02-23 12:00

## Summary
Added the ability to export a blank Pattern Library CSV template that people can fill in with their site-specific drill & blast patterns, and import the completed CSV back into the scheduler.

## What Changed

### `src/views/patternLibrary.js`
- Added `exportPatternTemplate()` — generates a blank CSV with headers, commented instructions, and 4 example rows (WASTE, ORE, PRESPLIT, YELLOW)
- Added `exportPatternLibrary()` — exports the current `APP.patterns` as a filled CSV
- Added `importPatternCSV(file)` — reads a CSV file, validates columns and types, and replaces `APP.patterns` with imported data
- Added `initPatternLibrary()` — wires up the three new buttons and the hidden file input
- Added empty-state message when no patterns are loaded
- Added pattern count badge display

### `index.html`
- Pattern Library tab header now has 4 buttons: **Export Template**, **Export Library**, **Import Patterns**, and **Add Pattern**
- Hidden file input `#patternFileInput` accepts `.csv` files
- Pattern count badge `#patternCount` shows how many patterns are loaded

### `src/io/exportSchedule.js`
- Import menu now includes **Pattern Library Template (.csv)** and **Pattern Library (.csv)** options separated by a divider
- Both are wired to the functions exported from `patternLibrary.js`

### `src/main.js`
- Added `initPatternLibrary()` call to the startup sequence

## CSV Template Format
```
# Kirra Scheduler - Pattern Library Template
# Lines starting with # are ignored on import.
Pattern ID,Bench Height (m),Diameter (mm),Powder Factor (kg/bcm),Burden (m),Spacing (m),Sub-drill (m),Stemming (m),Type
EXAMPLE-W01,12,229,0.7,7.1,8.2,1.5,4.0,WASTE
EXAMPLE-O01,12,229,1.5,4.85,5.6,1.5,4.0,ORE
EXAMPLE-PS01,12,127,0.6,1.0,1.6,0.6,2.2,PRESPLIT
EXAMPLE-Y01,10,165,1.1,5.65,6.55,1.5,3.8,YELLOW
```

## Valid Pattern Types
- `WASTE` — waste rock patterns (lower PF)
- `YELLOW` — yellow zone / transition patterns
- `ORE` — ore patterns (higher PF)
- `PRESPLIT` — presplit / trim patterns (small diameter)

## User Workflow
1. Click **Export Template** to download `KirraPatternTemplate.csv`
2. Open in Excel / Google Sheets
3. Delete the EXAMPLE rows
4. Fill in site patterns (one row per pattern)
5. Save as CSV
6. Click **Import Patterns** to load the filled CSV
