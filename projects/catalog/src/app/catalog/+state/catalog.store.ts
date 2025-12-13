import {
  computed,
  inject,
  Injectable,
  resource,
  ResourceRef,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { GenricFormStore } from '../../shared/services/generic-form.store';
import { Bike, BikeBrand } from '../../shared/models/bike';
import { BikeApiService } from '../../shared/services/bike.api.service';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, Observable, startWith, tap } from 'rxjs';

interface FilterState {
  brand: BikeBrand | 'all';
}

export interface BikeState {
  bikes: ResourceRef<Bike[] | undefined>;
  bike: ResourceRef<Bike | undefined>;
  bikeId: WritableSignal<string>;
}

function createInitialState(api: BikeApiService, filters: Signal<FilterState>): BikeState {
  const bikeId = signal('');

  return {
    bikeId,
    bikes: resource({
      params: () => ({ ...filters() }),
      loader: ({ params }) => api.getAll(params),
    }),
    bike: resource({
      params: () => ({ id: bikeId() }),
      loader: ({ params }) => api.getById(params.id),
    }),
  };
}

@Injectable({
  providedIn: 'root',
})
export class BikeStore {
  private readonly _bikeApi = inject(BikeApiService);
  private readonly _router = inject(Router);

  private readonly _filters$: Observable<FilterState> = this._router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => ({
      brand: (this._router.parseUrl(this._router.url).queryParams['brand'] as BikeBrand) ?? 'all',
    })),
    startWith({ brand: 'all' as 'all' }),
  );

  readonly filters = toSignal<FilterState>(this._filters$, { requireSync: true });

  private readonly _state = signal(createInitialState(this._bikeApi, this.filters));

  readonly state = this._state.asReadonly();

  readonly bikes = computed(() => this.state().bikes.value());
  readonly bikesResourceStatus = computed(() => this.state().bikes.status());

  readonly bike = computed(() => this.state().bike.value());
  readonly bikeResourceStatus = computed(() => this.state().bike.status());

  setId(id: string) {
    this._state().bikeId.set(id);
  }
}
