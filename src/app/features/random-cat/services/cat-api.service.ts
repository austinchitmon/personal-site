import { Injectable, inject } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  take
} from 'rxjs';
import {
  SUPABASE_API_CONFIG,
  SupabaseApiService
} from '../../../shared/api/supabase/supabase-api.service';

@Injectable({ providedIn: 'root' })
export class CatApiService {
  private readonly supaApi = inject(SupabaseApiService);


  public getRandomCatImageURL(): Observable<string> {
    return this.supaApi.get<{ imageUrl: string }>(
      `${SUPABASE_API_CONFIG.functions.base}${SUPABASE_API_CONFIG.functions.routes.cats}`, {
        headers: {
          "Content-Type": "application/json",
        }
      }).pipe(
      take(1),
      map((url) => url.imageUrl),
      catchError(err => {
        console.error(err);
        return EMPTY;
      })
    );
  }
}
