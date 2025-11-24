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
const BASE_STORAGE = '/storage/v1/object/public';
const BUCKETS = {
  PUBLIC_PERSONAL: '/public-personal-site'
};
const FILES = {
  RESUME: '/resume.pdf'
};
const FUNCTIONS = {
  RANDOM_CAT: '/random-cat-img'
};


export const SUPABASE_API_CONFIG = {
  functions: {
    base: BASE_FUNCTIONS,
    routes: {
      cats: FUNCTIONS.RANDOM_CAT
    }
  },
  storage: {
    base: `${BASE_STORAGE}${BUCKETS.PUBLIC_PERSONAL}`,
    files: {
      resume: FILES.RESUME
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

  openFile(subroute: string): void {
    window.open(
      `${this.base}${subroute}`
    );
  }
}
