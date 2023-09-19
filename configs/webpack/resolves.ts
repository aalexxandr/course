import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types';

const webpackResolves = ({ paths }: IBuildOptions): ResolveOptions => ({
	extensions: ['.tsx', '.ts', '.js'],
	preferAbsolute: true,
	modules: [paths.src, 'node_modules'],
	mainFiles: ['index'],
	alias: {},
});

export default webpackResolves;
