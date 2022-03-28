import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { CombustibleI } from '../Models/combustible.interface';


@Injectable({
  providedIn: 'root'
})
export class CombustibleService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexCombustible():Observable<ResponseI>{
    const u = this.url + 'Combustible'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreCombustible(Combustible : CombustibleI):Observable<ResponseI>{
    const u = this.url + 'Combustible'; 
    return this.http.post<ResponseI>(u, Combustible); 
  }

  getShowCombustible(id : number):Observable<ResponseI>{
    const u = this.url + 'Combustible/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateCombustible(id : number, Combustible : CombustibleI):Observable<ResponseI>{
    const u = this.url + 'Combustible/' + id; 
    return this.http.put<ResponseI>(u, Combustible); 
  }

  deleteDestroyCombustible(id : number):Observable<ResponseI>{
    const u = this.url + 'Combustible/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
