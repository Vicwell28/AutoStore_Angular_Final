import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoService } from 'src/app/Services/tipo.service';

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})
export class TipoListComponent implements OnInit {

  constructor(private apiTipo : TipoService, private rotuer : Router) { }

  DatosTipo : any = [];

  ngOnInit(): void {
    this.apiTipo.getIndexTipo().subscribe(datos => {
      this.DatosTipo = datos.data; 
      console.log(this.DatosTipo); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiTipo.deleteDestroyTipo(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }


}
