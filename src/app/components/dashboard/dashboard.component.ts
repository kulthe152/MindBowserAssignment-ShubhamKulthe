import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any
  employees: Employee[];
  

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
     this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
      console.log(data);
    });
  }
  
  updateEmployee(id: number){
    console.log("----------------------------"+id)
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe(data=>{
       console.log(data);
        this.getEmployees(); 
      })
  }

  // cancelClicked(){
  //   this.router.navigate(['employees']);
  // }

}
