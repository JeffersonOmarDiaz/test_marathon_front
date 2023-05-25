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

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseListComponent,
    CEnterpriseComponent,
    NavbarComponent,
    SeeEnterprisesComponent,
    AddEnterpriseComponent
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