import { terser } from 'rollup-plugin-terser';

const prod = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		dir: 'dist',
		format: 'iife'
	},
	plugins: [prod && terser()]
};
