import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyservicesProvider {

  constructor(
    public http: HttpClient) {
    console.log('Hello MyservicesProvider Provider');
  }


  getCategoriasSubcategoria(){   //Metodo para traer las subcategorias relacionadas con las Categorias
  return this.http.get('http://localhost:3000/api/CategoriasSubcategorias');
  }









  getSubCategoria(){   //Metodo para traer las subcategorias, lo utilizamos en HomePage
  return this.http.get('http://localhost:3000/api/SubCategoria');
  }

  getEventos(){  //Metodo para traer los eventos, lo utilizamos en EventosPage
  return this.http.get('http://localhost:3000/api/SubCategoria');
  }




  getCategoria(){
    return this.http.get('http://192.168.0.67:3000/categoria');
  }
  getCategoria2(){
    return this.http.get('http://192.168.0.67:3000/categoria/1');
  }




}
