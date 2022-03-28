import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransmicionService } from 'src/app/Services/transmicion.service';

@Component({
  selector: 'app-transmicion-list',
  templateUrl: './transmicion-list.component.html',
  styleUrls: ['./transmicion-list.component.css']
})
export class TransmicionListComponent implements OnInit {

  constructor(private apiTransmicion : TransmicionService, private rotuer : Router) { }

  DatosTransmicion : any = [];

  ngOnInit(): void {
    this.apiTransmicion.getIndexTransmicion().subscribe(datos => {
      this.DatosTransmicion = datos.data; 
      console.log(this.DatosTransmicion); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiTransmicion.deleteDestroyTransmicion(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
