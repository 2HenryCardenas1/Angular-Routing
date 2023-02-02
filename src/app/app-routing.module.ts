import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: true
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },

  // ** is a wildcard, it means that if the path is not found, it will redirect to the NotFoundComponent
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService // CustomPreloadService is a service that we created to preload the modules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
