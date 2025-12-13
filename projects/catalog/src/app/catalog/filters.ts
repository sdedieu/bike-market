import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { BikeBrand } from '../shared/models/bike';
import { BikeFilter } from '../shared/models/bike-filter';
import { BikeStore } from './+state/catalog.store';
import { ActivatedRoute, Router } from '@angular/router';

const FILTERS: BikeFilter<BikeBrand | 'all'>[] = [
  {
    label: 'brand',
    options: [
      {
        label: 'All',
        value: 'all',
      },
      ...Object.entries(BikeBrand).map(([key, value]) => ({ label: key, value })),
    ],
  },
];

@Component({
  selector: 'bmcat-catalog-filters, [bmcat-catalog-filters]',
  template: ` <form class="flex items-center gap-6">
    @for (filter of filters; track filter.label) {
      <select
        [attr.id]="filter.label"
        [attr.aria-label]="filter.label"
        (change)="changeActiveBrand($event)"
        class="text-sm text-white font-extralight py-2 px-20 bg-neutral-800"
      >
        <option class="text-center hidden" value="" disabled selected>
          {{ filter.label | uppercase }}
        </option>
        @for (option of filter.options; track option.value) {
          <option
            class="text-center"
            [value]="option.value"
            [selected]="option.value === selectedBrand()"
          >
            {{ option.label | uppercase }}
          </option>
        }
      </select>
    }
  </form>`,
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFilters {
  private readonly _store = inject(BikeStore);
  private readonly _router = inject(Router);
  private readonly _route = inject(ActivatedRoute);

  protected selectedBrand = computed(() => this._store.filters().brand);

  changeActiveBrand(event: Event) {
    const select = event.target as HTMLSelectElement;
    const brand = select.value as BikeBrand | 'all';
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: { brand },
      queryParamsHandling: 'merge',
    });
  }

  filters = FILTERS;
}
