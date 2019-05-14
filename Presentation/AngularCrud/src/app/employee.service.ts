import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import {Employee} from 'src/Model/employee';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  selectedEmployee : Employee;
  employeeList : Employee[];
  constructor(private http : Http) { }
   postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:34677/api/Employees',body,requestOptions).pipe(map(x => x.json()));
  }
  putEmployee(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:34677/api/Employees/' + id,
      body,
      requestOptions).pipe(map(res => res.json()));
  }
   getEmployeeList(){
    this.http.get('http://localhost:34677/api/Employees').pipe
    (map((data : Response) =>{
      return data.json() as Employee[];
    })).toPromise().then(x => {
      this.employeeList = x;
    })
  }
  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:34677/api/Employees/' + id).pipe(map(res => res.json()));
  }
}