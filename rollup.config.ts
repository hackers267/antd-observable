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
    external: ["rxjs"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "commonjs",
    },
    plugins: [typescript()],
    external: ["rxjs"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.aio.js",
      format: "umd",
      name: "antd_observable",
      globals: {
        rxjs: "rxjs",
      },
    },
    plugins: [typescript()],
    external: ["rxjs"],
  },
]);
