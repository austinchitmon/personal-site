import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { HomeFacade } from '../home-facade';
import { HomeStore } from '../home.store';

@Component({
  selector: 'app-resume-download',
  providers: [HomeStore, HomeFacade],
  templateUrl: './resume-download.component.html',
  styleUrl: './resume-download.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeDownloadComponent {
  protected readonly facade = inject(HomeFacade);
  protected readonly letters = Array.from('Thank You!');

  constructor() {
    afterNextRender(() => this.facade.downloadResume());
  }
}
