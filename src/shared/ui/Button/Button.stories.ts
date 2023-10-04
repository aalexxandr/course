import type { Meta, StoryObj } from '@storybook/react';
import { Button, EButtonTheme } from '.';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'Shared/Button',
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		children: 'text',
	},
};

export const Outlined: Story = {
	args: {
		children: 'text',
		theme: EButtonTheme.OUTLINED,
	},
};

export const OutlinedDark: Story = {
	args: {
		children: 'text',
		theme: EButtonTheme.OUTLINED,
	},
};

OutlinedDark.decorators = [ThemeDecorator(ETheme.DARK)];
