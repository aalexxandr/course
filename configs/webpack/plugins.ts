import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IPaths } from './types';

const webpackPlugins = (path: IPaths): Array<WebpackPluginInstance> => [
	new ProgressPlugin(),
	new HTMLWebpackPlugin({
		template: path.template,
	}),
];

export default webpackPlugins;
