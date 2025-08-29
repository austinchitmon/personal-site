import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  imports: [
    ProgressSpinner,
    AsyncPipe
  ],
  template: `
    <div class="content">
      <ng-content></ng-content>
    </div>

    @if (showSpinner | async) {
      <div class="overlay">
        <div class="spinner">
          <p-progress-spinner></p-progress-spinner>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  public showSpinner = new BehaviorSubject(false);

  public show() {
    this.showSpinner.next(true);
  }

  public hide() {
    this.showSpinner.next(false);
  }
}
