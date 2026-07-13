// ============================================================
//  APP VERSION — single source of truth: package.json
// ============================================================

import { version } from "../../package.json";

// Step 1) Semver string, e.g. "1.0.12"
export var APP_VERSION = version;

// Step 2) Display form for UI badges, e.g. "v1.0.12"
export function formattedAppVersion() {
  return "v" + version;
}
