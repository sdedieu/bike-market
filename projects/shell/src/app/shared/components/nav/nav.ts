import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderStart, HeaderEnd, Header } from '../../ui/header/header';
import { Logo } from '../../ui/logo/logo';

type Links = Link[];

interface Link {
  label: string;
  route: string;
  queryParams?: { [key: string]: string };
  class?: string;
}

@Component({
  selector: 'bmsh-nav',
  template: `
    <nav bm-header class="mb-6 z-1">
      <div bm-header-start>
        <a routerLink="" class="w-24 h-24"> <bm-logo /> </a>
        @for (link of leftLinks; track link.label) {
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
        <router-outlet name="cart" />
      </div>
    </nav>
  `,
  imports: [Header, HeaderStart, HeaderEnd, Logo, RouterLinkActive, RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellNav {
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
  ];
}
