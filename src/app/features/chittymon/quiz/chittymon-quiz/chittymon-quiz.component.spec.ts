import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittymonQuizComponent } from './chittymon-quiz.component';

describe('ChittymonQuizComponent', () => {
  let component: ChittymonQuizComponent;
  let fixture: ComponentFixture<ChittymonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChittymonQuizComponent],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChittymonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
