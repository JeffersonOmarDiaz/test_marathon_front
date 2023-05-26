import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewEmployee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  formEmployee: FormGroup;
  exitoso= false;
  fallido = false;
  constructor(private fb: FormBuilder,
              private employeeService:EmployeeService,
              private router: Router) 
  { 
    this.formEmployee = this.fb.group({
                            created_byC: ['', Validators.required],
                            ageC: ['', Validators.required],
                            emailC: ['', Validators.required],
                            nameC: ['', Validators.required],
                            employee_positionC: ['', Validators.required],
                            surnameC: ['', Validators.required]
                          });
  }

  ngOnInit(): void {
  }

  addEmployee(){
    const employee: NewEmployee = {
      created_byC: this.formEmployee.value.created_byC,
      ageC: this.formEmployee.value.ageC,
      emailC: this.formEmployee.value.emailC,
      nameC: this.formEmployee.value.nameC,
      employee_positionC: this.formEmployee.value.employee_positionC,
      surnameC: this.formEmployee.value.surnameC
    }
    console.log(Object(employee));
    let valor: any;
    let lastid: String;
    this.employeeService.addEmployee(employee).subscribe(
      res=>{
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
              console.log('El empleado fue creado de forma correcta', res);
              console.log("El header ==> Se registro con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
              setTimeout(() => {
                this.exitoso = false;
                this.router.navigate(['/see_employees']);
              }, 1500);
              this.exitoso = true;
            }
      }
      
    );
  }
}
