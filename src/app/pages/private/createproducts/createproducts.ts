import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createproducts',
  imports: [FormsModule],
  templateUrl: './createproducts.html',
  styleUrl: './createproducts.css',
})
export class Createproducts {
nombre: string = '';
referencia: string ='';

createproducts(): void{
  console.log(this.nombre)
  console.log(this.referencia)

}




}
