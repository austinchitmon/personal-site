import { Routes } from '@angular/router';

export const CHITTYLOG_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./chittylog-container/chittylog-container.component').then(mod =>
      mod.ChittylogContainerComponent),
  },
  {
    path: ':postName',
    loadComponent: () => import('./post-container/post-container.component').then(mod =>
      mod.PostContainerComponent),
  }
];
