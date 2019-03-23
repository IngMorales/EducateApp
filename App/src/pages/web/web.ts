import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iap: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebPage');
  }

  openLink(){
    this.iap.create("https://www.asesoriaseducate.com/");
  }

}
