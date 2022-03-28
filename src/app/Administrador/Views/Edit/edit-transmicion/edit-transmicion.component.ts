import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransmicionI } from 'src/app/Models/transmicion.interface';
import { TransmicionService } from 'src/app/Services/transmicion.service';

@Component({
  selector: 'app-edit-transmicion',
  templateUrl: './edit-transmicion.component.html',
  styleUrls: ['./edit-transmicion.component.css']
})
export class EditTransmicionComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiTransmicion : TransmicionService, private router : Router) { }

  idTransmicion : any; 
  datosTransmicion : any;
  FormTransmicion : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idTransmicion = id; 
    });

    this.apiTransmicion.getShowTransmicion(this.idTransmicion.id).subscribe(datos => {
      console.log(datos.data.nombre_trans); 
      this.datosTransmicion = datos.data.nombre_trans; 
    })

    this.FormTransmicion  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }

  Enviar(Transmicion : TransmicionI){
    this.apiTransmicion.putUpdateTransmicion(this.idTransmicion.id, Transmicion).subscribe(datos =>{
      alert("Haz Actualizado El Transmicion Correctamente")
      this.router.navigate(['../ListTransmiciones']);
    });
  }

}
