import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-area-administrativa-cadastro-evento',
  templateUrl: './area-administrativa-cadastro-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-evento.component.css']
})

export class AreaAdministrativaCadastroEventoComponent implements OnInit {

  formCadastro = this.formBuilder.group({
    nome: '',
    descricao: '',
    inicio: '',
    fim: ''
  })

  dataInicio = ''

  modalAberto = false

  tipoModal!: 'confirmacao' | 'atencao' 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  salvarDados(): void {
    console.log(this.formCadastro.value)
    this.formCadastro.reset()
    this.tipoModal = 'confirmacao'
    this.abrirModal()
  }

  onSubmit(): void {
    if(this.formCadastro.value.nome !== '' || this.formCadastro.value.inicio !== '' || this.formCadastro.value.fim !== ''){
      let hoje = new Date
      hoje.setDate(hoje.getDate()-1)

      if(new Date(this.formCadastro.value.inicio) < hoje) {
        this.tipoModal = 'atencao'
        this.abrirModal()
      } else {
        this.salvarDados()
      }
    }
  }

}
