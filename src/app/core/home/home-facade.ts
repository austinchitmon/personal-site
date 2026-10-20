import { inject, Injectable } from '@angular/core';
import {
  SUPABASE_API_CONFIG,
  SupabaseApiService
} from '../../shared/api/supabase/supabase-api.service';

@Injectable()
export class HomeFacade {
  private readonly supaApi = inject(SupabaseApiService);

  public downloadResume(): void {
    this.supaApi.openFile(`${SUPABASE_API_CONFIG.storage.base}${SUPABASE_API_CONFIG.storage.files.resume}`);
  }
}
