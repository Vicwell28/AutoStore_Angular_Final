import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EstrellaI } from '../Models/Estrella.interface';
import { ResponseI } from '../Models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class EstrellaService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexEstrella():Observable<ResponseI>{
    const u = this.url + 'Estrella'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreEstrella(Estrella : EstrellaI):Observable<ResponseI>{
    const u = this.url + 'Estrella'; 
    return this.http.post<ResponseI>(u, Estrella); 
  }

  getShowEstrella(id : number):Observable<ResponseI>{
    const u = this.url + 'Estrella/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateEstrella(id : number, Estrella : EstrellaI):Observable<ResponseI>{
    const u = this.url + 'Estrella/' + id; 
    return this.http.put<ResponseI>(u, Estrella); 
  }

  deleteDestroyEstrella(id : number):Observable<ResponseI>{
    const u = this.url + 'Estrella/' + id; 
    return this.http.delete<ResponseI>(u); 
  }
}
