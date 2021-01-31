import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class ProductService {
  private products: Product[] ; 
  // [
  //   {
  //     id: 1,
  //     data: [{ name: 'Camera', description: 'product description' }],
  //     price: 4000,
  //     // discount: 50,
  //     category: { id: 5 },
  //     imagesUrls: ['../../../../assets/img/product-camera.jpg'],
  //   },
  //   {
  //     id: 2,
  //     data: [{ name: 'Iphone pro', description: 'product description' }],
  //     price: 1500,
  //     discount: 200,
  //     imagesUrls: ['../../../../assets/img/product-iphone.jpg'],
  //   },
  //   {
  //     id: 3,
  //     data: [{ name: 'Perfume', description: 'product description' }],
  //     price: 250,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-perfume.jpg'],
  //   },
  //   {
  //     id: 4,
  //     data: [{ name: 'Watch', description: 'product description' }],
  //     price: 2300,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-watch.jpg'],
  //   },
  //   {
  //     id: 5,
  //     data: [{ name: 'Homepod', description: 'product description' }],
  //     price: 999,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-homepod.jpg'],
  //   },
  //   {
  //     id: 6,
  //     data: [{ name: 'Sports wear', description: 'product description' }],
  //     price: 1400,
  //     discount: 150,
  //     imagesUrls: ['../../../../assets/img/product-shoes.jpg'],
  //   },
  //   {
  //     id: 7,
  //     data: [{ name: 'Axe spray', description: 'product description' }],
  //     price: 210,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-axe.jpg'],
  //   },
  //   {
  //     id: 8,
  //     data: [{ name: 'Sunglasses', description: 'product description' }],
  //     price: 870,
  //     discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-sunglasses.jpg'],
  //   },
  //   {
  //     id: 9,
  //     data: [{ name: 'Smart pen', description: 'product description' }],
  //     price: 400,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-smartpen.jpg'],
  //   },
  //   {
  //     id: 10,
  //     data: [{ name: 'classic watch', description: 'product description' }],
  //     price: 2300,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-watch.jpg'],
  //   },
  //   {
  //     id: 11,
  //     data: [{ name: 'Bluetooth speaker', description: 'product description' }],
  //     price: 999,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-homepod.jpg'],
  //   },
  //   {
  //     id: 12,
  //     data: [{ name: 'Rayban sunglasses', description: 'product description' }],
  //     price: 870,
  //     discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-sunglasses.jpg'],
  //   },
  //   {
  //     id: 13,
  //     data: [{ name: 'Iphone pro max', description: 'product description' }],
  //     price: 1500,
  //     discount: 200,
  //     imagesUrls: ['../../../../assets/img/product-iphone.jpg'],
  //   },
  //   {
  //     id: 14,
  //     data: [{ name: 'Ipen', description: 'product description' }],
  //     price: 400,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-smartpen.jpg'],
  //   },
  //   {
  //     id: 15,
  //     data: [{ name: 'Spray', description: 'product description' }],
  //     price: 210,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-axe.jpg'],
  //   },
  //   {
  //     id: 16,
  //     data: [{ name: 'Grey perfume', description: 'product description' }],
  //     price: 250,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-perfume.jpg'],
  //   },
  //   {
  //     id: 17,
  //     data: [{ name: 'Shoes', description: 'product description' }],
  //     price: 1400,
  //     discount: 150,
  //     imagesUrls: ['../../../../assets/img/product-shoes.jpg'],
  //   },
  //   {
  //     id: 18,
  //     data: [{ name: 'Nikon Camera', description: 'product description' }],
  //     price: 4000,
  //     // discount: 50,
  //     imagesUrls: ['../../../../assets/img/product-camera.jpg'],
  //   },
  // ];

  productAdded = new EventEmitter<Product>();
  destinationPage = 'listing';
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get(`${this.baseUrl}product`);
    // return this.products.slice();
  }

  getProductById(id: string) {
    return this.httpClient.get(`${this.baseUrl}product/${id}`);
  }

  addProduct(product: Product) {
    
    let body = {
      discount: product.discount,
      price: product.price,
      imagesUrl: product.imagesUrls,
      data: product.data,
      categoryId: product.category.id
    };
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders({
    //   authorization: token
    // });
    return this.httpClient.post(`${this.baseUrl}product/add`, body);
    // const id = this.products.length;
    // const newProduct: Product = {
    //   id,
    //   data: product.data,
    //   price: product.price,
    //   discount: product.discount,
    //   category: product.category,
    //   imagesUrls: product.imagesUrls,
    //   paymentTypes: product.paymentTypes,
    //   tags: product.tags,
    // };
    // this.products.push(newProduct);
    // console.log(this.products);
    
  }

  // updateProduct(product: Product) {
  //   const index = this.products.findIndex((p) => p.id === product.id);
  //   this.products[index] = {
  //     id: product.id,
  //     data: product.data,
  //     price: product.price,
  //     discount: product.discount,
  //     category: product.category,
  //     imagesUrls: product.imagesUrls,
  //     paymentTypes: product.paymentTypes,
  //     tags: product.tags,
  //   };
  // }

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  searchByName(searchQuery: string) {
    return this.products.filter((p) =>
      p.data[0].name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}