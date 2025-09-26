import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from '@tailwindcss/vite'
import terser from "@rollup/plugin-terser";
import react from '@vitejs/plugin-react'
// @ts-ignore
import virtualModules from "./src/plugins/virtual_modules.plugin.js";

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    checker({ typescript: true, eslint: false }),
    compression(),
    terser(),
    visualizer({ filename: "bundle-stats.html" }),
    virtualModules(),
  ],
 build: {
    minify: 'terser', 
    rollupOptions: {
      plugins: [terser()],
    },
  },
  
});
