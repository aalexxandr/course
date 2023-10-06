import type { Meta, StoryObj } from '@storybook/react';
import { Button, EButtonSize, EButtonTheme } from '.';
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

export const ClearInverted: Story = {
	args: {
		children: 'text',
		theme: EButtonTheme.CLEAR_INVERTED,
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

export const Background: Story = {
	args: {
		children: 'text',
		theme: EButtonTheme.INVERTED_BACKGROUND,
	},
};
Background.decorators = [ThemeDecorator(ETheme.DARK)];

export const InvertedBackground: Story = {
	args: {
		children: 'text',
		theme: EButtonTheme.INVERTED_BACKGROUND,
	},
};

export const SizeM: Story = {
	args: {
		children: 'text',
		size: EButtonSize.M,
		theme: EButtonTheme.INVERTED_BACKGROUND,
	},
};

export const SizeL: Story = {
	args: {
		children: 'text',
		size: EButtonSize.L,
		theme: EButtonTheme.INVERTED_BACKGROUND,
	},
};

export const SizeXL: Story = {
	args: {
		children: 'text',
		size: EButtonSize.XL,
		theme: EButtonTheme.INVERTED_BACKGROUND,
	},
};
