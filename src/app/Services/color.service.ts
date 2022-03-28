import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseI } from '../Models/response.interface';
import { ColorI } from '../Models/color.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: HttpClient) { }

  url = environment.urlAutoStore;

  getIndexColor():Observable<ResponseI>{
    const u = this.url + 'Color'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreColor(Color : ColorI):Observable<ResponseI>{
    const u = this.url + 'Color'; 
    return this.http.post<ResponseI>(u, Color); 
  }

  getShowColor(id : number):Observable<ResponseI>{
    const u = this.url + 'Color/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateColor(id : number, Color : ColorI):Observable<ResponseI>{
    const u = this.url + 'Color/' + id; 
    return this.http.put<ResponseI>(u, Color); 
  }

  deleteDestroyColor(id : number):Observable<ResponseI>{
    const u = this.url + 'Color/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

}
