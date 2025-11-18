import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/angular/standalone';
import { ProductElementComponent } from 'src/app/components/product-element/product-element.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/data/services/product-service';
import { CartService } from 'src/app/data/services/cart-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonModal, IonButton, CommonModule, FormsModule, ProductElementComponent, ProductFormComponent]
})
export class ProductsPage implements OnInit {
  product: Product[] = [];
  private apiProducts: Product[] = [];
  isFormOpen = false;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.product = [...this.productService.getProducts()];

    this.productService.getApiProducts().subscribe(api => {
      this.apiProducts = api;
      this.product = [...api, ...this.productService.getProducts()];
    });
  }

  public processProduct(product: Product) {
    this.productService.addProduct(product);
    this.product = [...this.apiProducts, ...this.productService.getProducts()];
  }

  onAddToCart(product: Product) {
    this.cartService.add(product);
  }

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  onNewProduct(product: Product) {
    this.processProduct(product);
    this.closeForm();
  }
}
