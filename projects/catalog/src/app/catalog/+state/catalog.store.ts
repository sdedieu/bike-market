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

interface FilterState {
  brand: BikeBrand | 'all';
}

const defaultState: FilterState = {
  brand: 'all',
};

@Injectable({
  providedIn: 'root',
})
export class BikeFilterFormStore extends GenricFormStore<FilterState> {
  protected override readonly _state = signal(defaultState);
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
  private readonly _formStore = inject(BikeFilterFormStore);
  private readonly _bikeApi = inject(BikeApiService);
  _state = signal(createInitialState(this._bikeApi, this._formStore.state));

  state = this._state.asReadonly();

  bikes = computed(() => this.state().bikes.value());
  bikesResourceStatus = computed(() => this.state().bikes.status());

  bike = computed(() => this.state().bike.value());
  bikeResourceStatus = computed(() => this.state().bike.status());

  setId(id: string) {
    this._state().bikeId.set(id);
  }
}
