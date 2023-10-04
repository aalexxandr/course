import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import cssLoader from '../webpack/loaders/cssLoader';

export default ({
	config,
}: {
	config: webpack.Configuration;
}): webpack.Configuration => {
	config.resolve?.modules?.push(path.resolve(__dirname, '../../src'));
	config.resolve?.extensions?.push('.ts', '.tsx');

	if (config.module?.rules) {
		config.module.rules.push(cssLoader(true));

		config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});
		config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
	}

	return config;
};
