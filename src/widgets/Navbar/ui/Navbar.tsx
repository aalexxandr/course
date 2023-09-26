import { FC } from 'react';
import cls from './style.module.scss';
import { Link } from 'shared/ui/Link';

export const Navbar: FC = () => {
	return (
		<div className={cls.navbar}>
			<Link to={'/'} className={cls.navbarLink}>
				Main
			</Link>
			<Link to='/about' className={cls.navbarLink}>
				About
			</Link>
		</div>
	);
}
