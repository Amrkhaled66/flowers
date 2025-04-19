// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import Checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    Checker({
      typescript: true,
    }),
  ],

  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 3000,
  },
});
