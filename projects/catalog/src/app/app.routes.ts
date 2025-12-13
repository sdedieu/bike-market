import { provideRouter, Routes } from '@angular/router';
import { CatalogPage } from './catalog/catalog';
import { CatalogDetailsPage } from './catalog/catalog-details';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: CatalogPage,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await loadRemoteModule('recommendations', './brand-banner')).routes,
        outlet: 'recommendations-banner',
      },
    ],
  },
  { path: ':id', component: CatalogDetailsPage },
  { path: '**', pathMatch: 'full', redirectTo: 'catalog' },
];
