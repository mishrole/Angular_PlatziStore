import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ShopComponent } from "./components/shop/shop.component";

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShopRoutingModule {}
