import { defineConfig } from "vite";

export default defineConfig({
  base: "/KirraScheduler/",
  root: ".",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 5174,
  },
});
