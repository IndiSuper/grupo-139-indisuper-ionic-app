import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  postData = {

  "fotoUsuario": "",
  "numIdentificacion": 0,
  "nombreUsuario": "",
  "apellidoUsuario": "",
  "fechaNac": "",
  "fechaExpc": "",
  "genero": "",
  "numCel": 0,
  "nickname": "",
  "clave": "",
  "notificacion": true,
  "correoUsuario": ""
  
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
