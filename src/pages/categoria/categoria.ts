import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

subcateg: Array = this.navParams.get('subcateg');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }
  goBack():void{
    this.navCtrl.pop();
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
