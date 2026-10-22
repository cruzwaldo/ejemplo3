import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

email: string = '';
password: string = '';
//metodos


saludar():void{
  console.log(this.email)
  console.log(this.password)


}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }


}