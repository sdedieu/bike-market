import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

const BADGE_CONTENT_CLASS =
  'absolute left-2/3 bottom-2/3 text-xs px-1 rounded-full text-white bg-neutral-800';

@Directive({
  selector: '[bm-badge]',
  host: {
    class: 'relative',
  },
})
export class Badge implements OnInit {
  value = input('', {
    alias: 'bm-badge',
    transform: (value: string | number | undefined) => (value ? `${value}` : ''),
  });

  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly _renderer = inject(Renderer2);

  /** Visible badge element. */
  private _badgeElement: HTMLElement | undefined;

  constructor() {
    effect(() => {
      const value = `${this.value() ?? ''}`.trim();
      this._badgeElement && (this._badgeElement.textContent = value);
    });
  }

  ngOnInit(): void {
    this._badgeElement = this._createBadgeElement();
  }

  _createBadgeElement() {
    const badgeElement = this._renderer.createElement('span');
    badgeElement.classList.add(...BADGE_CONTENT_CLASS.split(' '));

    this._elementRef.nativeElement.appendChild(badgeElement);

    return badgeElement;
  }
}
