import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoI } from 'src/app/Models/vehiculo.interface';
import { ColorService } from 'src/app/Services/color.service';
import { CombustibleService } from 'src/app/Services/combustible.service';
import { ModeloService } from 'src/app/Services/modelo.service';
import { TipoService } from 'src/app/Services/tipo.service';
import { TransmicionService } from 'src/app/Services/transmicion.service';
import { VehiculoService } from 'src/app/Services/vehiculo.service';


@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.css']
})
export class VehiculoFormComponent implements OnInit {

  
  FormVehiculo : any; 
  datosModelo : any = [];
  datosTipo : any = [];
  datosColor : any = [];
  datosTrans : any = [];
  datosCombustible : any = [];

  constructor(private apiVehiculo : VehiculoService, private router : Router,
    private apiModelo : ModeloService, 
    private apiTipo : TipoService, 
    private apiColor : ColorService,
    private apiTrans : TransmicionService, 
    private apiCombustible : CombustibleService,
    ) { }

  ngOnInit(): void {

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

    //TREAERME TODOS LOS DATOS. 
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

  }

  Enviar(Vehiculo : VehiculoI){

    console.log(Vehiculo);

    this.apiVehiculo.postStoreVehiculo(Vehiculo).subscribe(datos => {
      console.log(datos); 
      alert("Vehiculo Agregado Exitosamente"); 
      this.router.navigate(['../ListVehiculos'])
    })
  }

}
