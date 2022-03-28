import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { CarritoCompraI } from '../Models/carritocompra.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexCarritoCompra():Observable<ResponseI>{
    const u = this.url + 'CarritoCompra'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreCarritoCompra(CarritoCompra : CarritoCompraI):Observable<ResponseI>{
    const u = this.url + 'CarritoCompra'; 
    return this.http.post<ResponseI>(u, CarritoCompra); 
  }

  getShowCarritoCompra(id : number):Observable<ResponseI>{
    const u = this.url + 'CarritoCompra/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateCarritoCompra(id : number, CarritoCompra : CarritoCompraI):Observable<ResponseI>{
    const u = this.url + 'CarritoCompra/' + id; 
    return this.http.put<ResponseI>(u, CarritoCompra); 
  }

  deleteDestroyCarritoCompra(id : number):Observable<ResponseI>{
    const u = this.url + 'CarritoCompra/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
