import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { MarcaI } from '../Models/marca.interface';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexMarca():Observable<ResponseI>{
    const u = this.url + 'Marca'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreMarca(Marca : MarcaI):Observable<ResponseI>{
    const u = this.url + 'Marca'; 
    return this.http.post<ResponseI>(u, Marca); 
  }

  getShowMarca(id : number):Observable<ResponseI>{
    const u = this.url + 'Marca/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateMarca(id : number, Marca : MarcaI):Observable<ResponseI>{
    const u = this.url + 'Marca/' + id; 
    return this.http.put<ResponseI>(u, Marca); 
  }

  deleteDestroyMarca(id : number):Observable<ResponseI>{
    const u = this.url + 'Marca/' + id; 
    return this.http.delete<ResponseI>(u); 
  }
}
