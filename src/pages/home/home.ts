import { Component,ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav,NavController,NavParams,Platform } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { CapacitacionesPage } from '../capacitaciones/capacitaciones';
import { CursosPage } from '../cursos/cursos';
import { EventosPage } from '../eventos/eventos';
import { VideoPlayer } from '@ionic-native/video-player';


import { MyservicesProvider } from '../../providers/myservices/myservices'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public rest: MyservicesProvider
  ) {


  }

  listSubCategoria: any;  //array para listar las subcategorias

  getSubCategoria(){   //metodo para traer las SubCategorias
    this.rest.getSubCategoria().subscribe((respuesta) =>{
      this.listSubCategoria = respuesta;
    });
    this.navCtrl.push(CategoriaPage,{'subcateg' : this.listSubCategoria});
  }


  listCategoria: any;

   getConsultarCategoria(){
    this.rest.getCategoria().subscribe((respuesta) =>{
      this.listCategoria = respuesta;
    });
  }


  subcateg: Array<{imagen: string ,nombre: string ,component: any}>;



//Aquí es donde uso lo de las SUBCATEGORIAS
   goCategoria(subca):void{
       this.getConsultarCategoria();
        console.log(this.listCategoria);
         switch(subca) {
          case 1: {
          //EL CASO 1 = EVENTOS
                this.subcateg = [
                  { imagen:'teatro.jpg', nombre: 'sdsdsd',component:EventosPage },
                  { imagen:'concierto.jpg', nombre: 'Conciertos',component: EventosPage},
                  { imagen:'fiestas.jpg', nombre: 'Ferias - fiestas',component:EventosPage},
                  { imagen:'stand-up-comedy.jpg', nombre: 'Cuenteros',component:EventosPage}
                 ];
                 console.log("ingresio 1" + this.subcateg[0].imagen);
                  break;
               }
           case 2: {
                  this.subcateg = [
                     { imagen:'deportes.jpg', nombre: 'Deportes',component:CursosPage},
                     { imagen:'gastro.jpg', nombre: 'Gastronomia',component:CursosPage},
                     { imagen:'tecnologia.jpg', nombre: 'Tecnologia',component:CursosPage},
                     { imagen:'arte.jpg', nombre: 'Arte',component:CursosPage}
                   ];
                      console.log("ingresio 2");
                    break;
                }
         default: {
             console.log("ingresio default");
           break;
          }
        }
    this.navCtrl.push(CategoriaPage,{'subcateg' : this.subcateg});
    //this.navCtrl.push(CategoriaPage,this.subcateg);
  }


  goCapacitaciones():void{
    this.navCtrl.push(CapacitacionesPage);
  }
  goEventos():void{
    this.navCtrl.push(EventosPage);
  }



//   initializeItems() {
//   this.items = [
//     'Amsterdam',
//     'Bogota',
//     'Buenos Aires',
//     'Cairo',
//   ];
// }
//
// getItems(ev) {
//   // Reset items back to all of the items
//   this.initializeItems();
//
//   // set val to the value of the ev target
//   var val = ev.target.value;
//
//   // if the value is an empty string don't filter the items
//   if (val && val.trim() != '') {
//     this.items = this.items.filter((item) => {
//       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//     })
//   }
// }
}
