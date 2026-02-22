import { defineConfig } from "vite";

export default defineConfig({
  base: "/KirraScheduler/",
  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 5174,
  },
});
