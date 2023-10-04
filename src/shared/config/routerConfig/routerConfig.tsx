import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { RouteProps } from 'react-router-dom';

enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'notFound'
}

export const RouterPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
	[Routes.NOT_FOUND]: '*'
};

export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		element: <MainPage />,
		path: RouterPaths.main,
	},
	[Routes.ABOUT]: {
		element: <AboutPage />,
		path: RouterPaths.about,
	},
	[Routes.NOT_FOUND]: {
		element: <NotFoundPage />,
		path: RouterPaths.notFound,
	},
};
