import { Routes } from '@angular/router';
import { CartPage } from './cart/cart';

export const routes: Routes = [
  { path: '', component: CartPage },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
