import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './brand-banner.routes';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
