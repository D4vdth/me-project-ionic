import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonButton } from '@ionic/angular/standalone';
import { CartItem } from 'src/app/interfaces/cart-item';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonButton]
})
export class CartModalComponent {
  @Input() articulos: CartItem[] = [];
  @Output() cerrar = new EventEmitter<void>();
  @Output() eliminar = new EventEmitter<number>();

  get total(): number {
    return this.articulos.reduce((sum, it) => sum + (it.product.price * it.quantity), 0);
  }

  alCerrar() {
    this.cerrar.emit();
  }

  eliminarArticulo(productId: number) {
    this.eliminar.emit(productId);
  }
}