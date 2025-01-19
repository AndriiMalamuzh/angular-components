import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then(
        m => m.HomepageComponent
      ),
  },
  {
    path: 'icon',
    loadComponent: () =>
      import('./pages/icon-example/icon-example.component').then(
        m => m.IconExampleComponent
      ),
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs-example/tabs-example.component').then(
        m => m.TabsExampleComponent
      ),
  },
];
