import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.css']
})
export class ComprasListComponent implements OnInit {

  idUser : any; 
  VehiculosQueTiene : any = [];

  constructor() { }

  ngOnInit(): void {
  }

  eliminarDelCarrito(id:number){
    //http://127.0.0.1:3333/CarritoCompra/1  
    // this.api.eliminarElVehiculoCarrito(id).subscribe(data =>{
    //   console.log("Se Ejecutor la funcion eliminar")
    //   console.log(data); 
    //   console.log(id); 
    //   alert("Se Ha Eliminado El Producto"); 
    //   this.nav.navigate(["../home"]);
    }; 

}
