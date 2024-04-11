import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ... other build options
    rollupOptions: {
      external: ["@babel/runtime/helpers/*"],
    },
  },
});
