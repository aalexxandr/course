import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types';

const webpackLoaders = (options: IBuildOptions): Array<RuleSetRule> => {
	const { isDev } = options;

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) =>
							Boolean(resourcePath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:5]',
					},
				},
			},
			'sass-loader',
		],
	};

	return [typescriptLoader, sassLoader];
};

export default webpackLoaders;
