import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaPage } from './categoria';

@NgModule({
  declarations: [
    CategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriaPage),
  ],
})
export class CategoriaPageModule {}
