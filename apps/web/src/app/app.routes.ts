import { Routes } from '@angular/router';
import { FoundationPage } from './foundation-page';

export const routes: Routes = [
  {
    path: 'es',
    component: FoundationPage,
    data: { locale: 'es' },
  },
  {
    path: 'en',
    component: FoundationPage,
    data: { locale: 'en' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'es',
  },
  {
    path: '**',
    redirectTo: 'es',
  },
];
