import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonList, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonList, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput]
})
export class HomePage implements OnInit {

  usuario: any;
  direccion: any;
  pais: any;
  ciudad: any;
  idioma: any;
  moneda: any;

  constructor() { }
  nombreApp = 'Me-Ecommerce'
  urlLogo = 'assets/user.png'
  datos = {}

  guardar() {
    this.datos = {
      usuario: this.usuario,
      direccion: this.direccion,
      pais: this.pais,
      ciudad: this.ciudad,
      idioma: this.idioma,
      moneda: this.moneda
    };
    console.log(this.datos);
  }

  ngOnInit() {
  }

}
