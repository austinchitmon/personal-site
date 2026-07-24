import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-admin-page',
  template: `
    <div class="page-container">
      <h1>Admin</h1>
      <p>Coming soon.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPageComponent {
}
