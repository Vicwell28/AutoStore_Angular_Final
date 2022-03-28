import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CombustibleI } from 'src/app/Models/combustible.interface';
import { CombustibleService } from 'src/app/Services/combustible.service';

@Component({
  selector: 'app-combustible-form',
  templateUrl: './combustible-form.component.html',
  styleUrls: ['./combustible-form.component.css']
})
export class CombustibleFormComponent implements OnInit {

  FormCombustible : any; 

  constructor(private apiCombustible : CombustibleService, private router : Router) { }

  ngOnInit(): void {

    this.FormCombustible  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
    
  }

  Enviar(Combustible : CombustibleI){
    this.apiCombustible.postStoreCombustible(Combustible).subscribe(datos => {
      console.log(datos); 
      alert("Combustible Agregado Exitosamente"); 
      this.router.navigate(['../ListCombustibles'])
    })
  }

}
