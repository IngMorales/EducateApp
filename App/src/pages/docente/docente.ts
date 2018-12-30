import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatematicasPage} from '../matematicas/matematicas';

/**
 * Generated class for the DocentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docente',
  templateUrl: 'docente.html',
})
export class DocentePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocentePage');
  }
  
  goDocenteMatematicas():void{
    this.navCtrl.push(MatematicasPage);
  }

}
