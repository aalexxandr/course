import webpack from 'webpack';
import path from 'path';
import cssLoader from '../webpack/loaders/cssLoader';

export default ({
	config,
}: {
	config: webpack.Configuration;
}): webpack.Configuration => {
	config.resolve?.modules?.push(path.resolve(__dirname, '../../src'));
	config.resolve?.extensions?.push('.ts', '.tsx');
	config.module?.rules?.push(cssLoader(true));

	return config;
};
