import {
  computed,
  inject,
  Injectable
} from '@angular/core';
import {
  SUPABASE_API_CONFIG,
  SupabaseApiService
} from '../../shared/api/supabase/supabase-api.service';
import { HomeStore } from './home.store';

@Injectable()
export class HomeFacade {
  store = inject(HomeStore);
  supaApi = inject(SupabaseApiService);
  public textColor = computed(() => this.store.textColor());


  public downloadResume(): void {
    this.supaApi.openFile(`${SUPABASE_API_CONFIG.storage.base}${SUPABASE_API_CONFIG.storage.files.resume}`);
  }

  public startRandomColorInterval(): void {
    setInterval(() => {
      this.store.setTextColor(this.getRandomColor(this.store.colors()));
    }, 500);
  }

  private getRandomColor(list: string[]): string {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
}
