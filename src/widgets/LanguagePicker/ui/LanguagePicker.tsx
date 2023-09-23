import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

export const LanguagePicker = () => {
	const { t, i18n } = useTranslation();

	const toggleLanguage = () =>
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

	return <Button onClick={toggleLanguage}>{t('language')}</Button>;
};
