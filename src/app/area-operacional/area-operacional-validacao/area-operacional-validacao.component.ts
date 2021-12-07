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



    this.beneficioService.getBeneficiosByEventoId(0).pipe(first()).subscribe(
      data =>{
        this.beneficios = data;
      }
    );

    this.validacaoForm = this.formBuilder.group({
            cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
            edv: new FormControl('', [Validators.required, Validators.minLength(3)]),
            beneficiosSelecionados: new FormControl(JSON.parse(localStorage.getItem('beneficiosSelecionados') as string))
        });
  }

  selected(){
    localStorage.setItem('beneficiosSelecionados', JSON.stringify(this.validacaoForm.value.beneficiosSelecionados));
  }

  submit(){
    this.submitted = this.mostrar;
    if(this.validacaoForm.controls.cpf.valid || this.validacaoForm.controls.edv.valid){
      let state= this.validacaoForm.value;
      delete state.beneficiosSelecionados;
      this.router.navigate(['operacional/retirar'], {state: state});
    } else {
      this.validacaoForm.markAllAsTouched();
    }
  }
}
