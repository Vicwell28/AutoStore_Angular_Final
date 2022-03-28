import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColorI } from 'src/app/Models/color.interface';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  FormColor : any; 

  constructor(private apiColor : ColorService, private router : Router) { }

  ngOnInit(): void {

    this.FormColor  = new FormGroup({
      Nombre : new FormControl('', Validators.required), 
    });
    
  }

  Enviar(Color : ColorI){
    this.apiColor.postStoreColor(Color).subscribe(datos => {
      console.log(datos); 
      alert("Color Agregado Exitosamente"); 
      this.router.navigate(['../ListColores'])
    })
  }

}
