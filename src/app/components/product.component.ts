import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input() product?: Product;
  @Output() addToCartClicked : EventEmitter<any> = new EventEmitter();

  addToCart() {
    console.log(`Producto ${this.product?.id} añadido`);
    this.addToCartClicked?.emit(this.product?.id);
  }

}
