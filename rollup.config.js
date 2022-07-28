import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const config = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs'
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm'
		},
		{
			file: 'dist/esnext.esm.js',
			format: 'es'
		}
	],
	plugins: [
		resolve({
			mainFields: ['module'],
			extensions: ['.ts', '.tsx']
		}),
		peerDepsExternal(),
		commonjs(),
		typescript({ tsconfig: './tsconfig.json' }),
		terser()
	],
	external: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies))
}

export default config
