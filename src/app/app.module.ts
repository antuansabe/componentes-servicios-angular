import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './website/components/img/img.component';
import { ProductComponent } from './website/components/product/product.component';
import { ProductsComponent } from './website/components/products/products.component';
import { NavComponent } from './website/components/nav/nav.component';
import { ReversePipe } from './website/pipes/reverse.pipe';
import { HighlightDirective } from './website/directives/highlight.directive';
import { SwiperModule } from 'swiper/angular';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MycartComponent } from './website/pages/mycart/mycart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { PagesDetailComponent } from './pages-detail/pages-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true  }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
