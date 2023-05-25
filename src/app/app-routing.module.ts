import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnterpriseComponent } from './modules/add-enterprise/add-enterprise.component';
import { SeeEnterprisesComponent } from './modules/see-enterprises/see-enterprises.component';

const routes: Routes = [
  // Define tus rutas aquí
  {path:'see-enterprise', component: SeeEnterprisesComponent},
  {path:'add_enterprice', component: AddEnterpriseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
