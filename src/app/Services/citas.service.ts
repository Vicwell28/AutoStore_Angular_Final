import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { CitaI } from '../Models/citas.interface';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexCita():Observable<ResponseI>{
    const u = this.url + 'Cita'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreCita(Cita : any):Observable<ResponseI>{
    const u = this.url + 'Cita'; 
    return this.http.post<ResponseI>(u, Cita); 
  }

  getShowCita(id : number):Observable<ResponseI>{
    const u = this.url + 'Cita/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateCita(id : number, Cita : CitaI):Observable<ResponseI>{
    const u = this.url + 'Cita/' + id; 
    return this.http.put<ResponseI>(u, Cita); 
  }

  deleteDestroyCita(id : number):Observable<ResponseI>{
    const u = this.url + 'Cita/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
