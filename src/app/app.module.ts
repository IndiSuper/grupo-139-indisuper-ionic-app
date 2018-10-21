import { Pro } from '@ionic/pro';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule ,ModalController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriaPage } from '../pages/categoria/categoria';
import { CategoriaPageModule } from '../pages/categoria/categoria.module';
import { CursosPageModule } from '../pages/cursos/cursos.module';
import { CapacitacionesPageModule } from '../pages/capacitaciones/capacitaciones.module';
import { EventosPageModule } from '../pages/eventos/eventos.module';
import { InfcursoPageModule } from '../pages/infcurso/infcurso.module';
import { RequisitosPageModule } from '../pages/requisitos/requisitos.module';
import { MconfimacionaPageModule } from '../pages/mconfimaciona/mconfimaciona.module';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

Pro.init('4b3a73a3', {
  appVersion: '1.0'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CategoriaPageModule,
    CursosPageModule,
    CapacitacionesPageModule,
    EventosPageModule,
    InfcursoPageModule,
    RequisitosPageModule,
    MconfimacionaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    File
  ]
})
export class AppModule {}
