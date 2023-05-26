import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EditEnterPrice } from 'src/app/interfaces/enterprise';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-e-enterprise',
  templateUrl: './e-enterprise.component.html',
  styleUrls: ['./e-enterprise.component.css']
})
export class EEnterpriseComponent implements OnInit {
  formEditEmpresa: FormGroup;
  id: number;
  valuesGet: any=[];
  constructor(private fb: FormBuilder,
              private Eservice:EnterpriseService,
              private aRouter: ActivatedRoute) 
              { 
                this.formEditEmpresa = this.fb.group({
                  modified_byU: ['', Validators.required],
                  statusU: ['', Validators.required],
                  nameU: ['', Validators.required],
                  phoneU: ['', Validators.required]
                });

                this.id= Number(aRouter.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void {
    this.getEnterpriseDetails();
  }

  getEnterpriseDetails(){
    this.Eservice.getEnterpriseDetails(this.id).subscribe(
      (res) =>{
        let inter
        this.valuesGet = res;
        
        inter = Object(this.valuesGet)
        console.log(inter[0].status);
        
        
        
        this.formEditEmpresa = this.fb.group({
          modified_byU: ['', Validators.required],
          statusU: [inter[0].status, Validators.required],
          nameU: [inter[0].name, Validators.required],
          phoneU: [inter[0].phone, Validators.required]
        });
      }
    );
  }

  editEnterprise(){
    console.log(Object(this.formEditEmpresa));
    const editEmpresa = {
      modified_byU: this.formEditEmpresa.value.modified_byU,
      statusU: this.formEditEmpresa.value.statusU,
      nameU: this.formEditEmpresa.value.nameU,
      phoneU: this.formEditEmpresa.value.phoneU
    }
    console.warn(Object(editEmpresa));
    let valor: any;
    let lastid: String;
    this.Eservice.updateEnterprice(this.id,editEmpresa).subscribe(
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
              console.log('Empresa actualizada de forma correcta', res);
              console.log("El header ==> Se actualizó con exito con el id: " + +valor[0]["lastid"]);
              let id_Header_DOA = Number(valor[0]["lastid"]);
            }
      }
    );
  }
}
