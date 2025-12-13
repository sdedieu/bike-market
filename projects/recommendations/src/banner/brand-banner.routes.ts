import { provideRouter, Routes } from '@angular/router';
import { BrandBanner } from './brand-banner';

export const routes: Routes = [
  { path: '', component: BrandBanner },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
