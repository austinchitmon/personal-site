import { TestBed } from '@angular/core/testing';
import { FileDownloadService } from './file-download.service';

describe('FileDownloadService', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it('hands the PDF to the browser and releases its URL after the handoff', () => {
    vi.useFakeTimers();
    const create = vi.fn(() => 'blob:resume-download');
    const revoke = vi.fn();
    const originalUrl = URL;
    vi.stubGlobal('URL', class extends originalUrl {
      static override createObjectURL = create;
      static override revokeObjectURL = revoke;
    });
    let clicked: { download: string; href: string | null } | undefined;
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      clicked = { download: this.download, href: this.getAttribute('href') };
      expect(document.body.contains(this)).toBe(true);
    });
    TestBed.inject(FileDownloadService).save(new Blob(['%PDF-1.7']), 'Austin-Chitmon-Resume.pdf');
    expect(clicked?.download).toBe('Austin-Chitmon-Resume.pdf');
    expect(clicked?.href).toBe('blob:resume-download');
    expect(document.querySelector('a[href="blob:resume-download"]')).toBeNull();
    expect(revoke).not.toHaveBeenCalled();
    vi.advanceTimersByTime(60_000);
    expect(revoke).toHaveBeenCalledWith('blob:resume-download');
  });
});
