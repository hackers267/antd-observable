import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.js",
      format: "esm",
    },
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "commonjs",
    },
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.aio.js",
      format: "umd",
      name: "antd_observable",
      globals: {
        name: "antd_observable",
      },
    },
    plugins: [typescript()],
  },
]);
