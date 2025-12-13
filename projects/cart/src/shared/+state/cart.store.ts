import { resource, Injectable, inject, signal, computed, ResourceRef } from '@angular/core';
import { CartApiService } from '../services/cart.api.service';
import { Cart, Item } from '../models/item';

export interface CartState {
  cart: ResourceRef<Record<string, Item> | undefined>;
}

function createInitialState(api: CartApiService): CartState {
  return {
    cart: resource({
      loader: () => api.getCart(),
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

  cart = computed(() => this._state().cart.value());

  items = computed(() => Object.values(this.cart() ?? {}));

  itemsCount = computed(() => this.items()?.length ?? 0);

  cartTotalAmount = computed(() =>
    this.items()?.reduce((sum, item) => item.price * item.quantity + sum, 0)
  );

  async add(bikeId: string) {
    await this._cartApi.addToCart(bikeId);
    this._state().cart.reload();
  }

  async setQuantity(itemId: string, quantity: number) {
    await this._cartApi.setQuantity(itemId, quantity);
    this._state().cart.reload();
  }

  async removeFromCart(itemId: string) {
    await this._cartApi.removeFromCart(itemId);
    this._state().cart.reload();
  }
}
