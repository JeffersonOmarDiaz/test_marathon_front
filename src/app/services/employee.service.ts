import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewEmployee, UpEmployee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoind;
    this.myApiUrl = 'api/employees';
  }

  getAllEmployees(){
    return this.http.get(this.myAppUrl +'/'+ this.myApiUrl + '/g_all_eployees');
  }

  getEmployeeDetails(id:number){
    return this.http.get(this.myAppUrl+'/'+this.myApiUrl+'/g_employeeBy/' +id);
  }


  addEmployee(addEmployee:NewEmployee){
    return this.http.post(this.myAppUrl+'/'+this.myApiUrl+'/i_employee',addEmployee);
  }

  updateEmplyee(id:number, updateEnployee:UpEmployee){
    return this.http.put(this.myAppUrl+'/'+this.myApiUrl+'/u_employee_byId/'+id,updateEnployee);
  }
}
