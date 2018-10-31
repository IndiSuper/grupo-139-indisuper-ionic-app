import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyservicesProvider } from '../../providers/myservices/myservices'


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})

export class EventosPage {

  listEventos: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar,
    public rest: MyservicesProvider
  ) {
    this.listEventos=this.navParams.get('eventos');
  }



  ionViewDidLoad() {
    // console.log('ionViewDidLoad EventosPage');
  }

  goBack():void{
    this.navCtrl.pop();
  }


}
