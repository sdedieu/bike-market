import { booleanAttribute, Component, effect, input } from '@angular/core';

@Component({
  selector: 'button[bm-color]',
  host: {
    class:
      'p-1 border-1 border-transparent rounded-md disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed',
    '[class.bg-gray-900]': 'color() === "primary"',
    '[class.hover:bg-gray-700]': 'color() === "primary"',
    '[class.text-gray-100]': 'color() === "primary"',
    '[class.bg-gray-100]': 'color() === "secondary"',
    '[class.hover:bg-gray-300]': 'color() === "secondary"',
    '[class.text-gray-900]': 'color() === "secondary"',
    '[attr.disabled]': 'disabled()',
  },
  template: `<ng-content />`,
})
export class Button {
  color = input.required<'primary' | 'secondary'>({ alias: 'bm-color' });
  disabled = input(null, {
    transform: (value) => booleanAttribute(value) || null,
  });
}
