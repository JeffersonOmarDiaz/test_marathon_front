import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EditDeparment, NewDepartment } from '../interfaces/department';


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

   getAllDepartments(){
    return this.http.get(this.myAppUrl +'/'+ this.myApiUrl + '/g_all_departments');
   }

   getDeparmentDetails(id:number){
    return this.http.get(this.myAppUrl +'/'+ this.myApiUrl + '/g_departments_details/'+ id);
   }

   addDepartment(department: NewDepartment){
    return this.http.post(this.myAppUrl+'/'+this.myApiUrl+ '/i_department', department);
   }

   editDepartment(id:number, editDeparment: EditDeparment){
    return this.http.put(this.myAppUrl+'/'+this.myApiUrl+'/u_department/'+id,editDeparment);
   }
}
