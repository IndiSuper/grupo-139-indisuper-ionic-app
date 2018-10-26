import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';


/**
 * Generated class for the ModaleventocapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modaleventocapa',
  templateUrl: 'modaleventocapa.html',
})
export class ModaleventocapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModaleventocapaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



}
