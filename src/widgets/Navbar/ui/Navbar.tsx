import { FC, useCallback, useState } from 'react';
import cls from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button';
import Modal from 'shared/ui/Modal';
import Portal from 'shared/ui/Portal';

export const Navbar: FC = () => {
	const { t } = useTranslation();

	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

	const onAuthModalOpen = useCallback(() => {
		setIsAuthModalOpen(true);
	}, []);

	const onAuthModalClose = useCallback(() => {
		setIsAuthModalOpen(false);
	}, []);

	return (
		<div className={cls.navbar}>
			<Portal>
				<Modal onClose={onAuthModalClose} isOpen={isAuthModalOpen}>
					123123
				</Modal>
			</Portal>
			<Button theme={EButtonTheme.CLEAR_INVERTED} onClick={onAuthModalOpen}>
				{t('signIn')}
			</Button>
		</div>
	);
};
