import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/index.js',
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
