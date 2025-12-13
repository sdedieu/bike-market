import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BikeCard } from '../shared/ui/bike-card/bike-card';
import { CatalogFilters } from './filters';
import { BikeStore } from './+state/catalog.store';

@Component({
  selector: 'bmcat-catalog-page',
  host: {
    class: 'z-1 flex flex-col gap-4',
  },
  template: `
    <aside bmcat-catalog-filters></aside>
    @let _bikes = bikes();
    <section class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
      @for(bike of _bikes; track bike.id) {
      <article bm-bike-card [bike]="bike"></article>
      }
    </section>
  `,
  imports: [BikeCard, CatalogFilters],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage {
  private readonly bikeStore = inject(BikeStore);

  bikes = this.bikeStore.bikes;
  bikesResourceStatus = this.bikeStore.bikesResourceStatus;
}
