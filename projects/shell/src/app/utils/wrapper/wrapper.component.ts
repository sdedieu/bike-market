import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mountComponent } from '../mount-component.utils';
@Component({
  standalone: true,
  template: '<div #vc></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent {
  vc = viewChild('vc', { read: ElementRef });
  private readonly route = inject(ActivatedRoute);

  mountSalesEffect = effect(() => {
    const vc = this.vc();
    if (vc?.nativeElement) {
      mountComponent(this.route.snapshot.data as any, vc?.nativeElement);
    }
  });
}
