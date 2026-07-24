import {
  inject,
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Pokemon } from './pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokeapiApiService {
  api = inject(ApiService);
  readonly base = environment.apiBase;

  getRandomPokemon(): Observable<Pokemon> {
    return this.api.get<Pokemon>(`${this.base}/pokemon/random`);
  }
}
