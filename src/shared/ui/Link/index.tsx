import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './style.module.scss';

export enum ETheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	theme?: ETheme;
}

const AppLink: FC<AppLinkProps> = props => {
	const {
		children,
		to,
		className,
		theme = ETheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link to={to} className={`${className} ${cls[theme]}`} {...otherProps}>
			{children}
		</Link>
	);
};

export { AppLink as Link };
