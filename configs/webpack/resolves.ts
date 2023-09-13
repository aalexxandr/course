import { ResolveOptions } from 'webpack';

const webpackResolves = (): ResolveOptions => ({
	extensions: ['.tsx', '.ts', '.js'],
});

export default webpackResolves;
