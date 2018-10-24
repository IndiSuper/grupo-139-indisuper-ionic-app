import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CusrorealPage } from '../cusroreal/cusroreal';


/**
 * Generated class for the MiscursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-miscursos',
  templateUrl: 'miscursos.html',
})
export class MiscursosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiscursosPage');
  }

  goHome(){
    this.navCtrl.push(HomePage);  
  }
  
  goCursoreal(){
    this.navCtrl.push(CusrorealPage);
  }
}
