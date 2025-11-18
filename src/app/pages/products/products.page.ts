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
  productos: Product[] = [];
  private productosApi: Product[] = [];
  formularioAbierto = false;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productos = [...this.productService.getProducts()];

    this.productService.getApiProducts().subscribe(api => {
      this.productosApi = api;
      this.productos = [...api, ...this.productService.getProducts()];
    });
  }

  public procesarProducto(producto: Product) {
    this.productService.addProduct(producto);
    this.productos = [...this.productosApi, ...this.productService.getProducts()];
  }

  alAgregarAlCarrito(producto: Product) {
    this.cartService.add(producto);
  }

  abrirFormulario() {
    this.formularioAbierto = true;
  }

  cerrarFormulario() {
    this.formularioAbierto = false;
  }

  alNuevoProducto(producto: Product) {
    this.procesarProducto(producto);
    this.cerrarFormulario();
  }
}
