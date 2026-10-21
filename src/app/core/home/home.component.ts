import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { SectionBreakComponent } from '../../shared/section-break/section-break.component';
import { HomeFacade } from './home-facade';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, ButtonDirective, SectionBreakComponent],
  providers: [
    HomeStore,
    HomeFacade
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected readonly facade = inject(HomeFacade);
}
