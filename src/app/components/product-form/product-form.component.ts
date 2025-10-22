import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonButton, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonCardTitle, IonCard} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, ReactiveFormsModule, IonCardHeader, IonCardContent, IonList, IonItem, IonCardTitle, IonCard]
})
export class ProductFormComponent  implements OnInit {

  constructor() { }

  productForm!: FormGroup;

  @Output() newProduct: EventEmitter<Product> = new EventEmitter()

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

  public saveProduct(){
    if (this.productForm.valid) {
      this.newProduct.emit(this.productForm.value as Product);
      this.productForm.reset();
    }
  }

}
