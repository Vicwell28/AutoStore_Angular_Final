import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css']
})
export class OffCanvasComponent implements OnInit {

  constructor(private api : ApiServiceService, private route : Router) { }

  ngOnInit(): void {
    this.Username  = this.api.userName;
    this.UserId  = this.api.idUser; 
    this.UserActivo  = this.api.UsusarioActivo;
    this.UserTipo  = this.api.tipoUser; 
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

  getDatos(){
    this.ngOnInit()
  }

  getUserName(){
    return localStorage.getItem('Nombre'); 
  }

  getToke(){
    if(localStorage.getItem('Token') != null){
      return true;
    }
    return false;
  }

  getTipo(){
    return localStorage.getItem('Tipo');
  }

}



















// constructor(private api : ApiServiceService, private route : Router) { }

//   ngOnInit(): void {
//     this.Username  = this.api.userName;
//     this.UserId  = this.api.idUser; 
//     this.UserActivo  = this.api.UsusarioActivo;
//     this.UserTipo  = this.api.tipoUser; 
//   }

//   Username : string = this.api.userName;
//   UserId : string = this.api.idUser; 
//   UserActivo : boolean = this.api.UsusarioActivo;
//   UserTipo : string = this.api.tipoUser; 
 

//   sesionCerrar(){
//     this.api.logout(this.api.getToken);  

//     this.UserId = this.api.idUser = ""; 
//     this.Username = this.api.userName = ""; 
//     this.UserTipo = this.api.tipoUser = "";  
//     this.UserActivo = this.api.UsusarioActivo = false; 
    
//     console.log(this.UserActivo)
//     console.log(this.api.UsusarioActivo); 
//     localStorage.clear()
//     this.route.navigate(["/"]);
//     alert("Sesion Finalizada");
//   }

//   getDatos(){
//     this.ngOnInit()
//   }