import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CitaService } from 'src/app/Services/citas.service';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {


  idVehiculo : any; 

  CitaForm! : FormGroup; 

  constructor(private rutaActiva : ActivatedRoute, private router : Router, private apiCita : CitaService, private apiUser : ApiServiceService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idVehiculo = id; 
      console.log(this.idVehiculo); 
    });

    this.CitaForm = new FormGroup({
      fecha : new FormControl('', Validators.required)
    })
  }

  agendarCita(datos : any){
    console.log(datos); 
    const newdatos = {
      User : this.apiUser.idUser, 
      Vehiculo : this.idVehiculo.id, 
      Fecha : this.CitaForm.value.fecha
    }

    this.apiCita.postStoreCita(newdatos).subscribe(datos => {
      console.log(datos); 
      this.router.navigate(['../../../Vehiculos/Citas/', this.apiUser.idUser]);
      alert("Haz Agendado La Cita Correctamente");
    })
    
  }

}
