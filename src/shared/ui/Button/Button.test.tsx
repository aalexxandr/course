import { Button } from '.';
import { render, screen } from '@testing-library/react';

describe('Button tests', () => {
	test('should be Button in the document', () => {
		render(<Button>test</Button>);
		expect(screen.getByText('test')).toBeInTheDocument();
	});
});
