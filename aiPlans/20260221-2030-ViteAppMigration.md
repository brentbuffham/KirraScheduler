# Blast Scheduler — Vite App Migration Plan

**Date:** 2026-02-21 20:30
**Status:** Complete

## Overview

Migrated the monolithic `blast-scheduler.html` (2542 lines) into a modular Vite application with ES module imports and a clean file structure.

## File Structure

```
KirraScheduler/
├── index.html              — HTML shell (no inline JS/CSS)
├── package.json            — Vite dependency
├── vite.config.js          — Dev server + build config
├── src/
│   ├── main.js             — Entry point, wires all modules
│   ├── styles/
│   │   └── main.css        — All CSS (extracted from <style> block)
│   ├── state/
│   │   └── appState.js     — APP state object, patterns, initial blast data
│   ├── utils/
│   │   └── dateUtils.js    — formatNum, formatDate, addDays, isoDate, etc.
│   ├── engine/
│   │   └── dependencyEngine.js — getBlastDeps(), recalcDependencies()
│   ├── ui/
│   │   ├── tabs.js         — Tab navigation click handlers
│   │   ├── modal.js        — openModal(), closeModal()
│   │   ├── contextMenu.js  — Right-click context menu for blast rows
│   │   └── tooltip.js      — Gantt bar hover tooltips
│   ├── views/
│   │   ├── ganttView.js    — Gantt chart rendering (largest module)
│   │   ├── blastOverview.js — Blast overview table + stats
│   │   ├── patternLibrary.js — Pattern card grid
│   │   ├── forecastView.js — Weekly explosive forecast
│   │   └── conformanceView.js — Monthly conformance tracking
│   ├── dialogs/
│   │   └── blastModal.js   — Add/Edit blast modal form logic
│   └── io/
│       ├── dropZone.js     — Generic file drag-and-drop handler
│       ├── dxfImport.js    — DXF polygon file parsing
│       ├── kirraImport.js  — Kirra charge config + project import
│       ├── importPreview.js — Preview table for imported blasts
│       └── exportSchedule.js — JSON export
```

## Key Decisions

1. **No frameworks** — kept as vanilla JS to match original approach
2. **ES modules** — all files use `import`/`export` instead of globals
3. **CSS extracted** — all styles moved to `src/styles/main.css`, imported by `main.js`
4. **No inline event handlers** — all `onclick=` replaced with `addEventListener()` in JS
5. **APP state singleton** — shared via ES module import from `state/appState.js`
6. **String concatenation** — used `+` operator for HTML building per project conventions

## Module Dependency Graph

```
main.js
 ├── styles/main.css
 ├── engine/dependencyEngine.js → state/appState.js, utils/dateUtils.js
 ├── ui/tabs.js → views/*.js
 ├── ui/contextMenu.js → dialogs/blastModal.js, views/ganttView.js
 ├── dialogs/blastModal.js → state/appState.js, ui/modal.js, engine/*
 ├── views/ganttView.js → state/appState.js, engine/*, ui/tooltip.js, ui/contextMenu.js
 ├── views/blastOverview.js → state/appState.js, dialogs/blastModal.js
 ├── views/patternLibrary.js → state/appState.js
 ├── views/forecastView.js → state/appState.js
 ├── views/conformanceView.js → state/appState.js
 ├── io/dropZone.js
 ├── io/dxfImport.js → io/importPreview.js
 ├── io/kirraImport.js → views/forecastView.js, io/importPreview.js
 ├── io/importPreview.js → state/appState.js, views/*.js
 └── io/exportSchedule.js → state/appState.js
```

## Build Output

- 22 modules transformed
- CSS: 15.60 kB (3.51 kB gzipped)
- JS: 43.69 kB (11.03 kB gzipped)
- HTML: 16.89 kB (4.12 kB gzipped)
- Build time: ~200ms
