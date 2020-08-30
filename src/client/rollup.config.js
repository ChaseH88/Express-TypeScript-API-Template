import typescript from 'rollup-plugin-typescript2';
import progress from 'rollup-plugin-progress';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';

const rollupConfig = [
  {
    input: './index.tsx',
    output: {
      file: '../../build/app.js',
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      cleanup({
        comments: 'none'
      }),
      progress(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
  }
];

export default rollupConfig;