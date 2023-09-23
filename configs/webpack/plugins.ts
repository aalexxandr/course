import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const webpackPlugins = ({
	paths,
	isDev,
}: IBuildOptions): Array<WebpackPluginInstance> => [
	new ProgressPlugin(),
	new HTMLWebpackPlugin({
		template: paths.template,
	}),
	new MiniCssExtractPlugin({
		filename: 'css/[name].[contenthash:5].css',
		chunkFilename: 'css/[name].[contenthash:5].css',
	}),
	new DefinePlugin({
		__IS_DEV__: JSON.stringify(isDev),
	}),
];

export default webpackPlugins;
