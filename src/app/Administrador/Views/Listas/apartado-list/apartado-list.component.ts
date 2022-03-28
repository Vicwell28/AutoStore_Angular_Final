import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartadosService } from 'src/app/Services/apartados.service';

@Component({
  selector: 'app-apartado-list',
  templateUrl: './apartado-list.component.html',
  styleUrls: ['./apartado-list.component.css']
})
export class ApartadoListComponent implements OnInit {

  constructor(private apiApartado : ApartadosService, private rotuer : Router) { }

  DatosApartado : any = [];

  ngOnInit(): void {
    this.apiApartado.getIndexApartado().subscribe(datos => {
      this.DatosApartado = datos.data; 
      console.log(this.DatosApartado); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiApartado.deleteDestroyApartado(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }


}
