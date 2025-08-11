import {
  computed,
  inject,
  Injectable
} from '@angular/core';
import {
  BASE_STORAGE,
  BASE_SUPABASE_URL,
  BUCKETS,
  FILES
} from '../../shared/api/api.config';
import { HomeStore } from './home.store';

@Injectable()
export class HomeFacade {
  store = inject(HomeStore);
  public textColor = computed(() => this.store.textColor());


  public downloadResume(): void {
    window.open(
      `${BASE_SUPABASE_URL}${BASE_STORAGE}${BUCKETS.PUBLIC_PERSONAL}${FILES.RESUME}`
    );
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
