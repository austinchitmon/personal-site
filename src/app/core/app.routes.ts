import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chittymon',
    loadComponent: () => import('../features/physics/chittymon-container/chittymon-container.component').then(mod =>
      mod.ChittymonContainerComponent)
  },
];
