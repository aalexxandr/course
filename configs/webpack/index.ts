import webpack from 'webpack';
import { IBuildOptions } from './types';
import webpackLoaders from './loaders';
import webpackResolves from './resolves';
import webpackPlugins from './plugins';

const webpackConfig = (options: IBuildOptions): webpack.Configuration => {
	const { mode, paths } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		module: {
			rules: webpackLoaders(),
		},
		resolve: webpackResolves(),
		plugins: webpackPlugins(paths),
		devtool: 'inline-source-map',
	};
};

export default webpackConfig;
