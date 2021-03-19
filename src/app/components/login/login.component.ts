import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    email:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  showSignup(){
    window.location.href="/signup"
  }

  onSubmit(){
    
    if( (this.credentials.email!='' && this.credentials.password!='') && 
        (this.credentials.email!=null && this.credentials.password!=null))
      {
        console.log("We have to submit the server")
        this.loginService.generateToken(this.credentials).subscribe(
          (response:any)=>{
              console.log(response.token)
              this.loginService.loginUser(response.token)
              window.location.href="/employees"

          },
          error=>{
            console.log(error)
          }
        )
         
      }
      else
      {
        console.log("Fields are empty !!")
      }

     

  }


}
