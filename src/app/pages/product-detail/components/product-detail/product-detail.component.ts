import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    // Observer
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

}
