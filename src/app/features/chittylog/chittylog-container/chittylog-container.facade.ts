import {
  computed,
  inject,
  Injectable,
  Signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  map
} from 'rxjs';
import {
  Article,
  BlogConfig,
  ChittylogContainerStore
} from './chittylog-container.store';

@Injectable({
  providedIn: 'root'
})
export class ChittylogContainerFacade {
  #store = inject(ChittylogContainerStore);
  control = this.#store.searchControl;
  articles: Signal<Article[]> = computed(() =>
    this.#store.articleSource().map(file => this.formatFile(file))
  );
  searchValue = toSignal(
    this.control().valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => value?.toLowerCase()?.trim())
    )
  );
  filteredArticles: Signal<Article[]> = computed(() => {
    const searchValue = this.searchValue();
    if (!searchValue) {
      return this.articles();
    }

    return this.articles().filter(
      (article) =>
        article.title.toLowerCase().includes(searchValue) ||
        article.subtitle.toLowerCase().includes(searchValue) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchValue))
    );
  });

  private formatFile(file: BlogConfig): Article {
    return {
      ...file,
      date: new Date(file.date).toDateString(),
      routerLink: file.fileName.replace('.md', ''),
    };
  }
}
