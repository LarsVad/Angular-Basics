import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  async GetData(){

      let response =  await fetch("assets/data.json")
      let data     =  await response.json()

      //console.log(data)

      return data
  }
}
