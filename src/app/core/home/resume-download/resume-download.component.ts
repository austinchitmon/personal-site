import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { HomeFacade } from '../home-facade';
import { HomeStore } from '../home.store';

@Component({
  selector: 'app-resume-download',
  imports: [RouterLink, ButtonDirective],
  providers: [HomeStore, HomeFacade],
  templateUrl: './resume-download.component.html',
  styleUrl: './resume-download.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeDownloadComponent {
  protected readonly facade = inject(HomeFacade);

  constructor() {
    afterNextRender(() => this.facade.downloadResume());
  }
}
