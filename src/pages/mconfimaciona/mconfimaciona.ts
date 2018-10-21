import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,Platform} from 'ionic-angular';

/**
 * Generated class for the MconfimacionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mconfimaciona',
  templateUrl: 'mconfimaciona.html',
})
export class MconfimacionaPage {

  pasos: string = "confirmarasis";
  private isDisabledr: boolean=true;
  private isDisabledc: boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MconfimacionaPage');
  }
  
  goPaso2(){
    this.pasos="Requisitos";
    this.isDisabledr=false;
    this.isDisabledc=true;

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  

  


}
