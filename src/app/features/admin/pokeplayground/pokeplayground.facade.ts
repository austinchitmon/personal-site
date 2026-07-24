import {
  computed,
  Injectable,
  inject
} from '@angular/core';
import {
  catchError,
  of,
  switchMap,
  tap
} from 'rxjs';
import { PokeapiApiService } from '../../../shared/api/pokeapi-service/pokeapi-api.service';
import { PokeplaygroundStore } from './pokeplayground.store';

@Injectable()
export class PokeplaygroundFacade {
  private readonly store = inject(PokeplaygroundStore);
  private readonly api = inject(PokeapiApiService);

  public pokemon = computed(() => this.store.pokemon());
  public loading = computed(() => this.store.loading());

  public generateRandomPokemon(): void {
    of(null).pipe(
      tap(() => {
        this.store.setPokemon(null);
        this.store.setLoading(true);
      }),
      switchMap(() => this.api.getRandomPokemon()),
      catchError(() => of(null))
    ).subscribe((pokemon) => {
      this.store.setPokemon(pokemon);
      this.store.setLoading(false);
    });
  }
}
