import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuardGuard implements CanActivate {
  constructor(
    private apiUser : ApiServiceService, 
    private router : Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      // if(this.apiUser.getUserActivo){
      //   console.log("Esta Logeado"); 
      //   return true; 
      // }
      // else{
      //   console.log("No Esta Logeado")
      //   this.router.navigate(['/'])
      //   return false; 
      // }

      return true
  }
  
}
