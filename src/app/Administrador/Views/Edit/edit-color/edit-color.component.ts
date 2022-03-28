import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorI } from 'src/app/Models/color.interface';
import { ResponseI } from 'src/app/Models/response.interface';
import { ColorService } from 'src/app/Services/color.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrls: ['./edit-color.component.css']
})
export class EditColorComponent implements OnInit {

  constructor(private rutaActiva : ActivatedRoute, private apiColor : ColorService, private router : Router) { }

  idColor : any; 
  datosColor : any;
  FormColor : any; 


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idColor = id; 
    });

    this.apiColor.getShowColor(this.idColor.id).subscribe(datos => {
      console.log(datos.data.nombre_color); 
      this.datosColor = datos.data.nombre_color; 
    })

    this.FormColor  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
  }

  Enviar(Color : ColorI){
    this.apiColor.putUpdateColor(this.idColor.id, Color).subscribe(datos =>{
      alert("Haz Actualizado El Color Correctamente")
      this.router.navigate(['../ListColores']);
    });
  }

}
