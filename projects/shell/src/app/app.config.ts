import {
  ApplicationConfig,
  Injectable,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

// export function apiInterceptor(
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> {
//   // Skip absolute URLs
//   if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
//     return next(req);
//   }

//   const apiReq = req.clone({
//     url: `${environment.apiUrl}${req.url}`,
//   });

//   return next(apiReq);
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
