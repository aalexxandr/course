import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types';

const webpackLoaders = (): Array<RuleSetRule> => {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	};

	return [typescriptLoader, sassLoader];
};

export default webpackLoaders;
