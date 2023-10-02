import 'shared/config/i18n';
import App from './app/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundaryProvider } from 'app/providers/ErrorBoundaryProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
	<BrowserRouter>
		<ErrorBoundaryProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundaryProvider>
	</BrowserRouter>
);
