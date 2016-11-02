import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  external: [],
  moduleName: 'bang-ui',
  plugins: [
    buble({
      jsx: 'createElement',
      objectAssign: 'Object.assign'
    }),
    // uglify(),
    nodeResolve({
      jsnext: true,
      browser: true
    }),
    commonjs()
  ],
  format: 'iife',
  dest: 'dist/bang-ui.js'
};
