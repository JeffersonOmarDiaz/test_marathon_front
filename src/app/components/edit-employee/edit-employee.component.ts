import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formEditEmployee: FormGroup;
  id: number;
  valuesGet: any=[];
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private employeeService: EmployeeService
              ) 
              { 
                this.formEditEmployee = this.fb.group({
                          modified_byU: ['', Validators.required],
                          status_employeU: ['', Validators.required],
                          ageU: ['', Validators.required],
                          emailU: ['', Validators.required],
                          nameU: ['', Validators.required],
                          employee_positionU: ['', Validators.required],
                          surnameU: ['', Validators.required]
                });
                this.id= Number(aRouter.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails(){
    this.employeeService.getEmployeeDetails(this.id).subscribe(
      (res) =>{
        console.warn(res);
        
        let inter
        this.valuesGet = res;
        
        inter = Object(this.valuesGet)
        console.log(inter[0]);
        
        
        
        this.formEditEmployee = this.fb.group({
          modified_byU: ['', Validators.required],
          status_employeU: [inter[0].status_employe, Validators.required],
          ageU: [inter[0].age, Validators.required],
          emailU: [inter[0].email, Validators.required],
          nameU: [inter[0].name, Validators.required],
          employee_positionU: [inter[0].employee_position, Validators.required],
          surnameU: [inter[0].surname, Validators.required]
        });
      }
    );
  }

  editEmployee(){
    console.log(Object(this.formEditEmployee));
    const editEmpleado : UpEmployee={
      modified_byU: this.formEditEmployee.value.modified_byU,
      status_employeU:this.formEditEmployee.value.status_employeU,
      ageU:this.formEditEmployee.value.ageU,
      emailU:this.formEditEmployee.value.emailU,
      nameU:this.formEditEmployee.value.nameU,
      employee_positionU:this.formEditEmployee.value.employee_positionU,
      surnameU:this.formEditEmployee.value.surnameU
    }
    console.warn(Object(editEmpleado));
    let valor: any;
    let lastid: String;
    this.employeeService.updateEmplyee(this.id,editEmpleado).subscribe(
      res =>{
        valor = res;
            lastid = valor[0]["lastid"];
            if (lastid.toString() === "Error sql") {
              console.log("Existio un error en BD");
            }

            else if (lastid.toString() === "WARNING sql") {
              console.log("Existio un error en BD " + lastid.toString());
            }

            else if (+valor[0]["lastid"] > 0) {
              console.log('El header fue creado de forma correcta', res);
              console.log("El header ==> Se actualizó con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
            }
      }
    );
  }

}
