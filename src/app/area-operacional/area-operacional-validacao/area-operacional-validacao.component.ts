import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-area-operacional-validacao',
  templateUrl: './area-operacional-validacao.component.html',
  styleUrls: ['./area-operacional-validacao.component.css']
})
export class AreaOperacionalValidacaoComponent implements OnInit {

  mostrar: string = "";
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      cpf: [null, [Validators.nullValidator, Validators.maxLength(14), Validators.pattern("/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/")]]
    });

  }

  mostrarDiv(resposta: any): void {

  }

  login(){
    /* this.submitted= true;
    console.log(
    this.loginForm.controls)
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.controls.cpf.value.replace(".","").replace("-",""),this.loginForm.controls.nasc.value)
      .pipe(first()).subscribe(
                data => {
                    console.log("sucesso")
                    this.router.navigate(['meus-beneficios']);
                },
                error => {
                    if(error.status == 401  || error.status == 400){
                      this.wrong = true;
                    }
                    else{
                      console.log("problemas de conexao")
                    }
                });; */
  }
}
