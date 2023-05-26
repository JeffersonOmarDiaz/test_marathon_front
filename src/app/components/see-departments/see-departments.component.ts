import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-see-departments',
  templateUrl: './see-departments.component.html',
  styleUrls: ['./see-departments.component.css']
})
export class SeeDepartmentsComponent implements OnInit {

  listDepartmen: any;
  loading: boolean = false;
  constructor(private _depservice:DepartmentService) { }

  ngOnInit(): void {
    this.getDepartmentsList();
  }

  getDepartmentsList(){
    this.loading = true;

    setTimeout(() => {
    this._depservice.getAllDepartments().subscribe((res) => {
      console.log(res);
      this.listDepartmen = <any>res;
      console.log(this.listDepartmen[0].name);
      this.loading = false;
    })
  }, 1100)
  }
}
