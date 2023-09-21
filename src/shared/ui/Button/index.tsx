import { ButtonHTMLAttributes, FC } from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';

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
			className={addProperties([className, cls[theme], cls.appButton])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
