import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { environment } from '../../../../environments/environment';
import { FileDownloadService } from '../../../shared/services/file-download.service';
import { routes } from '../../app.routes';

describe('Shared resume route', () => {
  const url = `${environment.apiBase}/files/resume.pdf`;
  let requests: HttpTestingController;
  let save: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    save = vi.fn();
    TestBed.configureTestingModule({ providers: [
      provideRouter(routes), provideHttpClient(), provideHttpClientTesting(),
      { provide: FileDownloadService, useValue: { save } },
    ] });
    requests = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    requests.verify();
    vi.restoreAllMocks();
  });

  it.each(['/resume', '/resume/'])('starts one download on a fresh visit to %s', async path => {
    const harness = await RouterTestingHarness.create(path);
    const pdf = new Blob(['%PDF-1.7'], { type: 'application/pdf' });
    const button = harness.routeNativeElement!.querySelector('button')!;
    expect(button.disabled).toBe(true);
    expect(harness.routeNativeElement!.querySelector('h1')?.getAttribute('aria-label')).toBe('Thank You!');
    expect(button.getAttribute('aria-label')).toBe("Download Austin Chitmon's resume");
    expect(TestBed.inject(Title).getTitle()).toBe('Austin Chitmon — Resume');

    requests.expectOne(url).flush(pdf);
    harness.detectChanges();
    expect(save).toHaveBeenCalledExactlyOnceWith(pdf, 'Austin-Chitmon-Resume.pdf');
    expect(button.disabled).toBe(false);
    // Further rendering must not start another automatic download.
    harness.detectChanges();
    requests.expectNone(url);
  });

  it('offers a working manual retry after the automatic request fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const harness = await RouterTestingHarness.create('/resume');
    requests.expectOne(url).flush(new Blob(['Unavailable']), { status: 503, statusText: 'Service Unavailable' });
    harness.detectChanges();
    const page = harness.routeNativeElement!;
    expect(page.querySelector('[role="alert"]')?.textContent).toContain('Please try again');
    const button = page.querySelector('button')!;
    expect(button.disabled).toBe(false);

    button.click();
    harness.detectChanges();
    expect(button.disabled).toBe(true);
    expect(page.querySelector('[role="alert"]')).toBeNull();
    requests.expectOne(url).flush(new Blob(['%PDF-1.7'], { type: 'application/pdf' }));
    harness.detectChanges();
    expect(save).toHaveBeenCalledOnce();
    expect(button.disabled).toBe(false);
    expect(button.textContent).toContain('(If nothing downloads, click here)');
  });
});
