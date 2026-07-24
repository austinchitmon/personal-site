import {
  Injectable,
  Signal,
  signal
} from '@angular/core';
import { Pokemon } from '../../../shared/api/pokeapi-service/pokemon.model';

@Injectable()
export class PokeplaygroundStore {
  public readonly pokemon: Signal<Pokemon | null>;
  public readonly loading: Signal<boolean>;

  readonly #pokemon = signal<Pokemon | null>(null);
  readonly #loading = signal<boolean>(false);

  constructor() {
    this.pokemon = this.#pokemon.asReadonly();
    this.loading = this.#loading.asReadonly();
  }

  public setPokemon(pokemon: Pokemon | null): void {
    this.#pokemon.set(pokemon);
  }

  public setLoading(loading: boolean): void {
    this.#loading.set(loading);
  }
}
