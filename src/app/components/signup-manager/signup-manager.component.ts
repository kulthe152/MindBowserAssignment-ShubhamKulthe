import { Component, OnInit } from '@angular/core';
import { RegisterationService } from 'src/app/services/registeration.service';

@Component({
  selector: 'app-signup-manager',
  templateUrl: './signup-manager.component.html',
  styleUrls: ['./signup-manager.component.css']
})
export class SignupManagerComponent implements OnInit {

  manager={
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    dob : '',
    company : '',
    address : ''
  }

  constructor(private registerationService:RegisterationService) { }

  ngOnInit(): void {
  }

  showLogin(){
    window.location.href="/login"
  }  

  onSubmitSignup(){

    if( (this.manager.firstname!='' && this.manager.lastname!='' && this.manager.email!='' && this.manager.password!='' && 
        this.manager.dob!='' && this.manager.company!='' && this.manager.address!='') 
        &&
        (this.manager.firstname!=null && this.manager.lastname!=null && this.manager.email!=null && this.manager.password!=null && 
        this.manager.dob!=null && this.manager.company!=null && this.manager.address!=null)
      )
    {
          this.registerationService.ManagerSigup(this.manager).subscribe(
            (response:any)=>{
              console.log(response)
              window.location.href="/login"
            },
            error=>{
              console.log(error)
            }
          )
    }
    else{
      console.log("manager Fields are empty !!")
    }


  }

}
