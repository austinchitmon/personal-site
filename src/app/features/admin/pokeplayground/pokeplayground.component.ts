import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonDirective } from '@openng/optimus-ui/button';
import { ChittymonContainerComponent } from './chittymon-container/chittymon-container.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokeplaygroundFacade } from './pokeplayground.facade';
import { PokeplaygroundStore } from './pokeplayground.store';

@Component({
  selector: 'app-pokeplayground',
  imports: [ChittymonContainerComponent, PokemonCardComponent, ButtonDirective],
  providers: [PokeplaygroundStore, PokeplaygroundFacade],
  template: `
    <div class="page-container">
      <h1>Pokeplayground</h1>
      <div class="chittymon-window">
        <app-chittymon-container />
      </div>
      <div class="debug-panel"></div>
      <button pButton
              class="button-primary"
              (click)="facade.generateRandomPokemon()">
        Generate Random Pokémon
      </button>
      @if (facade.pokemon(); as pokemon) {
        <app-pokemon-card [pokemon]="pokemon" />
      }
    </div>
  `,
  styleUrl: './pokeplayground.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeplaygroundComponent {
  protected readonly facade = inject(PokeplaygroundFacade);
}
