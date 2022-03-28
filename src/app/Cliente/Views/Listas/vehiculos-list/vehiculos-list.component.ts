import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/Services/vehiculo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
  animations: [
    trigger("ArribaAbajo", [
      state("void", style({
        transform: "translateY(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
  ],
})
export class VehiculosListComponent implements OnInit {

  constructor(private apiVehiculo : VehiculoService) { }

  idVehiculo = 1; 

  datosVehiculos : any; 

  ngOnInit(): void {
    this.apiVehiculo.getIndexVehiculo().subscribe(datos => {
      this.datosVehiculos = datos.data; 
      console.log(this.datosVehiculos); 
    })
  }


}
