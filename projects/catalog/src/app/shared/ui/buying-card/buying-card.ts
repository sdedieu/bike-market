import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Bike } from '../../models/bike';
import { BikeStore } from '../../../catalog/+state/catalog.store';

@Component({
  selector: 'bmcat-buying-card, [bmcat-buying-card]',
  host: {
    class:
      'fixed bottom-4 right-4 md:right-22 flex w-sm p-2 bg-neutral-800 items-stretch justify-between',
  },
  template: `
    @let _bike = bike();
    <div class="font-ligh flex-1 px-2">
      <p>{{ _bike?.name }}</p>
      <p class="text-xs text-neutral-400">
        From {{ _bike?.price | currency : 'EUR' : 'symbol' : '1.0-0' }}
      </p>
    </div>
    <button
      class="px-2 flex justify-center items-center flex-1 bg-white text-neutral-950"
      (click)="addToCart(_bike.id)"
    >
      ADD TO CART
    </button>
  `,
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyingCard {
  bike = input.required<Bike>();

  private readonly _store = inject(BikeStore);

  addToCart(bikeId: string) {
    const event = new CustomEvent('cart', {
      detail: {
        action: 'addToCart',
        bikeId,
      },
    });
    window.dispatchEvent(event);
  }
}
