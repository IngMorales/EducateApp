import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacacionalPage } from './vacacional';

@NgModule({
  declarations: [
    VacacionalPage,
  ],
  imports: [
    IonicPageModule.forChild(VacacionalPage),
  ],
})
export class VacacionalPageModule {}
