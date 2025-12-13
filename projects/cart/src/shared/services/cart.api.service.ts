import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  private readonly _http = inject(HttpClient);

  getCart(): Promise<Record<string, Item>> {
    return firstValueFrom(this._http.get<Record<string, Item>>(`api/cart/items`));
  }

  addToCart(bikeId: string): Promise<void> {
    return firstValueFrom(this._http.post<void>(`api/cart/item`, { bikeId }));
  }

  setQuantity(bikeId: string, quantity: number): Promise<void> {
    return firstValueFrom(this._http.post<void>(`api/cart/items/${bikeId}/quantity`, { quantity }));
  }

  removeFromCart(bikeId: string) {
    return firstValueFrom(this._http.delete(`api/cart/items/${bikeId}`));
  }
}
