import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartStore } from '../../shared/+state/cart.store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bmcart-cart',
  host: {
    class: 'flex items-center min-h-[calc(100vh-113px)] h-full',
  },
  imports: [CurrencyPipe],
  template: ` <div
    class="mx-auto w-2/3 rounded-sm bg-neutral-800 flex flex-col gap-12 p-6 text-white"
  >
    <h1 class="text-center font-mono text-3xl tracking-wide">Cart items</h1>
    <ul>
      <article class="grid grid-cols-3 items-center font-mono">
        <label class="">Name</label>
        <span class="">Price</span>
        <span class="">Quantity</span>
      </article>
      @for(item of items(); track item.id) {
      <li class="mb-4">
        <article class="grid grid-cols-3 items-center font-mono">
          <label class="">{{ item.name }}</label>
          <span class="">{{ item.price | currency : 'EUR' : 'symbol' : '1.0-0' }}</span>
          <span class="flex">
            <button
              class="rounded-full text-center w-6 hover:bg-neutral-950/40"
              (click)="setQuantity(item.id, item.quantity - 1)"
            >
              -
            </button>
            <input
              readonly
              [value]="item.quantity"
              type="number"
              min="1"
              step="1"
              max="99"
              class="w-8 text-end"
            />
            <button
              class="rounded-full text-center w-6 hover:bg-neutral-950/40"
              (click)="setQuantity(item.id, item.quantity + 1)"
            >
              +
            </button>
            <button class="ml-auto" (click)="removeFromCart(item.id)">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </button>
          </span>
        </article>
      </li>
      }
    </ul>
    <p class="text-right font-mono text-xl ">
      Total amount: {{ cartTotalAmount() | currency : 'EUR' : 'symbol' : '1.0-0' }}
    </p>
    <button class="p-4 flex justify-center items-center flex-1 bg-white text-neutral-950">
      PROCEED TO CHECKOUT
    </button>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPage {
  private readonly _store = inject(CartStore);

  protected readonly items = this._store.items;
  protected readonly cartTotalAmount = this._store.cartTotalAmount;

  setQuantity = this._store.setQuantity.bind(this._store);
  removeFromCart = this._store.removeFromCart.bind(this._store);
}
