import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ModalController } from 'ionic-angular';
import { MyApp } from './app.component';

//import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CategoriaPage } from '../pages/categoria/categoria';
import { CategoriaPageModule } from '../pages/categoria/categoria.module';
import { CursosPageModule } from '../pages/cursos/cursos.module';
import { CapacitacionesPageModule } from '../pages/capacitaciones/capacitaciones.module';
import { EventosPageModule } from '../pages/eventos/eventos.module';
import { InfcursoPageModule } from '../pages/infcurso/infcurso.module';
import { RequisitosPageModule } from '../pages/requisitos/requisitos.module';
import { MconfimacionaPageModule } from '../pages/mconfimaciona/mconfimaciona.module';
import { MiscursosPageModule } from '../pages/miscursos/miscursos.module';
import { CusrorealPageModule } from '../pages/cusroreal/cusroreal.module';
import { ModaleventocapaPageModule } from '../pages/modaleventocapa/modaleventocapa.module';
import { QrasistenciaPageModule } from '../pages/qrasistencia/qrasistencia.module';
import { DestacadosPageModule } from '../pages/destacados/destacados.module';
import { ContactenosPageModule } from '../pages/contactenos/contactenos.module';
import { HorarioPageModule } from '../pages/horario/horario.module';
import { RegistroPageModule } from '../pages/registro/registro.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { HomePageModule } from '../pages/home/home.module';
import { InfPerfilPageModule } from '../pages/inf-perfil/inf-perfil.module';
import { EditarPPageModule } from '../pages/editar-p/editar-p.module';

import { AndroidPermissions } from '@ionic-native/android-permissions';

import { HTTP } from '@ionic-native/http';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Modulos para consumir los servicios API :)
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyservicesProvider } from '../providers/myservices/myservices';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {

    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}


@NgModule({
  declarations: [
    MyApp,
    //HomePage,
    ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    HomePageModule,
    CategoriaPageModule,
    CursosPageModule,
    CapacitacionesPageModule,
    EventosPageModule,
    InfcursoPageModule,
    RequisitosPageModule,
    MconfimacionaPageModule,
    MiscursosPageModule,
    CusrorealPageModule,
    ModaleventocapaPageModule,
    QrasistenciaPageModule,
    DestacadosPageModule,
    HttpClientModule,  //modulo importado para consumir api
    ContactenosPageModule,
    HorarioPageModule,
    RegistroPageModule,
    PerfilPageModule,
    InfPerfilPageModule,
    EditarPPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage,
    ListPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FileTransfer,
    File,
    QRScanner,
    AndroidPermissions,
    MyservicesProvider,  //proveedor de api
    HttpClient   //proveedor para api
  ]
})
export class AppModule { }
