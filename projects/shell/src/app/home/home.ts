import { ChangeDetectionStrategy, Component, effect, ElementRef, viewChild } from '@angular/core';
import { mountComponent } from '../utils/mount-component.utils';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bm-home-page',
  host: {
    class: 'bg-neutral-950',
  },
  template: `
    <section>
      <router-outlet name="recommendations-banner" />
    </section>
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
