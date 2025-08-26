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

  userName: string = "David Angarita Rodriguez"
  phoneNumber:number = 123456789
  idNumber:number = 123456789
  email:string = "david@david.com"

  imgUrl: string = "assets/user.png";

  phoneIcon = 'phone-portrait-outline';
  idCardIcon = 'card-outline';
  emailIcon = 'mail-outline';

  ngOnInit() {
  }

}
