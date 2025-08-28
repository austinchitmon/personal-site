import {
  computed,
  Injectable,
  signal
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BLOG_MANIFEST } from '../../../shared/data/blog-manifest';

export interface BlogConfig {
  fileName: Markdown;
  cover: Image;
  title: string;
  subtitle: string;
  date: string;
  tags: readonly string[];
}

type Markdown = `${string}.md`;
type Image =
  | `${string}.png`
  | `${string}.jpg`
  | `${string}.jpeg`
  | `${string}.gif`;

export interface Article extends BlogConfig {
  routerLink: string;
}

interface ChittylogState {
  searchControl: FormControl<string>;
  articleSource: readonly BlogConfig[];
  selectedTags: Set<string>;
}

@Injectable()
export class ChittylogContainerStore {
  public articleSource = computed(() => this.#state().articleSource);
  public searchControl = computed(() => this.#state().searchControl);
  public selectedTags = computed(() => {
    console.log('selectedTags store ran');
    return this.#state().selectedTags;
  });

  #state = signal<ChittylogState>({
    searchControl: new FormControl(),
    articleSource: BLOG_MANIFEST.files,
    selectedTags: new Set<string>(),
  });

  public toggleTagSelection(tag: string): void {
    const tags = this.#state().selectedTags;
    return tags.has(tag) ? this.removeTag(tag) : this.addTag(tag);
  }

  private addTag(tag: string): void {
    this.#state.update((state) => ({
      ...state,
      selectedTags: new Set([...state.selectedTags, tag]),
    }));
  }

  private removeTag(tag: string): void {
    this.#state.update((state) => {
      const newTags = new Set(state.selectedTags);
      newTags.delete(tag);
      return {
        ...state,
        selectedTags: newTags,
      };
    });
  }
}
