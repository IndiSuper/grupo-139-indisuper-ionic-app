import { Component } from '@angular/core';
import { Platform,IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the RequisitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html',
})
export class RequisitosPage {

  constructor( public platform: Platform,public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitosPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
