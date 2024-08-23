import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Inspect from "vite-plugin-inspect";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src"),
      "@root": resolve("./")
    }
  },
  plugins: [Vue(), Pages(), Layouts(), Inspect(), vueDevTools()]
});
