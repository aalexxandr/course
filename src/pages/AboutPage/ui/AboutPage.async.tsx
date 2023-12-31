import { FC, lazy } from 'react';

export const AboutPageAsync: FC = lazy(() => new Promise((resolve) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
