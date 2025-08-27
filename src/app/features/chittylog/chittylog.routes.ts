import { Routes } from '@angular/router';
import { ChittylogContainerComponent } from './chittylog-container/chittylog-container.component';
import { PostContainerComponent } from './post-container/post-container.component';

export const CHITTYLOG_ROUTES: Routes = [
  {
    path: '',
    component: ChittylogContainerComponent,
  },
  {
    path: ':postName',
    component: PostContainerComponent,
  },
];
