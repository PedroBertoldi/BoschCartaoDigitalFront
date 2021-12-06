import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-area-operacional-validacao',
  templateUrl: './area-operacional-validacao.component.html',
  styleUrls: ['./area-operacional-validacao.component.css']
})
export class AreaOperacionalValidacaoComponent implements OnInit {

  mostrar: string = "";
  validacaoForm!: FormGroup;
  cpf!:string;
  error: string ="";
  submitted: string = "";
  beneficios: any;

  constructor(private formBuilder:FormBuilder, private router: Router, private beneficioService : BeneficioService) {
    let state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      this.error ="Erro ao buscar o Colaborador, tente novamente."
    }
   }

  ngOnInit(): void {

    this.beneficioService.getBeneficiosByEventoId(1).pipe(first()).subscribe(
      data =>{
        this.beneficios = data;
        console.log(data)
      }
    );

    this.validacaoForm = this.formBuilder.group({
            cpf: new FormControl('', Validators.required),
            edv: new FormControl('', Validators.required),
            beneficiosSelecionados: new FormControl()
        });
  }

  submit(){
    this.submitted = this.mostrar;
    if(this.validacaoForm.controls.cpf.valid || this.validacaoForm.controls.edv.valid){
      this.router.navigate(['operacional/retirar'], {state: this.validacaoForm.value});
    } else{
      this.validacaoForm.markAllAsTouched();
    }
  }
}
