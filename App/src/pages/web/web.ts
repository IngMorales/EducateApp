import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iap: InAppBrowser, private youtube: YoutubeVideoPlayer) {
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

  private web(url: string, title?: string) {
    let options: InAppBrowserOptions = {
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
    };
    this.iap.create('https://www.asesoriaseducate.com/', "_blank", options);
  }

  private blog_nacho(url: string, title?: string) {
    let options: InAppBrowserOptions = {
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
    };
    this.iap.create('http://www.pasaralaunacional.com/p/icfes-interactivo.html', "_blank", options);
  }

  private dipa(url: string, title?: string) {
    let options: InAppBrowserOptions = {
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
    };
    this.iap.create('https://www.uninscripciones.unal.edu.co/dipa/', "_blank", options);
  }

  private guia_icfes(url: string, title?: string) {
    let options: InAppBrowserOptions = {
      toolbarcolor: "#488aff",
      hideurlbar: "yes",
      closebuttoncolor: "#fff",
      navigationbuttoncolor: "#fff"
    };
    this.iap.create('http://www2.icfesinteractivo.gov.co/investigacionFormulario/item/2490-guias-de-orientacion', "_blank", options);
  }
  watch(video){
    this.youtube.openVideo(video);
  }
  //this.inAppBrowser.create('http://sco7.com/filemanager/sapphire/','_self',{ toolbar: 'no'});
}
