import { defineConfig } from "vite";
import { readFileSync } from "fs";

// Expose the package.json version to the app as __APP_VERSION__ so the
// header badge stays in sync with the single source of truth.
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  base: "/",
  root: ".",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  // Step 1) 5174 reserved for KirraScheduler — strictPort avoids silent port drift
  server: {
    open: true,
    port: 5174,
    strictPort: true,
    host: true,
  },
});
