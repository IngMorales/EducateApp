import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NosotrosPage} from '../nosotros/nosotros';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goPageNosotros():void{
    this.navCtrl.push(NosotrosPage);
  }

}
