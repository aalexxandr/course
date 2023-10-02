import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import TranslationProvider from 'shared/lib/tests/TranslationProvider';

describe('Sidebar tests', () => {
	test('should Sidebar render', () => {
		render(
			<TranslationProvider>
				<Sidebar />
			</TranslationProvider>
		);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('should be class "closed" after close sidebar event', () => {
		render(
			<TranslationProvider>
				<Sidebar />
			</TranslationProvider>
		);

		const toggleSidebarBtn = screen.getByTestId('toggleSidebar');
		fireEvent.click(toggleSidebarBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('closed');
	});
});
