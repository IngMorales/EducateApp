import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iap: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaPage');
  }
  
  openLink(){
    this.iap.create("http://virtual.asesoriaseducate.com/");
  }

}
