import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output
} from '@angular/core';

interface TagConfig {
  background: string;
  textColor: string;
}

@Component({
  selector: 'app-article-tag',
  template: `
    <button type="button"
            class="article-tag"
            [attr.aria-label]="'Filter by ' + value()"
            [attr.aria-pressed]="selected()"
            (click)="onClick($event)"
            [style.background-color]="currentConfig().background"
            [style.color]="currentConfig().textColor">
      {{value()}}
    </button>
  `,
  styleUrl: './article-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleTagComponent {
  readonly TAG_CONFIG: Record<string, TagConfig> = {
    'angular': { background: 'var(--site-accent-soft)', textColor: 'var(--site-accent-on-soft)' },
    'primeng': { background: 'var(--site-accent-soft)', textColor: 'var(--site-accent-on-soft)' },
    'typescript': { background: 'var(--site-surface-alt)', textColor: 'var(--site-primary)' },
    'node': { background: 'var(--site-surface-alt)', textColor: 'var(--site-primary)' },
    'obsidian': { background: 'var(--site-sand)', textColor: 'var(--site-on-sand)' },
    'markdown': { background: 'var(--site-surface-alt)', textColor: 'var(--site-primary)' },
  };
  value = input.required<string>();
  selected = input(false);
  currentConfig = computed(() =>
    this.TAG_CONFIG[this.value().toLowerCase()] ?? { background: 'var(--site-sand)', textColor: 'var(--site-on-sand)' }
  );
  tagClick = output<string>();

  protected onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.tagClick.emit(this.value());
  }
}
