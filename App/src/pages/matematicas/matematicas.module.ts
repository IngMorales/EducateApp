import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatematicasPage } from './matematicas';

@NgModule({
  declarations: [
    MatematicasPage,
  ],
  imports: [
    IonicPageModule.forChild(MatematicasPage),
  ],
})
export class MatematicasPageModule {}
