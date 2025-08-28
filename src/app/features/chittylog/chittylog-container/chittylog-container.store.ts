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
}

@Injectable()
export class ChittylogContainerStore {
  public articleSource = computed(() => this.#state().articleSource);
  public searchControl = computed(() => this.#state().searchControl);

  #state = signal<ChittylogState>({
    searchControl: new FormControl(),
    articleSource: BLOG_MANIFEST.files
  });
}
