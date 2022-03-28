import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { TipoI } from '../Models/tipo.interface';


@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexTipo():Observable<ResponseI>{
    const u = this.url + 'Tipo'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreTipo(Tipo : TipoI):Observable<ResponseI>{
    const u = this.url + 'Tipo'; 
    return this.http.post<ResponseI>(u, Tipo); 
  }

  getShowTipo(id : number):Observable<ResponseI>{
    const u = this.url + 'Tipo/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateTipo(id : number, Tipo : TipoI):Observable<ResponseI>{
    const u = this.url + 'Tipo/' + id; 
    return this.http.put<ResponseI>(u, Tipo); 
  }

  deleteDestroyTipo(id : number):Observable<ResponseI>{
    const u = this.url + 'Tipo/' + id; 
    return this.http.delete<ResponseI>(u); 
  }


}
