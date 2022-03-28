import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrdenI } from 'src/app/Models/orden.interface';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CarritoCompraService } from 'src/app/Services/carrito-compra.service';
import { DetalleOrdenService } from 'src/app/Services/detalle-orden.service';
import { OrdenService } from 'src/app/Services/orden.service';

@Component({
  selector: 'app-carrito-compra-list',
  templateUrl: './carrito-compra-list.component.html',
  styleUrls: ['./carrito-compra-list.component.css']
})
export class CarritoCompraListComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private api : CarritoCompraService, private nav : Router,
    private apiOrden : OrdenService, 
    private apiDetalle : DetalleOrdenService) { }

  idUser : any; 
  VehiculosQueTiene : any = [];

  ngOnInit(): void {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idUser = params['id'];
        console.log(this.idUser); 
      }
    );

    this.api.getShowCarritoCompra(this.idUser).subscribe(datas =>{
      this.VehiculosQueTiene = datas.data
      console.log(this.VehiculosQueTiene); 
    })

  }

  eliminarDelCarrito(id:number){
    this.api.deleteDestroyCarritoCompra(id).subscribe(data =>{
      console.log("Se Ejecutor la funcion eliminar")
      console.log(data); 
      console.log(id); 
      alert("Se Ha Eliminado El Producto"); 
      this.ngOnInit();
    });     
  }

  Compra(){
    console.log("Compra Realizada");
    console.log(this.idUser);
    console.log(this.VehiculosQueTiene.length -1);

    const Orden : OrdenI = {
      User : parseInt(this.idUser),
      Fecha : '2022-03-22'
    }

    this.apiOrden.postStoreOrden(Orden).subscribe(datos => {
      console.log(datos);
      console.log(datos.data); 

      for (let index = 0; index < this.VehiculosQueTiene.length; index++) {
        const vehiculo = this.VehiculosQueTiene[index].Vehiculo.id;
  
        const ordenDetall = {
              Vehiculo :  vehiculo, 
              Orden : datos.data
            }
        
        this.apiDetalle.postStoreDetalleOrden(ordenDetall).subscribe(datoos => {
          console.log(datoos); 
        })
        
      }
    })


  }

}
