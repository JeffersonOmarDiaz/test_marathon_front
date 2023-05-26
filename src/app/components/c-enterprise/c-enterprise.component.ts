import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewEnterprice } from 'src/app/interfaces/enterprise';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-c-enterprise',
  templateUrl: './c-enterprise.component.html',
  styleUrls: ['./c-enterprise.component.css']
})
export class CEnterpriseComponent implements OnInit {
  formEmpresa: FormGroup;
  exitoso= false;
  fallido = false;
  constructor(private fb: FormBuilder,
              private Eservice:EnterpriseService,
              private router: Router) {
    this.formEmpresa = this.fb.group({
      created_byC : ['', Validators.required],
    enterpriseNameC: ['', Validators.required],
    phoneC : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]]
    })
   }

  ngOnInit(): void {
  }
  addEnterPrise(){
    const empresa: NewEnterprice ={
      created_byC : this.formEmpresa.value.created_byC,
      enterpriseNameC:this.formEmpresa.value.enterpriseNameC,
      phoneC:this.formEmpresa.value.phoneC
    }
    console.log(Object(empresa));
    let valor: any;
    let lastid: String;
    this.Eservice.addEnterprice(empresa).subscribe(
      
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
              console.log('El header fue creado de forma correcta', res);
              console.log("El header ==> Se registro con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
              setTimeout(() => {
                this.exitoso = false;
                this.router.navigate(['/see_enterprise']);
              }, 1500);
              this.exitoso = true;
            }
      }
    );
  }

}
