import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // Output directory for production build
  },
  plugins: [react()],
  base: "/cuisins/", // Base public path for GitHub Pages deployment hmm
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Proper path alias resolution
    },
  },
});
