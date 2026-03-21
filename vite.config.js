import { defineConfig } from "vite";

export default defineConfig({
  base: "/KirraScheduler/",
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
