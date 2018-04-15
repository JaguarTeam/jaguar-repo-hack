import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InicioPage} from '../pages/inicio/inicio';
import {MonederoPage} from '../pages/monedero/monedero';
 import {UsuarioProvider} from '../providers/usuario/usuario';
import { MapaPage } from '../pages/mapa/mapa';
 MapaPage
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    MonederoPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    InicioPage,
    MonederoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ]
})
export class AppModule {}
