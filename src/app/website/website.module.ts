import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { WebsiteRoutingModule } from './website-routing.module';


import { ImgComponent } from '../shared/components/img/img.component';
import { ProductComponent } from '../shared/components/product/product.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from '../shared/pipes/reverse.pipe';
import { HighlightDirective } from '../shared/directives/directives/highlight.directive';
import { HomeComponent } from '../shared/pipes/pages/home/home.component';

import { CategoryComponent } from '../shared/pipes/pages/category/category.component';
import { MycartComponent } from '../shared/pipes/pages/mycart/mycart.component';
import { LoginComponent } from '../shared/pipes/pages/login/login.component';
import { RegisterComponent } from '../shared/pipes/pages/register/register.component';
import { RecoveryComponent } from '../shared/pipes/pages/recovery/recovery.component';
import { ProfileComponent } from '../shared/pipes/pages/profile/profile.component';
import { PagesDetailComponent } from '../pages-detail/pages-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    HighlightDirective,
    HomeComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    PagesDetailComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class WebsiteModule { }

