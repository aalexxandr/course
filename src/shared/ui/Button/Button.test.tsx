import { Button, EButtonTheme } from '.';
import { render, screen } from '@testing-library/react';

describe('Button tests', () => {
	test('should be Button in the document', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('should be clear class in button', () => {
		render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
	});
});
