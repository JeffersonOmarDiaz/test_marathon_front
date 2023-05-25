import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  listEmployees: any;
  loading: boolean = false;
  constructor(private _employeeService :EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.loading = true;

    setTimeout(() => {
      this._employeeService.getAllEmployees().subscribe((res) => {
        console.log(res);
        this.listEmployees = <any>res;
        console.log(this.listEmployees[0].name);
        this.loading = false;
      })
    }, 1100)
  }
}
