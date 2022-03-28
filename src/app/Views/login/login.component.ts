import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/Models/login.interface';
import { ResponseI } from 'src/app/Models/response.interface';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private api:ApiServiceService, private router:Router) { }

  errorStatus : boolean = false; 
  errorMsg : string = '';
  //DATOS USUARIO
  idUser = "";
  userName = "";

  ngOnInit(): void {
  }

  onLogin(form : LoginI){
    this.api.loginOn(form).subscribe(datas => {
      console.log(form); 
      console.log(datas); 
      let datosResponse : ResponseI = datas;
      console.log(datosResponse.status);

      if(datosResponse.status){
        this.api.UsusarioActivo = true; 
        localStorage.setItem("Token", datosResponse.data.token);

        this.api.sacarUser(form.email).subscribe(datas => {
          console.log(datas);
          this.api.idUser = datas.data.id;

          console.log("idUser"); 
          console.log(this.api.idUser);

          this.api.sacarUserAll(this.api.idUser).subscribe(datos => {
            this.api.userName = datos.data.username;
            this.api.tipoUser = datos.data.rol;
            localStorage.setItem("Tipo", datos.data.rol);
            localStorage.setItem("Nombre", datos.data.username);
            console.log("Nombre User");
            console.log(this.api.userName);

            this.router.navigate(['/Home']);
            alert("El Login Ha Sido Exitoso"); 
          })
        }); 
        //SI TODO SALE BIEN OBJETONGO EL TOKEN, CAMBIO VARIABLE COMO USUARIO ACTIVO, Y OBTENGO LOS DATOS DEL USER.
       
      }
      else {
        this.errorStatus = true; 
        this.errorMsg = "Contraseña o Correo Incorrecto"
      }
    })
  }

}
