import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { VehiculoI } from '../Models/vehiculo.interface';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexVehiculo():Observable<ResponseI>{
    const u = this.url + 'Vehiculo'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreVehiculo(Vehiculo : VehiculoI):Observable<ResponseI>{
    const u = this.url + 'Vehiculo'; 
    return this.http.post<ResponseI>(u, Vehiculo); 
  }

  getShowVehiculo(id : number):Observable<ResponseI>{
    const u = this.url + 'Vehiculo/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateVehiculo(id : number, Vehiculo : VehiculoI):Observable<ResponseI>{
    const u = this.url + 'Vehiculo/' + id; 
    return this.http.put<ResponseI>(u, Vehiculo); 
  }

  deleteDestroyVehiculo(id : number):Observable<ResponseI>{
    const u = this.url + 'Vehiculo/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
