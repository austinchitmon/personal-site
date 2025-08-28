import { Injectable } from '@angular/core';
import {
  from,
  map,
  Observable
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReadingTimeService {
  getReadingTimeInMinutes(text: string): Observable<number> {
    return from(import('reading-time-estimator')).pipe(
      map(module => {
        return module.readingTime(text).minutes;
      })
    );
  }
}
