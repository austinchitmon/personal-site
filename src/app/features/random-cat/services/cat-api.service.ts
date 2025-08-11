import { Injectable } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  take
} from 'rxjs';
import {
  BASE_FUNCTIONS,
  BASE_SUPABASE_URL,
  FUNCTIONS
} from '../../../shared/api/api.config';
import { ApiService } from '../../../shared/api/api.service';

@Injectable({ providedIn: 'root' })
export class CatApiService {
  constructor(
    private readonly apiService: ApiService
  ) {}

  public getRandomCatImageURL(): Observable<string> {
    return this.apiService.get<{ imageUrl: string }>(`${BASE_SUPABASE_URL}${BASE_FUNCTIONS}${FUNCTIONS.RANDOM_CAT}`, {
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

// https://hjdkrtgkjoiwjikbpvje.supabase.co/storage/v1/object/public/public-personal-site/resume.pdf
