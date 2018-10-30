import { Component ,ViewChild} from '@angular/core';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

import { CursosPage } from '../cursos/cursos';
import { EventosPage } from '../eventos/eventos';


@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {


  subcateg: Array<{imagen: string ,nombre: string ,component: any}>;
  listCategoria: any;

  listSubCategoria: any;  //defino la lista de subcategorias


  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.listSubCategoria=this.navParams.get('subcateg');
    //Aquí, creo, paso las subcategorias que traje en home.ts de la api, creo

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

  openPage():void {
        this.navCtrl.push(EventosPage);
  }


}
