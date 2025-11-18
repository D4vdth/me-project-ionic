import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonLabel, IonAvatar, IonIcon, IonItem, IonList } from '@ionic/angular/standalone';
import { phonePortraitOutline, cardOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonLabel, IonAvatar, IonIcon, IonItem, IonList]
})
export class InfoUserPage implements OnInit {

  constructor() { 
    addIcons({
      'phone-portrait-outline': phonePortraitOutline,
      'card-outline': cardOutline,
      'mail-outline': mailOutline
    });
  }

  nombreUsuario: string = "David Angarita Rodriguez"
  numeroTelefono:number = 123456789
  numeroIdentificacion:number = 123456789
  correo:string = "david@david.com"

  urlImagen: string = "assets/user.png";

  iconoTelefono = 'phone-portrait-outline';
  iconoIdentificacion = 'card-outline';
  iconoCorreo = 'mail-outline';

  ngOnInit() {
  }

}
