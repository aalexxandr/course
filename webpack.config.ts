import webpack from 'webpack';
import webpackConfig from './configs/webpack';
import { IPaths } from './configs/webpack/types';
import path from 'path';

const paths: IPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	template: path.resolve(__dirname, 'public', 'index.html'),
};

const config: webpack.Configuration = webpackConfig({
	mode: 'development',
	paths,
});

export default config;
