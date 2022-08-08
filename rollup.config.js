import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
    },
    plugins: [
      typescript({
        compilerOptions: { outDir: "dist/esm", declarationDir: "dist/esm" },
      }),
      commonjs(),
    ],
    external: ["rxjs"],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
    },
    plugins: [
      typescript({
        compilerOptions: { outDir: "dist/cjs", declarationDir: "dist/cjs" },
      }),
      commonjs(),
    ],
    external: ["rxjs"],
  },
];
