import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chittymon',
    loadChildren: () => import('../features/chittymon/chittymon.routes').then(mod =>
      mod.CHITTYMON_ROUTES)
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
