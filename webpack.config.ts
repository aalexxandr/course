import { Configuration } from 'webpack';
import webpackConfig from './configs/webpack';
import { IEnv, IPaths } from './configs/webpack/types';
import path from 'path';
import 'webpack-dev-server';

const paths: IPaths = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	build: path.resolve(__dirname, 'build'),
	template: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
};

export default (env: IEnv): Configuration => {
	const mode = env.MODE || 'development';
	const isDev = mode === 'development';

	return webpackConfig({
		mode,
		paths,
		isDev,
		port: env.PORT,
	});
};
