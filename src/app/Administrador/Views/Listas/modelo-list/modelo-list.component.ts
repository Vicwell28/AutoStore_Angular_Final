import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloService } from 'src/app/Services/modelo.service';

@Component({
  selector: 'app-modelo-list',
  templateUrl: './modelo-list.component.html',
  styleUrls: ['./modelo-list.component.css']
})
export class ModeloListComponent implements OnInit {

  constructor(private apiModelo : ModeloService, private rotuer : Router) { }

  DatosModelo : any = [];

  ngOnInit(): void {
    this.apiModelo.getIndexModelo().subscribe(datos => {
      this.DatosModelo = datos.data; 
      console.log(this.DatosModelo); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiModelo.deleteDestroyModelo(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }


}
