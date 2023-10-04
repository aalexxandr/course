import { useState } from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button';
import { ThemePicker } from 'widgets/ThemePicker';
import { LanguagePicker } from 'widgets/LanguagePicker';
import { Link } from 'shared/ui/Link';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import { RouterPaths } from 'shared/config/routerConfig/routerConfig';

export const Sidebar = (): JSX.Element => {
	const { t } = useTranslation();

	const [isClosed, setIsClosed] = useState(false);

	const onToggleSidebar = (): void => {
		setIsClosed(prev => !prev);
	};

	return (
		<div
			data-testid='sidebar'
			className={addProperties([cls.sidebar], { [cls.closed]: isClosed })}
		>
			<div className={cls.menu}>
				<Link
					to={RouterPaths.main}
					className={addProperties([cls.item], { [cls.center]: isClosed })}
				>
					<MainIcon />
					{!isClosed && (
						<span className={cls.linkText}>{t('Sidebar.main')}</span>
					)}
				</Link>
				<Link
					to={RouterPaths.about}
					className={addProperties([cls.item], { [cls.center]: isClosed })}
				>
					<AboutIcon />
					{!isClosed && (
						<span className={cls.linkText}>{t('Sidebar.about')}</span>
					)}
				</Link>
			</div>

			<Button
				onClick={onToggleSidebar}
				className={cls.toggleButton}
				data-testid='toggleSidebar'
				theme={EButtonTheme.INVERTED_BACKGROUND}
				size={EButtonSize.L}
			>
				{isClosed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemePicker />
				<LanguagePicker />
			</div>
		</div>
	);
};
