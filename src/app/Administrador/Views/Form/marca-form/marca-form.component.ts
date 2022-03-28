import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcaI } from 'src/app/Models/marca.interface';
import { MarcaService } from 'src/app/Services/marca.service';


@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css']
})
export class MarcaFormComponent implements OnInit {

 
  FormMarca : any; 

  constructor(private apiMarca : MarcaService, private router : Router) { }

  ngOnInit(): void {

    this.FormMarca  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
    
  }

  Enviar(Marca : MarcaI){
    this.apiMarca.postStoreMarca(Marca).subscribe(datos => {
      console.log(datos); 
      alert("Marca Agregado Exitosamente"); 
      this.router.navigate(['../ListMarcas'])
    })
  }
}
