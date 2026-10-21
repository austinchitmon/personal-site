import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Subject, of } from 'rxjs';
import { ResumeApiService } from '../../shared/api/resume-api.service';
import { FileDownloadService } from '../../shared/services/file-download.service';
import { HomeFacade } from './home-facade';
import { HomeStore } from './home.store';

describe('HomeFacade resume downloads', () => {
  let facade: HomeFacade;
  let events: Subject<HttpResponse<Blob>>;
  let download: ReturnType<typeof vi.fn>;
  let save: ReturnType<typeof vi.fn>;
  let log: ReturnType<typeof vi.spyOn>;
  const endpoint = 'https://api.chitmon.com/files/resume.pdf';

  function response() {
    return new HttpResponse({ body: new Blob(['%PDF-1.7'], { type: 'application/pdf' }) });
  }

  beforeEach(() => {
    events = new Subject();
    download = vi.fn(() => events);
    save = vi.fn();
    log = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    TestBed.configureTestingModule({ providers: [
      HomeFacade, HomeStore,
      { provide: ResumeApiService, useValue: { url: endpoint, download } },
      { provide: FileDownloadService, useValue: { save } },
    ] });
    facade = TestBed.inject(HomeFacade);
  });

  afterEach(() => {
    events.complete();
    vi.restoreAllMocks();
  });

  it('saves a successful PDF and prevents duplicate in-flight requests', () => {
    facade.downloadResume();
    facade.downloadResume();
    expect(facade.downloadingResume()).toBe(true);
    expect(download).toHaveBeenCalledOnce();
    const pdf = response();
    events.next(pdf);
    events.complete();
    expect(save).toHaveBeenCalledWith(pdf.body, 'Austin-Chitmon-Resume.pdf');
    expect(facade.downloadingResume()).toBe(false);
    expect(facade.resumeError()).toBeNull();
  });

  it('logs a server reference without the response body and allows retrying', () => {
    facade.downloadResume();
    events.error(new HttpErrorResponse({
      status: 503, url: endpoint,
      headers: new HttpHeaders({ 'X-Request-Id': 'download-reference' }),
      error: { privateDetails: 'do not log this' },
    }));
    expect(facade.downloadingResume()).toBe(false);
    expect(facade.resumeError()).toContain('Please try again');
    expect(log).toHaveBeenCalledWith('Resume download failed', expect.objectContaining({
      endpoint, status: 503, requestId: 'download-reference',
    }));
    expect(JSON.stringify(log.mock.calls)).not.toContain('privateDetails');
    download.mockReturnValue(of(response()));
    facade.downloadResume();
    expect(facade.resumeError()).toBeNull();
    expect(save).toHaveBeenCalledOnce();
  });

  it('shows feedback when the server cannot be reached', () => {
    facade.downloadResume();
    events.error(new HttpErrorResponse({ status: 0, url: endpoint }));
    expect(facade.resumeError()).toBeTruthy();
    expect(facade.downloadingResume()).toBe(false);
    expect(log).toHaveBeenCalledWith('Resume download failed', expect.objectContaining({ status: 0 }));
  });

  it('refuses HTML and empty responses instead of saving a broken PDF', () => {
    facade.downloadResume();
    events.next(new HttpResponse({ body: new Blob(['<html>Error</html>'], { type: 'text/html' }) }));
    expect(save).not.toHaveBeenCalled();
    expect(facade.resumeError()).toBeTruthy();
    download.mockReturnValue(of(new HttpResponse({ body: new Blob([], { type: 'application/pdf' }) })));
    facade.downloadResume();
    expect(save).not.toHaveBeenCalled();
    expect(facade.resumeError()).toBeTruthy();
  });

  it('reports browser handoff failures and restores the download button', () => {
    save.mockImplementation(() => { throw new Error('Browser refused the download'); });
    facade.downloadResume();
    events.next(response());
    expect(facade.downloadingResume()).toBe(false);
    expect(facade.resumeError()).toBeTruthy();
    expect(log).toHaveBeenCalledWith('Resume download failed', expect.objectContaining({
      reason: 'Browser refused the download',
    }));
  });
});
