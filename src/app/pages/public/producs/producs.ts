import { ProductServices } from './../../../services/product-services';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-producs',
  imports: [],
  templateUrl: './producs.html',
  styleUrl: './producs.css',
})
export class Producs {

ProductServices =inject(ProductServices);

ngOnInit(){
  this.ProductServices.getproducts().subscribe({
    next:( res : any )=> {console.log(res.data)
      

    },

    error: (err)=> {
      console.log(err)
    }
  })
    

  }
}


