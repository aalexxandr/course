import { FC } from "react";
import { Loader } from "shared/ui/Loader";
import cls from './style.module.scss';

export const PageLoader: FC = () => {
  return (
    <div className={cls.pageLoader} >
      <Loader />
    </div>
  )
}