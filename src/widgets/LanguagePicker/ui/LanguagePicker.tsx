import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const LanguagePicker: FC = () => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = async (): Promise<void> => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	}

	return <Button onClick={toggleLanguage}>{t('language')}</Button>;
};
