import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        additionalData: `
        @use "src/styles/_colors.scss" as *;
        @use "src/styles/mixin.scss" as *;
        `,
      },
    },
  },
});
