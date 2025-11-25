import { Routes } from '@angular/router';
import { ChittymonContainerComponent } from './chittymon-container/chittymon-container.component';
import { ChittymonQuizComponent } from './quiz/chittymon-quiz/chittymon-quiz.component';

export const CHITTYMON_ROUTES: Routes = [
  {
    path: '',
    component: ChittymonContainerComponent,
  },
  {
    path: 'quiz',
    component: ChittymonQuizComponent,
  },
];
