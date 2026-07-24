import { Routes } from '@angular/router';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { PokeplaygroundComponent } from './pokeplayground/pokeplayground.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminContainerComponent },
  { path: 'pokeplayground', component: PokeplaygroundComponent },
];
