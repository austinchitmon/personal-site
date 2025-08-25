import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMarkdownComponent } from './post-markdown.component';

describe('PostMarkdownComponent', () => {
  let component: PostMarkdownComponent;
  let fixture: ComponentFixture<PostMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostMarkdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
