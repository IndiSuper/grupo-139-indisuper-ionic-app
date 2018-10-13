import { Component ,ViewChild} from '@angular/core';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { EventosPage } from '../eventos/eventos';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  subcateg: Array<{imagen: string ,nombre: string ,component: any}>;
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
    this.subcateg=this.navParams.get('subcateg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }
  goBack():void{
    this.navCtrl.pop();
  }

  goEventos():void{
    this.navCtrl.push(EventosPage);
  }
  goCursos():void{
    this.navCtrl.push(CursosPage);
  }

  openPage(page):void {
        this.navCtrl.push(page.component);
  }


}
