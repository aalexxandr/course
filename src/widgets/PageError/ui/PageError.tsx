import { t } from 'i18next';
import cls from './style.module.scss';
import { FC } from 'react';

export const PageError: FC = () => {
	const onReload = (): void => {
		location.reload();
	};

	return (
		<div className={cls.pageError}>
			{t('PageError.title')}
			<button onClick={onReload}>{t('PageError.reloadPage')}</button>
		</div>
	);
};
