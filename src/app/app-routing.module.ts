import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnterpriseComponent } from './modules/add-enterprise/add-enterprise.component';
import { SeeEnterprisesComponent } from './modules/see-enterprises/see-enterprises.component';
import { EEnterpriseComponent } from './components/e-enterprise/e-enterprise.component';
import { SeeEmployeesComponent } from './modules/see-employees/see-employees.component';
import { AddEmployeesComponent } from './modules/add-employees/add-employees.component';
import { EEmployeesComponent } from './modules/e-employees/e-employees.component';
import { CDepartmentComponent } from './components/c-department/c-department.component';
import { DepartmentsListComponent } from './modules/departments-list/departments-list.component';
import { EditDepartmentComponent } from './modules/edit-department/edit-department.component';

const routes: Routes = [
  // Define tus rutas aquí
  {path:'', component: SeeEnterprisesComponent},
  {path:'see_enterprise', component: SeeEnterprisesComponent},
  {path:'add_enterprice', component: AddEnterpriseComponent},
  {path: 'edit_enterprice/:id', component: EEnterpriseComponent},

  {path: 'see_employees', component: SeeEmployeesComponent},
  {path: 'add_employees', component: AddEmployeesComponent},
  {path: 'edit_employee/:id', component: EEmployeesComponent},

  {path: 'add_department', component: CDepartmentComponent},
  {path: 'see_department', component: DepartmentsListComponent},
  {path: 'edit_department/:id', component: EditDepartmentComponent},

  {path:'**', redirectTo:'see_enterprise', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
