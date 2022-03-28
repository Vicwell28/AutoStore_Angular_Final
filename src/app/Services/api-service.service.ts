import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginI } from '../Models/login.interface';
import { RegistrarseI } from '../Models/registrarse.interface';
import { ResponseI } from '../Models/response.interface';
import { UserI } from '../Models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  url = environment.urlAutoStore;

  //DATOS DEL USUARIO
  UsusarioActivo = false;
  CorreoUser = "";
  idUser = "";
  tipoUser = "";
  userName = ""; 
  aprobado = true; 

  constructor(private http:HttpClient) { }

  loginOn(form:LoginI):Observable<ResponseI>{
    let endpoint = this.url + "login";  
    return this.http.post<ResponseI>(endpoint, form);
  }

  registrarOn(form:RegistrarseI):Observable<ResponseI>{
    let enpoint = this.url + "User";
    return this.http.post<ResponseI>(enpoint, form); 
  }

  logout(token: any, body=""){
    localStorage.removeItem("Token")
    this.http.post(`${this.url}logout`,body);
  }

  sacarUser(email:string){
    let endpoint = this.url + "User/" + email; 
    return this.http.get<ResponseI>(endpoint);
  }

  sacarUserAll(id:string){
    let endpoint = this.url + "User/" + id; 
    return this.http.get<ResponseI>(endpoint);
  }

  //FUNCIONES PRINCIPALES DE USER
  getIndexUser():Observable<ResponseI>{
    const u = this.url + 'User'; 
    return this.http.get<ResponseI>(u); 
  }

  postStoreUser(User : UserI):Observable<ResponseI>{
    const u = this.url + 'User'; 
    return this.http.post<ResponseI>(u, User); 
  }

  getShowUser(id : number):Observable<ResponseI>{
    const u = this.url + 'User/' + id; 
    return this.http.get<ResponseI>(u); 
  }

  putUpdateUser(id : number, User : any):Observable<ResponseI>{
    const u = this.url + 'User/' + id; 
    return this.http.put<ResponseI>(u, User); 
  }

  deleteDestroyUser(id : number):Observable<ResponseI>{
    const u = this.url + 'User/' + id; 
    return this.http.delete<ResponseI>(u); 
  }

  //GUARDAR DATOS LOCAL
  setToken(token : string){
    localStorage.setItem("Token", token);
  }

  getToken(){
    console.log(localStorage.getItem("Token")); 
    return localStorage.getItem("Token");
  }
}
