import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonList, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonList, IonItem, IonButton]
})
export class HomePage implements OnInit {

  usuario: any;
  direccion: any;
  pais: any;
  ciudad: any;
  idioma: any;
  moneda: any;

  constructor() { }
  nameApp = 'Ecco'
  logoUrl = 'assets/user.png'
  data = {}

  save() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
