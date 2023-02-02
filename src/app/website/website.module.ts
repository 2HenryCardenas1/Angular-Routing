import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';




import { SharedModule } from './../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';

import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MycartComponent } from './page/mycart/mycart.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { RegisterComponent } from './page/register/register.component';

import { WebsiteRoutingModule } from './website-routing.module';
@NgModule({
  declarations: [

    NavComponent,
    HomeComponent,

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
    SwiperModule,
    SharedModule
  ]
})
export class WebsiteModule { }
