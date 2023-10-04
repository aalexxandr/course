import { FC, PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface IRouterProviderProps extends PropsWithChildren {
	route?: string;
}
const RouterProvider: FC<PropsWithChildren> = ({
	children,
	route = '/',
}: IRouterProviderProps): JSX.Element => {
	return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
};

export default RouterProvider;
