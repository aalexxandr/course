import { FC } from 'react';
import cls from './style.module.scss';
import { Link } from 'shared/ui/Link';
import { useTranslation } from 'react-i18next';

export const Navbar: FC = () => {
	const { t } = useTranslation();

	return (
		<div className={cls.navbar}>
			<Link to={'/'} className={cls.navbarLink}>
				{t('Navbar.main')}
			</Link>
			<Link to='/about' className={cls.navbarLink}>
				{t('Navbar.about')}
			</Link>
		</div>
	);
};
