import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
  "numFijo": 0,
  "numCel": 0,
  "nickname": "",
  "clave": "",
  "notificacion": true,
  "correoUsuario": ""

  }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: MyservicesProvider,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrarUsuario(){
  this.rest.registrarUsuario(this.postData)
    .subscribe(data => {
      console.log(data['_body']);
      this.navCtrl.setRoot('WelcomePage');
      //genera la notificación de exito
      const toast = this.toastCtrl.create({
      message: '¡Registrado! Ya puedes ingresar con tus datos',
      duration: 6000
      });
      toast.present();
      //
    }, error => {
      console.log(error);
    });
  }

}
