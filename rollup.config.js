/*
 * @Author: Robben Wadlay
 * @Date: 2023-10-09 17:18:51
 * @Description: rollup config file
 * @LastEditors: Robben Wadlay
 * @LastEditTime: 2023-10-11 11:35:44
 */
import { terser } from 'rollup-plugin-terser';
export default {
  input: 'temp/index.js',
  output: [
    {
      file: 'dist/wing-viewport.js',
      name: 'wing-viewport',
      format: 'umd',
    },
    {
      file: 'dist/wing-viewport.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-viewport.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-viewport.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
