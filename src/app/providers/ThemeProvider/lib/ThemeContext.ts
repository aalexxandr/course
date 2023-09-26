import { createContext } from 'react';
import { type IThemeContext } from './types';

export enum ETheme {
	DARK = 'dark',
	LIGHT = 'light',
}
export const ThemeContext = createContext<IThemeContext>({
	theme: ETheme.LIGHT,
	setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
