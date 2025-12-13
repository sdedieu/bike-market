import { CurrencyPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BuyingCard } from '../shared/ui/buying-card/buying-card';
import { BikeStore } from './+state/catalog.store';

@Component({
  selector: 'bmcat-catalog-detail-page',
  host: {
    class: 'text-white',
  },
  template: `
    @let _bike = bike();
    <section class="@container flex gap-4 flex-wrap">
      <article class="flex-2 flex flex-col">
        <img class="aspect-square object-cover min-w-lg w-full" [src]="_bike?.image" />
      </article>
      <div class="flex-1 grow flex flex-col @sm:px-4">
        <p class="font-mono italic text-2xl font-light">{{ _bike?.brand | uppercase }}</p>
        <h1 class="font-mono text-6xl mb-3">{{ _bike?.name }}</h1>
      </div>
    </section>
    @if(_bike) {
    <div bmcat-buying-card [bike]="_bike"></div>
    }
  `,
  imports: [UpperCasePipe, BuyingCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly bikeStore = inject(BikeStore);

  params = toSignal(this.route.params);
  bikeId = computed(() => this.params()?.['id']);
  bikeIdEffect = effect(() => this.bikeStore.setId(this.bikeId()));
  bike = this.bikeStore.bike;
}
