import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../shared/pipes/pages/home/home.component';
import { NotFoundComponent } from '../shared/pipes/pages/not-found/not-found.component';
import { CategoryComponent } from '../shared/pipes/pages/category/category.component';
import { MycartComponent } from '../shared/pipes/pages/mycart/mycart.component';
import { LoginComponent } from '../shared/pipes/pages/login/login.component';
import { RegisterComponent } from '../shared/pipes/pages/register/register.component';
import { RecoveryComponent } from '../shared/pipes/pages/recovery/recovery.component';
import { ProfileComponent } from '../shared/pipes/pages/profile/profile.component';
import { PagesDetailComponent } from '../pages-detail/pages-detail.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent
      },
      {
        path: 'product/:id',
        component: PagesDetailComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'mycart',
        component: MycartComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
