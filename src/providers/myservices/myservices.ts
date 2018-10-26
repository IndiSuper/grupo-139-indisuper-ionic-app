import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MyservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyservicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MyservicesProvider Provider');
  }

  getPets(){
    return this.http.get('http://localhost:3000/pets');
  }

}
