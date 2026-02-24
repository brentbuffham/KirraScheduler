# Conformance Actuals — Multi-Provider Query Support
**Date:** 2026-02-23 16:30

## Summary
The conformance tab's "Query Actuals" panel now supports four data providers:
1. **Generic REST API** — POST/GET to any endpoint
2. **Snowflake** — Direct Snowflake SQL API (v2/statements)
3. **CData Connect Cloud** — OData queries via CData proxy
4. **OData v4** — Standard OData v4 service

## UI Changes (`index.html`)
- **Provider dropdown** with 4 options that dynamically shows/hides provider-specific fields
- **Auth Token** field (always visible) — Bearer for Snowflake/OData/Generic, Basic (email:PAT) for CData
- **Snowflake fields** — Database, Schema, Warehouse (shown when Snowflake selected)
- **CData fields** — Workspace, Connection/Table (shown when CData selected)
- **OData fields** — Entity Set name (shown when OData selected)
- Placeholder text and labels update contextually per provider

## Provider Request Formats (`conformanceView.js`)

### Generic REST
- POST `{ "query": "SQL..." }` to URL if query provided, GET otherwise
- Auth: `Authorization: Bearer <token>`
- Response: `[{...}]` or `{ rows/data/results: [...] }`

### Snowflake SQL API
- POST to `<account-url>/api/v2/statements`
- Body: `{ "statement": "SQL...", "database": "...", "schema": "...", "warehouse": "...", "timeout": 60 }`
- Auth: `Authorization: Bearer <jwt>`, `X-Snowflake-Authorization-Token-Type: KEYPAIR_JWT`
- Response: `{ data: [[v,v,...], ...], resultSetMetaData: { rowType: [{name}...] } }`
- Array-of-arrays is converted to array-of-objects using column metadata

### CData Connect Cloud
- GET `<url>/api/odata/<workspace>/<connection.table>?$filter=...`
- Auth: `Authorization: Basic <base64(email:pat)>`
- Response: OData `{ value: [...] }`

### OData v4
- GET `<serviceRoot>/<EntitySet>?$filter=...`
- Auth: `Authorization: Bearer <token>` (optional)
- Response: OData `{ value: [...] }` or legacy `{ d: { results: [...] } }`

## Shared Response Processing
All providers route to `processActualsRows()` which flexibly matches column names:
- BlastName / blastName / blast_name / BLASTNAME / name
- ActualBCM / actualBCM / actual_bcm / ACTUALBCM / bcm / volume
- ActualExpKg / actualExpKg / actual_exp_kg / ACTUALEXPKG / expKg
- ActualBlastDate / actualBlastDate / actual_blast_date / ACTUALBLASTDATE
- Status / status / blast_status / STATUS

This means the database columns don't need to match exactly — the app auto-detects common naming conventions.
