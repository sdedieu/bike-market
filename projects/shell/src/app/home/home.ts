import { ChangeDetectionStrategy, Component, effect, ElementRef, viewChild } from '@angular/core';
import { mountComponent } from '../utils/mount-component.utils';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bm-home-page',
  host: {
    class: 'bg-neutral-950',
  },
  template: `
    <section class="my-32 h-full">
      <router-outlet name="catalog-banner" name="sales-banner" />
    </section>
    <section class="py-16 px-6 h-full bg-white">
      <router-outlet class="py-16 px-6 h-full bg-white" name="catalog-banner" />
    </section>
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
