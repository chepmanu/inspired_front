
import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
//   {
//     path: 'about',
//     loadChildren: './modules/about/about.module#AboutModule'
//   },
//   {
//     path: 'contact',
//     loadChildren: './modules/contact/contact.module#ContactModule'
//   }
];
