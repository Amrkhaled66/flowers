// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import Checker from "vite-plugin-checker";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    Checker({
      typescript: true,
    }),
    mkcert(),
  ],

  resolve: {
    alias: {
      src: "/src",
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      "/api": {
        target: "https://ballora.am-naguib.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  optimizeDeps: {
    include: ["react-leaflet", "leaflet"],
  },
});
