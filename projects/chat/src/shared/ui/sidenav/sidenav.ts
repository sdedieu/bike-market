import { ChangeDetectionStrategy, Component, effect, input, model } from '@angular/core';

@Component({
  selector: 'bm-sidenav',
  template: `
    @let _open = open();
    @if (_open) {
      <div
        class="absolute z-2 top-0 left-0 w-full h-full bg-neutral-950/50"
        (click)="open.set(false)"
      ></div>
    }
    <button
      class="fixed z-3 top-2 right-2"
      [class.hidden]="!_open"
      [class.block]="_open"
      (click)="open.set(false)"
    >
      <svg
        class="w-6 h-6 text-gray-950"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>
    </button>
    <aside
      class="fixed z-2 top-0 right-0 duration-300 ease-in-out shadow-xl/30 h-full min-h-screen"
      [class.min-w-0]="!_open"
      [class.w-0]="!_open"
      [class.w-1/3]="_open"
      [class.min-w-2xs]="_open"
    >
      <ng-content />
    </aside>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidenav {
  open = model();
}
