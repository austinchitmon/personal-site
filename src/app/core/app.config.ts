import {
  HttpClient,
  provideHttpClient,
  withInterceptors,
  withXhr
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
import { provideMarkdown } from 'ngx-markdown';
import { provideOptimus } from '@openng/optimus-ui/config';
import { authInterceptor } from '../shared/auth/auth.interceptor';
import { routes } from './app.routes';
import { MiamiPreset } from './theme/miami.preset';

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
    provideHttpClient(withXhr(), withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideOptimus({
      ripple: true,
      theme: {
        preset: MiamiPreset,
        options: { darkModeSelector: '[data-color-scheme="dark"]' }
      }
    }),
    provideMarkdown({ loader: HttpClient })
  ]
};
