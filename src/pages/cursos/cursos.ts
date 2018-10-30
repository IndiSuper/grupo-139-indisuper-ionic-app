import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { InfcursoPage } from '../infcurso/infcurso';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CursosPage');
  }

  goBack():void{
    this.navCtrl.pop();
  }
  goEventos():void{
    this.navCtrl.push(EventosPage);
  }
  goInfcurso():void{
    this.navCtrl.push(InfcursoPage);
  }


}
