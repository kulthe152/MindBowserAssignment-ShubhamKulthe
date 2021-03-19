
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService){}

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

    //     let newReq = req;
    //     let token = this.loginService.getToken();
    //     console.log("INTERCEPTOR ",token);
    //     if(token!=null)
    //     {
    //         newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}})
    //         console.log("check --> ",newReq);
    //     }
    //     return next.handle(newReq)

    // }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginService.getToken();// you probably want to store it in localStorage or something
        console.log("INTERCEPTOR ::",token);
    
        if (!token) {
          return next.handle(req);
        }
    
        const req1 = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
    
        return next.handle(req1);
      }
    
    
}