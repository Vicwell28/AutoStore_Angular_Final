import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComentarioI } from '../Models/Comentario.interface';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexComentario():Observable<ResponseI>{
    const u = this.url + 'Comentario'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreComentario(Comentario : ComentarioI):Observable<ResponseI>{
    const u = this.url + 'Comentario'; 
    return this.http.post<ResponseI>(u, Comentario); 
  }

  getShowComentario(id : number):Observable<ResponseI>{
    const u = this.url + 'Comentario/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateComentario(id : number, Comentario : ComentarioI):Observable<ResponseI>{
    const u = this.url + 'Comentario/' + id; 
    return this.http.put<ResponseI>(u, Comentario); 
  }

  deleteDestroyComentario(id : number):Observable<ResponseI>{
    const u = this.url + 'Comentario/' + id; 
    return this.http.delete<ResponseI>(u); 
  }
}
