import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartStore } from '../shared/+state/cart.store';
import { Badge } from '../shared/ui/badge/badge';

@Component({
  selector: 'app-root-cart-icon',
  host: {
    class: 'flex items-center flex-col w-3/4 m-auto',
  },
  template: `
    <a routerLink="/cart" class="px-3" [bm-badge]="itemsCount()">
      <svg
        class="w-10 h-10"
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
          stroke-width="1.5"
          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
        />
      </svg>
    </a>
  `,
  imports: [Badge, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIcon {
  private readonly _cartStore = inject(CartStore);

  protected readonly itemsCount = this._cartStore.itemsCount;

  @HostListener('window:cart', ['$event'])
  async onCartEvent(event: Event) {
    const { detail } = event as CustomEvent;
    if (detail.action === 'addToCart') {
      this._cartStore.add(detail.bikeId);
    }
  }

  goToCart() {
    const event = new CustomEvent('router', {
      detail: {
        route: '/cart',
      },
    });
    window.dispatchEvent(event);
  }
}
