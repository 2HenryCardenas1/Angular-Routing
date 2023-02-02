import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MycartComponent } from './page/mycart/mycart.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        path: 'categories',
        loadChildren: () => import('./page/category/category.module').then(m => m.CategoryModule)
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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
