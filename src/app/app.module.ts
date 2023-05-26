import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//modulos
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { EnterpriseListComponent } from './components/enterprise-list/enterprise-list.component';
import { CEnterpriseComponent } from './components/c-enterprise/c-enterprise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SeeEnterprisesComponent } from './modules/see-enterprises/see-enterprises.component';
import { AddEnterpriseComponent } from './modules/add-enterprise/add-enterprise.component';
import { EEnterpriseComponent } from './components/e-enterprise/e-enterprise.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SeeEmployeesComponent } from './modules/see-employees/see-employees.component';
import { EEmployeesComponent } from './modules/e-employees/e-employees.component';
import { AddEmployeesComponent } from './modules/add-employees/add-employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { SeeDepartmentsComponent } from './components/see-departments/see-departments.component';
import { CDepartmentComponent } from './components/c-department/c-department.component';
import { EDepartmentComponent } from './components/e-department/e-department.component';
import { AddDepartmentComponent } from './modules/add-department/add-department.component';
import { DepartmentsListComponent } from './modules/departments-list/departments-list.component';
import { EditDepartmentComponent } from './modules/edit-department/edit-department.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseListComponent,
    CEnterpriseComponent,
    NavbarComponent,
    SeeEnterprisesComponent,
    AddEnterpriseComponent,
    EEnterpriseComponent,
    ProgressBarComponent,
    SeeEmployeesComponent,
    EEmployeesComponent,
    AddEmployeesComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    NewEmployeeComponent,
    SeeDepartmentsComponent,
    CDepartmentComponent,
    EDepartmentComponent,
    AddDepartmentComponent,
    DepartmentsListComponent,
    EditDepartmentComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
