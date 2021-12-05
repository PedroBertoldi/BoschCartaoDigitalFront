import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-operacional-validacao',
  templateUrl: './area-operacional-validacao.component.html',
  styleUrls: ['./area-operacional-validacao.component.css']
})
export class AreaOperacionalValidacaoComponent implements OnInit {

  mostrar: string = "";
  validacaoForm!: FormGroup;
  cpf!:string;

  constructor(private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.validacaoForm = this.formBuilder.group({
            cpf: [''],
            edv: [''],
        });
  }

  submit(){
    console.log(this.validacaoForm.value)
    this.router.navigate(['operacional/retirar/1'])
  }

}
