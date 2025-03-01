import Icon1 from '../assets/icons/icon1.svg?react';
import Icon2 from '../assets/icons/icon2.svg?react';
import Icon3 from '../assets/icons/icon3.svg?react';

export const sidebarMainElemenets = [
  {
    id: 1,
    title: 'Главная',
    path: '/home',
    Icon: Icon1,
  },
  {
    id: 2,
    title: 'Проекты',
    path: '/projects',
    Icon: Icon2,
  },
  {
    id: 3,
    title: 'Сообщения',
    path: '/messages',
    Icon: Icon3,
  },
];

export const sidebarSecondaryElemenets = [
  {
    id: 4,
    title: 'Настройки',
    path: '/settings',
    Icon: Icon1,
  },
  {
    id: 5,
    title: 'Выйти',
    path: '/logout',
    Icon: Icon2,
  },
];
