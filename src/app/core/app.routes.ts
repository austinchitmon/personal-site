import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { PhysicsTestComponent } from '../features/physics/physics-test/physics-test.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'physics',
    component: PhysicsTestComponent,
  },
];
