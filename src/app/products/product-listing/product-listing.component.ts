import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  pageNumbers: number[] = [];
  pageSize = 9;
  currentPage: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.products = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.products = res['product'];
        this.calcNumberOfPages(res['numberOfProducts']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );

  }

  getSlicedArrayOfProducts(): Product[] {
    let start = this.currentPage * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  calcNumberOfPages(length) {
    this.pageNumbers = [];
    for (let i = 0; i < length / this.pageSize; i++) {
      this.pageNumbers.push(i + 1);
    }
  }

  onSearchHandler(searchInput) {
    this.products = this.productService.searchByName(searchInput.value);
    // this.calcNumberOfPages();
  }
}
