import { Injectable } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  take
} from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class CatApiService {
  constructor(
    private readonly apiService: ApiService
  ) {}

  public getRandomCatImageURL(): Observable<string> {
    return this.apiService.get<{ imageUrl: string }>(`https://hjdkrtgkjoiwjikbpvje.supabase.co/functions/v1/random-cat-img`, {
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
