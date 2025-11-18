import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone'
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonButton, CommonModule]
})
export class ProductElementComponent  implements OnInit {
  @Input() productos: Product[] = [];
  @Output() agregarAlCarrito = new EventEmitter<Product>();

  constructor() { }


  ngOnInit() {}

  alAgregar(p: Product) {
    this.agregarAlCarrito.emit(p);
  }

}
