import { FC, lazy } from 'react';

export const AboutPageAsync: FC = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
