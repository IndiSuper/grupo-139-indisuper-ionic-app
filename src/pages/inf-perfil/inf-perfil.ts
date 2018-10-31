import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { MyservicesProvider } from '../../providers/myservices/myservices'

@IonicPage()
@Component({
  selector: 'page-inf-perfil',
  templateUrl: 'inf-perfil.html',
})
export class InfPerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: MyservicesProvider
  ) {

  }

  infoPerfil: any;

  getUsuario(){
    this.rest.getUsuario().subscribe((respuesta) => {
      this.infoPerfil = respuesta;
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad InfPerfilPage');
  }



}
