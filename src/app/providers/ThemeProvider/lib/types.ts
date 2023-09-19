import { ETheme } from './ThemeContext';

interface IUseTheme {
	theme: ETheme.LIGHT | ETheme.DARK;
	toggleTheme: () => void;
}

interface IThemeContext {
	theme?: ETheme;
	setTheme?: (theme: ETheme) => void;
}
export { IUseTheme, IThemeContext };
