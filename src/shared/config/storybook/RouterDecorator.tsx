import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (Story: ComponentType): JSX.Element => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
);

export default RouterDecorator;
