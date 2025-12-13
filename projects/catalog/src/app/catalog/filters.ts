import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BikeBrand } from '../shared/models/bike';
import { BikeFilter } from '../shared/models/bike-filter';
import { BikeFilterFormStore } from './+state/catalog.store';
import { Field } from '@angular/forms/signals';

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
    @for(filter of filters; track filter.label) {
    <select
      [attr.id]="filter.label"
      [attr.aria-label]="filter.label"
      [field]="bikeFilterForm.brand"
      class="text-sm text-white font-extralight py-2 px-20 bg-neutral-800"
    >
      <option class="text-center hidden" value="" disabled selected>
        {{ filter.label | uppercase }}
      </option>
      @for(option of filter.options; track option.value) {
      <option class="text-center" [value]="option.value">{{ option.label | uppercase }}</option>
      }
    </select>
    }
  </form>`,
  imports: [UpperCasePipe, Field],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogFilters {
  private readonly bikeFilterFormStore = inject(BikeFilterFormStore);

  bikeFilterForm = this.bikeFilterFormStore.form();

  filters = FILTERS;
}
