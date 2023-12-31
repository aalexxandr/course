import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { IUseTheme } from './types';

export const useTheme = (): IUseTheme => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (): void => {
		const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};
