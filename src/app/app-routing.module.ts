import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MycartComponent } from './page/mycart/mycart.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RecoveryComponent } from './page/recovery/recovery.component';
import { RegisterComponent } from './page/register/register.component';

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
