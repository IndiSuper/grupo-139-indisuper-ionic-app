import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';
import { MyservicesProvider } from '../../providers/myservices/myservices'; //Importar Servicio
import { ToastController } from 'ionic-angular'; //Necesario para generar las notificaiones

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  //Objeto para almacenar los datos en login
  autentificar = {
  "nombreUsuario": "",
  "clave": ""
  }

  //Información que obtendre del usuario al autentificar
  usuario: any;


  constructor(
    public navCtrl: NavController,
    public rest: MyservicesProvider,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    //this.username = autentificar.numIdentificacion;
    //this.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  //Método para "autentificar" usuarios
  inicioSesion() {
    this.rest.getUsuario(this.autentificar.nombreUsuario, this.autentificar.clave).subscribe((respuesta) =>{
      this.usuario = respuesta;
    });
    //Verficar que el usuario existe, comprobando que la respuesta es NO vacía
    //Es necesario pasarle la condición de null porque sale error si no se agrega valores al usuario o clave
    if (this.usuario == null || Object.keys(this.usuario).length === 0  ) {
      console.log('No es posible obtener los datos del usuario');
      //genera la notificación de registro NO exitoso
      const toast = this.toastCtrl.create({
      message: '¡Usuario o Contraseña Incorrectos! Verifique los datos ingresados',
      duration: 4000
      });
      toast.present();
    }else{
    console.log('Usuario autentificado && ionViewDidLoad HomePage');
    this.navCtrl.setRoot(HomePage);
    }
  }

  registro(){
    console.log('ionViewDidLoad RegistroPage');
    this.navCtrl.push(RegistroPage);
  }

}
