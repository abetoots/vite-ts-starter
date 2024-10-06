import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: [
      "**/__tests__/**/*.(c|m)?[jt]s",
      "**/?(*.)+(spec|test).(c|m)?[jt]s",
    ],
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/index.mts",
    },
  },
  plugins: [tsconfigPaths()],
});
