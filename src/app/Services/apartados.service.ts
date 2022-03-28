import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { ApartadoI } from '../Models/apartado.interface';


@Injectable({
  providedIn: 'root'
})
export class ApartadosService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexApartado():Observable<ResponseI>{
    const u = this.url + 'Apartado'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreApartado(Apartado : ApartadoI):Observable<ResponseI>{
    const u = this.url + 'Apartado'; 
    return this.http.post<ResponseI>(u, Apartado); 
  }

  getShowApartado(id : number):Observable<ResponseI>{
    const u = this.url + 'Apartado/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateApartado(id : number, Apartado : ApartadoI):Observable<ResponseI>{
    const u = this.url + 'Apartado/' + id; 
    return this.http.put<ResponseI>(u, Apartado); 
  }

  deleteDestroyApartado(id : number):Observable<ResponseI>{
    const u = this.url + 'Apartado/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

  
}
