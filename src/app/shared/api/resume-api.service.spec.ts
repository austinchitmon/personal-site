import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TimeoutError } from 'rxjs';
import { authInterceptor } from '../auth/auth.interceptor';
import { supabase } from '../auth/supabase-client';
import { PUBLIC_HTTP_REQUEST } from './public-http-request';
import { ResumeApiService } from './resume-api.service';

describe('ResumeApiService', () => {
  let api: ResumeApiService;
  let requests: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([authInterceptor])), provideHttpClientTesting()],
    });
    api = TestBed.inject(ResumeApiService);
    requests = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    requests.verify();
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('downloads a PDF without depending on Supabase authentication', () => {
    const session = vi.spyOn(supabase.auth, 'getSession').mockRejectedValue(new Error('Auth unavailable'));
    const received = vi.fn();
    api.download().subscribe(received);
    const request = requests.expectOne(api.url);
    expect(request.request.method).toBe('GET');
    expect(request.request.responseType).toBe('blob');
    expect(request.request.context.get(PUBLIC_HTTP_REQUEST)).toBe(true);
    expect(request.request.headers.has('Authorization')).toBe(false);
    request.flush(new Blob(['%PDF-1.7'], { type: 'application/pdf' }));
    expect(received).toHaveBeenCalledOnce();
    expect(session).not.toHaveBeenCalled();
  });

  it('times out a stalled download so the user can retry', () => {
    vi.useFakeTimers();
    const failed = vi.fn();
    api.download().subscribe({ error: failed });
    const request = requests.expectOne(api.url);
    vi.advanceTimersByTime(15_000);
    expect(request.cancelled).toBe(true);
    expect(failed).toHaveBeenCalledWith(expect.any(TimeoutError));
  });
});
