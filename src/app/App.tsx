import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { FC, Suspense } from 'react';

const App: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Suspense fallback='loading...'>
				<Navbar />
				<div className='content'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
