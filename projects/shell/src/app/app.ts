import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  resource,
  signal,
  viewChild,
} from '@angular/core';
import {
  RouterOutlet,
  RouterLinkWithHref,
  RouterLinkActive,
  RouterLink,
  Router,
} from '@angular/router';
import { mountComponent } from './utils/mount-component.utils';
import { Badge } from './shared/ui/badge/badge';
import { Header, HeaderStart, HeaderEnd } from './shared/ui/header/header';
import { Logo } from './shared/ui/logo/logo';
import { CartApiService } from './shared/services/cart.api.service';
import { CartStore } from './cart/+state/cart.store';

type Links = Link[];

interface Link {
  label: string;
  route: string;
  queryParams?: { [key: string]: string };
  class?: string;
}

@Component({
  selector: 'app-root',
  template: `
    <main class="relative min-h-screen bg-radial-[at_5%_5%] from-neutral-800 to-neutral-950 to-75%">
      <nav bm-header class="mb-4">
        <div bm-header-start>
          <a routerLink="" class="w-24 h-24"> <bm-logo /> </a>
          @for(link of leftLinks; track link.label) {
          <a
            [routerLink]="link.route"
            routerLinkActive="active"
            class="group sm:px-8 md:px-12 px-3 py-6"
            [queryParams]="link.queryParams"
            queryParamsHandling="merge"
          >
            <li
              [class]="
                'py-3 border border-b-4 border-transparent group-[.active]:border-b-neutral-950 ' +
                link.class
              "
            >
              {{ link.label }}
            </li>
          </a>
          }
        </div>
        <div bm-header-end class="flex gap-4">
          <a href="" class="px-3">
            <svg
              class="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
          <a href="" class="px-3" [bm-badge]="itemsCount()">
            <svg
              class="w-10 h-10"
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
                stroke-width="1.5"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div class="px-3">
        <router-outlet />
      </div>
      <aside #chat></aside>
    </main>
  `,
  imports: [
    RouterOutlet,
    Header,
    HeaderStart,
    HeaderEnd,
    Logo,
    RouterLinkActive,
    RouterLink,
    Badge,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly _router = inject(Router);
  private readonly _cartStore = inject(CartStore);

  protected readonly itemsCount = this._cartStore.itemsCount;

  chat = viewChild('chat', { read: ElementRef });

  leftLinks: Links = [
    {
      label: 'Road',
      route: 'catalog',
      queryParams: {
        type: 'road',
      },
    },
    {
      label: 'Gravel',
      route: 'catalog',
      queryParams: {
        type: 'gravel',
      },
    },
    {
      label: 'Moutain',
      route: 'catalog',
      queryParams: {
        type: 'moutain',
      },
    },
    {
      label: 'Sales',
      route: 'sales',
      class: 'text-red-600 group-[.active]:border-b-red-600',
    },
  ];

  @HostListener('window:router', ['$event'])
  onRouterEvent(event: Event) {
    const _event = event as CustomEvent;
    this._router.navigateByUrl(_event.detail.route);
  }

  @HostListener('window:cart', ['$event'])
  async onCartEvent(event: Event) {
    const { detail } = event as CustomEvent;
    if (detail.action === 'addToCart') {
      this._cartStore.add(detail.bikeId);
    }
  }

  mountChatEffect = effect(() => {
    const catalog = this.chat();
    if (catalog?.nativeElement) {
      const remoteName = 'chat';
      const exposedModule = './component';
      const componentName = 'chat-web-component';
      mountComponent({ remoteName, exposedModule, componentName }, catalog.nativeElement);
    }
  });
}
