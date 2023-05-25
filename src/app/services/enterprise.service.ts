import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {NewEnterprice} from '../interfaces/enterprise';

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

  addEnterprice(addEnterprise:NewEnterprice){
    return this.http.post(this.myAppUrl+'/'+this.myApiUrl+'/i_enterprise',addEnterprise);
  }
}
