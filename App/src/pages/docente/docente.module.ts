import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocentePage } from './docente';
import {MatematicasPageModule} from '../matematicas/matematicas.module';

@NgModule({
  declarations: [
    DocentePage,
  ],
  imports: [
    IonicPageModule.forChild(DocentePage),
    MatematicasPageModule //Metimos el modulo de matematicas dentro de los docentes.
  ],
})
export class DocentePageModule {}
