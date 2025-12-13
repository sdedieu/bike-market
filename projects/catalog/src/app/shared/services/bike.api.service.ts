import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Bike } from '../models/bike';

@Injectable({
  providedIn: 'root',
})
export class BikeApiService {
  private readonly _http = inject(HttpClient);

  getAll(filters: Record<string, string | number | boolean>): Promise<Bike[]> {
    return firstValueFrom(
      this._http.get<Bike[]>(
        `api/bikes?${Object.entries(filters)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&')}`
      )
    );
  }

  getById(id: string): Promise<Bike | undefined> {
    return firstValueFrom(this._http.get<Bike | undefined>(`api/bikes/${id}`));
  }
}
