import { computed, effect, inject, Injectable, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

export interface GlobalState {
  currentRoute: Signal<string | undefined>;
}

function createInitialState(router: Router): GlobalState {
  return {
    currentRoute: toSignal(
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e.urlAfterRedirects)
      )
    ),
  };
}

@Injectable({
  providedIn: 'root',
})
export class GlobalStore {
  private readonly _router = inject(Router);

  private readonly _state = signal(createInitialState(this._router));

  readonly state = this._state.asReadonly();

  readonly shouldApplyBackground = computed(
    () => this.state().currentRoute()?.split('/').at(1) !== 'home'
  );
}
