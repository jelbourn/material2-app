import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {path: '', loadChildren: 'app/home/home.module#HomeModule'}
];
