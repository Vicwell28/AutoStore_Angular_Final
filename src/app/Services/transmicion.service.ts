import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { TransmicionI } from '../Models/transmicion.interface';


@Injectable({
  providedIn: 'root'
})
export class TransmicionService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexTransmicion():Observable<ResponseI>{
    const u = this.url + 'Transmicion'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreTransmicion(Transmicion : TransmicionI):Observable<ResponseI>{
    const u = this.url + 'Transmicion'; 
    return this.http.post<ResponseI>(u, Transmicion); 
  }

  getShowTransmicion(id : number):Observable<ResponseI>{
    const u = this.url + 'Transmicion/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateTransmicion(id : number, Transmicion : TransmicionI):Observable<ResponseI>{
    const u = this.url + 'Transmicion/' + id; 
    return this.http.put<ResponseI>(u, Transmicion); 
  }

  deleteDestroyTransmicion(id : number):Observable<ResponseI>{
    const u = this.url + 'Transmicion/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
