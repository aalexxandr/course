import { FC } from "react";
import cls from './style.module.scss';
import { useTranslation } from "react-i18next";

export const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return <div className={cls.notFoundPage_content}>
    {t('pageNotFound')}
  </div>
}