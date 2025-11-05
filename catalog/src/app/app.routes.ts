import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'catalog/child-a',
    loadComponent: async () =>
      (await import('./child-a/child-a.component')).ChildAComponent,
  },
  {
    path: 'catalog/child-b',
    loadComponent: async () =>
      (await import('./child-b/child-b.component')).ChildBComponent,
  },
  { path: 'catalog', redirectTo: '/catalog/child-a', pathMatch: 'full' },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
