import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable(
    {
        providedIn : 'root'
    }
)
export class AuthInterceptor implements HttpInterceptor {
   constructor(private api : ApiServiceService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.api.getToken(); 
        const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${authToken}`)});
        console.log("Fucnionaod El Interceptor");
        console.log(authReq); 
        return next.handle(authReq);
   }
}
