import {
  HttpClient,
  provideHttpClient
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';
import Aura from '@openng/optimus-ui-themes/aura';
import { provideMarkdown } from 'ngx-markdown';
import { provideOptimus } from '@openng/optimus-ui/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // always go to top
        anchorScrolling: 'enabled',       // support #anchors
      }),
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideOptimus({
      ripple: true,
      theme: {
        preset: Aura
      }
    }),
    provideMarkdown({ loader: HttpClient })
  ]
};
