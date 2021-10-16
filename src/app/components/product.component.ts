import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product?: Product;
  @Output() addToCartClicked : EventEmitter<any> = new EventEmitter();

  addToCart() {
    alert('Añadir al carrito');
    this.addToCartClicked?.emit(this.product?.id);
  }

}
