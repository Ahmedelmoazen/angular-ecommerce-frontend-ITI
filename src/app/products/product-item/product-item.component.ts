import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Product } from "src/app/_model/product";
import { ProductService } from "src/app/_services/product.services";

@Component({ 
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit, OnChanges {

    @Input() product: Product;
    
    constructor(private productService: ProductService) {
        
    }

    ngOnInit(): void {}
    ngOnChanges(): void {}

    getPrice(): number {
        
        return this.product.discount ? 
        this.product.price - this.product.discount 
        : this.product.price;

    }

    AddedToCart(): void {
        // this.itemAdded.emit(this.product);
        this.productService.productAdded.emit(this.product);
    }
}