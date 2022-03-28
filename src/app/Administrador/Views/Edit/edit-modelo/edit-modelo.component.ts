import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloI } from 'src/app/Models/modelo.interface';
import { MarcaService } from 'src/app/Services/marca.service';
import { ModeloService } from 'src/app/Services/modelo.service';

@Component({
  selector: 'app-edit-modelo',
  templateUrl: './edit-modelo.component.html',
  styleUrls: ['./edit-modelo.component.css']
})
export class EditModeloComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiModelo : ModeloService, private router : Router, private apiMarca : MarcaService) { }

  idModelo : any; 
  datosModelo : any;
  FormModelo : any; 
  datosMarcas : any = []; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idModelo = id; 
    });

    this.apiModelo.getShowModelo(this.idModelo.id).subscribe(datos => {
      console.log(datos.data.nombre_modelo); 
      this.datosModelo = datos.data.nombre_modelo; 
    })

    this.FormModelo  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });

    this.apiMarca.getIndexMarca().subscribe(datos =>{
      this.datosMarcas = datos.data; 
      console.log(this.datosMarcas); 
    })
  }

  Enviar(Modelo : ModeloI){
    this.apiModelo.putUpdateModelo(this.idModelo.id, Modelo).subscribe(datos =>{
      alert("Haz Actualizado El Modelo Correctamente")
      this.router.navigate(['../ListModelos']);
    });
  }

}
