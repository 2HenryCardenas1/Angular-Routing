import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';


import { ImgComponent } from './components/img/img.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MycartComponent } from './page/mycart/mycart.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { RegisterComponent } from './page/register/register.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { WebsiteRoutingModule } from './website-routing.module';
@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    HomeComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule
  ]
})
export class WebsiteModule { }
