import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private nextId = 1;

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): Product {
    const newProduct: Product = { ...product, id: this.nextId++ };
    this.products.push(newProduct);
    return newProduct;
  }
}
