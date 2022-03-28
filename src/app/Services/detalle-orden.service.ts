import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { DetalleOrdenI } from '../Models/detalleorden.interface';


@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexDetalleOrden():Observable<ResponseI>{
    const u = this.url + 'DetalleOrden'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreDetalleOrden(DetalleOrden : DetalleOrdenI):Observable<ResponseI>{
    const u = this.url + 'DetalleOrden'; 
    return this.http.post<ResponseI>(u, DetalleOrden); 
  }

  getShowDetalleOrden(id : number):Observable<ResponseI>{
    const u = this.url + 'DetalleOrden/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateDetalleOrden(id : number, DetalleOrden : DetalleOrdenI):Observable<ResponseI>{
    const u = this.url + 'DetalleOrden/' + id; 
    return this.http.put<ResponseI>(u, DetalleOrden); 
  }

  deleteDestroyDetalleOrden(id : number):Observable<ResponseI>{
    const u = this.url + 'DetalleOrden/' + id; 
    return this.http.delete<ResponseI>(u); 
  }
}
