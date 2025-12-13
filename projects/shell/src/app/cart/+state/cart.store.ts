import { resource, Injectable, inject, signal, computed, ResourceRef } from '@angular/core';
import { CartApiService } from '../../shared/services/cart.api.service';

export interface CartState {
  itemsCount: ResourceRef<number | undefined>;
}

function createInitialState(api: CartApiService): CartState {
  return {
    itemsCount: resource({
      loader: () => api.getItemsCount(),
    }),
  };
}

@Injectable({
  providedIn: 'root',
})
export class CartStore {
  private readonly _cartApi = inject(CartApiService);
  _state = signal(createInitialState(this._cartApi));

  state = this._state.asReadonly();

  itemsCount = computed(() => this._state().itemsCount.value());

  async add(bikeId: string) {
    await this._cartApi.addToCart(bikeId);
    this._state().itemsCount.reload();
  }
}
