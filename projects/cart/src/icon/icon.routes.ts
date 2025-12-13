import { Routes } from '@angular/router';
import { CartIcon } from './icon';

export const routes: Routes = [
  { path: '', component: CartIcon },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
