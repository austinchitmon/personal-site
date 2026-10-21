import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Card } from '@openng/optimus-ui/card';
import { ADMIN_FEATURE_ENTRIES } from '../admin.const';

@Component({
  selector: 'app-admin-container',
  imports: [Card, RouterLink],
  template: `
    <div class="page-container">
      <h1>Admin</h1>
      <p class="subtitle">Internal tools</p>
      <div class="card-container">
        @for (entry of entries; track entry.routerLink) {
          <a class="card" [routerLink]="entry.routerLink">
            <p-card [header]="entry.title" [subheader]="entry.subtitle" />
          </a>
        }
      </div>
    </div>
  `,
  styleUrl: './admin-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminContainerComponent {
  readonly entries = ADMIN_FEATURE_ENTRIES;
}
