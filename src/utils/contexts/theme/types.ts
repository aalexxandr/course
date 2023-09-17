import { ETheme } from './ThemeContext';

interface IThemeContext {
	theme?: ETheme;
	setTheme?: (theme: ETheme) => void;
}

export { IThemeContext };
