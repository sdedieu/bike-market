import { Routes, UrlMatcher, UrlSegment } from '@angular/router';

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
    path: 'catalog',
    loadComponent: async () =>
      (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: 'catalog',
      exposedModule: './component',
      componentName: 'catalog-web-component',
    },
  },
  {
    matcher: startsWith('payment'),
    loadComponent: async () =>
      (await import('./utils/wrapper/wrapper.component')).WrapperComponent,
    data: {
      remoteName: 'payment',
      exposedModule: './component',
      componentName: 'payment-web-component',
    },
  },
  {
    path: '',
    redirectTo: 'payment',
    pathMatch: 'full',
  },
];
