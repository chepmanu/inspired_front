
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AddWrittingComponent } from './pages/writtings/add-writting/add-writting.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: '/writting',
          component: AddWrittingComponent
        },
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }