import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaI } from 'src/app/Models/marca.interface';
import { MarcaService } from 'src/app/Services/marca.service';


@Component({
  selector: 'app-edit-marca',
  templateUrl: './edit-marca.component.html',
  styleUrls: ['./edit-marca.component.css']
})
export class EditMarcaComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiMarca : MarcaService, private router : Router) { }

  idMarca : any; 
  datosMarca : any;
  FormMarca : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idMarca = id; 
    });

    this.apiMarca.getShowMarca(this.idMarca.id).subscribe(datos => {
      console.log(datos.data.nombre_marca); 
      this.datosMarca = datos.data.nombre_marca; 
    })

    this.FormMarca  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }

  Enviar(Marca : MarcaI){
    this.apiMarca.putUpdateMarca(this.idMarca.id, Marca).subscribe(datos =>{
      alert("Haz Actualizado El Marca Correctamente")
      this.router.navigate(['../ListMarcas']);
    });
  }

}
