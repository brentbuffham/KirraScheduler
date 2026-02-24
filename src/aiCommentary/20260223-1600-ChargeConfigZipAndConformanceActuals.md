# Charge Config ZIP Import & Conformance Actuals
**Date:** 2026-02-23 16:00

## Summary
Two features added:
1. **Kirra Charge Config ZIP Import** — The import drop zone now accepts `.zip` files containing `chargeConfigs.csv` and `products.csv` (the Kirra charging config template format). The CSV files are parsed into JSON and stored in `APP.chargeConfigs` and `APP.products`.
2. **Conformance Actuals Import** — The conformance tab now supports importing actual blast data via CSV drop or REST API query.

## Changes

### `index.html`
- **Kirra Config drop zone** — Updated file input `accept` to include `.zip` alongside `.json` and `.kirra`
- **Conformance tab** — Expanded with two import panels:
  - CSV drop zone for actuals with "Export Template" button
  - REST API/Database query panel with endpoint URL input, SQL/filter textarea, "Fetch Actuals" and "Test Connection" buttons
  - Import log panels for both methods
  - Actuals count badge on the conformance table title

### `src/io/kirraImport.js`
- **`parseKirraConfig()`** — Now routes `.zip` files to `parseKirraConfigZip()`
- **`parseKirraConfigZip()`** — Uses JSZip to extract the ZIP, finds `chargeConfigs.csv` and `products.csv`, parses both
- **`parseProductsCSV()`** — Converts row-oriented products CSV into `APP.products` array objects
- **`parseChargeConfigsCSV()`** — Converts transposed chargeConfigs CSV (rows=fields, columns=configs) into config objects with `configCode`, `configName`, `description`, `primerInterval`, and deck arrays (`inertDeck`, `coupledDeck`, `decoupledDeck`, `spacerDeck`, `primer`)
- **`parseDeckEntries()`** — Splits pipe-delimited deck entry strings into arrays
- **`parseCSVLine()`** — Robust CSV parser handling quoted fields with commas
- **KGP restore** — Now restores `APP.products` and `APP.conformance.actuals`

### `src/views/conformanceView.js` (full rewrite)
- **`renderConformance()`** — Enhanced table with planned vs actual columns when actuals are loaded. Shows BCM variance per blast.
- **`importActualsCSV(file)`** — Parses CSV with flexible column name matching (e.g., `BlastName`, `blast_name`, `name`)
- **`exportActualsTemplate()`** — Exports a CSV template pre-populated with blast names from the schedule
- **`fetchActualsFromAPI()`** — Sends a POST request with the SQL query to the configured REST endpoint, parses the JSON response into actuals
- **`testAPIConnection()`** — Quick HEAD request to verify the endpoint is reachable
- **`initConformance()`** — Wires up all UI event listeners (drop zone, buttons)

### `src/state/appState.js`
- Added `conformance.actuals: []` — array of `{ blastName, actualBCM, actualExpKg, actualBlastDate, status }`
- Added `products: []` — product library from charge config ZIP

### `src/io/exportSchedule.js`
- KGP export now includes `products` array

### `src/main.js`
- Added `initConformance()` call during initialization

## REST API Contract
The conformance REST API expects:
- **Request:** POST to endpoint URL with body `{ "query": "SQL or filter string" }`
- **Response:** JSON array of objects (or `{ rows: [...] }` / `{ data: [...] }`)
- Each row should have: `BlastName`, `ActualBCM`, `ActualExpKg`, `ActualBlastDate`, `Status` (flexible key naming)

This allows connecting to any middleware/proxy that can translate the query to an actual database call (SQL Server, PostgreSQL, Oracle, etc.).
