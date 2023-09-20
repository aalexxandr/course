import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button } from 'shared/ui/Button';
import cls from './style.module.scss';

export function ThemePicker() {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button onClick={toggleTheme}>
			<ThemeIcon
				fill={theme === ETheme.LIGHT ? 'white' : undefined}
				className={cls.themeIcon}
			/>
		</Button>
	);
}
