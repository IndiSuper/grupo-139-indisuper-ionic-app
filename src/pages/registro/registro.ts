import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 import { MyservicesProvider } from '../../providers/myservices/myservices';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  postData = {

  "fotoUsuario": "user.png",
  "numIdentificacion": 0,
  "nombreUsuario": "",
  "apellidoUsuario": "",
  "fechaNac": "",
  "fechaExpc": "",
  "genero": "M", //TOCA CUADRAR ESTO
  "numCel": 0,
  "nickname": "diego",
  "clave": "",
  "notificacion": true,
  "correoUsuario": ""

  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: MyservicesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }


  registrarUsuario(){
  this.rest.registrarUsuario(this.postData)
    .subscribe(data => {
      console.log(data['_body']);
      this.navCtrl.setRoot('HomePage');
    }, error => {
      console.log(error);
    });
  }

}
