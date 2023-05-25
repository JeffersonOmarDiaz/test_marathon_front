import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {EditEnterPrice, NewEnterprice} from '../interfaces/enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoind;
    this.myApiUrl = 'api/enterprises';
  }

  getAllEnterprises(){
    return this.http.get(this.myAppUrl+'/'+this.myApiUrl+'/g_all_enterprises_true');
  }

  getEnterpriseDetails(id:number){
    return this.http.get(this.myAppUrl+'/'+this.myApiUrl+'/g_enterprises_detailbyId/' +id);
  }

  addEnterprice(addEnterprise:NewEnterprice){
    return this.http.post(this.myAppUrl+'/'+this.myApiUrl+'/i_enterprise',addEnterprise);
  }

  updateEnterprice(id:number, editEmpresa: EditEnterPrice){
    return this.http.put(this.myAppUrl+'/'+this.myApiUrl+'/u_enterprise/'+id,editEmpresa);
  }
}
