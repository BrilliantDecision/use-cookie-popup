import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/react-cookie-hook.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "dist/esm/index.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      external(),
      resolve({ extensions: [".ts"] }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [["@babel/preset-react", { runtime: "automatic" }]],
        extensions: [".ts", ".jsx"],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
