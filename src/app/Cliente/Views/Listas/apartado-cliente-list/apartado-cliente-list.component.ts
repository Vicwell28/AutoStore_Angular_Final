import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApartadosService } from 'src/app/Services/apartados.service';

@Component({
  selector: 'app-apartado-cliente-list',
  templateUrl: './apartado-cliente-list.component.html',
  styleUrls: ['./apartado-cliente-list.component.css']
})
export class ApartadoClienteListComponent implements OnInit {

  idUser : any; 
  VehiculosQueTiene : any = [];

  constructor(private rutaActiva: ActivatedRoute, private router : Router, private apiApartado : ApartadosService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idUser = params['id'];
        console.log(this.idUser); 
      }
    );

    this.apiApartado.getShowApartado(this.idUser).subscribe(datos => {
      this.VehiculosQueTiene = datos.data; 
      console.log(this.VehiculosQueTiene); 
    })
    
  }

  eliminarDelCarrito(id:number){ 
    this.apiApartado.deleteDestroyApartado(id).subscribe(data =>{
      console.log(data); 
      console.log(id); 
      this.ngOnInit(); 
    }); 
  }
}
