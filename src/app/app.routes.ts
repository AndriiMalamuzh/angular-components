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
    path: 'checkbox',
    loadComponent: () =>
      import('./pages/checkbox-example/checkbox-example.component').then(
        c => c.CheckboxExampleComponent
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
    path: 'radio-button',
    loadComponent: () =>
      import('./pages/radio-example/radio-example.component').then(
        c => c.RadioExampleComponent
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
    path: 'slide-toggle',
    loadComponent: () =>
      import(
        './pages/slide-toggle-example/slide-toggle-example.component'
      ).then(c => c.SlideToggleExampleComponent),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs-example/tabs-example.component').then(
        c => c.TabsExampleComponent
      ),
  },
];
