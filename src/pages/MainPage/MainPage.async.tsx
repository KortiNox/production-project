import React, { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore  искусственная задержка,перед деплоем убрать
      setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
