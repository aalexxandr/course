import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types';
import cssLoader from './loaders/cssLoader';

const webpackLoaders = ({ isDev }: IBuildOptions): Array<RuleSetRule> => {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [fileLoader, svgLoader, typescriptLoader, cssLoader(isDev)];
};

export default webpackLoaders;
