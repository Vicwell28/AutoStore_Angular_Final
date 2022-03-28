import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/Services/citas.service';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.css']
})
export class CitasListComponent implements OnInit {

  constructor(private apiCita : CitaService, private rotuer : Router) { }

  DatosCita : any = [];

  ngOnInit(): void {
    this.apiCita.getIndexCita().subscribe(datos => {
      this.DatosCita = datos.data; 
      console.log(this.DatosCita); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiCita.deleteDestroyCita(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
