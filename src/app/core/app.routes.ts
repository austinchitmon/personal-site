import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chittymon',
    loadComponent: () => import('../features/chittymon/chittymon-container/chittymon-container.component').then(mod =>
      mod.ChittymonContainerComponent)
  },
  {
    path: 'chittyblog',
    loadChildren: () => import('../features/chittylog/chittylog.routes').then(mod => mod.CHITTYLOG_ROUTES),
  },
  {
    path: 'cat',
    loadComponent: () => import('../features/random-cat/random-cat.component').then(mod =>
      mod.RandomCatComponent)
  },
];
