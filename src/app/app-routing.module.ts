import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('./pages/shop/shop.module').then(module => module.ShopModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./pages/contact/contact.module').then(module => module.ContactModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(module => module.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
