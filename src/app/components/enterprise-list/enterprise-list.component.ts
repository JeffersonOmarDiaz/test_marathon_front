import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css']
})
export class EnterpriseListComponent implements OnInit {

  listEmpresas: any;
  constructor(private _enterpriseService: EnterpriseService) { }

  ngOnInit(): void {
    this.getListEnterprises();
  }

  getListEnterprises(){
    this._enterpriseService.getAllEnterprises().subscribe((res) =>{
      console.log(res);
      this.listEmpresas = <any>res;
      console.log(this.listEmpresas[0].name);
      
    })
  }
}
