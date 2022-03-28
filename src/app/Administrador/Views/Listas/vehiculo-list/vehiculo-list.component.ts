import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/Services/vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  constructor(private apiVehiculo : VehiculoService, private rotuer : Router) { }

  DatosVehiculo : any = [];

  ngOnInit(): void {
    this.apiVehiculo.getIndexVehiculo().subscribe(datos => {
      this.DatosVehiculo = datos.data; 
      console.log(this.DatosVehiculo); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiVehiculo.deleteDestroyVehiculo(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
