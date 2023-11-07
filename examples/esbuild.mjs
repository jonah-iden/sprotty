import * as esbuild from 'esbuild';
import CssModulesPlugin from 'esbuild-css-modules-plugin';

await esbuild.build({
  entryPoints: ['browser-app.ts'],
  bundle: true,
  sourcemap: true,
  outfile: 'resources/bundle.js',
  resolveExtensions: ['.ts', '.tsx', '.js'],
  loader: {
    '.ttf': 'file',
    '.css': 'local-css'
  },
  plugins: [CssModulesPlugin({
    inject: false,
    namedExports: true,
    emitDeclarationFile: true
  })],
});