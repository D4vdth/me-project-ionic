import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonCardTitle, IonCard} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, FormsModule, IonCardHeader, IonCardContent, IonList, IonItem, IonCardTitle, IonCard]
})
export class ProductFormComponent  implements OnInit {

  constructor() { }

  product: Product = {
    id: 0,
    title: '',
    price: null,
    description: '',
    category: '',
    image: ''
  };


  @Output() newProduct: EventEmitter<Product> = new EventEmitter()

  ngOnInit() {}

  public saveProduct(){
    this.newProduct.emit(this.product)
    
  }

}
