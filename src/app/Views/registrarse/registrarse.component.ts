import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrarseI } from 'src/app/Models/registrarse.interface';
import { ResponseI } from 'src/app/Models/response.interface';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registrarseForm = new FormGroup({
    username : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    password2 : new FormControl('', Validators.required),
  })

  
  constructor(private api : ApiServiceService, private router:Router) { }

  contrasenaIguales:boolean = false;
  contrasenaMsg : string = "";  


  ngOnInit(): void {
  }

  onRegistrarse(form : RegistrarseI){
    if(this.registrarseForm.get("password")?.value == this.registrarseForm.get("password2")?.value){
       this.api.registrarOn(form).subscribe(data => {
         let datosResponse : ResponseI = data; 
         console.log(datosResponse); 
         if(datosResponse.status){
           this.router.navigate(["../login"]);
           alert("El Registro Fue Exitoso"); 
         }
       })
    }
    else{
      this.contrasenaIguales = true;
      this.contrasenaMsg = "Las Contraseñas No Coninciden"; 
    }
  }

}
