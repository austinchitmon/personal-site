import { HttpErrorResponse } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, finalize, tap } from 'rxjs';
import { ResumeApiService } from '../../shared/api/resume-api.service';
import { FileDownloadService } from '../../shared/services/file-download.service';
import { HomeStore } from './home.store';

@Injectable()
export class HomeFacade {
  private readonly resumes = inject(ResumeApiService);
  private readonly files = inject(FileDownloadService);
  private readonly store = inject(HomeStore);
  private readonly destroyRef = inject(DestroyRef);

  readonly downloadingResume = this.store.downloading;
  readonly resumeError = this.store.error;

  public downloadResume(): void {
    if (this.store.downloading()) return;
    this.store.startDownload();
    let requestId: string | null = null;
    this.resumes.download().pipe(
      tap(response => {
        requestId = response.headers.get('X-Request-Id');
        const pdf = response.body;
        if (!pdf?.size || pdf.type.split(';')[0] !== 'application/pdf') {
          throw new Error('The resume endpoint returned an empty or non-PDF response');
        }
        this.files.save(pdf, 'Austin-Chitmon-Resume.pdf');
      }),
      catchError((error: unknown) => {
        console.error('Resume download failed', {
          endpoint: this.resumes.url,
          status: error instanceof HttpErrorResponse ? error.status : null,
          requestId: error instanceof HttpErrorResponse ? error.headers.get('X-Request-Id') : requestId,
          reason: error instanceof Error ? error.message : 'Unknown download error',
        });
        this.store.downloadFailed();
        return EMPTY;
      }),
      finalize(() => this.store.finishDownload()),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }
}
