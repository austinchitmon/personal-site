import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PUBLIC_HTTP_REQUEST } from './public-http-request';

@Injectable({ providedIn: 'root' })
export class ResumeApiService {
  private readonly http = inject(HttpClient);
  readonly url = `${environment.apiBase}/files/resume.pdf`;

  download() {
    return this.http.get(this.url, {
      responseType: 'blob',
      observe: 'response',
      context: new HttpContext().set(PUBLIC_HTTP_REQUEST, true),
    }).pipe(timeout(15_000));
  }
}
