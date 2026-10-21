import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FileDownloadService {
  private readonly document = inject(DOCUMENT);

  save(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = this.document.createElement('a');
    try {
      link.href = url;
      link.download = filename;
      this.document.body.appendChild(link);
      link.click();
    } finally {
      link.remove();
      // Give the browser time to hand off the download before releasing the blob.
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    }
  }
}
