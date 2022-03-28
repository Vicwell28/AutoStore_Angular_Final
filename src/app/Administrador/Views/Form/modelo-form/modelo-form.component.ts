import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloI } from 'src/app/Models/modelo.interface';
import { MarcaService } from 'src/app/Services/marca.service';
import { ModeloService } from 'src/app/Services/modelo.service';


@Component({
  selector: 'app-modelo-form',
  templateUrl: './modelo-form.component.html',
  styleUrls: ['./modelo-form.component.css']
})
export class ModeloFormComponent implements OnInit {

  
  FormModelo : any;
  datosMarcas : any = []; 

  constructor(private apiModelo : ModeloService, private router : Router, private apiMarca : MarcaService) { }

  ngOnInit(): void {

    this.FormModelo  = new FormGroup({
      Nombre : new FormControl('', Validators.required),
      Marca : new FormControl('', Validators.required),
    });

    this.apiMarca.getIndexMarca().subscribe(datos =>{
      this.datosMarcas = datos.data; 
      console.log(this.datosMarcas); 
    })
    
  }

  Enviar(Modelo : ModeloI){
    console.log(Modelo); 
    this.apiModelo.postStoreModelo(Modelo).subscribe(datos => {
      console.log(datos); 
      alert("Modelo Agregado Exitosamente"); 
      this.router.navigate(['../ListModelos'])
    })
  }

}
