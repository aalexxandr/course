import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
					<Route path='/' element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>

			<div>
				<button onClick={toggleTheme}>toggle theme</button>
			</div>
		</div>
	);
};

export default App;
