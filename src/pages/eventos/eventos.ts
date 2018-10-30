import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})

export class EventosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EventosPage');
  }

  goBack():void{
    this.navCtrl.pop();
  }


}
