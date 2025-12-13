import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'bm-card, a[bm-card], button[bm-card]',
  host: {
    class: 'overflow-hidden  relative group',
  },
  template: `<ng-content />
    @if(hostTag === 'a' || hostTag === 'button') {
    <div class="absolute left-0 top-0 h-full w-full bg-white/20 hidden group-hover:block"></div>
    <svg
      class="w-6 h-6 absolute top-4 right-4 hidden group-hover:block"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>

    } @else {
    <ng-content select="bm-card-top-start" />
    }
    <ng-content select="bm-card-top-end" />
    <ng-content select="bm-card-bottom-start" />
    <ng-content select="bm-card-bottom-end" /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly hostTag = this.el.nativeElement.tagName.toLowerCase();
}

@Component({
  selector: 'bm-card-top-start',
  host: {
    class: 'absolute top-4 left-4',
  },
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTopStart {}

@Component({
  selector: 'bm-card-top-end',
  host: {
    class: 'absolute top-4 right-4',
  },
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTopEnd {}

@Component({
  selector: 'bm-card-bottom-start',
  host: {
    class: 'absolute bottom-4 left-4',
  },
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBottomStart {}

@Component({
  selector: 'bm-card-bottom-end',
  host: {
    class: 'absolute bottom-4 right-4',
  },
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBottomEnd {}
