import cls from './style.module.scss';
import { FC } from 'react';

export const PageError: FC = () => {
	const onReload = (): void => {
		location.reload();
	};

	return (
		<div className={cls.pageError}>
			что-то пошло не так
			<button onClick={onReload}>reload page</button>
		</div>
	);
};
