import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './website/page/category/category.component';
import { HomeComponent } from './website/page/home/home.component';
import { LoginComponent } from './website/page/login/login.component';
import { MycartComponent } from './website/page/mycart/mycart.component';
import { NotFoundComponent } from './website/page/not-found/not-found.component';
import { ProductDetailComponent } from './website/page/product-detail/product-detail.component';
import { ProfileComponent } from './website/page/profile/profile.component';
import { RecoveryComponent } from './website/page/recovery/recovery.component';
import { RegisterComponent } from './website/page/register/register.component';

const routes: Routes = [
  {
    path: '',

    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories/:id',
    component: CategoryComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'mycart',
    component: MycartComponent
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
  // ** is a wildcard, it means that if the path is not found, it will redirect to the NotFoundComponent
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
