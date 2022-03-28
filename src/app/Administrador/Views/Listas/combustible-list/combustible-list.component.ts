import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombustibleService } from 'src/app/Services/combustible.service';

@Component({
  selector: 'app-combustible-list',
  templateUrl: './combustible-list.component.html',
  styleUrls: ['./combustible-list.component.css']
})
export class CombustibleListComponent implements OnInit {

  constructor(private apiCombustible : CombustibleService, private rotuer : Router) { }

  DatosCombustible : any = [];

  ngOnInit(): void {
    this.apiCombustible.getIndexCombustible().subscribe(datos => {
      this.DatosCombustible = datos.data; 
      console.log(this.DatosCombustible); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiCombustible.deleteDestroyCombustible(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
