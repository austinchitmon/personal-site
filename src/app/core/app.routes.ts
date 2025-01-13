import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'physics',
    loadComponent: () => import('../features/physics/physics-test/physics-test.component').then(mod =>
      mod.PhysicsTestComponent)
  },
];
