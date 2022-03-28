import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransmicionI } from 'src/app/Models/transmicion.interface';
import { TransmicionService } from 'src/app/Services/transmicion.service';


@Component({
  selector: 'app-transmicion-form',
  templateUrl: './transmicion-form.component.html',
  styleUrls: ['./transmicion-form.component.css']
})
export class TransmicionFormComponent implements OnInit {

  
  FormTransmicion : any; 

  constructor(private apiTransmicion : TransmicionService, private router : Router) { }

  ngOnInit(): void {

    this.FormTransmicion  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
    
  }

  Enviar(Transmicion : TransmicionI){
    this.apiTransmicion.postStoreTransmicion(Transmicion).subscribe(datos => {
      console.log(datos); 
      alert("Transmicion Agregado Exitosamente"); 
      this.router.navigate(['../ListTransmiciones'])
    })
  }

}
