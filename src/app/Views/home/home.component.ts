import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiServiceService, private route : Router) { }

  ngOnInit(): void {
    this.Username  = this.api.userName;
    this.UserId  = this.api.idUser; 
    this.UserActivo  = this.api.UsusarioActivo;
    this.UserTipo  = this.api.tipoUser; 

    console.log(this.Username);
    console.log(this.UserId);
    console.log(this.UserActivo);
    console.log(this.UserTipo);
  }

  Username : string = this.api.userName;
  UserId : string = this.api.idUser; 
  UserActivo : boolean = this.api.UsusarioActivo;
  UserTipo : string = this.api.tipoUser; 
 

  sesionCerrar(){
    this.api.logout(this.api.getToken);  

    this.UserId = this.api.idUser = ""; 
    this.Username = this.api.userName = ""; 
    this.UserTipo = this.api.tipoUser = "";  
    this.UserActivo = this.api.UsusarioActivo = false; 
    
    console.log(this.UserActivo)
    console.log(this.api.UsusarioActivo); 
    localStorage.clear()
    this.route.navigate(["/"]);
    alert("Sesion Finalizada");
  }

}
