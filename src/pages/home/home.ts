import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
  subcateg: Array<{imagen: string ,nombre: string}>;

  goCategoria(subca):void{
    switch(subca) {
       case 1: {
         this.subcateg = [
           { imagen:'teatro.jpg', nombre: 'Teatro'},
           { imagen:'concierto.jpg', nombre: 'Conciertos'},
           { imagen:'fiestas.jpg', nombre: 'Ferias - fiestas'},
           { imagen:'stand-up-comedy.jpg', nombre: 'Cuenteros'}
         ];
          // console.log("ingresio 1" + this.subcateg[0].imagen);
          break;
       }
       case 2: {
         this.subcateg = [
           { imagen:'deportes.jpg', nombre: 'Deportes'},
           { imagen:'gastro.jpg', nombre: 'Gastronomia'},
           { imagen:'tecnologia.jpg', nombre: 'Tecnologia'},
           { imagen:'arte.jpg', nombre: 'Arte'}
         ];
            // console.log("ingresio 2");
          break;
       }
       case 3: {
         this.subcateg = [
           { imagen:'capdian.jpg', nombre: 'Sistema DIAN'},
           { imagen:'ley4.jpg', nombre: 'Ley 1793'}
         ];
            // console.log("ingresio 2");
          break;
       }
       default: {
            console.log("ingresio default");
          break;
       }
    }
    this.navCtrl.push(CategoriaPage,{'subcateg' : this.subcateg});
    // this.navCtrl.push(CategoriaPage,this.subcateg);
  }
  initializeItems() {
  this.items = [
    'Amsterdam',
    'Bogota',
    'Buenos Aires',
    'Cairo',
  ];
}

getItems(ev) {
  // Reset items back to all of the items
  this.initializeItems();

  // set val to the value of the ev target
  var val = ev.target.value;

  // if the value is an empty string don't filter the items
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}

}
