import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';

import './styles/index.scss';
import { useTheme } from './utils/hooks/useTheme';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<ul className='menu'>
				<li>
					<Link to='/'>Main</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>

			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>

			<div>
				<button onClick={toggleTheme}>toggle theme</button>
			</div>
		</div>
	);
};

export default App;
