import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApartadoI } from 'src/app/Models/apartado.interface';
import { CarritoCompraI } from 'src/app/Models/carritocompra.interface';
import { ComentarioI } from 'src/app/Models/Comentario.interface';
import { ApartadosService } from 'src/app/Services/apartados.service';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CarritoCompraService } from 'src/app/Services/carrito-compra.service';
import { ComentarioService } from 'src/app/Services/comentario.service';
import { EstrellaService } from 'src/app/Services/estrella.service';
import { VehiculoService } from 'src/app/Services/vehiculo.service';

@Component({
  selector: 'app-detalle-vehiculo-list',
  templateUrl: './detalle-vehiculo-list.component.html',
  styleUrls: ['./detalle-vehiculo-list.component.css']
})
export class DetalleVehiculoListComponent implements OnInit {

  idVehiculo : any; 
  datosVehiculos : any; 
  formCometario : any; 
  comentariosVehiculo : any; 
  estrellas : any = 0; 
  CalficoUser : boolean = false; 

  constructor(private rutaActiva : ActivatedRoute, private apiVehiculo : VehiculoService, private router : Router,
    private apiCarritoCompra : CarritoCompraService,
    private apiApartado : ApartadosService,
    private apiUser : ApiServiceService, 
    private apiComentario : ComentarioService,
    private apiEstrella : EstrellaService
    ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idVehiculo = id; 
      console.log(this.idVehiculo); 
    });
   
    this.apiVehiculo.getShowVehiculo(this.idVehiculo.id).subscribe(datos => {
      this.datosVehiculos = datos.data[0]; 
      console.log(this.datosVehiculos); 
    });
  
    this.formCometario  = new FormGroup({
      Comentario : new FormControl('', Validators.required)
    });

    this.apiComentario.getShowComentario(this.idVehiculo.id).subscribe(datos => {
      this.comentariosVehiculo = datos.data; 
      for (let index = 0 ; index < datos.data.length; index++) {
        console.log(index)
        this.apiUser.getShowUser(datos.data[index].idUser).subscribe(datoes => {
          console.log(datos); 
          datos.data[index].idUser = datoes.data.username;
          console.log(datos.data[index].idUser);
        }) 
      }
      console.log(this.comentariosVehiculo);
    });

    this.apiEstrella.getShowEstrella(this.idVehiculo.id).subscribe(datos => {
      console.log(datos.data); 
      console.log("Entro Al meotod estrellas"); 
      try{
        this.estrellas = datos.data[0].PromedioEstrellas; 
      }
      catch{
        this.estrellas = 0; 
      }
      console.log("Estas Son las estrellas " + this.estrellas); 
    });



  }
  
  AgregarCarrito(){
    //MANDARLO A SU LISTA DE CARRITO COMPRA
    const carritoCompra : CarritoCompraI = {"Vehiculo" : this.idVehiculo.id, "User": this.apiUser.idUser}
    this.apiCarritoCompra.postStoreCarritoCompra(carritoCompra).subscribe(datos => {
      console.log(datos); 
      this.router.navigate(['../Vehiculos/CarritoCompra/' + this.apiUser.idUser])
      alert("Haz Agregado Correctamente Al Carrito"); 

    })
  }

  AgendarCita(){
    //MANDAR A OTRO COMPONENTE PARA QUE AGREGUE LA FECHA
    this.router.navigate(['Vehiculos/Citas/Fecha/'+this.idVehiculo.id]);
  }

  Apartar(){
    //MANDARO A SU LISTA DE APARTADO
    const apartado : ApartadoI = {"Vehiculo" : this.idVehiculo.id, "User": this.apiUser.idUser}
    this.apiApartado.postStoreApartado(apartado).subscribe(datos => {
      console.log(datos); 
      this.router.navigate(['Vehiculos/Apartados/' + this.apiUser.idUser])
      alert("Haz Apartado El Vehiculo"); 
    })
  }

  Agregar(){
    const datosC : ComentarioI = {
      Comentario : this.formCometario.value.Comentario, 
      User : parseInt(this.apiUser.idUser), 
      Vehiculo : parseInt(this.idVehiculo.id)
    }

    console.log(datosC); 

    this.apiComentario.postStoreComentario(datosC).subscribe(datos => {
      console.log(datos);
      alert("Se Agrego El Comentario"); 
      this.ngOnInit();
    })
   
  }

}
