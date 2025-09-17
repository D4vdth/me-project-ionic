import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/angular/standalone'
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-element',
  templateUrl: './product-element.component.html',
  styleUrls: ['./product-element.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonImg, CommonModule]
})
export class ProductElementComponent  implements OnInit {

  @Input() product: Product[];

  constructor() { }


  ngOnInit() {}

}
