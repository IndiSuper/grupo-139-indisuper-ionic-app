import { Component } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';



import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }


  iniciarSesion() {
    console.log('ionViewDidLoad HomePage');
    this.navCtrl.setRoot(HomePage);
  }

  registro(){
    console.log('ionViewDidLoad RegistroPage');
    this.navCtrl.push(RegistroPage);
  }

}
