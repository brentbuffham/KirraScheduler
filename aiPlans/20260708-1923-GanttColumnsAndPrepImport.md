# Gantt Resizable Split Columns + Prep-on-Import

Date: 2026-07-08 19:23

## Goals (from user)
1. Optionally populate the **Pattern Prep** Gantt section when blasts are imported.
2. Split the single Gantt "Blast" + "Info" sticky columns into discrete,
   **resizable** columns: `[grip] [edit] [NAME] [EQUIPMENT] [QTY (m/kg/bcm)]`.

## Design decisions
- **Prep on import**: opt-in via a checkbox in the Import Preview footer
  ("Add Pattern Prep") plus a "Prep days" number input (default 2). On merge,
  for each new/updated blast that has a drillStart, set `prepDays` and
  `prepStart = drillStart - prepDays` (prep finishes the day before drilling).
  Does NOT auto-assign ancillary equipment (user assigns later). If a blast
  already has prep, it is left untouched.
- **Columns**: driven by a small new module `src/ui/ganttColumns.js`.
  - Column defs (key, label, default width, min width):
    `handle(24)`, `edit(58)`, `name(150)`, `equip(120)`, `value(96)`.
  - Widths persisted in `localStorage` ("kirraGanttColW"); merged with defaults.
  - `getColumns()`, `getLeftOffset(i)`, `getTotalWidth()`, `setWidth(key,w)`,
    `applyColumnLayout()` (re-applies left/width inline to all `[data-col-key]`
    cells without a full re-render — used during live drag).
  - Every sticky `<td>`/`<th>` carries `class="gantt-sticky"`, `data-col-key`,
    and the row's `data-ctx-idx/section/block` so existing handlers keep working.
- **Resize**: a `.gantt-col-resize` grabber on each sticky header cell. Drag
  updates the width live via `applyColumnLayout()`, then `mouseup` persists +
  calls `renderGantt()` once to settle connectors.
- **colspan** for section-header rows becomes `dates.length + numCols`.

## Touch points
- `src/ui/ganttColumns.js` (new)
- `src/views/ganttView.js` (header + row rendering, colspan, handler selectors)
- `src/styles/main.css` (generic `.gantt-sticky`, resize grabber; retire fixed
  `.sticky-col`/`.sticky-col-2` left offsets)
- `src/ui/ganttReorder.js`, `src/ui/ganttSelect.js`, `src/ui/contextMenu.js`
  (selectors: `td.sticky-col`/`.sticky-col-2` -> `td.gantt-sticky`)
- `src/io/importPreview.js` + `index.html` (prep checkbox + days input)

## Backward-compat notes
- Reorder grip lives in the `handle` column; every sticky cell gets the ctx data
  attrs so `grip.closest("td.gantt-sticky")` resolves the blast index.
- Old projects still load; column widths are UI-only (localStorage), not in KGP.
