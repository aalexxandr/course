import { Button, EButtonTheme } from '.';
import { render, screen } from '@testing-library/react';

describe('Button tests', () => {
	test('should be Button in the document', () => {
		render(<Button>test</Button>);
		expect(screen.getByText('test')).toBeInTheDocument();
	});

	test('should be clear class in button', () => {
		render(<Button theme={EButtonTheme.CLEAR}>test</Button>);
		expect(screen.getByText('test')).toHaveClass('clear');
	});
});
