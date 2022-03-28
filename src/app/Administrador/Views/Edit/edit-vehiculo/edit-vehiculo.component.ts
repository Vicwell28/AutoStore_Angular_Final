import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoI } from 'src/app/Models/vehiculo.interface';
import { ColorService } from 'src/app/Services/color.service';
import { CombustibleService } from 'src/app/Services/combustible.service';
import { ModeloService } from 'src/app/Services/modelo.service';
import { TipoService } from 'src/app/Services/tipo.service';
import { TransmicionService } from 'src/app/Services/transmicion.service';
import { VehiculoService } from 'src/app/Services/vehiculo.service';


@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrls: ['./edit-vehiculo.component.css']
})
export class EditVehiculoComponent implements OnInit {

  FormVehiculo : any; 
  datosModelo : any = [];
  datosTipo : any = [];
  datosColor : any = [];
  datosTrans : any = [];
  datosCombustible : any = [];
  datosVehiculo : any = []; 
  idAuto : any; 

  constructor(private apiVehiculo : VehiculoService, private router : Router,
    private apiModelo : ModeloService, 
    private apiTipo : TipoService, 
    private apiColor : ColorService,
    private apiTrans : TransmicionService, 
    private apiCombustible : CombustibleService,
    private rutaActiva : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idAuto = id; 
    });

    this.FormVehiculo  = new FormGroup({
      Modelo : new FormControl('', Validators.required), 
      Tipo : new FormControl('', Validators.required), 
      Color : new FormControl('', Validators.required), 
      Transmicion : new FormControl('', Validators.required), 
      Combustible : new FormControl('', Validators.required), 
      Puertas : new FormControl('', Validators.required), 
      Precio : new FormControl('', Validators.required), 
      Kilometraje : new FormControl('', Validators.required), 
      Descripcion : new FormControl('', Validators.required), 
    });

    //TREAERME LA INFOMRACION ESPECIFICA DE TAL AUTO CON ID
    this.apiVehiculo.getShowVehiculo(this.idAuto.id).subscribe(datos => {
      this.datosVehiculo = datos.data; 
      console.log("Datos Vehiculo" + this.datosVehiculo); 
      console.log( this.datosVehiculo); 
    });

    //TREAERME TODOS PARA ACTUALIZAR
    this.apiModelo.getIndexModelo().subscribe(datos => {
      this.datosModelo = datos.data;
      console.log(this.datosModelo); 
    });

    this.apiTipo.getIndexTipo().subscribe(datos => {
      this.datosTipo = datos.data; 
      console.log(this.datosTipo); 
    });

    this.apiColor.getIndexColor().subscribe(datos => {
      this.datosColor = datos.data;
      console.log(this.datosColor); 
    });

    this.apiTrans.getIndexTransmicion().subscribe(datos => {
      this.datosTrans = datos.data; 
      console.log(this.datosTrans); 
    });

    this.apiCombustible.getIndexCombustible().subscribe(datos => {
      this.datosCombustible = datos.data;
      console.log(this.datosCombustible); 
    })    

    console.log(this.idAuto); 
  }

  Enviar(Vehiculo : VehiculoI){
    this.apiVehiculo.putUpdateVehiculo(this.idAuto.id, Vehiculo).subscribe(datos =>{
      alert("Haz Actualizado El Vehiculo Correctamente")
      this.router.navigate(['../ListVehiculos']);
    });
  }

}
