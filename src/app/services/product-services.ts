import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {


private http = inject(HttpClient);
private apiUrl: string = `http://localhost:3000/products`

//metodo-funciones

getproducts(){

  return this.http.get(this.apiUrl); 
}






}
