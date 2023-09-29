import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(RouterConfig).map(({ element, path }) => (
					<Route element={element} path={path} key={path} />
				))}
			</Routes>
		</Suspense>
	);
}
