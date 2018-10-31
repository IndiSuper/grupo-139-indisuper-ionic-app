import { Component ,ViewChild} from '@angular/core';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

import { CursosPage } from '../cursos/cursos';
import { EventosPage } from '../eventos/eventos';

import { MyservicesProvider } from '../../providers/myservices/myservices'

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {


  subcateg: Array<{imagen: string ,nombre: string ,component: any}>;   //esto creo que sobra
  listCategoria: any; //esto creo que sobra tambien

  listSubCategorias: any;  //defino la lista de subcategorias

  listEventos: any;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: MyservicesProvider
    ) {
    this.listSubCategorias=this.navParams.get('subcateg');
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
        this.navCtrl.push(EventosPage)
  }

  //Intento para abrir la página cargando de una vez los eventos
  openPagee():void {
      this.rest.getEventos().subscribe((respuesta) =>{
        this.listEventos = respuesta;
      });
      this.navCtrl.push(EventosPage,{'eventos' : this.listEventos});
  }


}
