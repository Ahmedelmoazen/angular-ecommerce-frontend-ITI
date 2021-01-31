import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  cartArray: Product[] = [];
  totalPrice: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productAdded.subscribe( 
      (res) => { 
        this.cartArray.push(res);
        if(res.discount)
          this.totalPrice += res.price - res.discount;
        else
          this.totalPrice += res.price; 
      },
      (err) => { 
        console.error(err); 
      },
      (completed) => {}
    )
  }
  ngOnChanges(changes): void {}
  
  changeDestinationPage( dest: string){
    this.productService.destinationPage = dest;
  }
}
