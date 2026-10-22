import { UserService } from './../../../sevices/user-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-alluser',
  imports: [],
  templateUrl: './alluser.html',
  styleUrl: './alluser.css',
})
export class Alluser {

  userService = inject(UserService);

  ngOnInit(){

    
this.userService.getUser().subscribe({
next:(res : any )=> {console.log(res)

},
error: (err)=> {
  console.log(err)
}


})



  }






}
