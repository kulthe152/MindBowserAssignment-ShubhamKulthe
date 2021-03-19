import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8383/employee'

  constructor(private http:HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee : Employee): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    console.log("update employee service :"+id);
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
