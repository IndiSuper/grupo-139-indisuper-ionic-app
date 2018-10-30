import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPage } from './perfil';
import { Component } from '@angular/core';


@NgModule({
  declarations: [
    PerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPage),
  ],
})
export class PerfilPageModule {}
