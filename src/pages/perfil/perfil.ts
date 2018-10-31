import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarPPage} from '../editar-p/editar-p';
import {InfPerfilPage} from '../inf-perfil/inf-perfil';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  tab1Root = InfPerfilPage;
  tab2Root = EditarPPage;



}
