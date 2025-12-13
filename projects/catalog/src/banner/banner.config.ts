import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './banner.routes';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
