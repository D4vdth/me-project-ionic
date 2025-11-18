import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com/products';
  private products: Product[] = [];
  private nextId = 1000; 

  constructor(private http: HttpClient) {}

  getProducts(): Product[] {
    return this.products;
  }

  getApiProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  addProduct(product: Product): Product {
    const newProduct: Product = { ...product, id: this.nextId++ };
    this.products.push(newProduct);
    return newProduct;
  }
}
