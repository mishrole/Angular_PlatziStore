import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})

export class ShopModule {}
