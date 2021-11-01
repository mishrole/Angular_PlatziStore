import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  title = 'platzi-store';

  power = 10;

  clickProduct(id : number) {
    alert(`ProductId: ${id}`);
  }

  removeProductFromProducts(id: number) {
    let currentProduct = this.products.findIndex(product => product.id === id.toString())
    this.products.splice(currentProduct, 1);
  }

}
