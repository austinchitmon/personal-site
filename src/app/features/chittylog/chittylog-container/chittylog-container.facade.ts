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
  filterList = computed(() => {
    return [
      ...this.searchValue() ? [`"${this.searchValue()}"`] : [],
      ...this.selectedTags()?.length ? this.selectedTags() : []
    ];
  });
  selectedTags: Signal<string[]> = computed(() => {
    return [...this.#store.selectedTags()];
  });
  searchValue = toSignal(
    this.control().valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(value => value?.toLowerCase()?.trim())
    )
  );
  filteredArticles: Signal<Article[]> = computed(() => {
    const searchValue = this.searchValue();
    const selectedTags = this.selectedTags();

    return this.articles().filter(
      (article) =>
        this.includesSearchValue(article, searchValue) &&
        this.includesTag(article.tags, selectedTags)
    );
  });
  allTags: Signal<string[]> = computed(() => {
    return [...new Set(this.articles().flatMap(article => article.tags))];
  });

  public toggleTagSelection(tag: string) {
    this.#store.toggleTagSelection(tag);
  }

  private formatFile(file: BlogConfig): Article {
    return {
      ...file,
      date: new Date(file.date).toDateString(),
      routerLink: file.fileName.replace('.md', ''),
    };
  }

  private includesSearchValue(article: Article, searchValue: string | undefined): boolean {
    return searchValue ?
      article.title.toLowerCase().includes(searchValue) ||
      article.subtitle.toLowerCase().includes(searchValue) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchValue))
      : true;
  }

  private includesTag(articleTags: readonly string[], selectedTags: string[]): boolean {
    return selectedTags?.length ? selectedTags.some(tag =>
      articleTags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    ) : true;
  }
}
