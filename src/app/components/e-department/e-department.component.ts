import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditDeparment } from 'src/app/interfaces/department';
import { DepartmentService } from 'src/app/services/department.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-e-department',
  templateUrl: './e-department.component.html',
  styleUrls: ['./e-department.component.css']
})
export class EDepartmentComponent implements OnInit {

  formEditDepartment: FormGroup;
  id: number;
  valuesGet: any=[];
  listEmpresas: any;
  ultimaActualizacionPor = "";
  fechaUltimaActualizacion ="";
  exitoso= false;
  fallido = false;
  
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private _departmentService:DepartmentService,
              private _enterpriseService: EnterpriseService,
              private router: Router) 
              { 
                this.formEditDepartment = this.fb.group({
                  modified_byU:['', Validators.required],
                  status_depU:['', Validators.required],
                  descriptionU:['', Validators.required],
                  nameU:['', Validators.required],
                  phoneU:['', Validators.required],
                  id_enterprisesU:['', Validators.required]
                });
                this.id= Number(aRouter.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void {
    this.getDepartmentDetails();
    this.getListEnterprises();
  }

  getListEnterprises(){
      this._enterpriseService.getAllEnterprises().subscribe((res) =>{
        console.log(res);
        this.listEmpresas = <any>res;
        console.log(this.listEmpresas[0].name);
      })

  }

  getDepartmentDetails(){
    this._departmentService.getDeparmentDetails(this.id).subscribe(
      (res) =>{
        let inter
        this.valuesGet = res;
        
        inter = Object(this.valuesGet)
        /* console.log(inter[0].status); */
        console.warn(inter[0]);
        this.ultimaActualizacionPor = inter[0].modified_by;
        this.fechaUltimaActualizacion = inter[0].modified_date;
        
        this.formEditDepartment = this.fb.group({
          modified_byU:['', Validators.required],
          status_depU:[inter[0].status_dep, Validators.required],
          descriptionU:[inter[0].description, Validators.required],
          nameU:[inter[0].name, Validators.required],
          phoneU:[inter[0].phone, Validators.required],
          id_enterprisesU:[inter[0].id_enterprises, Validators.required]
        });
      }
    );
  }

  editDepartment(){
    const editDeparment: EditDeparment={
            modified_byU: this.formEditDepartment.value.modified_byU,
            status_depU:this.formEditDepartment.value.status_depU,
            descriptionU:this.formEditDepartment.value.descriptionU,
            nameU:this.formEditDepartment.value.nameU,
            phoneU:this.formEditDepartment.value.phoneU,
            id_enterprisesU: this.formEditDepartment.value.id_enterprisesU
    }
    console.warn(Object(editDeparment));
    let valor: any;
    let lastid: String;
    this._departmentService.editDepartment(this.id,editDeparment).subscribe(
      res =>{
        valor = res;
            lastid = valor[0]["lastid"];
            if (lastid.toString() === "Error sql") {
              console.log("Existio un error en BD");
              setTimeout(() => {
              this.fallido = false;
            }, 4000);
            this.fallido = true;
            }

            else if (lastid.toString() === "WARNING sql") {
              console.log("Existio un error en BD " + lastid.toString());
              setTimeout(() => {
                this.fallido = false;
              }, 4000);
              this.fallido = true;
            }

            else if (+valor[0]["lastid"] > 0) {
              console.log('La empresa se actualiza de forma correcta', res);
              console.log("El header ==> Se actualizó con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
              setTimeout(() => {
                this.exitoso = false;
                this.router.navigate(['/see_department']);
              }, 1500);
              this.exitoso = true;
            }
      }
    );
  }
}
