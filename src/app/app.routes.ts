// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [{ path: 'lucas', component: SobreComponent }],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '404' },
];
