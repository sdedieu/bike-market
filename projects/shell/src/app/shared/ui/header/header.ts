import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'bm-header-start, [bm-header-start]',
  template: `
    <ul class="flex items-center">
      <ng-content />
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderStart {}

@Component({
  selector: 'bm-header-end, [bm-header-end]',
  template: `
    <ul class="flex items-center">
      <ng-content />
    </ul>
  `,
})
export class HeaderEnd {}

@Component({
  selector: 'bm-header, [bm-header]',
  host: {
    class:
      'z-2 px-4 py-1 bg-transparent hover:bg-white text-white hover:text-neutral-950 flex justify-between items-center text-xl sticky top-0',
    '[class.bg-white]': 'isReversed()',
    '[class.text-neutral-950!]': 'isReversed()',
  },
  template: `
    <ng-content [select]="'bm-header-start'" />
    <ng-content [select]="'bm-header-end'" />
  `,
})
export class Header {
  readonly router = inject(Router);
  readonly scroll = signal(0);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scroll.set(window.pageYOffset);
  }

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((_) => this.router.url.split('/').at(1)?.split('?').at(0))
    )
  );

  private readonly isHome = computed(() => {
    const url = this.url();
    return url && ['home', ''].includes(url);
  });

  private readonly isScrolled = computed(() => this.scroll() > 0);

  readonly isReversed = computed(() => this.isScrolled() || !this.isHome());
}
