import { ButtonHTMLAttributes, FC } from 'react';
import cls from './style.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: EButtonTheme;
}

enum EButtonTheme {
	CLEAR = 'clear',
}
export const Button: FC<ButtonProps> = props => {
	const {
		children,
		className,
		theme = EButtonTheme.CLEAR,
		...otherProps
	} = props;

	return (
		<button
			className={`${className} ${cls[theme]} ${cls.appButton}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
