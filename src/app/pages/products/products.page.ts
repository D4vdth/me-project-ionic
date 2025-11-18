import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductElementComponent } from 'src/app/components/product-element/product-element.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/data/services/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductElementComponent, ProductFormComponent]
})
export class ProductsPage implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product = this.productService.getProducts();
  }

  public processProduct(product: Product) {
    this.productService.addProduct(product);
    this.product = this.productService.getProducts();
  }
}
