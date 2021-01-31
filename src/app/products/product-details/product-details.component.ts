import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;
  relatedProducts = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id;
    this.activatedRoute.params.subscribe(
      (params) => {
        id = params.id;
        this.productService.getProductById(id).subscribe(
          (res) => {
            this.product = res;
            this.productService.getAllProducts().subscribe(
              (res) => {
                this.relatedProducts = res['product'].slice(2, 6);
              },
              (err) => {},
              () => {}
            );
          },
          (err) => {},
          () => {}
        );
        
      },
      () => {},
      () => {}
    );
  }

  AddedToCart(qty): void {
    for (let i = 0; i < qty; i++) {
      this.productService.productAdded.emit(this.product);
    }
  }

  incrementQuantity(qty) {
    qty.value++;
  }
  decrementQuantity(qty){
    qty.value--;

  }
}
