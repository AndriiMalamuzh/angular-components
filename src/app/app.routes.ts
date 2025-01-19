import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then(
        c => c.HomepageComponent
      ),
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./pages/badge-example/badge-example.component').then(
        c => c.BadgeExampleComponent
      ),
  },
  {
    path: 'icon',
    loadComponent: () =>
      import('./pages/icon-example/icon-example.component').then(
        c => c.IconExampleComponent
      ),
  },
  {
    path: 'ripple',
    loadComponent: () =>
      import('./pages/ripple-example/ripple-example.component').then(
        c => c.RippleExampleComponent
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs-example/tabs-example.component').then(
        c => c.TabsExampleComponent
      ),
  },
];
