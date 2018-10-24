import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiscursosPage } from './miscursos';

@NgModule({
  declarations: [
    MiscursosPage,
  ],
  imports: [
    IonicPageModule.forChild(MiscursosPage),
  ],
})
export class MiscursosPageModule {}
