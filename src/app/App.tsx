import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

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
			<AppRouter />
			<div>
				<button onClick={toggleTheme}>toggle theme</button>
			</div>
		</div>
	);
};

export default App;
