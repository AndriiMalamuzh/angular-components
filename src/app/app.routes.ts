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
    path: 'button',
    loadComponent: () =>
      import('./pages/button-example/button-example.component').then(
        c => c.ButtonExampleComponent
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
    path: 'form-field',
    loadComponent: () =>
      import('./pages/form-field-example/form-field-example.component').then(
        c => c.FormFieldExampleComponent
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
    path: 'input',
    loadComponent: () =>
      import('./pages/input-example/input-example.component').then(
        c => c.InputExampleComponent
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
    path: 'select',
    loadComponent: () =>
      import('./pages/select-example/select-example.component').then(
        c => c.SelectExampleComponent
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
    path: 'spinner',
    loadComponent: () =>
      import('./pages/spinner-example/spinner-example.component').then(
        c => c.SpinnerExampleComponent
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
