import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';

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

subcateg: Array<{imagen: string ,nombre: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subcateg=this.navParams.get('subcateg');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CategoriaPage');
  }
  goBack():void{
    this.navCtrl.pop();
  }

  goCursos():void{
    // switch(subca) {
    //    case 1: {
    //      this.subcateg = [
    //        { imagen:'teatro.jpg', nombre: 'Teatro'},
    //        { imagen:'concierto.jpg', nombre: 'Conciertos'},
    //        { imagen:'fiestas.jpg', nombre: 'Ferias - fiestas'},
    //        { imagen:'stand-up-comedy.jpg', nombre: 'Cuenteros'}
    //      ];
    //       // console.log("ingresio 1" + this.subcateg[0].imagen);
    //       break;
    //    }
    //    case 2: {
    //      this.subcateg = [
    //        { imagen:'deportes.jpg', nombre: 'Deportes'},
    //        { imagen:'gastro.jpg', nombre: 'Gastronomia'},
    //        { imagen:'tecnologia.jpg', nombre: 'Tecnologia'},
    //        { imagen:'arte.jpg', nombre: 'Arte'}
    //      ];
    //         // console.log("ingresio 2");
    //       break;
    //    }
    //    case 3: {
    //      this.subcateg = [
    //        { imagen:'capdian.jpg', nombre: 'Sistema DIAN'},
    //        { imagen:'ley4.jpg', nombre: 'Ley 1793'}
    //      ];
    //         // console.log("ingresio 2");
    //       break;
    //    }
    //    default: {
    //         console.log("ingresio default");
    //       break;
    //    }
    // }
    // this.navCtrl.push(CategoriaPage,{'subcateg' : this.subcateg});
    this.navCtrl.push(CursosPage);
  }


}
