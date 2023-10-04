import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ELinkTheme, Link } from '.';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'Shared/Link',
	component: Link,
	args: {
		to: '',
	},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
	args: {
		children: 'text',
		theme: ELinkTheme.PRIMARY,
	},
};

export const SecondaryLight: Story = {
	args: {
		children: 'text',
		theme: ELinkTheme.SECONDARY,
	},
};
export const PrimaryDark: Story = {
	args: {
		children: 'text',
		theme: ELinkTheme.PRIMARY,
	},
};
PrimaryDark.decorators = [ThemeDecorator(ETheme.DARK)];

export const SecondaryDark: Story = {
	args: {
		children: 'text',
		theme: ELinkTheme.SECONDARY,
	},
};
SecondaryDark.decorators = [ThemeDecorator(ETheme.DARK)];
