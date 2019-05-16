import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

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

  /*openLink(){
    this.iap.create("https://www.asesoriaseducate.com/", "location=no, toolbar=no");
    
    //var ref = cordova.InAppBrowser('http://apache.org', '_blank', 'location=no');
  }*/
  
/*
  openLink(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      toolbar: 'no'
    };
    const browser = this.iap.create('https://www.asesoriaseducate.com/','_self','toolbar=no');
  }
*/

  private openLink(url: string, title?: string) {
    let options: InAppBrowserOptions = {
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
    };
    const browser = this.iap.create('https://www.asesoriaseducate.com/', "_blank", options);
  }

  //this.inAppBrowser.create('http://sco7.com/filemanager/sapphire/','_self',{ toolbar: 'no'});
}
