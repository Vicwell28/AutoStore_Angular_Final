import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private apiUser : ApiServiceService, private rotuer : Router) { }

  DatosUser : any = [];

  ngOnInit(): void {
    this.apiUser.getIndexUser().subscribe(datos => {
      this.DatosUser = datos.data; 
      console.log(this.DatosUser); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiUser.deleteDestroyUser(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
