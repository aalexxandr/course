import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import TranslationProvider from 'shared/lib/tests/TranslationProvider';
import RouterProvider from 'shared/lib/tests/RouterProvider';

describe('Sidebar tests', () => {
	beforeEach(() => {
		render(
			<RouterProvider>
				<TranslationProvider>
					<Sidebar />
				</TranslationProvider>
			</RouterProvider>
		);
	});

	test('should Sidebar render', () => {
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('should be class "closed" after close sidebar event', () => {
		const toggleSidebarBtn = screen.getByTestId('toggleSidebar');
		fireEvent.click(toggleSidebarBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('closed');
	});
});
