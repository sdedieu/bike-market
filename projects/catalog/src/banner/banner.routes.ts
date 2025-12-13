import { provideRouter, Routes } from '@angular/router';
import { Banner } from './banner';

export const routes: Routes = [
  { path: '', component: Banner },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
