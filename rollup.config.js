import typescript from 'rollup-plugin-typescript2';
import progress from 'rollup-plugin-progress';
import cleanup from 'rollup-plugin-cleanup';

const rollupConfig = [
  {
    input: './src/app.ts',
    output: {
      file: 'build/server.js',
      format: 'cjs'
    },
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      progress(),
      cleanup({
        comments: 'none'
      })
    ]
  },
  // {
  //   input: 'main-b.js',
  //   output: [
  //     {
  //       file: 'dist/bundle-b1.js',
  //       format: 'cjs'
  //     },
  //     {
  //       file: 'dist/bundle-b2.js',
  //       format: 'es'
  //     }
  //   ]
  // }
];

export default rollupConfig;