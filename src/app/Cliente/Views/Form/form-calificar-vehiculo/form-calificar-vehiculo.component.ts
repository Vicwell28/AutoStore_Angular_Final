import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EstrellaI } from 'src/app/Models/Estrella.interface';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { EstrellaService } from 'src/app/Services/estrella.service';

@Component({
  selector: 'app-form-calificar-vehiculo',
  templateUrl: './form-calificar-vehiculo.component.html',
  styleUrls: ['./form-calificar-vehiculo.component.css']
})
export class FormCalificarVehiculoComponent implements OnInit {

  idVehiculo : any; 
  idUser : any; 

  constructor
  (
    private rutaActiva : ActivatedRoute, 
    private apiUser : ApiServiceService,
    private apiEstrella : EstrellaService,
    private ruta : Router
  ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idVehiculo = id; 
      console.log(this.idVehiculo); 
    });

    this.idUser = this.apiUser.idUser;
  }

  Calificar(valor : any){
    const bodyEstrella : EstrellaI = {
      User : parseInt(this.idUser), 
      Vehiculo : parseInt(this.idVehiculo.id),
      Estrella : valor
    }

    console.log(bodyEstrella); 

    if (!this.apiUser.aprobado){
        
      alert("YA HAZ CALIFICADO ESTE VEHICULO"); 
      this.ruta.navigate(['../../../Detalle/Vehiculo/', this.idVehiculo.id]);

    }
    else{
      this.apiEstrella.postStoreEstrella(bodyEstrella).subscribe(datos => {
        console.log(datos);   
        alert("Calificacion Exitosa"); 
        this.apiUser.aprobado = !this.apiUser.aprobado
        this.ruta.navigate(['../../../Detalle/Vehiculo/', this.idVehiculo.id]);
        
      })
    }

    
    
    
  }

}
