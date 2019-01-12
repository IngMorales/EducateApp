import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private iap: InAppBrowser) {
  }

  OpenFacebook() {
      this.iap.create("https://www.facebook.com/asesoriasacademicaseducate/","_system","yes")
  }

  OpenYouTube() {
    this.iap.create("https://www.youtube.com/channel/UCfO5Z2nBA956aVwnKIrM6sQ?sub_confirmation=1","_system","yes")
  }

  OpenInstagram() {
    this.iap.create("https://www.instagram.com/asesoriaseducate/?hl=es-la","_system","yes")
  }

  OpenGerente() {
    this.iap.create("https://api.whatsapp.com/send?phone=573203757000&text=Hola%2C%20deseo%20obtener%20el%20m%C3%A1s%20informaci%C3%B3n%20del%20PreICFES","_system","yes")
  }

  OpenCoordinador() {
    this.iap.create("https://api.whatsapp.com/send?phone=573103199146&text=Hola%2C%20deseo%20obtener%20el%20m%C3%A1s%20informaci%C3%B3n%20del%20PreICFES","_system","yes")
  }

}
