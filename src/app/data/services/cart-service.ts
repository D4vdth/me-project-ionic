import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/interfaces/cart-item';
import { Product } from 'src/app/interfaces/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);

  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }

  getItemsObservable(): Observable<CartItem[]> {
    return this.itemsSubject.asObservable();
  }

  add(product: Product) {
    const current = [...this.itemsSubject.value];
    const existing = current.find(ci => ci.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      current.push({ product, quantity: 1 });
    }
    this.itemsSubject.next(current);
  }

  remove(productId: number) {
    const current = this.itemsSubject.value.filter(ci => ci.product.id !== productId);
    this.itemsSubject.next(current);
  }

  clear() {
    this.itemsSubject.next([]);
  }
}