import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
}

const RouterPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
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
};
