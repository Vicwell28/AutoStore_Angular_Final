import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoI } from 'src/app/Models/tipo.interface';
import { TipoService } from 'src/app/Services/tipo.service';


@Component({
  selector: 'app-tipo-form',
  templateUrl: './tipo-form.component.html',
  styleUrls: ['./tipo-form.component.css']
})
export class TipoFormComponent implements OnInit {

  
  FormTipo : any; 

  constructor(private apiTipo : TipoService, private router : Router) { }

  ngOnInit(): void {

    this.FormTipo  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
    
  }

  Enviar(Tipo : TipoI){
    this.apiTipo.postStoreTipo(Tipo).subscribe(datos => {
      console.log(datos); 
      alert("Tipo Agregado Exitosamente"); 
      this.router.navigate(['../ListTipos'])
    })
  }

}
