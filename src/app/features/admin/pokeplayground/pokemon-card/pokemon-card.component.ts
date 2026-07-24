import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input
} from '@angular/core';
import { Card } from '@openng/optimus-ui/card';
import { Pokemon } from '../../../../shared/api/pokeapi-service/pokemon.model';

interface PokemonStatDisplay {
  label: string;
  value: number;
}

const PLACEHOLDER_SPRITE = '/img/pokeballs/poke.png';

@Component({
  selector: 'app-pokemon-card',
  imports: [Card],
  template: `
    <p-card class="card">
      <ng-template #header>
        <div class="sprite-wrapper">
          <img class="sprite"
               [src]="spriteUrl()"
               [alt]="pokemon().name" />
        </div>
      </ng-template>
      <ng-template #title>
        <span class="name">{{ pokemon().name }}</span>
      </ng-template>
      <div class="stats">
        @for (stat of stats(); track stat.label) {
          <div class="stat-row">
            <span class="stat-label">{{ stat.label }}</span>
            <span class="stat-value">{{ stat.value }}</span>
          </div>
        }
      </div>
    </p-card>
  `,
  styleUrl: './pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  public pokemon = input.required<Pokemon>();

  protected readonly spriteUrl = computed(() => this.pokemon().sprite ?? PLACEHOLDER_SPRITE);

  protected readonly stats = computed<PokemonStatDisplay[]>(() => {
    const stats = this.pokemon().stats;
    return [
      { label: 'HP', value: stats.hp },
      { label: 'Attack', value: stats.attack },
      { label: 'Defense', value: stats.defense },
      { label: 'Sp. Attack', value: stats.specialAttack },
      { label: 'Sp. Defense', value: stats.specialDefense },
      { label: 'Speed', value: stats.speed },
    ];
  });
}
