import fs from 'fs';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';

let pkg = JSON.parse(fs.readFileSync('./package.json'));

let external = Object.keys(pkg.peerDependencies || {}).concat(Object.keys(pkg.dependencies || {}));

let includePathOptions = {
    include: {},
    paths: ['src/'],
    external: [],
    extensions: ['.js', '.jsx']
};

export default {
	entry: 'src/index.js',
	dest: pkg.main,
	sourceMap: true,
	moduleName: pkg.amdName,
	format: 'umd',
	external,
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			exclude: ['node_modules/**', '**/*.css'],
			presets: [
				['es2015', { modules: false, loose: true }]
			],
			plugins: [
				'jsx-control-statements',
				'transform-class-properties',
				['transform-es2015-classes', { loose: true }],
				['transform-object-rest-spread'],
				['transform-react-jsx', { pragma: 'h' }]
			]
		}),
		includePaths(includePathOptions)
	]
};
