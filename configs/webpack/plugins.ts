import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const webpackPlugins = ({
	paths,
	isDev,
}: IBuildOptions): Array<WebpackPluginInstance> => {
	const plugins = [
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
		})
	]

	if (isDev) {
		plugins.push(new BundleAnalyzerPlugin({
		openAnalyzer: false,
	}))
	}

	return plugins
};

export default webpackPlugins;
