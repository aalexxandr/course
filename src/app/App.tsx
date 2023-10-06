import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { FC, Suspense, useState } from 'react';
import Modal from 'shared/ui/Modal';

const App: FC = () => {
	const { theme } = useTheme();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onModalClose = () => {
		setIsModalOpen(false);
	};
	return (
		<div className={`app ${theme}`}>
			<Suspense fallback='loading...'>
				<Navbar />
				<button
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					TOGGLE
				</button>
				<Modal isOpen={isModalOpen} onClose={onModalClose}>
					<div>123123123</div>
				</Modal>
				<div className='content'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
