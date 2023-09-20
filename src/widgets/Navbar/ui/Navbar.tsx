import cls from './style.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export function Navbar() {
	return (
		<div className={cls.navbar}>
			<AppLink to={'/'} className={cls.navbarLink}>
				Main
			</AppLink>
			<AppLink to='/about' className={cls.navbarLink}>
				About
			</AppLink>
		</div>
	);
}
