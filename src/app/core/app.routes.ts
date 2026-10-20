import { Routes } from '@angular/router';
import { adminGuard } from '../shared/auth/admin.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    canMatch: [adminGuard],
    loadChildren: () => import('../features/admin/admin.routes').then(mod =>
      mod.ADMIN_ROUTES)
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
