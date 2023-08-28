// import resolve from "@rollup/plugin-node-resolve";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import postcss from "rollup-plugin-postcss";
import postcss from 'rollup-plugin-postcss-modules'
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sizes from 'rollup-plugin-sizes';

import { defineConfig } from 'rollup';

// const packageJson = require("./package.json");
import  packageJson from "./package.json" assert { type: 'json'}

export default defineConfig([
  {
    input: "src/index.ts",
    // external: ['react'],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser({
        maxWorkers: 4
      }),
      sizes(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]);