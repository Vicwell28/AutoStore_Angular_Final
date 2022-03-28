import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/Services/comentario.service';

@Component({
  selector: 'app-comentarios-lista',
  templateUrl: './comentarios-lista.component.html',
  styleUrls: ['./comentarios-lista.component.css']
})
export class ComentariosListaComponent implements OnInit {

  idAuto : any;
  comentariosVehiculo : any;  

  constructor(private rutaActiva : ActivatedRoute, private apiComentario : ComentarioService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(id => {
      this.idAuto = id; 
    });

    this.apiComentario.getShowComentario(this.idAuto.id).subscribe(datos => {
      this.comentariosVehiculo = datos.data; 
      console.log(this.comentariosVehiculo); 
    })


  }

  eliminar(id : any){
    console.log(id); 
    this.apiComentario.deleteDestroyComentario(id).subscribe(datos => {
      console.log(datos); 
      alert("Se Elimmino El Comentario Exitosamente"); 
      this.ngOnInit(); 
    })
  }

}
