import { provideRouter, Routes } from '@angular/router';
import { RecommendationsFull } from './recommendations-full';

export const routes: Routes = [
  { path: '', component: RecommendationsFull },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
