import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types';

const webpackPlugins = ({
	paths,
}: IBuildOptions): Array<WebpackPluginInstance> => [
	new ProgressPlugin(),
	new HTMLWebpackPlugin({
		template: paths.template,
	}),
];

export default webpackPlugins;
