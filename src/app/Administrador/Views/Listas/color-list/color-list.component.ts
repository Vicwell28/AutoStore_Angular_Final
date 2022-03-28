import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  constructor(private apiColor : ColorService, private rotuer : Router) { }

  DatosColor : any = [];

  ngOnInit(): void {
    this.apiColor.getIndexColor().subscribe(datos => {
      this.DatosColor = datos.data; 
      console.log(this.DatosColor); 
    });
  }

  Eliminar(id : any){
    console.log(id); 
    this.apiColor.deleteDestroyColor(id).subscribe(datos =>{
      console.log(datos); 
      this.ngOnInit(); 
    })
  }

}
