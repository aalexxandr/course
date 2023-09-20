import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<AppRouter />
			<div>
				<button onClick={toggleTheme}>toggle theme</button>
			</div>
		</div>
	);
};

export default App;
