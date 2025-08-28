import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output
} from '@angular/core';
import { Tag } from 'primeng/tag';

interface TagConfig {
  background: string;
  textColor: string;
}

@Component({
  selector: 'app-article-tag',
  imports: [
    Tag
  ],
  template: `
    <p-tag severity="info"
           (click)="onClick.emit(value())"
           [style.border-radius]="'20px'"
           [style.font-weight]="'500'"
           [style.background-color]="currentConfig().background"
           [style.color]="currentConfig().textColor"
           [value]="value()"></p-tag>
  `,
  styleUrl: './article-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleTagComponent {
  readonly TAG_CONFIG: Record<string, TagConfig> = {
    'angular': { background: '#a51e24', textColor: '#FFFFFF' },
    'primeng': { background: '#a51e24', textColor: '#FFFFFF' },
    'typescript': { background: '#007acc', textColor: '#FFFFFF' },
    'node': { background: '#3e863d', textColor: '#FFFFFF' },
    'obsidian': { background: '#582bac', textColor: '#FFFFFF' },
    'markdown': { background: '#196989', textColor: '#FFFFFF' },
  };
  value = input.required<string>();
  currentConfig = computed(() =>
    this.TAG_CONFIG[this.value().toLowerCase()] ?? { background: 'rgba(51,51,51,0.88)', textColor: '#FFFFFF' }
  );
  onClick = output<string>();
}
