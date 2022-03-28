import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CombustibleI } from 'src/app/Models/combustible.interface';
import { CombustibleService } from 'src/app/Services/combustible.service';

@Component({
  selector: 'app-edit-combustible',
  templateUrl: './edit-combustible.component.html',
  styleUrls: ['./edit-combustible.component.css']
})
export class EditCombustibleComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiCombustible : CombustibleService, private router : Router) { }

  idCombustible : any; 
  datosCombustible : any;
  FormCombustible : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idCombustible = id; 
    });

    this.apiCombustible.getShowCombustible(this.idCombustible.id).subscribe(datos => {
      console.log(datos.data.nombre_combustible); 
      this.datosCombustible = datos.data.nombre_combustible; 
    })

    this.FormCombustible  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }

  Enviar(Combustible : CombustibleI){
    this.apiCombustible.putUpdateCombustible(this.idCombustible.id, Combustible).subscribe(datos =>{
      alert("Haz Actualizado El Combustible Correctamente")
      this.router.navigate(['../ListCombustibles']);
    });
  }
}
