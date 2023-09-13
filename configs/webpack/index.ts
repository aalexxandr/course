import webpack from 'webpack';
import { IBuildOptions } from './types';
import webpackLoaders from './loaders';
import webpackResolves from './resolves';
import webpackPlugins from './plugins';
import devServerTest from './devServer';

const webpackConfig = (options: IBuildOptions): webpack.Configuration => {
	const { mode, paths, isDev } = options;

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
		plugins: webpackPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? devServerTest(options) : undefined,
	};
};

export default webpackConfig;
