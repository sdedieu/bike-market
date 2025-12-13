import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  private readonly _http = inject(HttpClient);

  getItemsCount(): Promise<number> {
    return firstValueFrom(this._http.get<number>(`api/cart/items-count`));
  }

  addToCart(bikeId: string): Promise<void> {
    return firstValueFrom(this._http.post<void>(`api/cart/item`, { bikeId }));
  }
}
