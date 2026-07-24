import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { of } from 'rxjs';

import { PostContainerComponent } from './post-container.component';

describe('PostContainerComponent', () => {
  let component: PostContainerComponent;
  let fixture: ComponentFixture<PostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostContainerComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMarkdown(),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({})) }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
