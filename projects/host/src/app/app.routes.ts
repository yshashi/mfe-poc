import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('remote', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule('products', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      loadRemoteModule('about', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      loadRemoteModule('contact', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      loadRemoteModule('cart', './Component').then((m) => m.AppComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
