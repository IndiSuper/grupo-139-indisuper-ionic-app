import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController } from 'ionic-angular';
import { ModalController ,AlertController } from 'ionic-angular';
import { RequisitosPage } from '../requisitos/requisitos';
import { MconfimacionaPage } from '../mconfimaciona/mconfimaciona';

/**
 * Generated class for the InfcursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infcurso',
  templateUrl: 'infcurso.html',
})
export class InfcursoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public platform: Platform,public viewCtrl: ViewController,public alerCtrl: AlertController) {
    
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Confirmar Inscripción',
      message: 'Recuerde que al incribirse acepto los terminos y condiciones de esta plataforma, ¿esta seguro de continuar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
             this.presentModalConfira();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfcursoPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(RequisitosPage);
    modal.present();
  }
  presentModalConfira() {
    let modal = this.modalCtrl.create(MconfimacionaPage);
    modal.present();
  }
}
