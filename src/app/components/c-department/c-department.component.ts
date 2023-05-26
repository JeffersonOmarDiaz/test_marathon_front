import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewDepartment } from 'src/app/interfaces/department';
import { DepartmentService } from 'src/app/services/department.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-c-department',
  templateUrl: './c-department.component.html',
  styleUrls: ['./c-department.component.css']
})
export class CDepartmentComponent implements OnInit {
  
  formDepartment: FormGroup;
  listEmpresas: any;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
              private _enterpriseService: EnterpriseService,
              private _departmentService: DepartmentService
              ) 
              { 
                this.formDepartment = this.fb.group({
                  created_byC: ['', Validators.required],
                  descriptionC: ['', Validators.required],
                  nameC: ['', Validators.required],
                  phoneC: ['', Validators.required],
                  id_enterprisesC: [1, Validators.required]
                });
              }

  ngOnInit(): void {
    this.getListEnterprises();
  }

  addDepartment(){
    const department: NewDepartment ={
      created_byC: this.formDepartment.value.created_byC,
      descriptionC:this.formDepartment.value.descriptionC,
      nameC:this.formDepartment.value.nameC,
      phoneC:this.formDepartment.value.phoneC,
      id_enterprisesC: this.formDepartment.value.id_enterprisesC
    }
    console.warn(Object(department));
    let valor: any;
    let lastid: String;
    this._departmentService.addDepartment(department).subscribe(
      res=>{
        valor = res;
            lastid = valor[0]["lastid"];
            if (lastid.toString() === "Error sql") {
              console.log("Existio un error en BD");
            }

            else if (lastid.toString() === "WARNING sql") {
              console.log("Existio un error en BD " + lastid.toString());
            }

            else if (+valor[0]["lastid"] > 0) {
              console.log('El empleado fue creado de forma correcta', res);
              console.log("El header ==> Se registro con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
            }
      }
    );
  }

  getListEnterprises(){
    this.loading = true;
    setTimeout(()=>{
      this._enterpriseService.getAllEnterprises().subscribe((res) =>{
        console.log(res);
        this.listEmpresas = <any>res;
        console.log(this.listEmpresas[0].name);
        this.loading = false;
      })
    }, 1200)

  }
}
