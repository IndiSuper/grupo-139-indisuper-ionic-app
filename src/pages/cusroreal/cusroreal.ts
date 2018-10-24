import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CusrorealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cusroreal',
  templateUrl: 'cusroreal.html',
})
export class CusrorealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  contCurso: string = "DatoBasicos";

  ionViewDidLoad() {
    console.log('ionViewDidLoad CusrorealPage');
  }

}
