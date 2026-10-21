import {
  inject,
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api.config';
import {
  ApiService,
  HttpOptions
} from '../api.service';

const BASE_FUNCTIONS = '/functions/v1';
const FUNCTIONS = {
  RANDOM_CAT: '/random-cat-img'
};


export const SUPABASE_API_CONFIG = {
  functions: {
    base: BASE_FUNCTIONS,
    routes: {
      cats: FUNCTIONS.RANDOM_CAT
    }
  }
};

/**
 * For API calls that proxy to supabase
 */
@Injectable({ providedIn: 'root' })
export class SupabaseApiService {
  private base = `${API_URL}/supabase`;

  api = inject(ApiService);

  get<T>(subroute: string, options?: HttpOptions): Observable<T> {
    const url = `${this.base}${subroute}`;
    return this.api.get<T>(url, options);
  }

}
