import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductElementComponent } from 'src/app/components/product-element/product-element.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductElementComponent, ProductFormComponent]
})
export class ProductsPage implements OnInit {

  constructor() { }
  product: Product[] = [];

  ngOnInit() {
  }

  public processProduct(product:Product){
    
    this.product.push(product);
  }

}
