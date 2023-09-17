import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<ETheme>(defaultTheme);

	const defaultProviderProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return (
		<ThemeContext.Provider value={defaultProviderProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
