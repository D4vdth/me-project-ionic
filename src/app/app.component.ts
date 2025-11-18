
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { peopleOutline, peopleSharp, bagOutline, bagSharp, homeOutline, homeSharp } from 'ionicons/icons';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartService } from './data/services/cart-service';
import { CartItem } from './interfaces/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonModal, CartModalComponent],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/info-user', icon: 'people' },
    { title: 'Productos', url: '/products', icon: 'bag'}
  ];
  carritoAbierto = false;
  articulosCarrito: CartItem[] = [];
  contadorCarrito = 0;

  constructor(private cartService: CartService) {
    addIcons({ homeOutline, homeSharp, peopleOutline, peopleSharp, bagOutline, bagSharp });

    this.cartService.getItemsObservable().subscribe(items => {
      this.articulosCarrito = items;
      this.contadorCarrito = items.reduce((acc, i) => acc + i.quantity, 0);
    });
  }

  abrirCarrito() {
    this.carritoAbierto = true;
  }

  cerrarCarrito() {
    this.carritoAbierto = false;
  }

  alEliminarDelCarrito(idProducto: number) {
    this.cartService.remove(idProducto);
  }
}
