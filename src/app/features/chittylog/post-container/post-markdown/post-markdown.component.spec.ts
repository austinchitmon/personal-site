import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMarkdown } from 'ngx-markdown';

import { PostMarkdownComponent } from './post-markdown.component';

describe('PostMarkdownComponent', () => {
  let component: PostMarkdownComponent;
  let fixture: ComponentFixture<PostMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostMarkdownComponent],
      providers: [provideMarkdown(), provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMarkdownComponent);
    fixture.componentRef.setInput('articleContent', '# Title');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
