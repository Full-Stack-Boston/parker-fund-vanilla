import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/*.test.js", "tests/**/*.test.js"],
    exclude: ["node_modules", "dist", "coverage"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "js/firebase-config.js",
        "js/firebase-init.js",
        "js/site-behavior.js",
        "js/particle-config.js",
      ],
      thresholds: {
        // Suite is at 100%; CI floor 95% so coverage cannot silently erode.
        statements: 95,
        branches: 95,
        functions: 95,
        lines: 95,
      },
    },
  },
});
