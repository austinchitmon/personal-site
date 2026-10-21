import { Routes } from '@angular/router';
import { adminChildGuard, adminGuard } from '../shared/auth/admin.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    // GitHub Pages redirects directory entry files to a trailing-slash URL.
    path: 'resume/',
    pathMatch: 'full',
    redirectTo: 'resume',
  },
  {
    path: 'resume',
    title: 'Austin Chitmon — Resume',
    loadComponent: () => import('./home/resume-download/resume-download.component').then(mod =>
      mod.ResumeDownloadComponent),
  },
  {
    path: 'admin',
    canMatch: [adminGuard],
    canActivateChild: [adminChildGuard],
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
