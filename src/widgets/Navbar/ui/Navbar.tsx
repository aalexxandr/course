import { ThemePicker } from 'widgets/ThemePicker';
import cls from './style.module.scss';
import { Link } from 'shared/ui/Link';

export function Navbar() {
	return (
		<div className={cls.navbar}>
			<ThemePicker />

			<div>
				<Link to={'/'} className={cls.navbarLink}>
					Main
				</Link>
				<Link to='/about' className={cls.navbarLink}>
					About
				</Link>
			</div>
		</div>
	);
}
