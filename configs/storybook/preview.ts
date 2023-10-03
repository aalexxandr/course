import type { Preview } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [StyleDecorator, ThemeDecorator(ETheme.LIGHT)],
};

export default preview;
