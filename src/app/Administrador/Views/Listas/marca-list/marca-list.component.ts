import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaService } from 'src/app/Services/marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private apiMarca : MarcaService, private rotuer : Router) { }

  DatosMarca : any = [];

  ngOnInit(): void {
    this.apiMarca.getIndexMarca().subscribe(datos => {
      this.DatosMarca = datos.data; 
      console.log(this.DatosMarca); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiMarca.deleteDestroyMarca(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }


}
