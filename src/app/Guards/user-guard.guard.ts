import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(
    private apiUser : ApiServiceService, 
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const tipo = localStorage.getItem('Tipo'); 
      console.log(tipo); 
      if(tipo == 'Cliente'){
        console.log("Es Cliente"); 
        return true; 
      }
      else{
        console.log("No Es Cliente")
        this.router.navigate(['/Dashboard'])
        return false; 
      }
  }
  
}
