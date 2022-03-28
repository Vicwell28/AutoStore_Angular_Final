import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { ModeloI } from '../Models/modelo.interface';


@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexModelo():Observable<ResponseI>{
    const u = this.url + 'Modelo'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreModelo(Modelo : ModeloI):Observable<ResponseI>{
    const u = this.url + 'Modelo'; 
    return this.http.post<ResponseI>(u, Modelo); 
  }

  getShowModelo(id : number):Observable<ResponseI>{
    const u = this.url + 'Modelo/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateModelo(id : number, Modelo : ModeloI):Observable<ResponseI>{
    const u = this.url + 'Modelo/' + id; 
    return this.http.put<ResponseI>(u, Modelo); 
  }

  deleteDestroyModelo(id : number):Observable<ResponseI>{
    const u = this.url + 'Modelo/' + id; 
    return this.http.delete<ResponseI>(u); 
  }
}
