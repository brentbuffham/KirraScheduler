import { defineConfig } from "vite";
import { readFileSync } from "fs";

// Step 1) package.json is the only place the app version is authored
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));

export default defineConfig({
  base: "/",
  root: ".",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [
    {
      name: "inject-app-version",
      transformIndexHtml: function(html) {
        // Step 2) Stamp %APP_VERSION% in title + header badge at dev + build time
        return html.replace(/%APP_VERSION%/g, pkg.version);
      },
    },
  ],
  // Step 3) 5174 reserved for KirraScheduler — strictPort avoids silent port drift
  server: {
    open: true,
    port: 5174,
    strictPort: true,
    host: true,
  },
});
