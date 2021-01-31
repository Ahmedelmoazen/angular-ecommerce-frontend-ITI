import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCatgory } from 'src/app/_model/product-catogory';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = {_id: '', data: [{}], paymentTypes: [], tags: [], category: {} };
  paymentTypes: PaymentType[] = [];
  productCategories: ProductCatgory[] = [];
  paymentOptionsCheckVal: boolean = false;
  editMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentTypeService: PaymentTypeService,
    private productCategoryService: ProductCategoryService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.url[0].path);
    this.editMode =
      this.activatedRoute.snapshot.url[0].path &&
      this.activatedRoute.snapshot.url[0].path === 'edit';
      
    // if (this.editMode) {
    //   const id = this.activatedRoute.snapshot.params.id;
    //   this.product = this.productService.getProductById(id); 
    // }
    this.paymentTypes = this.paymentTypeService.getAllServices();
    this.productCategories = this.productCategoryService.getAllCategories();
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/product']);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  onCheckBoxPressed(index) {
    if (!this.product.paymentTypes.includes(this.paymentTypes[index])) {
      this.product.paymentTypes.push(this.paymentTypes[index]);
    } else {
      var i = this.product.paymentTypes.indexOf(this.paymentTypes[index]);
      this.product.paymentTypes.splice(i, 1);
    }
    this.paymentOptionsCheck();
  }

  paymentOptionsCheck(): void {
    if (!this.product.paymentTypes.length) this.paymentOptionsCheckVal = false;
    else this.paymentOptionsCheckVal = true;
  }

  onTagAdded(tagInput) {
    let tagName = tagInput.value;
    let tagId = this.product.tags.length;
    this.product.tags.push({ id: tagId, name: tagName });
    tagInput.value = '';
  }

  onTagremoved(tag) {
    let tagElem = this.product.tags.find((elem) => {
      if (elem.name == tag.name) return elem;
    });

    let tagIndex = this.product.tags.indexOf(tagElem);
    this.product.tags.splice(tagIndex, 1);
  }

  clearTags() {
    this.product.tags.splice(0, this.product.tags.length);
  }
}
