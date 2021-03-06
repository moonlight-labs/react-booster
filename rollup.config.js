import typescript from 'rollup-plugin-typescript2';
import image from 'rollup-plugin-img';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    image({
      output: `dist/images`,
      _slash: true,
      hash: true,
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000
    })
  ]
};
