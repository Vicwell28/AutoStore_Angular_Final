import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorI } from 'src/app/Models/color.interface';
import { RegistrarseI } from 'src/app/Models/registrarse.interface';
import { UserI } from 'src/app/Models/user.interface';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiUser : ApiServiceService, private router : Router) { }

  idUser : any; 
  datosUser : any;
  FormColor : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idUser = id; 
    });

    this.apiUser.getShowUser(this.idUser.id).subscribe(datos => {
     
      this.datosUser = datos.data; 
      console.log(this.datosUser); 
    })

    this.FormColor  = new FormGroup({
      username : new FormControl('', Validators.required), 
      email : new FormControl('', Validators.required), 
      rol : new FormControl('', Validators.required), 
    });
  }

  Enviar(Color : UserI){
    const datosUser = {
      username  : this.FormColor.value.username, 
      email : this.FormColor.value.email, 
      rol : this.FormColor.value.rol
    }
    console.log(datosUser); 
    this.apiUser.putUpdateUser(this.idUser.id, datosUser).subscribe(datos =>{
      alert("Haz Actualizado El Usuario Correctamente")
      this.router.navigate(['../Dashboard']);
    });
  }

}
