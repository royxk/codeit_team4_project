import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
    global: {},
  },

  build: {
    sourcemap: true,
  },

  plugins: [react()],
});
