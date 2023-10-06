import { ButtonHTMLAttributes, FC } from 'react';
import cls from './style.module.scss';
import { addProperties } from 'shared/lib/addProperties';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: EButtonTheme;
	size?: EButtonSize;
}

export enum EButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINED = 'outlined',
	BACKGROUND = 'background',
	INVERTED_BACKGROUND = 'invertedBackground',
}

export enum EButtonSize {
	M = 'sizeM',
	L = 'sizeL',
	XL = 'sizeXL',
}

export const Button: FC<ButtonProps> = props => {
	const {
		children,
		className,
		theme = EButtonTheme.CLEAR,
		size = EButtonSize.M,
		...otherProps
	} = props;

	return (
		<button
			className={addProperties([
				className,
				cls[theme],
				cls.appButton,
				cls[size],
			])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
