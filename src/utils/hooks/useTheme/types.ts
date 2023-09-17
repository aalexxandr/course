import { ETheme } from '../../contexts/theme/ThemeContext';

interface IUseTheme {
	theme: ETheme.LIGHT | ETheme.DARK;
	toggleTheme: () => void;
}

export { IUseTheme };
