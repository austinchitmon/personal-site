import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Button } from '@openng/optimus-ui/button';
import { of } from 'rxjs';
import { PokeapiApiService } from '../../../../shared/api/pokeapi-service/pokeapi-api.service';

@Component({
  selector: 'app-chittymon-quiz',
  imports: [
    Button
  ],
  template: `
    <div class="display-flex flex-col row-gap-4 flex-center vertical-padding">
      <p-button (onClick)="trigger.set(true)">Test API</p-button>

      @if (this.testResource.isLoading()) {
        <div>Fetching...</div>
      }
      @if (this.testResource.value()) {
        <h2>{{this.testResource.value()}}</h2>
      }
    </div>
  `,
  styleUrl: './chittymon-quiz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChittymonQuizComponent {
  api = inject(PokeapiApiService);
  public trigger = signal<boolean | undefined>(undefined);

  readonly testResource = rxResource({
    params: () => ({ active: this.trigger() }),
    stream: ({ params }) => {
      return params.active ?
        this.api.getHello() :
        of(undefined);
    }
  });
}
