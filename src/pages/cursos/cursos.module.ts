import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CursosPage } from './cursos';

@NgModule({
  declarations: [
    CursosPage,
  ],
  imports: [
    IonicPageModule.forChild(CursosPage),
  ],
})
export class CursosPageModule {}
