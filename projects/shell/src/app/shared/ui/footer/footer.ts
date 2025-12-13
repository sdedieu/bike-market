import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bm-footer-start, [bm-footer-start]',
  template: `
    <ul class="flex items-center">
      <ng-content />
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterStart {}

@Component({
  selector: 'bm-footer-end, [bm-footer-end]',
  template: `
    <ul class="flex items-center">
      <ng-content />
    </ul>
  `,
})
export class FooterEnd {}

@Component({
  selector: 'bm-footer, [bm-footer]',
  host: {
    class: 'z-2 px-4 py-3 bg-neutral-950 text-white flex justify-between items-center text-xs',
  },
  template: `
    <ng-content [select]="'bm-footer-start'" />
    <ng-content [select]="'bm-footer-end'" />
  `,
})
export class Footer {}
