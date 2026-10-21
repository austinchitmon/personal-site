import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HomelabStatus } from './homelab.models';

@Injectable({ providedIn: 'root' })
export class HomelabApiService {
  private readonly http = inject(HttpClient);
  readonly url = `${environment.apiBase}/admin/homelab`;

  status() {
    // The auth interceptor attaches the current Supabase access token.
    return this.http.get<HomelabStatus>(this.url).pipe(timeout(8000));
  }
}
