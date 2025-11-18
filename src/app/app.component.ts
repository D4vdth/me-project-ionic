
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonModal, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, peopleOutline, peopleSharp, bagSharp, homeOutline, homeSharp } from 'ionicons/icons';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartService } from './data/services/cart-service';
import { CartItem } from './interfaces/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonModal, CartModalComponent],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profile', url: '/info-user', icon: 'people' },
    { title: 'Products', url: '/products', icon: 'bag'}
  ];
  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartCount = 0;

  constructor(private cartService: CartService) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, peopleOutline, peopleSharp, bagSharp, homeOutline, homeSharp});

    this.cartService.getItemsObservable().subscribe(items => {
      this.cartItems = items;
      this.cartCount = items.reduce((acc, i) => acc + i.quantity, 0);
    });
  }

  openCart() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  onRemoveFromCart(productId: number) {
    this.cartService.remove(productId);
  }
}
