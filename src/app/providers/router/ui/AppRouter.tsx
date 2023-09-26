import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>loading...</div>}>
			<Routes>
				{Object.values(RouterConfig).map(({ element, path }) => (
					<Route element={element} path={path} key={path} />
				))}
			</Routes>
		</Suspense>
	);
}
