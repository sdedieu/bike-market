import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { ApiServiceMock } from '../shared/service/api.service.mock';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    { provide: ApiService, useClass: ApiServiceMock },
  ],
};
