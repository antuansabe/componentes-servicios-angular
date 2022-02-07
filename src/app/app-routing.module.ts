import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MycartComponent } from './website/pages/mycart/mycart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';

const routes: Routes = [
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
{
  path: '**',
  component: NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
