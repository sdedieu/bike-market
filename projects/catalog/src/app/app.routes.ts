import { provideRouter, Routes } from '@angular/router';
import { CatalogPage } from './catalog/catalog';
import { CatalogDetailsPage } from './catalog/catalog-details';

export const routes: Routes = [
  { path: '', component: CatalogPage },
  { path: ':id', component: CatalogDetailsPage },
  { path: '', pathMatch: 'full', redirectTo: 'catalog' },
];
