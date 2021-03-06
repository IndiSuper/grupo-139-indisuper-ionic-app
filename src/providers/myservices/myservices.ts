import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable()
export class MyservicesProvider {

  servidor: any;

  constructor(
    public http: HttpClient) {
    console.log('Hello MyservicesProvider Provider');
    this.servidor="https://indisuper.glud.org/api/";
  }

  //Método POST para registrar usuario
  registrarUsuario(postData){
    return this.http.post(this.servidor + 'Usuarios', postData);
  }

  //Método para autentificar usuario y obtener los datos del usuario
  getUsuario(username, password){
    let apiUser="https://indisuper.glud.org/api/Usuarios?filter={\"where\": {\"nickname\": \""+username+"\" , \"clave\": \""+password+"\"}}";
    return this.http.get(encodeURI(apiUser));
  }






  //Metodo para traer las id subcategotias relacionadas con EVENTOS
  getSubcategoriaEventos(){
  return this.http.get(this.servidor + 'CategoriasSubcategorias?filter=%7B%22where%22%3A%20%7B%22codCategoria%22%3A%201%7D%20%7D');
  }

  //Metodo para traer las id subcategotias relacionadas con CURSOS
  getSubcategoriaCursos(){
  return this.http.get('http://localhost:3000/api/CategoriasSubcategorias?filter=%7B%22where%22%3A%20%7B%22codCategoria%22%3A%202%7D%20%7D');
  }


  //ESTO SE QUEDA MIENTRAS LOGRAMOS HACER EL FILTRO
  getSubcategorias(){   //Metodo para traer las subcategorias, lo utilizamos en HomePage
  return this.http.get(this.servidor + 'Subcategorias');
  }

  getEventos(){   //Metodo para traer las subcategorias, lo utilizamos en HomePage
  return this.http.get('https://indisuper.glud.org/api/Eventos');
  }



  //De aqui pa bajo son pruebas (también de arriba ja)... asi que esto no se tiene en cuenta haha
/*
  //Metodo para traer las subcategorias relacionadas con las Categorias
  getCategoriasSubcategoria(){
  return this.http.get('http://localhost:3000/api/CategoriasSubcategorias');
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
*/



}
