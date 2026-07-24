import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ReadingTimeService } from './reading-time.service';

describe('ReadingTimeService', () => {
  let service: ReadingTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    service = TestBed.inject(ReadingTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
