import { RuleSetRule } from 'webpack';

const typescriptLoader = {
	test: /\.tsx?$/,
	use: 'ts-loader',
	exclude: /node_modules/,
};

const webpackLoaders = (): Array<RuleSetRule> => [typescriptLoader];

export default webpackLoaders;
