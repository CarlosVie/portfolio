import React from 'react';
import Contacts from '../pages/Contacts';
import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';

export interface RoutesType {
  readonly key: string
  readonly path: string;
  readonly component: React.FC
}

export default [
  {key: 'HomePage', path: '/', component: HomePage},
  {key: 'Contacts', path: '/contacts', component: Contacts},
  {key: 'Projects', path: '/projects', component: Projects},
];
