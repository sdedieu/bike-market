import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CardBottomStart, CardBottomEnd, Card } from '../card/card';
import { Bike } from '../../models/bike';

@Component({
  selector: 'bm-bike-card, [bm-bike-card]',
  template: ` @let _bike = bike();
    <a [href]="'/catalog/' + _bike.id" bm-card class="relative bg-contrast/5 text-white">
      <img
        [src]="_bike.image"
        class="aspect-video object-cover"
        [style.border-radius]="'inherit'"
      />
      <bm-card-bottom-start> {{ _bike.name }} </bm-card-bottom-start>
      <bm-card-bottom-end class="flex flex-col items-center">
        <p>Price</p>
        <p>{{ _bike.price | currency : 'EUR' : 'symbol' : '1.0-0' }}</p>
      </bm-card-bottom-end>
    </a>`,
  imports: [CardBottomStart, CardBottomEnd, Card, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BikeCard {
  bike = input.required<Bike>();
}
