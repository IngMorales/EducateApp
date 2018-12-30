import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NosotrosPage} from '../nosotros/nosotros';
import{MisionPage} from '../mision/mision';
import{VisionPage} from '../vision/vision';
import{AdministrativoPage} from '../administrativo/administrativo';
import{DocentePage} from '../docente/docente';

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

  goPageMision():void{
    this.navCtrl.push(MisionPage);
  }

  goPageVision():void{
    this.navCtrl.push(VisionPage);
  }

  goPageAdministrativo():void{
    this.navCtrl.push(AdministrativoPage);
  }

  goPageDocente():void{
    this.navCtrl.push(DocentePage);
  }

}
