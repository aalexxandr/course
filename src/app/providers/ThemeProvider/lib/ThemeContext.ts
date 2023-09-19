import { createContext } from 'react';
import { IThemeContext } from './types';

export enum ETheme {
	DARK = 'dark',
	LIGHT = 'light',
}
export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
