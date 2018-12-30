import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NosotrosPage } from '../nosotros/nosotros';
import { MisionPage } from '../mision/mision';
import { VisionPage } from '../vision/vision';
import { AdministrativoPage } from '../administrativo/administrativo';
import { DocentePage } from '../docente/docente';
import { DatosPage } from '../datos/datos';
import { CalidadPage } from '../calidad/calidad';
import { SemestralPage } from '../semestral/semestral';
import { VacacionalPage } from '../vacacional/vacacional';

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

  goPageDatos():void{
    this.navCtrl.push(DatosPage);
  }

  goPageCalidad():void{
    this.navCtrl.push(CalidadPage);
  }

  goPageSemestral():void{
    this.navCtrl.push(SemestralPage);
  }

  goPageVacacional():void{
    this.navCtrl.push(VacacionalPage);
  }

}
