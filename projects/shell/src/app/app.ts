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
  NavigationEnd,
} from '@angular/router';
import { mountComponent } from './utils/mount-component.utils';
import { Header, HeaderStart, HeaderEnd } from './shared/ui/header/header';
import { Logo } from './shared/ui/logo/logo';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { GlobalStore } from './shared/+state/global.state';
import { ShellFooter } from './shared/components/footer/footer';
import { ShellNav } from './shared/components/nav/nav';

@Component({
  selector: 'app-root',
  template: `
    <main class="relative min-h-screen overflow-hidden" [class.main-bg]="true">
      <bmsh-nav />
      <div class="px-3">
        <router-outlet />
      </div>
      <aside #chat></aside>
    </main>
    <bmsh-footer />
  `,
  imports: [RouterOutlet, ShellNav, ShellFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly _store = inject(GlobalStore);
  private readonly _router = inject(Router);

  chat = viewChild('chat', { read: ElementRef });

  protected readonly shouldApplyBackground = this._store.shouldApplyBackground;

  @HostListener('window:router', ['$event'])
  onRouterEvent(event: Event) {
    const _event = event as CustomEvent;
    this._router.navigateByUrl(_event.detail.route);
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
