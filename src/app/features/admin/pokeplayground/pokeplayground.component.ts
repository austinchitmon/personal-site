import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokeplayground',
  template: `
    <div class="page-container">
      <h1>Pokeplayground</h1>
      <p>Coming soon.</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeplaygroundComponent {}
