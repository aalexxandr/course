import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button } from 'shared/ui/Button';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';
import { FC } from 'react';

export const ThemePicker: FC = () => {
	const { toggleTheme, theme } = useTheme();
	const isLightTheme = theme === ETheme.LIGHT;

	return (
		<Button onClick={toggleTheme}>
			<ThemeIcon
				fill={addProperties([], { white: isLightTheme })}
				className={cls.themeIcon}
			/>
		</Button>
	);
}
