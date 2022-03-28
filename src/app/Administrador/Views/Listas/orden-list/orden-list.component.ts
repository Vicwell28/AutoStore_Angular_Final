import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenService } from 'src/app/Services/orden.service';

@Component({
  selector: 'app-orden-list',
  templateUrl: './orden-list.component.html',
  styleUrls: ['./orden-list.component.css']
})
export class OrdenListComponent implements OnInit {

  constructor(private apiOrden : OrdenService, private rotuer : Router) { }

  DatosOrden : any = [];

  ngOnInit(): void {
    this.apiOrden.getIndexOrden().subscribe(datos => {
      this.DatosOrden = datos.data; 
      console.log(this.DatosOrden); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiOrden.deleteDestroyOrden(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
