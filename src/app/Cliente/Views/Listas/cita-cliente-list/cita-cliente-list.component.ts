import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CitaService } from 'src/app/Services/citas.service';
import { VehiculoService } from 'src/app/Services/vehiculo.service';

@Component({
  selector: 'app-cita-cliente-list',
  templateUrl: './cita-cliente-list.component.html',
  styleUrls: ['./cita-cliente-list.component.css']
})
export class CitaClienteListComponent implements OnInit {

  idUser : any; 
  VehiculosQueTiene : any = [];

  constructor(private rutaActiva : ActivatedRoute, private router : Router, private apiCita : CitaService, private apiUser : ApiServiceService, private apiVehiculo : VehiculoService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idUser = id; 
      console.log(this.idUser); 
    });

    this.apiCita.getShowCita(this.idUser.id).subscribe(datos => {
      console.log(datos); 
      this.VehiculosQueTiene = datos.data; 
    })

  }

  eliminarDelCarrito(id:number){
    this.apiCita.deleteDestroyCita(id).subscribe(datos => {
      console.log(datos); 
      this.ngOnInit(); 
      alert("Haz Eliminado Tu Cita");
    })}; 

}
