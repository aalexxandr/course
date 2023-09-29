import { FC } from "react";
import './style.scss';

export const Loader: FC = () => {
  return (
    <div className="lds-ellipsis">
      <div></div><div></div><div></div><div></div>
    </div>
  )
}