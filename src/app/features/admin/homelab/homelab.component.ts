import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { HomelabFacade } from './homelab.facade';
import { HomelabStore } from './homelab.store';

@Component({
  selector: 'app-homelab',
  imports: [DatePipe, DecimalPipe, RouterLink, ButtonDirective],
  providers: [HomelabStore, HomelabFacade],
  templateUrl: './homelab.component.html',
  styleUrl: './homelab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomelabComponent {
  protected readonly facade = inject(HomelabFacade);
}
