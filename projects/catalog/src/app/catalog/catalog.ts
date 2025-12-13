import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BikeCard } from '../shared/ui/bike-card/bike-card';
import { CatalogFilters } from './filters';
import { BikeStore } from './+state/catalog.store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bmcat-catalog-page',
  host: {
    class: 'z-1 flex flex-col gap-6',
  },
  template: `
    <aside bmcat-catalog-filters></aside>
    @let _bikes = bikes();
    <section class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
      @for (bike of _bikes; track bike.id; let i = $index) {
        <article bm-bike-card [bike]="bike"></article>

        @if (i === 3) {
          <div class="col-span-1 lg:col-span-2 2xl:col-span-3">
            <router-outlet name="recommendations-banner" />
          </div>
        }
      }
    </section>
  `,
  imports: [BikeCard, CatalogFilters, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPage {
  private readonly bikeStore = inject(BikeStore);

  bikes = this.bikeStore.bikes;
  bikesResourceStatus = this.bikeStore.bikesResourceStatus;
}
