import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';



@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
email:string = ''
password: string=''


register():void{
console.log(this.email);
console.log(this.password);



}


}

