import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  url = "http://localhost:8383"

  constructor(private http:HttpClient) { }

  ManagerSigup(manager:any){
      return this.http.post(`${this.url}/ManagerRegisteration`,manager) 
  }
  
}
