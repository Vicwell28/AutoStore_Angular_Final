import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { OrdenI } from '../Models/orden.interface';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexOrden():Observable<ResponseI>{
    const u = this.url + 'Orden'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreOrden(Orden : OrdenI):Observable<ResponseI>{
    const u = this.url + 'Orden'; 
    return this.http.post<ResponseI>(u, Orden); 
  }

  getShowOrden(id : number):Observable<ResponseI>{
    const u = this.url + 'Orden/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateOrden(id : number, Orden : OrdenI):Observable<ResponseI>{
    const u = this.url + 'Orden/' + id; 
    return this.http.put<ResponseI>(u, Orden); 
  }

  deleteDestroyOrden(id : number):Observable<ResponseI>{
    const u = this.url + 'Orden/' + id; 
    return this.http.delete<ResponseI>(u); 
  }


}
