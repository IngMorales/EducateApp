import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';



import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NosotrosPageModule } from '../pages/nosotros/nosotros.module'; //Importación de la Página
import { MisionPageModule } from '../pages/mision/mision.module';
import { VisionPageModule } from '../pages/vision/vision.module';
import { AdministrativoPageModule } from '../pages/administrativo/administrativo.module';
import { DocentePageModule } from '../pages/docente/docente.module';
import { DatosPageModule } from '../pages/datos/datos.module';
import { CalidadPageModule } from '../pages/calidad/calidad.module';
import { SemestralPageModule } from '../pages/semestral/semestral.module';
import { VacacionalPageModule } from '../pages/vacacional/vacacional.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { WebPageModule } from '../pages/web/web.module';
import { AulaPageModule } from '../pages/aula/aula.module';
import { WebPage } from '../pages/web/web';
import { AulaPage } from '../pages/aula/aula';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NosotrosPageModule, //Página de Nosotros
    MisionPageModule,
    VisionPageModule,
    AdministrativoPageModule,
    DocentePageModule,
    DatosPageModule,
    CalidadPageModule,
    SemestralPageModule,
    VacacionalPageModule,
    WebPageModule,
    AulaPageModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WebPage,
    AulaPage,
    TabsPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
