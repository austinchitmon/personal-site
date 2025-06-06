import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private readonly http: HttpClient
  ) {}

  /**
   * Performs an HTTP GET request.
   * @param url The API endpoint path (e.g., 'users' or 'products/123').
   * @param options Optional request options like headers, params.
   * @returns An Observable of the response type.
   */
  public get<T>(url: string, options?: {
    headers?: HttpHeaders | Record<string, string | string[]>
    params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]>
    reportProgress?: boolean;
    transferCache?: {
      includeHeaders?: string[];
    } | boolean;
  }): Observable<T> {
    return this.http.get<T>(url, options);
  }

  public post<TBody, TResult>(url: string, body: TBody, options?: {
    headers?: HttpHeaders | Record<string, string | string[]>;
    params?: HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]>
    reportProgress?: boolean;
    transferCache?: {
      includeHeaders?: string[];
    } | boolean;
  }): Observable<TResult> {
    return this.http.post<TResult>(url, body, options);
  }
}
