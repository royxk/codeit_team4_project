import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
    global: {},
  },

  build: {
    sourcemap: true,
  },

  plugins: [react()],
});
