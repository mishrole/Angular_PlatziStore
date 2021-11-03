import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';

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
        path: 'shop/:id',
        loadChildren: () => import('./pages/product-detail/product-detail.module').then(module => module.ProductDetailModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(module => module.ContactModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
