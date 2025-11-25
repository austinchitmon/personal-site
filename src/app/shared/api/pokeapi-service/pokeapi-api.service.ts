import {
  inject,
  Injectable
} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class PokeapiApiService {
  api = inject(ApiService);
  readonly base = environment.apiBase;

  constructor() {
    console.log('ENV:', environment);
  }

  getHello(): Observable<string> {
    return this.api.get(`${this.base}/pokemon`);
  }
}
