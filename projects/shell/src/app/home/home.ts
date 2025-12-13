import { ChangeDetectionStrategy, Component, effect, ElementRef, viewChild } from '@angular/core';
import { mountComponent } from '../utils/mount-component.utils';

@Component({
  selector: 'bm-home-page',
  template: `
    <section class="my-32 h-full" #salesBanner></section>
    <section class="py-16 px-6 h-full bg-white" #catalogBanner></section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  sales = viewChild('salesBanner', { read: ElementRef });
  catalog = viewChild('catalogBanner', { read: ElementRef });

  mountSalesEffect = effect(() => {
    const sales = this.sales();
    if (sales?.nativeElement) {
      const remoteName = 'sales';
      const exposedModule = './banner';
      const componentName = 'sales-banner-web-component';
      mountComponent({ remoteName, exposedModule, componentName }, sales.nativeElement);
    }
  });

  mountCatalogEffect = effect(() => {
    const catalog = this.catalog();
    if (catalog?.nativeElement) {
      const remoteName = 'catalog';
      const exposedModule = './banner';
      const componentName = 'catalog-banner-web-component';
      mountComponent({ remoteName, exposedModule, componentName }, catalog.nativeElement);
    }
  });
}
