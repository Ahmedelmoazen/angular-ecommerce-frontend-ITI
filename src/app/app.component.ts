import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  
  productsArray: Product[] = [];
  destinationPage: string;

  constructor(private productService: ProductService) { }

  ngDoCheck(){
    this.destinationPage = this.productService.destinationPage;
  }

  addToCart(product: Product){
    this.productsArray.push(product);
  }
}
