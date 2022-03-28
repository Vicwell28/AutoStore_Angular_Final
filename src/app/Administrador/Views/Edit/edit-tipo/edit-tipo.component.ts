import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoI } from 'src/app/Models/tipo.interface';
import { TipoService } from 'src/app/Services/tipo.service';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrls: ['./edit-tipo.component.css']
})
export class EditTipoComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiTipo : TipoService, private router : Router) { }

  idTipo : any; 
  datosTipo : any;
  FormTipo : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idTipo = id; 
    });

    this.apiTipo.getShowTipo(this.idTipo.id).subscribe(datos => {
      console.log(datos.data.nombre_tipo); 
      this.datosTipo = datos.data.nombre_tipo; 
    })

    this.FormTipo  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }

  Enviar(Tipo : TipoI){
    this.apiTipo.putUpdateTipo(this.idTipo.id, Tipo).subscribe(datos =>{
      alert("Haz Actualizado El Tipo Correctamente")
      this.router.navigate(['../ListTipos']);
    });
  }

}
