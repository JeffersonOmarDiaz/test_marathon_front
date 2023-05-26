import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewDepartment } from '../interfaces/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoind;
    this.myApiUrl = 'api/department';
   }


   addDepartment(department: NewDepartment){
    return this.http.post(this.myAppUrl+'/'+this.myApiUrl+ '/i_department', department);
   }
}
