import type { Configuration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

const webpackDevServer = ({ port }: IBuildOptions): Configuration => ({
	port,
	historyApiFallback: true,
});

export default webpackDevServer;
