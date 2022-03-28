import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {

  constructor(
    private apiUser : ApiServiceService, 
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(localStorage.getItem('Tipo') == "Administrador"){
        console.log("Es Administrador"); 
        return true; 
      }
      else{
        console.log("No Es Administrador")
        this.router.navigate(['/'])
        return false; 
      }
  }
  
}
