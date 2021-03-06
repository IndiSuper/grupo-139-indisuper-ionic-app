import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, NavController, NavParams, Platform } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { CapacitacionesPage } from '../capacitaciones/capacitaciones';
import { CursosPage } from '../cursos/cursos';
import { EventosPage } from '../eventos/eventos';



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

  listSubcategoriaEventos: any;
  listSubcategoriaCursos: any;
  listSubcategorias: any;

  listSubCategoria: any;  //array que almacena las subcategorias  *MIENTRAS TANTO*


  //METODOS PARA LLAMAR LAS CATEGORIAS PERO QUEDA EN VEREMOS POR AHORA
  getSubcategoriaEventos() {
    this.rest.getSubcategoriaEventos().subscribe((respuesta) => {
      this.listSubcategoriaEventos = respuesta;
    });
  }

  getSubcategoriaCursos() {
    this.rest.getSubcategoriaCursos().subscribe((respuesta) => {
      this.listSubcategoriaCursos = respuesta;
    });
  }


  //ESTA ES LA FUNCIONA POR AHORA MIENTRA APRENDEMOS A FILTRAR  *MIENTRAS TANTO*

  getSubcategorias() {
    this.rest.getSubcategorias().subscribe((respuesta) => {
      this.listSubCategoria = respuesta;
    });
    this.navCtrl.push(CategoriaPage, { 'subcateg': this.listSubCategoria });
  }

  //se cargan los curgos directamente, mientras que cargamos lo de las categorias haha :(
  goCursos(): void {
    this.navCtrl.push(CursosPage);
  }

  goCapacitaciones(): void {
    this.navCtrl.push(CapacitacionesPage);
  }

  /*
    getSubcategoriaEventos(){   //metodo para traer las SubCategorias que pertenecen a EVENTOS
      this.rest.getSubcategoriaEventos().subscribe((respuesta) =>{
        this.listSubcategoriaEventos = respuesta;
      });
      this.navCtrl.push(CategoriaPage,{'subcateg' : this.listSubCategoria}); //Voy a las subcategorias de EVENTOS
    }
  
  
  
    listCategoria: any;
  
     getConsultarCategoria(){
      this.rest.getCategoria().subscribe((respuesta) =>{
        this.listCategoria = respuesta;
      });
    }
  
  
    subcateg: Array<{imagen: string ,nombre: string ,component: any}>;
  
  
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
  
    goEventos():void{
      this.navCtrl.push(EventosPage);
    }
  */


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
