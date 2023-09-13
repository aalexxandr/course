import type { Configuration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

const devServer = ({ port }: IBuildOptions): Configuration => ({
	port,
	open: true,
});

export default devServer;
