import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-operacional-validacao',
  templateUrl: './area-operacional-validacao.component.html',
  styleUrls: ['./area-operacional-validacao.component.css']
})
export class AreaOperacionalValidacaoComponent implements OnInit {

  mostraCampoCPF: string = "esconder";
  mostraCampoEDV: string = "esconder";

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDiv(resposta: any): void {
    if (resposta === 'selecionadoCPF') {
      this.mostraCampoCPF = "mostrar";
      this.mostraCampoEDV = "esconder";
    } else if (resposta === 'selecionadoEDV') {
      this.mostraCampoEDV = "mostrar";
      this.mostraCampoCPF = "esconder";
    }
  }
}
