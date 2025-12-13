import { Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';

export function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
    const fullUrl = url.map((u) => u.path).join('/');
    if (fullUrl.startsWith(prefix)) {
      return { consumed: url };
    }
    return null;
  };
}

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: async () => (await import('./home/home')).HomePage,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await loadRemoteModule('recommendations', './recommendations-full')).routes,
        outlet: 'recommendations-banner',
      },
    ],
  },
  {
    path: 'catalog',
    loadChildren: async () => (await loadRemoteModule('catalog', './routes')).routes,
  },
  {
    path: 'cart',
    loadChildren: async () => (await loadRemoteModule('cart', './routes')).routes,
  },
  {
    path: 'chat',
    loadComponent: async () => (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: 'chat',
      exposedModule: './component',
      componentName: 'chat-web-component',
    },
  },
  {
    matcher: startsWith('payment'),
    loadComponent: async () => (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: 'payment',
      exposedModule: './component',
      componentName: 'payment-web-component',
    },
  },
  {
    path: '',
    loadChildren: async () => (await loadRemoteModule('cart', './icon-routes')).routes,
    outlet: 'cart',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
