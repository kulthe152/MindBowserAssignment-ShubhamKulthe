import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8383"

  //calling the server to generate token
  generateToken(credentials:any){
      return this.http.post(`${this.url}/token`,credentials)
  }



  constructor(private http:HttpClient) { }

  //for login user
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }
  //to check user is login or not
  isLoggedIn()
  {
      let token = localStorage.getItem("token");
      if(token==undefined || token=='' || token==null){
        return false;
      }else{
        return true;
      }
  }
  //for logout the user
  logout(){
    localStorage.removeItem("token")    
    return true;
    
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token")
  }

}
