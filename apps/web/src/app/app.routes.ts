import { Routes } from '@angular/router';
import { PortfolioPage } from './portfolio-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioPage,
    data: { locale: 'es', restorePersistedLocale: true },
  },
  {
    path: 'es',
    component: PortfolioPage,
    data: { locale: 'es' },
  },
  {
    path: 'en',
    component: PortfolioPage,
    data: { locale: 'en' },
  },
  {
    path: '**',
    redirectTo: 'es',
  },
];
