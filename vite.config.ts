import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (id.includes("framer-motion") || id.includes("motion-dom")) {
            return "motion-vendor";
          }

          if (id.includes("react") || id.includes("scheduler")) {
            return "react-vendor";
          }

          if (id.includes("embla-carousel-react") || id.includes("embla-carousel")) {
            return "carousel-vendor";
          }

          if (id.includes("lenis")) {
            return "scroll-vendor";
          }

          return "vendor";
        },
      },
    },
  },
});
