import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChittymonContainerComponent } from './chittymon-container/chittymon-container.component';

@Component({
  selector: 'app-pokeplayground',
  imports: [ChittymonContainerComponent],
  template: `
    <div class="page-container">
      <h1>Pokeplayground</h1>
      <div class="chittymon-window">
        <app-chittymon-container />
      </div>
      <div class="debug-panel"></div>
    </div>
  `,
  styleUrl: './pokeplayground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeplaygroundComponent {}
