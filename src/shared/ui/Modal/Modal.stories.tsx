import { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'Shared/Modal',
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
	args: {
		isOpen: true,
		onClose: () => {
			console.log('onClose Modal');
		},
		children:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque quam autem sapiente vel fuga placeat nisi aspernatur voluptatibus quo, voluptatem, debitis voluptas ipsam. Non sapiente molestiae saepe temporibus doloremque!',
	},
};

export const ModalDark: Story = {
	args: {
		isOpen: true,
		onClose: () => {
			console.log('onClose Modal');
		},
		children:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque quam autem sapiente vel fuga placeat nisi aspernatur voluptatibus quo, voluptatem, debitis voluptas ipsam. Non sapiente molestiae saepe temporibus doloremque!',
	},
};
ModalDark.decorators = [ThemeDecorator(ETheme.DARK)];
