import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-area-administrativa-cadastro-beneficio',
  templateUrl: './area-administrativa-cadastro-beneficio.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-beneficio.component.css']
})
export class AreaAdministrativaCadastroBeneficioComponent implements OnInit {
  
  idEventoFromRoute!: number;
  idBeneficioFromRoute!: number;
  nomeEvento!: string | undefined;
  modalAberto = false;

  formBeneficio = this.formBuilder.group({
    nome: new FormControl('',Validators.required),
  })
  repeated: boolean = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private admin : AdminService) { }

  ngOnInit(): void {
  
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    this.idBeneficioFromRoute = Number(routeParams.get('idBeneficio'));
    this.admin.getEventoById(this.idEventoFromRoute).pipe(first()).subscribe(
      data=>{
        this.nomeEvento = data.nome;
      });

    //todo use specific endpoint get beneficio by id
      this.admin.getBeneficiosByEventoId(this.idEventoFromRoute).pipe(first()).subscribe(
      data=>{
        if(this.idBeneficioFromRoute){
          this.formBeneficio.controls.nome.setValue(data.filter((beneficio:any)=> beneficio.id == this.idBeneficioFromRoute)[0].descricao);
        }
      });

      
    
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  onSubmit(): void {
    
    if(this.formBeneficio.valid){
      if(this.idBeneficioFromRoute){
        if(!this.formBeneficio.touched){
          this.formBeneficio.reset()
          this.abrirModal()
        }else{
          this.admin.updateBeneficio( this.idBeneficioFromRoute, this.formBeneficio.value.nome).pipe(first()).subscribe(
            data=>{
              this.repeated=false;
              this.formBeneficio.reset()
              this.abrirModal()
            },
            error=>{
              if(error.status ==400){
                this.repeated =true;
              }
              return;
          });
        }
      }else{
        this.admin.createBeneficio(this.idEventoFromRoute, this.formBeneficio.value.nome).pipe(first()).subscribe(
          data=>{
            this.repeated=false;
            this.formBeneficio.reset()
            this.abrirModal()
          },
          error=>{
            if(error.status ==400){
                this.repeated =true;
            }
            return;
        });
      }
      
    } else {
      this.formBeneficio.markAllAsTouched()
    }
  }
}
