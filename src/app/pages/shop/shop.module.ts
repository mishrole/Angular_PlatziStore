import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})

export class ShopModule {}
