import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-polyfill-node";
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

  plugins: [react(), nodePolyfills()],
});
